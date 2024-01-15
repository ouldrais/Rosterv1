import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Facility from './facility';
import FacilityDetail from './facility-detail';
import FacilityUpdate from './facility-update';
import FacilityDeleteDialog from './facility-delete-dialog';

const FacilityRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Facility />} />
    <Route path="new" element={<FacilityUpdate />} />
    <Route path=":id">
      <Route index element={<FacilityDetail />} />
      <Route path="edit" element={<FacilityUpdate />} />
      <Route path="delete" element={<FacilityDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FacilityRoutes;
