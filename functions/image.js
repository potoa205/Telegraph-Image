export async function onRequest(context) {
  const response = await context.next();
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Content-Type', 'image/jpeg'); // 根据图片类型调整为 image/png 等
  newHeaders.set('Content-Disposition', 'inline');
  return new Response(response.body, {
    status: response.status,
    headers: newHeaders
  });
}
