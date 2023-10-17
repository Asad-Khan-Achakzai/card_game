// Material imports
import { Typography, TextField, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DetailCard = styled(CardContent)({
  textAlign: "left",
  background: "#CCE0FF",
});

export const ControllsCard = styled(CardContent)({
  textAlign: "left",
  background: "#C8E6C9",
});
export const PlayerCard = styled(CardContent)({
  textAlign: "left",
  background: " #FFFFFF",
  "&:hover": {
    background: "#F2F2F2",
  },
});

export const MainContainer = styled(Grid)({
  background: "#F5F5F5",
});

export const OverViewContainer = styled(Grid)({
  textAlign: "left",
});

export const DetailCardHeading = styled(Typography)({
  marginBottom: "1.7rem",
});

export const Text = styled(Typography)({
  color: "#333333",
});

export const PlayerCardText = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "#333333",
});
