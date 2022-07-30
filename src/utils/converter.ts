import inline from '../utils/inliner';
import { updateConvertedHTMLEditor } from './editor/convertedEditor';
import { prettify } from './editor/prettier/index';

export const convert = () => {
	const i_frame = document.querySelector('iframe');
	const i_frame_document = i_frame?.contentWindow?.document;
	// console.log(typeof i_frame_content);
	const i_frame_content = i_frame_document?.querySelector('html')
		?.outerHTML as string;

	inline(i_frame_content, {
		remove: true,
	}).then((item) => {
		const pretifiedHTML = prettify(item);
		// let removedClassAttribute = pretifiedHTML.replaceAll(
		// 	/(?<=class=")(.*?)(?=\")/g,
		// 	''
		// );
		// let removeClass = removedClassAttribute.replaceAll('class=""', '');
		// updateConvertedHTMLEditor(removeClass);

		updateConvertedHTMLEditor(pretifiedHTML);
	});
};
