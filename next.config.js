module.exports = {
    reactStrictMode: true
};
const config = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,

            use: ["@svgr/webpack"]
        });

        return config;
    }
};

module.exports = {
    ...config,
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    }
};
