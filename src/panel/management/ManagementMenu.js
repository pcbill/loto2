import React, {useState} from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export const ManagementType = {
    AUTO: 'AUTO',
    MANUAL: 'MANUAL',
    GET_REWARD: 'GET_REWARD',
    ACTION: 'ACTION'
};

export default ({onChange}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    return (<div>
        <IconButton aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={e => setAnchorEl(e.currentTarget)}
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
        onClose={()=>setAnchorEl(null)}
    >
        <MenuItem onClick={()=>onChange(ManagementType.AUTO)}>自動報到</MenuItem>
        <MenuItem onClick={()=>onChange(ManagementType.MANUAL)}>手動報到</MenuItem>
        <MenuItem onClick={()=>onChange(ManagementType.GET_REWARD)}>兌獎管理</MenuItem>
        <MenuItem onClick={()=>onChange(ManagementType.ACTION)}>抽獎管理</MenuItem>
    </Menu>
        </div>);
}
