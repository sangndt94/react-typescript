import React from 'react'
import Header from '../components/Header'

export const UserHoc = <T extends object>(Component: React.ComponentType<T>) =>
    (props: any) => {
        return (
            <div>
                <Header />
                <Component {...props} />
            </div>
        )
    }

