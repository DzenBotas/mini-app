import React from 'react';
import { Grid, Card, Title, Text } from '@telegram-apps/telegram-ui';
import './FeatureTiles.css';

const features = [
  {
    title: 'Global Coverage',
    description: '200+ countries supported',
    icon: '🌎'
  },
  {
    title: 'Fast Networks',
    description: '4G/5G speed where available',
    icon: '⚡'
  },
  {
    title: 'Instant Activation',
    description: 'Ready in seconds',
    icon: '✨'
  }
];

export const FeatureTiles: React.FC = () => {
  return (
    <Grid className="features-grid">
      {features.map((feature, index) => (
        <Card key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <Title level="3">{feature.title}</Title>
          <Text>{feature.description}</Text>
        </Card>
      ))}
    </Grid>
  );
};