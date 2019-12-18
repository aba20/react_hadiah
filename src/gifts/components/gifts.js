import React from 'react';
import { getAllGifts, deleteGiftByID, updateGiftByID  } from '../api';
import Gift from './gift';

class Gifts extends React.Component {
  componentDidMount() {
    getAllGifts()
      .then((response) => {
        this.props.setGifts(response.data.gifts);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteGift = (id) => {
    deleteGiftByID(id)
      .then((response) => {
        const newGiftsList = this.props.gifts.filter((gift) => {
          return gift._id !== id;
        });

        this.props.setGifts(newGiftsList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateGift = (id) => {
    updateGiftByID(id)
      .then((response) => {
        const newGiftsList = this.props.gifts.filter((gift) => {
          return gift._id !== id;
        });

        this.props.setGifts(newGiftsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let allGifts = <h2>No Gifts</h2>;

    if (this.props.gifts.length > 0) {
      allGifts = this.props.gifts.map((gift, index) => {
        return <Gift title={gift.title}
                        description={gift.description}
                        image={gift.image}
                        id={gift._id}
                        deleteGift={this.deleteGift}
                        updateGift={this.updateGift}
                        key={index} />;
      });
    }

    return allGifts;
  }
}

export default Gifts;