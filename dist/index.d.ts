import React from 'react';

type RatingProps = {
    value?: number;
    defaultValue?: number;
    icon?: any;
    size?: number;
    gap?: number;
    count?: number;
    color?: string;
    emptyColor?: string;
    disabled?: boolean;
    onChange?: (value: number) => void;
};
declare function Rating({ value, defaultValue, icon: RatingIcon, size, gap, count, color, emptyColor, disabled, onChange, }: RatingProps): React.JSX.Element;

export { Rating, type RatingProps };
