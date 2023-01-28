import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const modePreference: unknown = browser ? window.localStorage.getItem('mode') ?? '' : '';
export const mode: unknown = writable(
	(() => {
		if (modePreference !== '') {
			return modePreference;
		} else {
			browser && window.localStorage.setItem('mode', 'dark');
			return 'dark';
		}
	})()
);
export const toggleMode: (shouldToggleOnState: boolean) => void = (
	shouldToggleOnState: boolean
) => {
	let theme;
	mode.subscribe((t) => (theme = t));
	console.log(theme);
	const html = browser && document.querySelector('html');
	if (theme === 'dark') {
		mode.set('light');
		if (shouldToggleOnState === true) {
			browser && localStorage.setItem('mode', 'dark');
		}
		//
		html.classList.add('dark');
	} else if (theme === 'light') {
		mode.set('dark');
		if (shouldToggleOnState === true) {
			browser && localStorage.setItem('mode', 'light');
		}
		html.classList.remove('dark');
	}
};
