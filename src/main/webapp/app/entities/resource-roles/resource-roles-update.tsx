import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IRole } from 'app/shared/model/role.model';
import { getEntities as getRoles } from 'app/entities/role/role.reducer';
import { IResource } from 'app/shared/model/resource.model';
import { getEntities as getResources } from 'app/entities/resource/resource.reducer';
import { IResourceRoles } from 'app/shared/model/resource-roles.model';
import { getEntity, updateEntity, createEntity, reset } from './resource-roles.reducer';

export const ResourceRolesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const roles = useAppSelector(state => state.role.entities);
  const resources = useAppSelector(state => state.resource.entities);
  const resourceRolesEntity = useAppSelector(state => state.resourceRoles.entity);
  const loading = useAppSelector(state => state.resourceRoles.loading);
  const updating = useAppSelector(state => state.resourceRoles.updating);
  const updateSuccess = useAppSelector(state => state.resourceRoles.updateSuccess);

  const handleClose = () => {
    navigate('/resource-roles');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getRoles({}));
    dispatch(getResources({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }

    const entity = {
      ...resourceRolesEntity,
      ...values,
      role: roles.find(it => it.id.toString() === values.role.toString()),
      resource: resources.find(it => it.id.toString() === values.resource.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...resourceRolesEntity,
          role: resourceRolesEntity?.role?.id,
          resource: resourceRolesEntity?.resource?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="rosterv1App.resourceRoles.home.createOrEditLabel" data-cy="ResourceRolesCreateUpdateHeading">
            <Translate contentKey="rosterv1App.resourceRoles.home.createOrEditLabel">Create or edit a ResourceRoles</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="resource-roles-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                id="resource-roles-role"
                name="role"
                data-cy="role"
                label={translate('rosterv1App.resourceRoles.role')}
                type="select"
              >
                <option value="" key="0" />
                {roles
                  ? roles.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.key}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="resource-roles-resource"
                name="resource"
                data-cy="resource"
                label={translate('rosterv1App.resourceRoles.resource')}
                type="select"
              >
                <option value="" key="0" />
                {resources
                  ? resources.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.key}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/resource-roles" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ResourceRolesUpdate;
