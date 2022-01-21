import styled from "@emotion/styled";
import Rating from "./Rating";

import { Result, CancellationType } from "../types.d";

interface ListItemProps {
  item: Result;
  index: number;
}

function ListItem({ item, index }: ListItemProps) {
  return (
    <Row>
      <Thumbnail>
        <Image
          src={item.property.previewImage.url}
          alt={item.property.previewImage.caption}
        />
        <Promotion>{item.offer.promotion.title}</Promotion>
      </Thumbnail>
      <Details index={index}>
        <div>
          <Heading>
            <Title>{item.property.title}</Title>
            <Rating
              value={item.property.rating.ratingValue}
              type={item.property.rating.ratingType}
            />
          </Heading>
          <Address>{item.property.address.join(", ")}</Address>
          <Offer>{item.offer.name}</Offer>
          {item.offer.cancellationOption.cancellationType ===
            CancellationType.FREE_CANCELLATION && (
            <Cancellation>Free Cancellation</Cancellation>
          )}
        </div>

        <div>
          <Duration>
            <strong>1</strong> night total ({item.offer.displayPrice.currency})
          </Duration>
          <Price>
            <Currency>$</Currency>
            <span data-testid="price">{item.offer.displayPrice?.amount}</span>
          </Price>
          {item.offer.savings && (
            <Savings>Save ${item.offer.savings?.amount}~</Savings>
          )}
        </div>
      </Details>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
`;

const Thumbnail = styled.div`
  position: relative;
`;

const Image = styled.img`
  background: #e1e1e1;
  width: 145px;
  height: 125px;
`;

const Promotion = styled.div`
  position: absolute;
  background: white;
  padding: 0.3rem;
  color: #9e2d3f;
  z-index: 10;
  font-size: 0.8rem;
  font-weight: bold;
  top: 0.5rem;
`;

const Details = styled.div(
  (props: any) => `
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 0.3rem 1.5rem;
  padding: 0.3rem 0;
  border-top: ${props.index === 0 ? "1px solid #e1e1e1" : "none"};
  border-bottom: 1px solid #e1e1e1;
  min-height: 118px;
`
);

const Heading = styled.h2`
  margin: 0;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20rem;
  margin-right: 0.2rem;
`;

const Address = styled.p`
  font-size: 0.7rem;
  color: #a1a1a1;
  margin: 0;
`;

const Offer = styled.p`
  font-size: 0.8rem;
  color: #9e2d3f;
  text-decoration: underline;
`;

const Cancellation = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #476d5e;
  margin: 1.8rem 0 0 0;
`;

const Duration = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  color: #5f5f5f;
  margin: 1.8rem 0 0 0;
`;

const Price = styled.p`
  font-size: 2rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
`;

const Currency = styled.span`
  font-size: 1.1rem;
  margin-top: 0.4rem;
`;

const Savings = styled.p`
  margin: 0;
  color: #9e2d3f;
`;

export default ListItem;
