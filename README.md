# Trash Schedule App with iCal Feed

A Vue.js application that provides trash collection schedules for Lithuanian municipalities and generates iCal feeds for calendar integration.

## Purpose

This application serves as a centralized platform for residents to:
- View their local trash collection schedules
- Subscribe to iCal feeds for automatic calendar updates
- Stay informed about collection changes and special pickups
- Access historical collection data

## iCal Feed Functionality

The application generates iCal feeds that can be integrated with any calendar application (Google Calendar, Apple Calendar, Outlook, etc.). Features include:

- Automatic schedule updates
- Support for multiple collection types (general waste, recycling, etc.)
- Customizable reminder settings
- Holiday and special collection day handling
- Multi-language support (Lithuanian/English)

### How to Use iCal Feeds

1. Navigate to your municipality's schedule page
2. Click the "Subscribe to Calendar" button
3. Copy the generated iCal URL
4. Add the URL to your preferred calendar application:
   - Google Calendar: Settings > Add Calendar > From URL
   - Apple Calendar: File > New Calendar Subscription
   - Outlook: Calendar > Add Calendar > From Internet

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=5000

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_NOTIFICATIONS=true

# iCal Feed Settings
VITE_ICAL_FEED_BASE_URL=http://localhost:3000/ical
VITE_ICAL_FEED_CACHE_DURATION=3600
```

## Deployment

### Production Build

1. Create a production build:
   ```sh
   npm run build
   ```

2. The build output will be in the `dist` directory

### Deployment Options

#### Static Hosting (Recommended)
- Deploy the contents of the `dist` directory to any static hosting service
- Configure the server to handle SPA routing (all routes should redirect to index.html)

## Configuration

### Vite Configuration
See [Vite Configuration Reference](https://vite.dev/config/) for detailed options.

### Application Configuration
The application can be configured through:
- Environment variables (see above)
- `vite.config.js` for build settings
- `src/config` directory for application-specific settings

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
