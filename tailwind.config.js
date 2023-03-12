module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			textColor: {
				skin: {
					wh: 'var(--text-color-wh)',
					dr: 'var(--text-color-dark)',
					head: 'var(--text-color-head)',
					para: 'var(--text-color-para)',
				},
			},
			backgroundColor: {
				skin: {
					hs: 'var(--bg-color-has)',
					p: 'var(--bg-color-p)',
				},
			},
		},
	},
};
