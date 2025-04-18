import React, { useEffect, useState } from 'react';
import { Page } from '@/components/Page';
import { Section, Cell, Button, List } from '@telegram-apps/telegram-ui';
import { createClient } from '@supabase/supabase-js';
import { FeatureTiles } from './components/FeatureTiles';
import { SearchBar } from './components/SearchBar';
import { CategoryTabs } from './components/CategoryTabs';
import { BundleCard } from './components/BundleCard';
import { FooterNav } from './components/FooterNav';
import './StorePage.css';

interface Bundle {
  name: string;
  coverageCount: number;
  pricePerGb: number;
  planCount: number;
  iconUrl: string;
}

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

export const StorePage: React.FC = () => {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('bundles');
        if (error) throw error;
        setBundles(data || []);
      } catch (error) {
        console.error('Error fetching bundles:', error);
      }
    };

    fetchBundles();
  }, []);

  const filteredBundles = bundles.filter(bundle => 
    bundle.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Page>
      <Section>
        <Cell className="store-header">
          <Button size="m" before={<i className="icon icon-profile" />}>Profile</Button>
        </Cell>
      </Section>

      <Section>
        <FeatureTiles />
      </Section>

      <Section>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
      </Section>

      <Section className="bundles-section">
        <List>
          {filteredBundles.map((bundle, index) => (
            <BundleCard key={index} {...bundle} />
          ))}
        </List>
      </Section>

      <FooterNav />
    </Page>
  );
};