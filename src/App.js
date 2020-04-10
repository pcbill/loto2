import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import AwardListPanel from "./panel/AwardListPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const currentPage = () => {
        return <AwardListPanel/>
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{width: '100%'}}>
                    <IconButton color="inherit">
                        <HomeIcon/>獎項列表
                    </IconButton>
                    <IconButton color="inherit">
                        <SearchIcon/>查詢
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <IconButton aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                    >
                    </IconButton>
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
            <Container>{currentPage()}</Container>
        </div>
    )
}