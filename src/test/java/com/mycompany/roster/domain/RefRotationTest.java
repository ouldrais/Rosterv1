package com.mycompany.roster.domain;

import static com.mycompany.roster.domain.RefRotationTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.roster.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class RefRotationTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(RefRotation.class);
        RefRotation refRotation1 = getRefRotationSample1();
        RefRotation refRotation2 = new RefRotation();
        assertThat(refRotation1).isNotEqualTo(refRotation2);

        refRotation2.setId(refRotation1.getId());
        assertThat(refRotation1).isEqualTo(refRotation2);

        refRotation2 = getRefRotationSample2();
        assertThat(refRotation1).isNotEqualTo(refRotation2);
    }
}
