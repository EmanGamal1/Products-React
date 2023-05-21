import './Footer.css';

const Footer = () =>{
    return(
        <>

    <footer className="footer">
    <hr className='hr mb-3'></hr>
      <div className="container">
        <div className="row">
            <div className="col-4">
                <h4>Get in touch</h4>
                <p>Email: emangaamal@gmail.com</p>
                <p>Mobile: +20100000000</p>
            </div>
            <div className='col-4 mt-2'>
                <button className='btn btn-md btn-outline-secondary'>About</button>
            </div>
            <div className="col-4 mt-2">
                <p>Copyright &copy; 2023</p>
            </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer;
