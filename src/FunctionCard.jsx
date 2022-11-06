import React from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import './FunctionCard.css';

export default function WignerFunction({
    title, q, p, w, description,
}) {
    const data ={
        type: 'surface',
        x: q,
        y: p,
        z: w,
        showscale: false,
        opacity: 0.9,
        colorscale: 'YlOrRd',
    };

    return (
        <div className="Card">
            <h2 className='Title'>{title}</h2>
            <Plot
                data={[data]}
                layout={{
                    width: 400,
                    height: 330,
                    autosize: true,
                    margin: {
                        t: 0, b: 0, l: 0, r: 0,
                    },
                    paper_bgcolor: '#bdd5ea',
                    scene: {
                        xaxis: {
                            title: 'q',
                        },
                        yaxis: {
                            title: 'p',
                        },
                        zaxis: {
                            title: 'W(q,p)',
                        },
                        aspectratio: {
                            x: 1, y: 1, z: 0.75,
                        },
                    },
                }}
                config={{ responsive: true }}
            />
            <p className="Description">{description}</p>
        </div>
    );
}

WignerFunction.propTypes = {
    title: PropTypes.string.isRequired,
    q: PropTypes.array.isRequired,
    p: PropTypes.array.isRequired,
    w: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
};
