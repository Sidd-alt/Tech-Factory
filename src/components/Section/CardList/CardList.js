import CardOne from './Cards/CardOne';
import CardTwo from './Cards/CardTwo';
import CardThree from './Cards/CardThree';
import './CardList.css';

function CardList(props) {
   
    return (
        <div>
            <div className="CardList">
                <div className="row">
                    <p className="Card-heading">Courses for you</p>
                    <div className="subCardList">
                        <CardOne />
                        <CardTwo />
                        <CardThree />
                    </div>
                    <p className="end_note">view all</p>
                </div>
                <div className="row">
                    <p className="Card-heading">Top Courses in <span id="it_">IT</span></p>
                    <div className="subCardList">
                        <CardOne />
                        <CardTwo />
                        <CardThree />
                    </div>
                    <p className="end_note">view all</p>
                </div>
                <div className="row">
                    <p className="Card-heading">Top Courses in <span id="design_">Design</span></p>
                    <div className="subCardList">                   
                        <CardOne />
                        <CardTwo />
                        <CardThree />
                    </div>
                    <p className="end_note">view all</p>
                </div>
            </div>
        </div>
    );
}

export default CardList;