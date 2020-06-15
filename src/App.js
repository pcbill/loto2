import React, {useState} from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ManagementMenu, {ManagementType} from "./panel/management/ManagementMenu";
import AwardListPanel from "./panel/AwardListPanel";
import SearchPanel from "./panel/SearchPanel";
import NormalMenu from "./panel/NormalMenu";
import TabPanel from "./panel/TabPanel";
import AutoManagementPanel from "./panel/management/AutoManagementPanel";
import ManualManagementPanel from "./panel/management/ManualManagementPanel";
import GetRewardManagementPanel from "./panel/management/GetRewardManagementPanel";
import ActionManagementPanel from "./panel/management/ActionManagementPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        flexGrow: 1,
    },
}));

export default () => {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);

    const [managementPanel, setManagementPanel] = useState();

    function handleManagementMenuClick(target) {
        if (target === ManagementType.AUTO) {
            setManagementPanel(<AutoManagementPanel/>);
        } else if (target === ManagementType.MANUAL) {
            setManagementPanel(<ManualManagementPanel/>);
        } else if (target === ManagementType.GET_REWARD) {
            setManagementPanel(<GetRewardManagementPanel/>);
        } else if (target === ManagementType.ACTION) {
            setManagementPanel(<ActionManagementPanel/>);
        }
        setTabIndex(2);
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <NormalMenu tabIndex={tabIndex} onChange={v => setTabIndex(v)}/>
                    <Typography variant="h6" className={classes.title}/>
                    <ManagementMenu onChange={v => handleManagementMenuClick(v)}/>
                </Toolbar>
            </AppBar>
            <TabPanel value={tabIndex} index={0}>
                <AwardListPanel/>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                <SearchPanel/>
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                {managementPanel}
            </TabPanel>
        </div>
    )
}
