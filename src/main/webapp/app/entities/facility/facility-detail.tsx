import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './facility.reducer';

export const FacilityDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const facilityEntity = useAppSelector(state => state.facility.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="facilityDetailsHeading">
          <Translate contentKey="rosterv1App.facility.detail.title">Facility</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="key">
              <Translate contentKey="rosterv1App.facility.key">Key</Translate>
            </span>
          </dt>
          <dd>{facilityEntity.key}</dd>
          <dt>
            <span id="id">
              <Translate contentKey="rosterv1App.facility.id">Id</Translate>
            </span>
          </dt>
          <dd>{facilityEntity.id}</dd>
        </dl>
        <Button tag={Link} to="/facility" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/facility/${facilityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FacilityDetail;
