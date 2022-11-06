import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import './FunctionCard.css';

export default function WignerFunction({
    title, q, p, w, description,
}) {
    const [type, setType] = useState('Surface');
    const [data, setData] = useState({
        type: 'surface',
        x: q,
        y: p,
        z: w,
        showscale: false,
        opacity: 0.9,
        colorscale: 'Viridis',
    });
    const [dataMesh, setDataMesh] = useState(null);

    useEffect(() => {
        if (type === 'Surface') {
            setData({
                type: 'surface',
                x: q,
                y: p,
                z: w,
                showscale: false,
                opacity: 0.9,
                colorscale: 'Viridis',
            });
        } else if (type === 'Mesh') {
            if (!dataMesh) {
                const newDataMesh = { q: [], p: [], w: [] };
                for (let i = 0; i < q.length; i += 1) {
                    for (let j = 0; j < p.length; j += 1) {
                        newDataMesh.q.push(q[i]);
                        newDataMesh.p.push(p[j]);
                        newDataMesh.w.push(w[i][j]);
                    }
                }
                setDataMesh(newDataMesh);
                setData({
                    type: 'mesh3d',
                    x: newDataMesh.p,
                    y: newDataMesh.q,
                    z: newDataMesh.w,
                    opacity: 0.7,
                    color: '#fe5f55',
                });
            } else {
                setData({
                    type: 'mesh3d',
                    x: dataMesh.p,
                    y: dataMesh.q,
                    z: dataMesh.w,
                    opacity: 0.7,
                    color: '#fe5f55',
                });
            }
        }
    }, [type]);

    return (
        <div className="Card">
            <h2>{title}</h2>
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
            <button onClick={() => {
                if (type === 'Surface') {
                    setType('Mesh');
                } else {
                    setType('Surface');
                }
            }}
            >
                {type}
            </button>
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
