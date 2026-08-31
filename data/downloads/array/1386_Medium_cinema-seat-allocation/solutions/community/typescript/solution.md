# Bitwise comparation, readable code

**Author:** rromanv
**Votes:** 1
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/2885620/](https://leetcode.com/problems/cinema-seat-allocation/solutions/2885620/)

---

# Code
```
function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
  let maxArrangements = 0

  const [left, middle, right] = [0b1000011111, 0b1110000111, 0b1111100001]

  const rows = new Set(reservedSeats.map((r) => r[0]).sort((a, b) => a - b))

  for (const row of rows) {
    const rowSeats = reservedSeats
      .filter((seat) => seat[0] === row)
      .map((seat) => seat[1])

    const seats = rowSeats.reduce((acc, seat) => {
      acc |= 1 << (10 - seat)
      return acc
    }, 0)

    const leftCheck = left | seats
    const rightCheck = right | seats

    if (left === leftCheck) maxArrangements++
    if (right === rightCheck) maxArrangements++
    if (
      middle === (middle | seats) &&
      left !== leftCheck &&
      right !== rightCheck
    )
      maxArrangements++
  }

  maxArrangements += (n - rows.size) * 2

  return maxArrangements
}
```