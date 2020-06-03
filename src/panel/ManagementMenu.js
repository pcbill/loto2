import React from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default ({anchorEl, setAnchorEl}) => {

    function handleClose() {
        setAnchorEl(null);
    }

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
    </Menu>);
}
