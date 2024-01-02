export default async function loadBalancer(chinaDownload, USDownload) {
  const first = await Promise.race([chinaDownload, USDownload]);
  return first;
}
