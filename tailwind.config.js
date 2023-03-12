module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			textColor: {
				skin: {
					wh: 'var(--text-color-wh)',
					dr: 'var(--text-color-dark)',
				},
			},
			backgroundColor: {
				skin: {
					hs: 'var(--bg-color-has)',
				},
			},
		},
	},
};
