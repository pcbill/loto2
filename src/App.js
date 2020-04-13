import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
// import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import Container from "@material-ui/core/Container";
// import AwardListPanel from "./panel/AwardListPanel";
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // const currentPage = () => {
    //     return <AwardListPanel/>
    // };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const hiddenMenu = () => {
        return (<Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>自動報到</MenuItem>
            <MenuItem onClick={handleClose}>手動報到</MenuItem>
            <MenuItem onClick={handleClose}>兌獎管理</MenuItem>
            <MenuItem onClick={handleClose}>抽獎管理</MenuItem>
        </Menu>)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" width='50%'>
                        <Tab label="獎項列表" icon={<HomeIcon/>} {...a11yProps(0)} />
                        <Tab label="查詢" icon={<SearchIcon/>} {...a11yProps(1)} />
                    </Tabs>
                    <Typography variant="h6" className={classes.title}/>
                    <IconButton aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                    />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>自動報到</MenuItem>
                        <MenuItem onClick={handleClose}>手動報到</MenuItem>
                        <MenuItem onClick={handleClose}>兌獎管理</MenuItem>
                        <MenuItem onClick={handleClose}>抽獎管理</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    )
}