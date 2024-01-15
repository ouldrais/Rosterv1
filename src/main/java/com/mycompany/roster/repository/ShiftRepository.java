package com.mycompany.roster.repository;

import com.mycompany.roster.domain.Shift;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Shift entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShiftRepository extends JpaRepository<Shift, Long> {}
