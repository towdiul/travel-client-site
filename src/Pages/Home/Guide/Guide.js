import React from 'react';
import './Guide.css';

const Guide = (props) => {
    const { name, img } = props.guide;
    return (
        <div class="card rounded shadow-sm border-0  ">
        <div class="card-body p-2  w-25 mx-auto mb-2">
          <div class="bg-color px-5 py-4 text-center card-img-top"><img src={img} alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"/>
            <h5 class="text-white mb-0"> {name} </h5>
            <p class="small text-white mb-0">Elite user</p>
          </div>
          <div class="p-4 d-flex justify-content-center">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">241</h5><small class="text-muted"><i class="fa fa-picture-o mr-1 text-warning"></i>Photos</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"><i class="fa fa-user-circle-o mr-1 text-warning"></i>Followers</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
  
        
        
    );
};

export default Guide;