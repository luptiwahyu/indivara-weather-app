export function compass(value: string): string {
  switch (value) {
    case 'N':
      return 'North'
    case 'NE':
      return 'Northeast'
    case 'E':
      return 'East'
    case 'SE':
      return 'Southeast'
    case 'S':
      return 'South'
    case 'SW':
      return 'Southwest'
    case 'W':
      return 'West'
    case 'NW':
      return 'Northwest'
    default:
      return 'Unknown Direction'
  }
}
