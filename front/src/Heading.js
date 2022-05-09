import React,{ useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

function Heading(props) {
  useEffect(() => {
    console.log('title 값이 설정됨');
    console.log(props.title);

    return () => {
      console.log('title 가 바뀌기 전..');
      console.log(props.title);
    };
  }, [props.title]);
  const changeTitle = (e) => {
    props.setTitle(e.target.text);
  }
  return (
    <div className="heading">
     	<div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to = "/" className={"nav-link px-2  " + (props.title === 'Home' ? 'link-dark' : 'link-secondary')}  onClick={changeTitle}>Home</Link></li>
        <li><Link to = "/Features" className={"nav-link px-2  " + (props.title === 'Features' ? 'link-dark' : 'link-secondary')}  onClick={changeTitle}>Features</Link></li>
        <li><Link to = "/Pricing" className={"nav-link px-2  " + (props.title === 'Pricing' ? 'link-dark' : 'link-secondary')}  onClick={changeTitle}>Pricing</Link></li>
        <li><Link to = "/FAQs" className={"nav-link px-2  " + (props.title === 'FAQs' ? 'link-dark' : 'link-secondary')}  onClick={changeTitle}>FAQs</Link></li>
        <li><Link to = "/About" className={"nav-link px-2  " + (props.title === 'About' ? 'link-dark' : 'link-secondary')}  onClick={changeTitle}>About</Link></li>
      </ul>
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
    </div>
  );
}

export default Heading;
