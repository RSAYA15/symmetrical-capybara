import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Box, Typography, List, ListItem, ListItemText, Container} from '@mui/material';

const OrderedServices = ({ orderedServices }) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>Ordered Services</Typography>
            <List>
                {orderedServices.map((service, index) => (
                    <ListItem button component={Link} to={`/service/${index}`} key={index}>
                        <ListItemText primary={`${index +1}. ${service.name}`}/>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
};

const mapStateToProps = (state) => ({
    orderedServices: state.services.orderedServices,
})

export default connect(mapStateToProps)(OrderedServices);