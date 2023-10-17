// React imports
import React, { useEffect, useState } from "react";

// Constants imports
import {
  DetailCard,
  ControllsCard,
  Text,
  PlayerCard,
  PlayerCardText,
  MainContainer,
  DetailCardHeading,
  OverViewContainer,
} from "./constants/theme-constants";
import playersData from "./constants/players.json";

// Component imports
import "./App.css";
import { submitData } from "./services/player";

// MUI imports
import { Grid, Typography, Button } from "@mui/material";

function App() {
  const [player, setPlayer] = useState();
  const [playersList, setPlayersList] = useState([]);

  // Set players data when the page is mounted
  useEffect(() => {
    setPlayersList(playersData);
  }, []);

  /**
   * Function to submit data
   */
  const submit = () => {
    submitData(player).then((response) => {
      console.log("response from the backend ===> ", response);
    });
  };

  /**
   * Function to sort players in ascending using real name
   */
  const sortPlayersAscending = () => {
    setPlayersList(
      playersList.slice().sort((a, b) => {
        return a.realName.localeCompare(b.realName, undefined, {
          sensitivity: "base",
        });
      })
    );
  };

  /**
   * Function to sort players in descending using real name
   */
  const sortPlayersDescending = () => {
    setPlayersList(
      playersList.slice().sort((a, b) => {
        return b.realName.localeCompare(a.realName, undefined, {
          sensitivity: "base",
        });
      })
    );
  };

  /**
   * Function to select player to be shown on details card
   * @param {Object} player
   */
  const selectPlayer = (player) => {
    setPlayer(player);
  };

  return (
    <div className="App">
      <MainContainer>
        <Grid container sx={{ padding: "2rem" }} spacing={2}>
          <Grid item lg={8} md={8}>
            {player && (
              <DetailCard>
                <DetailCardHeading variant="h3">Details</DetailCardHeading>
                <Text variant="h4"> Real Name: {player?.realName}</Text>
                <Text variant="h4"> Player Name {player?.playerName}</Text>
                <Text variant="h4"> Asset {player?.asset}</Text>
              </DetailCard>
            )}
          </Grid>

          <Grid item lg={4} md={4}>
            <ControllsCard>
              <Text variant="h3">Controlls</Text>
              <Grid container sx={{ padding: "2rem" }} spacing={2}>
                <Grid item lg={6} md={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={sortPlayersAscending}
                  >
                    Sort Asc
                  </Button>
                </Grid>
                <Grid item lg={6} md={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={sortPlayersDescending}
                  >
                    Sort Dec
                  </Button>
                </Grid>

                <Grid item lg={12}>
                  <Button variant="contained" fullWidth onClick={submit}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </ControllsCard>
          </Grid>
          <OverViewContainer item lg={12}>
            <Typography variant="h3">Over view</Typography>
          </OverViewContainer>
          <Grid item lg={8} md={8}>
            <Grid container spacing={2} padding={"1rem"}>
              {playersList &&
                playersList.map((player) => (
                  <Grid
                    item
                    lg={4}
                    onClick={() => selectPlayer(player)}
                    sx={{ cursor: "pointer" }}
                  >
                    <PlayerCard>
                      <PlayerCardText variant="h5">
                        {player.realName}
                      </PlayerCardText>
                      <PlayerCardText variant="h5">
                        {player.playerName}
                      </PlayerCardText>
                      <PlayerCardText variant="h5">
                        {player.asset}
                      </PlayerCardText>
                    </PlayerCard>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </MainContainer>
    </div>
  );
}

export default App;
