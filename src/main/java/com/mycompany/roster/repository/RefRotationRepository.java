package com.mycompany.roster.repository;

import com.mycompany.roster.domain.RefRotation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the RefRotation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RefRotationRepository extends JpaRepository<RefRotation, Long> {}
