export default function standardOfLiving(array) {
  return array.sort((a, b) => a.health - b.health);
}
