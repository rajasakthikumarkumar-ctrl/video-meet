# VideoMeet Pro - Deployment Guide

## Backend Deployment (Render)

Your backend is already deployed at: `https://video-meet-aj54.onrender.com`

### Environment Variables on Render:
- `NODE_ENV=production`
- `PORT` (automatically set by Render)

### Server Configuration:
- The server automatically uses `process.env.PORT` for Render compatibility
- CORS is configured to allow requests from your frontend domains
- WebSocket connections are supported

## Frontend Configuration

The frontend automatically detects the environment and uses the appropriate backend URL:

### Development:
- API: `http://localhost:5001/api`
- Socket: `http://localhost:5001`

### Production:
- API: `https://video-meet-aj54.onrender.com/api`
- Socket: `https://video-meet-aj54.onrender.com`

## Local Development

1. **Start Backend Locally** (optional):
   ```bash
   cd server
   npm start
   ```

2. **Start Frontend**:
   ```bash
   cd client
   npm start
   ```

## Production Build

To create a production build of the frontend:

```bash
cd client
npm run build
```

## Features Included

✅ **Video Calling**: HD video and audio communication
✅ **Admin Controls**: Host can remove participants and end meetings
✅ **Recording**: Local recording of video/audio (browser-only)
✅ **Chat**: Real-time messaging during calls
✅ **Screen Sharing**: Share your screen with participants
✅ **Reactions**: Send emoji reactions during calls
✅ **Raise Hand**: Virtual hand raising feature
✅ **Room Management**: Create and join rooms with passcodes
✅ **Responsive UI**: Works on desktop and mobile devices

## Security Features

- Passcode-protected rooms
- Admin-only controls
- CORS protection
- Local-only recording (no server storage)
- Secure WebSocket connections

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

1. **Connection Issues**: Check if the Render backend is running
2. **Video/Audio Issues**: Ensure browser permissions are granted
3. **Recording Issues**: Check browser compatibility with MediaRecorder API