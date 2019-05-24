import React from "react";

const Glyph = ({ glyph }) => {
    /* eslint-disable default-case */
    switch (glyph) {
        case "facebook":
            return (
                <g>
                    <path d="M17,0.230769231 L17,5.30769231 L13.9108796,5.30769231 C12.7827932,5.30769231 12.0219907,5.53846154 11.6284722,6 C11.2349537,6.46153846 11.0381944,7.15384615 11.0381944,8.07692308 L11.0381944,11.7115385 L16.8032407,11.7115385 L16.0358796,17.4038462 L11.0381944,17.4038462 L11.0381944,32 L5.01736111,32 L5.01736111,17.4038462 L0,17.4038462 L0,11.7115385 L5.01736111,11.7115385 L5.01736111,7.51923077 C5.01736111,5.13461538 5.69945988,3.28525641 7.06365741,1.97115385 C8.42785494,0.657051282 10.2445988,0 12.5138889,0 C14.4421296,0 15.9375,0.0769230769 17,0.230769231 Z" />
                </g>
            );
    }
    /* eslint-enable default-case */
};

export default Glyph;