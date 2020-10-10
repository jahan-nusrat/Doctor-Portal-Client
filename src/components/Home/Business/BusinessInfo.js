import React from 'react';
import data from '../../../data/BusinessData'

const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row justify-content-center">
                {
                    data.map(info=>{
                        return (
                            <div style={{backgroundColor:info.background}} className="business-card col-lg-4 d-flex align-items-center" key={info.id}>
                                <div>{info.icon}</div>
                                <div>
                                    <h3>{info.title}</h3>
                                    <p>{info.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default BusinessInfo
