import React from 'react';
import styles from './validation-error.module.scss';

const ValidationError = ({children}) => {
    return (
        <p className={styles.error}>{children}</p>
    );
};

export default ValidationError;