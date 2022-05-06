import React from 'react'

function DashComp(props) {
  return (
    <div class="col-xl-3 col-md-6 mb-4">
    <div class={props.a.bar}>
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class={props.a.textcolor}>
                        {props.a.title}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{props.a.price}</div>
                </div>
                <div class="col-auto">
            <i class={props.a.icon}></i>                
             </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DashComp