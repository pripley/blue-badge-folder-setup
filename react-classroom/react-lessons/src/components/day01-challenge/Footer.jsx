function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return <div>Copyright {year} EFA</div>;
  }
  
export default Footer;