import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { TransactionDetails } from './TransactionDetails'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#f3f3f3',
    }
}))

export const Transaction = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <TransactionDetails
                transactionType='Received'
                startingParty='Ethereum Foundation'
                partyType1='Donor'
                middleParty='UNICEF France'
                partyType2='National Committee'
                endParty='UNICEF HQ'
                partyType3='Recipient'
                valueMoving='100 ETH'
                valueType='Crypto Received'
            />
            <TransactionDetails
                transactionType='Received'
                startingParty='Ethereum Foundation'
                partyType1='Donor'
                middleParty='UNICEF France'
                partyType2='National Committee'
                endParty='UNICEF HQ'
                partyType3='Recipient'
                valueMoving= '1 BTC'
                valueType='Crypto Received'
            />

           <TransactionDetails
            transactionType='Invested'
            startingParty='UNICEF HQ'
            partyType1='Donor'
            endParty='Prescrypto'
            partyType3='Recipient'
            valueMoving='1 BTC'
            valueType='Crypto Received'
            />   

           < TransactionDetails
            transactionType='Invested'
            startingParty='UNICEF HQ'
            partyType1='Donor'
            endParty='Utopixar'
            partyType3='Recipient'
            valueMoving='49.5 ETH'
            valueType='Crypto Received'
            />   

           < TransactionDetails
            transactionType='Invested'
            startingParty='UNICEF HQ'
            partyType1='Donor'
            endParty='Atix Labs'
            partyType3='Recipient'
            valueMoving='49.5 ETH'
            valueType='Crypto Received'
            />
        </div>
    )
}