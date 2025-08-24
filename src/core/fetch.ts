interface FetchOptions {
  apiKey: string;
  formData: FormData;
}
export async function generateImage<T extends FetchOptions>(
  options: T
): Promise<Response> {
  const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
    method: "POST",
    headers: {
      "x-api-key": options.apiKey,
    },
    body: options.formData,
  });

  return response;
}
