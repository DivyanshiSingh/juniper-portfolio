import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root:
    {
        width: '642px',
        margin: 'auto',
        backgroundColor: '#ffffff',
        outline: 0,
        fontFamily: '"Roboto", sans-serif',
        overflowY: 'auto',
        overflowX: 'hidden'
    },

    img:
    {
        width: "100%",
        height: '227px',
    },

    body:
    {
        padding: '36px 40px',
    },

    title:
    {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '28px',
        letterSpacing: '0',
    },

    country:
    { 
        fontSize: '18px',
        lineHeight: 1.33, 
        paddingBottom: '20px',
    },

    tagline:
    {
        fontSize: '19px',
        lineHeight: 1.42,
    },

    link:
    {
        fontSize: '20px',
        fontWeight: 'normal',
        lineHeight: 1.35 ,
        letterSpacing: 'normal',
        textDecoration: 'none',
        color: '#00aeef',
    },

    waddr:
    {
        fontSize: '14px',
        lineHeight: '1.57',
        marginTop: '20px',
    },
    
    tiny:
    {
        fontFamily: '"Cabin", sans-serif',
        fontSize: '10px',
        letterSpacing: '0.83px',
        marginBottom: '20px',
    },

    currentvalue:
    {
        fontSize: '14px',
        lineHeight: '22px',
        color: '#898989',
    },

    hr:
    {
        borderBottom: 'solid 1px #e0e0e0',
        paddingTop: '40px',
        marginBottom: '40px'
    },

    investmentdetails:
    {

        fontFamily: '"Cabin", sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: 2,
        letterSpacing: '0.78px',
        color: '#898989',
        marginBottom: '20px'
    }, 


});

export function StartupModal(props) {
  const classes = useStyles();


  return (
      <Modal
        open={props.open}
        onClick={props.closefn}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}  
      >
          <div className={classes.root}>
              <img src={props.details.imageurl} className={classes.img} alt="" />
              <div className={classes.body}>
                  <div className={classes.title}>{props.details.name}</div>
                  <div className={classes.country}>{props.details.country}</div>
                  <div className={classes.tagline}>{props.details.tagline}</div>
                  <a href={"https://" + props.details.link } className={classes.link}>{props.details.link}</a>
                  <div className={classes.waddr}>{props.details.walletaddress}</div>
                  <div className={classes.tiny}>WALLET ADDRESS</div>
                  <div className={classes.currentvalue}>
                    <p style={{marginBottom: 0}}>
                      <span style={{ fontWeight: 'bold' }}>Current value</span>
                      = USD average accross three cryptoexchanges, calculated at 12:01 p.m. (EST)
                    </p>
                    <p style={{marginTop: 0}}>
                      <span style={{fontWeight:'bold'}}>Value at receipt</span>
                      = USD average accross three cryptoexchanges, calculated at 12:01 p.m. (EST) on the day of the transaction.
                    </p>
                  </div>
                  <div className={classes.hr}></div>
                  <div className={classes.investmentdetails}>INVESTMENT DETAILS</div>
                  <div className={classes.tagline}>{props.details.investmentdate}</div>
                  <div className={classes.tiny}>INVESTMENT DATE</div>
                  <Grid container spacing={4}>
                      <Grid item>
                          <div style={{fontWeight: 'bold', paddingBottom: '0px'}} className={classes.country}>{props.details.amount} {props.details.shortcurrency}</div>
                          <div className={classes.tiny}>AMOUNT INVESTED</div>
                      </Grid>
                      <Grid item>
                         <div className={classes.country} style={{paddingBottom: '0px'}}>9823.50 USD</div>
                         <div className={classes.tiny}>CURRENT VALUE</div>
                      </Grid>
                      <Grid item>
                         <div className={classes.country} style={{paddingBottom: '0px'}}>9342.00 USD</div>
                         <div className={classes.tiny}>VALUE AT INVESTMENT</div>
                      </Grid>
                  </Grid>
                  <div className={classes.waddr} style={{paddingBottom: '0px', marginTop: '10px'}}>{props.details.walletaddress}</div>
                  <div className={classes.tiny}>WALLET ADDRESS</div>

              </div>
             
        </div>
      </Modal>
  );
}
