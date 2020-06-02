import React, {useState} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import HiddenMenu from "./panel/HiddenMenu";
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AwardListPanel from "./panel/AwardListPanel";

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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

    const showHiddenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Tabs value={tabIndex} onChange={handleTabChange} aria-label="simple tabs example" width='50%'>
                        <Tab label="獎項列表" icon={<HomeIcon/>} {...a11yProps(0)} />
                        <Tab label="查詢" icon={<SearchIcon/>} {...a11yProps(1)} />
                    </Tabs>
                    <Typography variant="h6" className={classes.title}/>
                    <IconButton aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={showHiddenMenu}
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                    />
                    <HiddenMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
                </Toolbar>
            </AppBar>
            <TabPanel value={tabIndex} index={0}>
                <AwardListPanel/>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                Item Three
            </TabPanel>
        </div>
    )
}
