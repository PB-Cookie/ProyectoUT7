import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { DialogContent, Divider } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Menu from "../components/Menu";
import "../App.css";

function Donar() {
  const [data, setData] = useState({
    name: "",
    sname: "",
    dono: "",
    radgroup: "",
    msg: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(data);
  };

  const handleChangeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleChangeSname = (e) => {
    setData({
      ...data,
      sname: e.target.value,
    });
    //console.log(data)
  };

  const handleChangeDono = (e) => {
    setData({
      ...data,
      dono: e.target.value,
    });
    //console.log(data)
  };
  const handleRadgroup = (e) => {
    setData({
      ...data,
      radgroup: e.target.value,
    });
  };

  const handleMsg = (e) => {
    setData({
      ...data,
      msg: e.target.value,
    });
  };
  const handleClear = () => {
    setData({
      ...data,
      name: "",
      sname: "",
      dono: "",
      radgroup: "",
      msg: "",
    });
  };

  const handleDialog = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSi = () => {
    setOpen(false);
    handleClear();
  };

  return (
    <>
      <Menu />

      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mr: "30px",
          }}
        >
          <Typography variant="h2" sx={{ margin: "20px" }}>
            AYUDANOS!
          </Typography>
          <Typography variant="h6">
            ¡Tus contribuciones ayudan a que esta página sobreviva!
          </Typography>
        </Box>
        <Paper
          elevation={24}
          square={false}
          sx={{
            textAlign: "center",
            padding: { xl: "40px", xs: "10px" },
            minHeight: "400px",
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={{ xs: 0.5, sm: 1, md: 1.5, xl: 2 }} padding={0}>
              {/* PRIMERA LÍNEA GRID */}
              <Grid size={{ xs: 12, md: 6, xl: 5 }}>
                <TextField
                  required
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  value={data.name}
                  onChange={handleChangeName}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6, xl: 5 }}>
                <TextField
                  label="Apellido"
                  variant="outlined"
                  fullWidth
                  value={data.sname}
                  onChange={handleChangeSname}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6, xl: 2 }}>
                <TextField
                  required
                  label="Cantidad"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={data.dono}
                  onChange={handleChangeDono}
                />
              </Grid>
              {/* FIN PRIMERA LÍNEA GRID */}

              <Grid size={{ xs: 12, md: 6, xl: 5 }}>
                <FormControl>
                  <FormLabel
                    id="radioGroup"
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    Género
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={data.radgroup}
                    onChange={handleRadgroup}
                  >
                    <FormControlLabel
                      value="femenino"
                      control={<Radio required />}
                      label="F"
                    />
                    <FormControlLabel
                      value="masculino"
                      control={<Radio required />}
                      label="M"
                    />
                    <FormControlLabel
                      value="otro"
                      control={<Radio required />}
                      label="OTRO"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid
                size={{ xs: 12, md: 12, xl: 7 }}
                sx={{ display: "flex", marginLeft: "0" }}
              >
                <TextField
                  required
                  label="Mensaje"
                  variant="outlined"
                  type="text"
                  fullWidth
                  value={data.msg}
                  onChange={handleMsg}
                />
              </Grid>
              {/* FIN SEGUNDA LÍNEA GRID */}
              <Grid size={12}>
                <Divider />
              </Grid>

              <Grid size={12} textAlign={"left"}>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Soy mayor de edad y quiero realizar esta donación."
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6, xl: 6 }}>
                <Button type="submit" variant="contained" fullWidth>
                  DONAR Y ENVIAR MENSAJE
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6, xl: 6 }}>
                <Button onClick={handleClear} variant="outlined" fullWidth>
                  Limpiar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"Confirmación"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿Estás seguro de querer donar? Esta acción es irreversible y no
              tendrás derecho a pedir una devolución del dinero donado.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleCloseSi}>Si</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default Donar;
