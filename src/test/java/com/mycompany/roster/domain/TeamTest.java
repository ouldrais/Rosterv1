package com.mycompany.roster.domain;

import static com.mycompany.roster.domain.TeamTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.roster.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TeamTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Team.class);
        Team team1 = getTeamSample1();
        Team team2 = new Team();
        assertThat(team1).isNotEqualTo(team2);

        team2.setId(team1.getId());
        assertThat(team1).isEqualTo(team2);

        team2 = getTeamSample2();
        assertThat(team1).isNotEqualTo(team2);
    }
}
