import React from "react";


export default function Carte() {
    return (
        <section className="card">
            <img src="https://www.mberg.ca/Projects/airbnbclone/build/static/media/katie.5d736ac3dc01f817ff4d.png" className="katie-photo" />
            <div className="card--stats">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdm89VPfretHVJnIuNHHjJEhJ0ZV3_Eg8hMA&usqp=CAU" className="katie-star" />
                <span className="rating">5.5 </span>
                <span className="review">(6) • </span>
                <span className="location"> USA </span>
            </div>

            <p className="title">Life lessons with Katie Zaferes</p>
            <p> <span className="prices">From $136</span> / person</p>

        </section>




    )
}