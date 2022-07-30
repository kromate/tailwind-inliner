import inline from '../utils/inliner';
import { updateConvertedHTMLEditor } from './editor/convertedEditor';
import { prettify } from './editor/prettier/index';
import { ref } from 'vue';

export const convert = () => {
	const i_frame = document.querySelector('iframe');
	const i_frame_document = i_frame?.contentWindow?.document;
	// console.log(typeof i_frame_content);
	const i_frame_content = i_frame_document?.querySelector('html')
		?.outerHTML as string;

	inline(i_frame_content).then((item) => {
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

export const copyConvertedHTML = () => {
	const initValue = `    <svg
        viewBox="0 0 20 20"
        class="w-5 h-5 text-gray-400 flex-none mr-1"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M7 4.75H5.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H13"
        ></path>
        <path
          d="M12 6.25H8a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM7.75 10.25h4.5M7.75 13.25h4.5"
        ></path></svg
      ><span class="">Copy></span>`;

	const btnValue = ref(initValue);

	return { btnValue };
};
