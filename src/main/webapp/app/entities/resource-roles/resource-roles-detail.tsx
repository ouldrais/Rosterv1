import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './resource-roles.reducer';

export const ResourceRolesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const resourceRolesEntity = useAppSelector(state => state.resourceRoles.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="resourceRolesDetailsHeading">
          <Translate contentKey="rosterv1App.resourceRoles.detail.title">ResourceRoles</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{resourceRolesEntity.id}</dd>
          <dt>
            <Translate contentKey="rosterv1App.resourceRoles.role">Role</Translate>
          </dt>
          <dd>{resourceRolesEntity.role ? resourceRolesEntity.role.key : ''}</dd>
          <dt>
            <Translate contentKey="rosterv1App.resourceRoles.resource">Resource</Translate>
          </dt>
          <dd>{resourceRolesEntity.resource ? resourceRolesEntity.resource.key : ''}</dd>
        </dl>
        <Button tag={Link} to="/resource-roles" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/resource-roles/${resourceRolesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ResourceRolesDetail;
