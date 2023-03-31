export function trim(value: string | null) {
  return value?.replace(/(\r\n|\n|\r)/gm, "");
}
