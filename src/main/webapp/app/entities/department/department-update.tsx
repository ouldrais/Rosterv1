import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFacility } from 'app/shared/model/facility.model';
import { getEntities as getFacilities } from 'app/entities/facility/facility.reducer';
import { IDepartment } from 'app/shared/model/department.model';
import { getEntity, updateEntity, createEntity, reset } from './department.reducer';

export const DepartmentUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const facilities = useAppSelector(state => state.facility.entities);
  const departmentEntity = useAppSelector(state => state.department.entity);
  const loading = useAppSelector(state => state.department.loading);
  const updating = useAppSelector(state => state.department.updating);
  const updateSuccess = useAppSelector(state => state.department.updateSuccess);

  const handleClose = () => {
    navigate('/department');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getFacilities({}));
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
    if (values.key !== undefined && typeof values.key !== 'number') {
      values.key = Number(values.key);
    }

    const entity = {
      ...departmentEntity,
      ...values,
      facility: facilities.find(it => it.id.toString() === values.facility.toString()),
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
          ...departmentEntity,
          facility: departmentEntity?.facility?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="rosterv1App.department.home.createOrEditLabel" data-cy="DepartmentCreateUpdateHeading">
            <Translate contentKey="rosterv1App.department.home.createOrEditLabel">Create or edit a Department</Translate>
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
                  id="department-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField label={translate('rosterv1App.department.key')} id="department-key" name="key" data-cy="key" type="text" />
              <ValidatedField
                label={translate('rosterv1App.department.team')}
                id="department-team"
                name="team"
                data-cy="team"
                type="text"
              />
              <ValidatedField
                id="department-facility"
                name="facility"
                data-cy="facility"
                label={translate('rosterv1App.department.facility')}
                type="select"
              >
                <option value="" key="0" />
                {facilities
                  ? facilities.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.key}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/department" replace color="info">
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

export default DepartmentUpdate;
