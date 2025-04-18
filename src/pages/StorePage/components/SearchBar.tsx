import React from 'react';
import { Input } from '@telegram-apps/telegram-ui';
import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <Input
      className="search-bar"
      type="search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search eSIM plans..."
      before={<i className="icon-search" />}
    />
  );
};