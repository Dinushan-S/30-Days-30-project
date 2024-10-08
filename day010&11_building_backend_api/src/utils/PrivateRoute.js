import React from "react";
import { Redirect, Route } from "react-router-dom"
import { ACCESS_TOKEN_NAME } from '../const/apiConstants'

export const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem(ACCESS_TOKEN_NAME) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    )
}
