import React from 'react';
import { Card, Image, Title, Text, Badge } from '@telegram-apps/telegram-ui';
import './BundleCard.css';

interface BundleCardProps {
  name: string;
  coverageCount: number;
  pricePerGb: number;
  planCount: number;
  iconUrl: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export const BundleCard: React.FC<BundleCardProps> = ({
  name,
  coverageCount,
  pricePerGb,
  planCount,
  iconUrl,
  isNew,
  isPopular
}) => {
  return (
    <Card className="bundle-card" interactive>
      <div className="bundle-card__content">
        <Image src={iconUrl} alt={name} className="bundle-card__icon" />
        <div className="bundle-card__info">
          <div className="bundle-card__header">
            <Title level="3">{name}</Title>
            {isNew && <Badge className="bundle-card__badge bundle-card__badge--new">New</Badge>}
            {isPopular && <Badge className="bundle-card__badge bundle-card__badge--popular">Popular</Badge>}
          </div>
          <Text className="bundle-card__coverage">{coverageCount} countries covered</Text>
          <Text className="bundle-card__price">From ${pricePerGb}/GB</Text>
          <Text className="bundle-card__plans">{planCount} plans available</Text>
        </div>
      </div>
    </Card>
  );
};