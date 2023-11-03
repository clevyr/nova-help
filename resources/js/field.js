Nova.booting((app) => {
	app.component('IndexHelp', require('./components/IndexField').default);
	app.component('DetailHelp', require('./components/DetailField').default);
	app.component('FormHelp', require('./components/FormField').default);
});
