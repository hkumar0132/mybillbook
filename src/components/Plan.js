import React from 'react'
import {
  Card,
  CardBody
} from 'reactstrap';

import './BottomView.css';

function Plan({ type, costPrevious, costActual, features, mostPopular }) {

  const Icon = (type) => {
    const icons = {
      Silver: <img src="https://img.icons8.com/fluency-systems-filled/48/4a90e2/crown.png" alt="Silver Icon"/>,
      Gold: <img src="https://img.icons8.com/color/48/000000/crown.png" alt="Gold Icon"/>,
      Diamond: <img src="https://img.icons8.com/fluency-systems-filled/48/fa314a/crown.png" alt="Diamond Icon"/>
    };

    return (
      <div>{icons[type]}</div>
    )
  }

  const computerImageLink = (type) => {
    if(type === 'Silver') {
      return "https://img.icons8.com/ios-filled/80/4a90e2/computer.png";
    } else if(type === 'Gold') {
      return "https://ik.imagekit.io/4ocaoz8eyy9/computer-24_RA-o_Ggyn.jpg?updatedAt=1632665603731";
    }

    return "https://img.icons8.com/ios-filled/50/fa314a/computer.png";
  }

  return (
      <div className="plan" onClick={(event) => {
        console.log(type);
      }}>
        <Card>
          <CardBody className="p-4" style={{ backgroundColor: mostPopular? '#fbf7f4': 'white', height: '20rem', width: '23rem', border: mostPopular? '1px solid orange': 'white' }}>
            {mostPopular && <div style={{ float: 'right', marginTop: '-2rem' }}>
              <span className="badge badge-pill alert-danger">Most Popular</span>
            </div>}
            {/* Icon */}
            {Icon(type)}
            {/* Type of plan */}
            <div className="text-plan"><span>{type}</span> Plan</div>
            {/* Cost of plan */}
            <div className="d-flex p-1">
              <strike>&#8377; {costPrevious}</strike>
              <div style={{ color: type==='Silver'? 'blue': (type === 'Gold'? 'gold': 'red'), fontSize: '25px', marginTop: '-0.5rem', marginLeft: '1rem', fontWeight: 'bolder' }}>&#8377; {costActual}</div> <span >/ year</span>
            </div>
            {/* Mobile + Desktop */}
            <div className={type}>
              <span><img width="25" height="25" src={computerImageLink(type)} alt="computer icon"/>Mobile + Desktop</span>
            </div>
            {/* Features */}
            <div>
            {
              features.map(feature => {
                return (<div className="text-muted">
                  <img width="15" height="15" src="https://img.icons8.com/color/48/000000/double-tick.png" alt="green-tick"/>
                  &nbsp; {feature}
                  </div>);
              })
            }
            </div>
          </CardBody>
        </Card>
      </div>
  )
}

export default Plan;
