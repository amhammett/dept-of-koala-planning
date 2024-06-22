
exports.handler = async function(event, context) {
    console.log(event)
    // return { message: "Hello ! Here's a full copy of the event:", event };
    // Access-Control-Allow-Origin

    return  {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
            // 'Accept-Encoding': 'deflate, gzip',
            'Access-Control-Allow-Origin': '*',
        },
        body: { message: "Hello from file_one" }
        }
};

/*
export const actions = {
	async postFiles({ request }) {
		const formData: FormData = await request.formData();
		const files = formData.getAll('files');

		return { files: files.map((f) => (f as any).name) };
	}
};
*/