import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ResourceRoles from './resource-roles';
import ResourceRolesDetail from './resource-roles-detail';
import ResourceRolesUpdate from './resource-roles-update';
import ResourceRolesDeleteDialog from './resource-roles-delete-dialog';

const ResourceRolesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ResourceRoles />} />
    <Route path="new" element={<ResourceRolesUpdate />} />
    <Route path=":id">
      <Route index element={<ResourceRolesDetail />} />
      <Route path="edit" element={<ResourceRolesUpdate />} />
      <Route path="delete" element={<ResourceRolesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ResourceRolesRoutes;
