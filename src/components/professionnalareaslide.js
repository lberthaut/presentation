import React from 'react';


export default class Areaslide extends React.Component{
    render(){
        return(
            <div className="container">
                <h2 className="expprotitle">Experiences Professionnelles</h2>
                <h3 className="company"></h3>
                <p className="job"></p>
                <p className="duration"></p>
                <p className="location"></p>
                <p className="skills"></p>
            </div>
        )
    }
}