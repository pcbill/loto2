import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import * as FakeAward from "../test/FakeAward";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function getAwardList() { return FakeAward.rows};

export default () => {
    const classes = useStyles();

    return (<div>
        <h3>歡迎!!</h3>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>獎項</TableCell>
                        <TableCell align="right">獎項名稱</TableCell>
                        <TableCell align="right">數量</TableCell>
                        <TableCell align="right">剩餘</TableCell>
                        <TableCell align="right">[得獎者列表連結]</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getAwardList().map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.gid}</TableCell>
                            <TableCell align="right">{row.awardList}</TableCell>
                            <TableCell align="right">{row.participantCount}</TableCell>
                            <TableCell align="right">{row.reminderCount}</TableCell>
                            <TableCell align="right">[得獎者列表連結]</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>)
}
