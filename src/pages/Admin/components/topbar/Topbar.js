import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className ="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">EyeTech</span>
                </div>

                <div className="topmiddle">
                    <h2>Page Administrateur</h2>
                </div>

                    <div className="logoutContainer">
                    <h3>Déconnecter</h3>
                    </div>

            </div>
            
        </div>
    )
}
