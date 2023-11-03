<template>
	<div>
		<div
			v-if="field.icon && field.message"
			class="comodolab-help-field-icon-container inline-block"
			:class="iconClass"
			:data-balloon="field.message.replace(/<(?:.|\n)*?>/gm, '')"
			v-html="field.icon"
		/>
	</div>
</template>

<script>
export default {
	props: ['resourceName', 'field'],

	computed: {
		iconClass() {
			const fieldTypes = {
				info: 'text-info',
				warning: 'text-warning-dark',
				danger: 'text-danger',
			};
			return fieldTypes[this.field.type] || '';
		},
	},
};
</script>
