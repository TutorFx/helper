import React from 'react';

import styles from "../styles/link.module.scss";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Image from "next/image";
import InputLabel from '@material-ui/core/InputLabel';

import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#006DEB",
      main: "#0068DF",
      dark: "#005CC4",
      contrastText: "#fff",
    },
    secondary: {
      light: "#28E06C",
      main: "#25D366",
      dark: "#22BA59",
      contrastText: "#fff",
    },
  },
});

function link() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid direction={false ? 'row-reverse' : 'row'} container spacing={0}>
        <Grid style={{minHeight: '100vh'}} item xs={12} md={6}>
          <div className={styles.alignCenter}>
            <div>
              <h1 className={styles.titulo}>Criar WhatsApp link</h1>
              <form noValidate autoComplete="off">
                <div className={styles.space}>
                  <InputLabel filled>Nós nunca compartilharemos seu número de telefone.</InputLabel>
                  <TextField
                    id="standard-basic"
                    label="Número de WhatsApp"
                    variant="filled"
                    className={styles.campo}
                    color="secondary"
                    placeholder="Ex: 62 99000-1000"
                    required={true}
                  />
                </div>
                <div className={styles.space}>
                  <TextField
                    id="filled-multiline-static"
                    label="Mensagem"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                    className={styles.campo}
                    color="secondary"
                    required={true}
                  />
                </div>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Button size="small" style={{minHeight: '100%'}} variant="contained" className={styles.campo} color="secondary">
                      Obter Link
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button size="small" variant="text" className={styles.campo} color="secondary">
                      Copiar para area de transferência
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.sideBg}>
          <div className={styles.alignCenter}>
            <div>
              <Image src="/brand/deuonda.svg" width={300} height={300}></Image>
              <h4 style={{color: 'white', textAlign: 'center'}}>Carbon ADS aqui</h4>
            </div>
          </div>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}
export default link;
