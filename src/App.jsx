import '@bcgov/bc-sans/css/BC_Sans.css'
import '@bcgov/design-tokens/css/variables.css'
import {
  Header,
  Footer,
  Button,
  Heading,
  Subheader,
  Text,
} from '@bcgov/design-system-react-components'
import './App.css'

const catData = {
  catName: 'Murderface',
  licenseNumber: 'BCL-2026-08471',
  status: 'Active',
  registeredDate: 'August 10, 2026',
  expiryDate: 'August 10, 2027',
  catDetails: {
    breed: 'Domestic Shorthair',
    primaryColour: 'Black',
    sex: 'Male',
    yearOfBirth: '2021',
    spayedNeutered: 'Yes',
    microchipId: '956000012345678',
  },
  owner: {
    name: 'Dana Small',
    email: 'd.small@email.com',
    phone: '250-555-0198',
    address: '456 Burrard St, Victoria, BC V8W 2A9',
  },
}

function App() {
  return (
    <>
      <Header
        title="Cat Licence Registry"
        skipLinks={[
          <a key="main" href="#main-content">Skip to main content</a>,
        ]}
      >
        <Button variant="primary" size="small">
          ← Register a cat
        </Button>
      </Header>

      <main id="main-content" className="app-container">
        <div className="breadcrumb">
          <span>Cat Licence Registry › Licence #{catData.licenseNumber}</span>
        </div>

        {/* Cat Profile Card */}
        <div className="cat-profile-card">
          <div className="cat-profile-header" style={{
            backgroundColor: 'var(--surface-color-primary-default)',
            minHeight: '60px',
          }}></div>
          
          <div className="cat-profile-content">
            <div className="cat-profile-left">
              <div className="cat-avatar">
                <span className="cat-emoji">🐱</span>
              </div>
            </div>

            <div className="cat-profile-middle">
              <div className="cat-name-status">
                <Heading level={2}>{catData.catName}</Heading>
                <div className="status-badge">
                  <span>{catData.status}</span>
                </div>
              </div>
              <Text>
                Licence No. <strong>{catData.licenseNumber}</strong> · Registered {catData.registeredDate} · Expires {catData.expiryDate}
              </Text>
            </div>
          </div>
        </div>

        {/* Cat Details and Owner Info Grid */}
        <div className="details-grid">
          {/* Cat Details Section */}
          <div className="details-card">
            <Subheader>Cat Details</Subheader>
            <div className="details-list">
              <div className="detail-row">
                <span className="detail-label">Breed</span>
                <span className="detail-value">{catData.catDetails.breed}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Primary colour</span>
                <span className="detail-value">{catData.catDetails.primaryColour}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Sex</span>
                <span className="detail-value">{catData.catDetails.sex}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Year of birth</span>
                <span className="detail-value">{catData.catDetails.yearOfBirth}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Spayed / Neutered</span>
                <span className="detail-value">{catData.catDetails.spayedNeutered}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Microchip ID</span>
                <span className="detail-value">{catData.catDetails.microchipId}</span>
              </div>
            </div>
          </div>

          {/* Registered Owner Section */}
          <div className="details-card">
            <Subheader>Registered Owner</Subheader>
            <div className="details-list">
              <div className="detail-row">
                <span className="detail-label">Owner</span>
                <span className="detail-value">{catData.owner.name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email</span>
                <span className="detail-value">{catData.owner.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{catData.owner.phone}</span>
              </div>
              <div className="detail-row address-row">
                <span className="detail-label">Address</span>
                <span className="detail-value">
                  {catData.owner.address.split(' ').slice(0, 4).join(' ')}<br/>
                  {catData.owner.address.split(' ').slice(4).join(' ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
