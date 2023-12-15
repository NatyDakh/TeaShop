function CardList(props) {
    const list_card = props.list_card;
    const listItems = list_card.map((number) => number);
    return (
        listItems);
}

export default  CardList;