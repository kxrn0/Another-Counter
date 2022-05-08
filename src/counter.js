import LZString from "lz-string";

export function create_counter(label, value, imageData, id) {
    imageData = LZString.compressToUTF16(imageData);
    return { value, label, imageData, id }
}