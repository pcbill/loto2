import React from 'react';
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default (props) => {
    const {tabIndex, onChange} = props

    return (<div>
        <Tabs value={tabIndex}
              onChange={(event, newValue) =>
            onChange(newValue)}
            aria-label="simple tabs example" width='50%'>
            <Tab label="獎項列表" icon={<HomeIcon/>} {...a11yProps(0)} />
            <Tab label="查詢" icon={<SearchIcon/>} {...a11yProps(1)} />
        </Tabs>
    </div>)
}
