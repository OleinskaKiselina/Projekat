import React from "react";
import SHOP_DATA from "../../shopData";
class ShopPage extends React.Component {
   constructor(props) {
    super(props);


    this.state={collections:SHOP_DATA}
   }



   render() {
    return (
         <h1>Tekst SHOP_PAGE</h1>
    );
   }

}

export default ShopPage;