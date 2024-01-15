package com.mycompany.roster.domain;

import static com.mycompany.roster.domain.TrainingTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.roster.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TrainingTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Training.class);
        Training training1 = getTrainingSample1();
        Training training2 = new Training();
        assertThat(training1).isNotEqualTo(training2);

        training2.setId(training1.getId());
        assertThat(training1).isEqualTo(training2);

        training2 = getTrainingSample2();
        assertThat(training1).isNotEqualTo(training2);
    }
}
