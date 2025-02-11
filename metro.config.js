const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    assetExts: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
