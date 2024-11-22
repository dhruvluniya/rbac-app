import { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div>
      <div className="tabs-header">
        {children.map((tab) => (
          <button
            key={tab.props.title}
            className={activeTab === tab.props.title ? 'active' : ''}
            onClick={() => setActiveTab(tab.props.title)}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {children.find((tab) => tab.props.title === activeTab)}
      </div>
    </div>
  );
};

Tabs.Tab = ({ children }) => <div>{children}</div>;

// Assign displayName to Tabs.Tab component for better debugging
Tabs.Tab.displayName = 'Tabs.Tab';

Tabs.propTypes = {
  defaultTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Tabs.Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tabs;
