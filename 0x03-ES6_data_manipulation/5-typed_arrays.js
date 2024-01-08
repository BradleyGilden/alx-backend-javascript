export default function createInt8TypedArray(length, position, value) {
  // throw error if value does not occupy 8 bits
  if (value > 127 || value < -128) throw new Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const v1 = new DataView(buffer);
  v1.setInt8(position, value);
  return v1;
}
