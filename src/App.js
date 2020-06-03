import React, {useState} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import ManagementMenu from "./panel/ManagementMenu";
import AwardListPanel from "./panel/AwardListPanel";
import SearchPanel from "./panel/SearchPanel";
import NormalMenu from "./panel/NormalMenu";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <NormalMenu tabIndex={tabIndex} onChange={v => setTabIndex(v)}/>
                    <Typography variant="h6" className={classes.title}/>
                    <IconButton aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={e => setAnchorEl(e.currentTarget)}
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                    />
                    <ManagementMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
                </Toolbar>
            </AppBar>
            <TabPanel value={tabIndex} index={0}>
                <AwardListPanel/>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                <SearchPanel/>
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                Item Three
            </TabPanel>
        </div>
    )
}
