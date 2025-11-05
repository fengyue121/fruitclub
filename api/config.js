// API endpoint to serve JSON configuration for FruitClub
module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // FruitClub JSON configuration data (示例，可按需修改)
  const config = {
    app_name: 'FruitClub',
    version: '1.0.1',
    enable: true,
    AdStartTime: 30,
    MinAdInterval: 15,
    AdNetworks: 'admob,facebook',
    update_info: {
      force_update: false,
      latest_version: '1.0.0',
      download_url: 'https://example.com/fruitclub.apk'
    }
  };

  // Return the configuration
  res.status(200).json(config);
};