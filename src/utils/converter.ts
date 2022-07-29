export const convert = () => {
	const i_frame = document.querySelector('iframe');
	const i_frame_content = i_frame?.contentWindow?.document;
	console.log(i_frame_content);
};
