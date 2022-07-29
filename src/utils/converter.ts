import inline from '../utils/inliner';
import { updateCSSEditor } from './editor/convertedEditor';
import { prettify } from './editor/prettier/index';

export const convert = () => {
	const i_frame = document.querySelector('iframe');
	const i_frame_document = i_frame?.contentWindow?.document;
	// console.log(typeof i_frame_content);
	const i_frame_content = i_frame_document?.querySelector('html')
		?.outerHTML as string;

	inline(i_frame_content, {
		remove_style_tags: true,
	}).then((item) => {
		const pretifiedHTML = prettify(item);
		console.log(typeof pretifiedHTML);

		// updateCSSEditor();
	});
};
