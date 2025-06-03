import React from "react"

function Amenities() {
  return (
    <>
    <h1 className="text-center"> Amenities</h1>
      <div className="container container2 text-center mt-5 mb-5">
        <div className="row">
          <div className="col-3" style={{ height: "300px" }}>
            <img
              className="img1 w-100 h-100"
              src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/facility-media%2FcuYR6vSdrO9EbipzFGFq?alt=media&token=91d24ba7-7372-4f98-8959-0bcf48cfc87a"
            />
            <h2 className="text-center">GAMING ROOM
            </h2>
          </div>
          <div className="col-3" style={{ height: "300px" }}>
            <img
              className="img1 w-100 h-100"
              src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/facilties%2FssT8ljvgF594L9yRDQnW?alt=media&token=dfd4ec87-c5f6-47f0-9d98-7dddeb4a8b55"
            />
            <h2 className="text-center">PLAYING AREA
            </h2>
          </div>
          <div className="col-3" style={{ height: "300px" }}>
            <img
              className="img1 w-100 h-100"
              src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/facilties%2FqT3CeAgMnRbbDIFgvVkO?alt=media&token=96e51b7d-294e-4cef-9510-f19b467eb049"
            />
            <h2 className="text-center">SWIMMING POOL
            </h2>
          </div>
          <div className="col-3" style={{ height: "300px" }}>
            <img
              className="img1 w-100 h-100"
              src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/facilties%2FMIDi35CPepNNilQY9Kmk?alt=media&token=9ee2debf-b64d-4dc8-8e9b-0cd00b574a67"
            />
            <h2 className="text-center">GYM</h2>
          </div>
        </div>
      </div>



      <hr></hr>
      <h1 class="floor text-center text-danger fw-bold mt-5"> Floor Planning </h1>
<div className="floor d-flex flex-wrap justify-content-center">
<div className="card mb-3 mx-5 mt-5 me-5  g-5" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/floor-plans%2FilzQvBjmSgzxgUm3puiD?alt=media&token=e8d0b0c6-fafa-4f4f-be2c-b83ff9c0346f" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">ASPEN
        </h5>
        <p className="card-text t">It is a 4BHK Luxury apartment of 3519 sqft with 4 Bedrooms, 4 Balconies plus 1 servant room.</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 mx-5 mt-5 me-5  g-5" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/floor-plans%2FkJ0xd60q7lik8ZmgyMSS?alt=media&token=3af068eb-aa52-40ec-b015-2dff1e3a377f" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">
        MULBERRY
        </h5>
        <p className="card-text t">It is a 3BHK Luxury apartment of 2610 sqft with 3 Bedrooms , 3 Baclonies plus one servant room.</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 mx-5 mt-5 me-5  g-5" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/floor-plans%2FhFFGY3OzDDMCO51QuTkY?alt=media&token=fecc9788-9aff-4611-9e50-f940ed01c94f" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">MAPLE
        </h5>
        <p className="card-text t">It is a 3BHK Luxury apartment of 1728 sqft with 3 Bedrooms and 3 Balconies</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 mx-5 mt-5 me-5  g-5" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/c-greens.appspot.com/o/floor-plans%2FilzQvBjmSgzxgUm3puiD?alt=media&token=e8d0b0c6-fafa-4f4f-be2c-b83ff9c0346f" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title ">
        
HAZEL
        </h5>
        <p className="card-text t">It is a 2BHK Luxury apartment of 1215 sqft with 2 bedrooms and 3 balconies.
        </p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default Amenities;
