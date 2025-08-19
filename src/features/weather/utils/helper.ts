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

export function formattedDate(date: string): string {
  return new Date(date)
    .toLocaleDateString('en-ID', {
      day : 'numeric',
      month : 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
}
