export function isLicensePlateValid(licensePlate: string) {
  const regex = new RegExp("[A-Z]{3}[0-9][0-9A-Z][0-9]{2}");
  return regex.test(licensePlate);
}
