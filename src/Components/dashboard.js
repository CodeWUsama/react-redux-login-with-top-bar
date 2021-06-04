import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, saveUser } from "../Actions/loginActions";
import Button from '@material-ui/core/Button';
import LoadingBar from 'react-top-loading-bar'

const Dashboard = (props) => {


    const loginStatus = useSelector(state => state.status);
    const loginUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0)

    let handleLogout = () => {
        console.log("Logout");
        dispatch(logout());
        dispatch(saveUser(""));
        props.history.push("/");
    }

    return (
        loginStatus ?
            <div>
                <LoadingBar
                    color='#f11946'
                    progress={100}
                    onLoaderFinished={() => setProgress(0)}
                />
                <h1 style={{ textAlign: 'center' }}>User currently logged in is: {loginUser} </h1>
                <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
            </div>
            :
            null
    );
}

export default Dashboard;