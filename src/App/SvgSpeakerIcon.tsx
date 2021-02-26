import React from 'react';

export const SvgSpeakerIcon = (props: { color: string; size: string }): JSX.Element => (
    <svg
        height={props.size}
        viewBox="0 0 32 32"
        width={props.size}
        fill={props.color}
        id="Layer_1"
        version="1.1"
    >
        <path d=" M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z M32 16 A16 16 0 0 1 27.25 27.375 L25.25 25.25 A13 13 0 0 0 29 16 A13 13 0 0 0 25.25 6.75 L27.25 4.625 A16 16 0 0 1 32 16 M25 16 A9 9 0 0 1 22.375 22.375 L20.25 20.25 A6 6 0 0 0 22 16 A6 6 0 0 0 20.25 11.75 L22.375 9.625 A9 9 0 0 1 25 16 " />{' '}
    </svg>
);