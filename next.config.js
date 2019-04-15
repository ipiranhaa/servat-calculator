const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withTypescript = require('@zeit/next-typescript')

module.exports = withBundleAnalyzer(
  withTypescript({
    // setup next bundle analyzer
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
  })
)
