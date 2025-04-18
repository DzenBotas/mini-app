import React from 'react';
import { Tabs } from '@telegram-apps/telegram-ui';
import './CategoryTabs.css';

interface CategoryTabsProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  { id: 'all', title: 'All' },
  { id: 'country', title: 'Country' },
  { id: 'regional', title: 'Regional' },
  { id: 'global', title: 'Global' }
];

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ selected, onSelect }) => {
  return (
    <Tabs
      className="category-tabs"
      selected={selected}
      onSelect={onSelect}
      tabs={categories}
    />
  );
};