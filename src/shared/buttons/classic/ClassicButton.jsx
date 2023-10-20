import React, {useMemo} from 'react';
import styles from './classic-button.module.scss';
const ClassicButton = ({
                           children,
                           onClick,
                           variant
                       }) => {
    const variantClassName = useMemo(() => {
        let className = '';
        switch (variant) {
            case 'danger':
                className = styles.danger;
                break;
            default:
                break;
        }

        return className;
    }, [variant]);
    return (
        <button
            className={`${styles.button} ${variantClassName}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ClassicButton;