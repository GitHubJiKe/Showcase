interface SpecificationsPanelProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function SpecificationsPanel({ activeTab, setActiveTab }: SpecificationsPanelProps) {
  const tabs = [
    { id: 'specs', label: 'Technical Specs' },
    { id: 'compatibility', label: 'Compatibility' },
    { id: 'contents', label: 'Package Contents' },
    { id: 'dimensions', label: 'Dimensions' }
  ]

  const specsData = {
    specs: [
      { name: 'Processor', value: 'Octa-core 3.2GHz' },
      { name: 'Memory', value: '8GB RAM' },
      { name: 'Storage', value: '128GB (expandable)' },
      { name: 'Display', value: '6.5" AMOLED' }
    ],
    compatibility: [
      { name: 'Operating System', value: 'Android 12+, iOS 15+' },
      { name: 'Bluetooth', value: '5.2' },
      { name: 'Wi-Fi', value: '802.11 a/b/g/n/ac/ax' }
    ],
    contents: [
      { name: 'Included Items', value: 'Device, Charger, USB-C Cable, Manual' },
      { name: 'Warranty', value: '2 Years Limited' }
    ],
    dimensions: [
      { name: 'Weight', value: '185g' },
      { name: 'Dimensions', value: '160.2 x 73.5 x 7.9 mm' }
    ]
  }

  return (
    <section className="section specifications">
      <div className="container">
        <h2 className="section-title">Specifications</h2>
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <ul className="specs-list">
            {specsData[activeTab as keyof typeof specsData].map((item, index) => (
              <li key={index} className="spec-item">
                <span className="spec-name">{item.name}</span>
                <span className="spec-value">{item.value}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-secondary download-btn">
            Download Full Specs (PDF)
          </button>
        </div>
      </div>
    </section>
  )
}