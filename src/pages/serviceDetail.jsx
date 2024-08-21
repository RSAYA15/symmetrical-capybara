import React from 'react';
import {connect} from 'react-redux';
import { Box, Typography, Container, Paper} from '@mui/material';

const ServiceDetail = ({service}) => {
    if(!service){
        return(
            <Container>
                <Typography variant="h6">Service not found</Typography>
            </Container>
        );
    }

    return(
        <Container>
            <Typography variant="h4" gutterBottom>{service.serviceName} Details</Typography>
            <Box mb={2}>
                <Typography variant="h6">Authorization</Typography>
                <Paper elevation={3} style={{padding: 16}}>
                    <Typography>{service.authorization}</Typography>
                </Paper>
            </Box>
            <Box mb={2}>
                <Typography variant="h6">URL</Typography>
                <Paper elevation={3} style={{padding: 16}}>
                    <Typography>{service.url}</Typography>
                </Paper>
            </Box>
            <Box mb={2}>
                <Typography variant="h6">Request Schema</Typography>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Typography component="pre">{service.requestSchema}</Typography>
                </Paper>
            </Box>
            <Box mb={2}>
                <Typography variant="h6">Response Schema</Typography>
                <Paper elevation={3} style={{padding: 16}}>
                    <Typography component="pre">{service.responseSchema}</Typography>
                </Paper>
            </Box>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    const service = state.services.serviceName[ownProps.match.params.index];
    return {service};
}

export default connect(mapStateToProps)(ServiceDetail);