import React from 'react'
import { css } from "emotion";
import styleGuide from '../util/styleGuide';

function Header() {
    return (
        <header className={classes.container}>
            <h1 className={classes.fontTest}>
                Sang
            </h1>
            <div className={classes.wrapper}>
                <div>icon</div>
                <div className={classes.wrapperNavItem}>
                    <div className={classes.navItem}>
                        a
                    </div>
                    <div className={classes.navItem}>
                        a
                    </div>
                    <div className={classes.navItem}>
                        a
                    </div>
                    <div className={classes.navItem}>
                        a
                    </div>
                    <div className={classes.navItem}>
                        a
                    </div>
                </div>
                <div>
                    toggle
                </div>
            </div>
        </header>
    )
}

const classes = {
    container: css({
        textAlign: "center",
    }),
    fontTest: css({
        fontSize: styleGuide.fontSize.fontTest
    }),
    wrapper: css({
        width: styleGuide.widthWrapper.medium,
        margin: "auto",
        display: 'grid',
        gridTemplateColumns: "auto auto auto",
    }),
    navItem: css({
        display: 'inline-block'
    }),
    wrapperNavItem: css({
        display: 'flex',
        justifyContent: 'space-between'
    })
}

export default Header
