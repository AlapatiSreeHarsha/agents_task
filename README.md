# Multi-Source AI Search

A modern web application that uses the Gemini AI model to provide comprehensive search results from multiple sources (Google, YouTube, and LinkedIn) in a single interface.


## Features

- **Unified Search Interface**: Single search box for querying multiple platforms
- **Real-time AI Processing**: Powered by Google's Gemini 2.0 Flash model
- **Multi-Source Results**: 
  - Google: General information and web resources
  - YouTube: Related video content and educational materials
  - LinkedIn: Professional insights and business perspectives
- **Modern UI/UX**:
  - Clean, responsive design
  - Brand-specific styling for each source
  - Interactive animations and hover effects
  - Loading states and error handling
- **User-Friendly Features**:
  - Search with Enter key or click
  - Links open in new tabs
  - Responsive layout for all devices
  - Clear loading indicators

## Technology Stack

- **Frontend**:
  - HTML5
  - CSS3 (with modern features like Grid and Flexbox)
  - Vanilla JavaScript (with async/await)
- **AI Integration**:
  - Gemini 2.0 Flash API
  - REST API integration
- **Design**:
  - Google Sans font
  - Material Design principles
  - Responsive design patterns

## Setup and Installation

1. Clone the repository:git clone https://github.com/yourusername/multi-source-ai-search.git


2. Navigate to the project directory:


3. Replace the API key in `script.js`:


4. Open `index.html` in a web browser or serve using a local server.

## Project Structure
multi-source-ai-search/
├── index.html # Main HTML structure
├── styles.css # Styling and animations
├── script.js # JavaScript functionality and API integration
└── README.md # Project documentation


## API Integration

The application uses the Gemini AI API with three different prompts optimized for each source:

- **Google Search**: Factual information with relevant web links
- **YouTube**: Educational video content suggestions
- **LinkedIn**: Professional and business insights

## Features in Detail

### Search Functionality
- Real-time query processing
- Concurrent API calls using Promise.all
- Error handling and loading states

### UI Components
- Branded headers with logos
- Interactive search button
- Responsive cards with hover effects
- Loading animations
- Error message handling

### Styling Features
- Source-specific color schemes
- Smooth transitions and animations
- Mobile-responsive design
- Accessibility considerations

## Usage

1. Enter your query in the search box
2. Press Enter or click the search icon
3. View results from all three sources simultaneously
4. Click on any links to open them in new tabs

## Error Handling

The application includes comprehensive error handling for:
- API failures
- Network issues
- Empty responses
- Invalid queries

## Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential improvements that could be added:
- Additional data sources
- Advanced filtering options
- Result caching
- User preferences
- Share functionality
- Dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini AI team for the API
- Material Design for UI inspiration
- Various open-source contributors

## Support

For support, please open an issue in the repository or contact [your-email@example.com]

---

Made with ❤️ by [Harsha]
