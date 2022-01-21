export enum ImageType {
  PRIMARY,
}

enum RatingType {
  SELF,
  STAR,
}

export interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: {
    url: string;
    caption: string;
    imageType: ImageType;
  };
  rating: {
    ratingValue: number;
    ratingType: RatingType;
  };
}

export enum OfferType {
  MEMBER = "MEMBER",
}

export enum CancellationType {
  NOT_REFUNDABLE = "NOT_REFUNDABLE",
  FREE_CANCELLATION = "FREE_CANCELLATION",
}

export interface Offer {
  promotion: {
    title: string;
    type: OfferType;
  };
  name: string;
  displayPrice: {
    amount: number;
    currency: string;
  };
  savings?: {
    amount: number;
    currency: string;
  };
  cancellationOption: {
    cancellationType: CancellationType;
  };
}

export interface Result {
  id: string;
  property: Property;
  offer: Offer;
}
