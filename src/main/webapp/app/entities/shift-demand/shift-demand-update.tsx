import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IShift } from 'app/shared/model/shift.model';
import { getEntities as getShifts } from 'app/entities/shift/shift.reducer';
import { ITask } from 'app/shared/model/task.model';
import { getEntities as getTasks } from 'app/entities/task/task.reducer';
import { IPosition } from 'app/shared/model/position.model';
import { getEntities as getPositions } from 'app/entities/position/position.reducer';
import { IDepartment } from 'app/shared/model/department.model';
import { getEntities as getDepartments } from 'app/entities/department/department.reducer';
import { IShiftDemand } from 'app/shared/model/shift-demand.model';
import { getEntity, updateEntity, createEntity, reset } from './shift-demand.reducer';

export const ShiftDemandUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const shifts = useAppSelector(state => state.shift.entities);
  const tasks = useAppSelector(state => state.task.entities);
  const positions = useAppSelector(state => state.position.entities);
  const departments = useAppSelector(state => state.department.entities);
  const shiftDemandEntity = useAppSelector(state => state.shiftDemand.entity);
  const loading = useAppSelector(state => state.shiftDemand.loading);
  const updating = useAppSelector(state => state.shiftDemand.updating);
  const updateSuccess = useAppSelector(state => state.shiftDemand.updateSuccess);

  const handleClose = () => {
    navigate('/shift-demand');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getShifts({}));
    dispatch(getTasks({}));
    dispatch(getPositions({}));
    dispatch(getDepartments({}));
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
    if (values.count !== undefined && typeof values.count !== 'number') {
      values.count = Number(values.count);
    }

    const entity = {
      ...shiftDemandEntity,
      ...values,
      shift: shifts.find(it => it.id.toString() === values.shift.toString()),
      task: tasks.find(it => it.id.toString() === values.task.toString()),
      position: positions.find(it => it.id.toString() === values.position.toString()),
      department: departments.find(it => it.id.toString() === values.department.toString()),
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
          ...shiftDemandEntity,
          shift: shiftDemandEntity?.shift?.id,
          task: shiftDemandEntity?.task?.id,
          position: shiftDemandEntity?.position?.id,
          department: shiftDemandEntity?.department?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="rosterv1App.shiftDemand.home.createOrEditLabel" data-cy="ShiftDemandCreateUpdateHeading">
            <Translate contentKey="rosterv1App.shiftDemand.home.createOrEditLabel">Create or edit a ShiftDemand</Translate>
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
                  id="shift-demand-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('rosterv1App.shiftDemand.count')}
                id="shift-demand-count"
                name="count"
                data-cy="count"
                type="text"
              />
              <ValidatedField
                id="shift-demand-shift"
                name="shift"
                data-cy="shift"
                label={translate('rosterv1App.shiftDemand.shift')}
                type="select"
              >
                <option value="" key="0" />
                {shifts
                  ? shifts.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.key}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="shift-demand-task"
                name="task"
                data-cy="task"
                label={translate('rosterv1App.shiftDemand.task')}
                type="select"
              >
                <option value="" key="0" />
                {tasks
                  ? tasks.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.key}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="shift-demand-position"
                name="position"
                data-cy="position"
                label={translate('rosterv1App.shiftDemand.position')}
                type="select"
              >
                <option value="" key="0" />
                {positions
                  ? positions.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.key}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="shift-demand-department"
                name="department"
                data-cy="department"
                label={translate('rosterv1App.shiftDemand.department')}
                type="select"
              >
                <option value="" key="0" />
                {departments
                  ? departments.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.key}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/shift-demand" replace color="info">
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

export default ShiftDemandUpdate;
