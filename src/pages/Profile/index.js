import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

function Profile() {
    const params = useParams()
    const account = useSelector((state) => state.account);

    return <Container maxWidth="lg">
        <Grid container>
        <Grid item md={4}>
            Info user
        </Grid>
        <Grid item md={8}>
            Meus posts e minhas conexoes 
        </Grid>
    </Grid>
    </Container>
}
export default Profile;