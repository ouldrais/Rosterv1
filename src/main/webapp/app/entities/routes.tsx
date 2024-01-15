import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Team from './team';
import TeamPlan from './team-plan';
import Resource from './resource';
import ResourcePlan from './resource-plan';
import ShiftDemand from './shift-demand';
import Task from './task';
import Facility from './facility';
import ResourceTraining from './resource-training';
import Training from './training';
import PositionRequirement from './position-requirement';
import Position from './position';
import Department from './department';
import Shift from './shift';
import ShiftTemplate from './shift-template';
import Role from './role';
import ResourceRoles from './resource-roles';
import RefRotation from './ref-rotation';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="team/*" element={<Team />} />
        <Route path="team-plan/*" element={<TeamPlan />} />
        <Route path="resource/*" element={<Resource />} />
        <Route path="resource-plan/*" element={<ResourcePlan />} />
        <Route path="shift-demand/*" element={<ShiftDemand />} />
        <Route path="task/*" element={<Task />} />
        <Route path="facility/*" element={<Facility />} />
        <Route path="resource-training/*" element={<ResourceTraining />} />
        <Route path="training/*" element={<Training />} />
        <Route path="position-requirement/*" element={<PositionRequirement />} />
        <Route path="position/*" element={<Position />} />
        <Route path="department/*" element={<Department />} />
        <Route path="shift/*" element={<Shift />} />
        <Route path="shift-template/*" element={<ShiftTemplate />} />
        <Route path="role/*" element={<Role />} />
        <Route path="resource-roles/*" element={<ResourceRoles />} />
        <Route path="ref-rotation/*" element={<RefRotation />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
