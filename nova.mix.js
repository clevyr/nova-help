const mix = require('laravel-mix');

class NovaExtension {
	name() {
		return 'clevyr-help';
	}

	register(name) {
		this.name = name;
	}

	webpackConfig(webpackConfig) {
		webpackConfig.externals = {
			vue: 'Vue',
			"laravel-nova": "LaravelNova",
			"laravel-nova-ui": "LaravelNovaUi",
			"laravel-nova-util": "LaravelNovaUtil",
		};

		webpackConfig.output = {
			uniqueName: this.name,
		};
	}
}

mix.extend('nova', new NovaExtension());
