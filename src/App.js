import React, {useState} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ManagementMenu from "./panel/ManagementMenu";
import AwardListPanel from "./panel/AwardListPanel";
import SearchPanel from "./panel/SearchPanel";
import NormalMenu from "./panel/NormalMenu";
import TabPanel from "./panel/TabPanel";

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
