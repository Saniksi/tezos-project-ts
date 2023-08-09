// export function getBlocks() {
//   fetch('https://api.tzkt.io/v1/blocks')
//     .then((response) => response.json())
//     .then((data) => console.log('data==', data));
// }

export async function getBlocks() {
  const url = 'https://api.tzkt.io/v1/blocks';
  const response = await fetch(url);
  const data = await response.json();

  console.log('data==', data[10]);

  return data;
}
