import React from "react"

function TaksItem(props) {
    return (
        <>
            <div>
                <div class="card">
                    <div class="card-body d-flex">
                        <h5>{props.task.title}</h5>
                        <button type="button" class="btn-close ms-auto" aria-label="Close" onClick={() => props.onDelete(props.task.id)}></button>
                    </div>
                </div>                
            </div>
        </>
    )
};

export default TaksItem;