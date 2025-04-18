import React from 'react';
import { BottomNavBar } from '@telegram-apps/telegram-ui';
import './FooterNav.css';

export const FooterNav: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('store');

  return (
    <BottomNavBar
      className="footer-nav"
      items={[
        {
          id: 'store',
          title: 'Store',
          icon: <i className="icon icon-shop" />,
          selected: activeTab === 'store'
        },
        {
          id: 'my-esims',
          title: 'My eSIMs',
          icon: <i className="icon icon-sim" />,
          selected: activeTab === 'my-esims'
        },
        {
          id: 'help',
          title: 'Help',
          icon: <i className="icon icon-help" />,
          selected: activeTab === 'help'
        }
      ]}
      onSelect={setActiveTab}
    />
  );
};