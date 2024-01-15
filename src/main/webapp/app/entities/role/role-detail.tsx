import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './role.reducer';

export const RoleDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const roleEntity = useAppSelector(state => state.role.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="roleDetailsHeading">
          <Translate contentKey="rosterv1App.role.detail.title">Role</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="key">
              <Translate contentKey="rosterv1App.role.key">Key</Translate>
            </span>
          </dt>
          <dd>{roleEntity.key}</dd>
          <dt>
            <span id="id">
              <Translate contentKey="rosterv1App.role.id">Id</Translate>
            </span>
          </dt>
          <dd>{roleEntity.id}</dd>
        </dl>
        <Button tag={Link} to="/role" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/role/${roleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default RoleDetail;
