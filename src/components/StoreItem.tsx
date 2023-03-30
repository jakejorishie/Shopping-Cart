import { Card } from "react-bootstrap";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgurl: string
}

export function StoreItem({ id, name, price, imgurl }:
    StoreItemProps) {
        return <Card>
            <Card.Img variant="top" src={imgurl} height="200px" style={
                {objectFit: "cover" }
            } />
        </Card>

}