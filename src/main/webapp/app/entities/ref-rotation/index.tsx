import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import RefRotation from './ref-rotation';
import RefRotationDetail from './ref-rotation-detail';
import RefRotationUpdate from './ref-rotation-update';
import RefRotationDeleteDialog from './ref-rotation-delete-dialog';

const RefRotationRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<RefRotation />} />
    <Route path="new" element={<RefRotationUpdate />} />
    <Route path=":id">
      <Route index element={<RefRotationDetail />} />
      <Route path="edit" element={<RefRotationUpdate />} />
      <Route path="delete" element={<RefRotationDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default RefRotationRoutes;
