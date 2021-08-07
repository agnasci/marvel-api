import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core/'
import { BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  styledButton: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  styledAppBar: {
    boxShadow: 'none',
  },
  styledLink: {
    color: 'white',
    textDecoration: 'none',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.styledAppBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ESSS
          </Typography>
          <Router>
            <Button
              variant="contained"
              color="secondary"
              className={classes.styledButton}
              style={{ marginRight: 10 }}
            >
              <a href="/" className={classes.styledLink}>
                Home
              </a>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.styledButton}
            >
              <a href="/pokes" className={classes.styledLink}>
                Pokes
              </a>
            </Button>
          </Router>
        </Toolbar>
      </AppBar>
    </div>
  )
}
