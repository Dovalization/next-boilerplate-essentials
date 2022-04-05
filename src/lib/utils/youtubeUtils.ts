// Just a sample utility file, feel free to delete it

export const getYoutubeIdFromURL = (URL: string): string => {
  const arr = URL.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
};
