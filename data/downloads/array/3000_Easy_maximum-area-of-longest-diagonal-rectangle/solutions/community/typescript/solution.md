# Easy TS solution with explain 96% beats

**Author:** daimant
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4846687/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4846687/)

---

```
// Accepted
// Runtime 58 ms Beats 96.20% of users with TypeScript
// Memory 52.16 MB Beats 34.18% of users with TypeScript
```
```
const areaOfMaxDiagonal2 = (dimensions: number[][]): number => {
  let dict = []
  let maxDiagonal = 0
  let maxSquareWithMaxDiagonal = 0

  dimensions.forEach(el => {
    const diagonal = Math.sqrt(el[0] * el[0] + el[1] * el[1])
    const square = el[0] * el[1]

    if (diagonal > maxDiagonal) {
      // if current diagonal bigger than max previous diagonal -
      // clear our dictionary of rects and add our curr
      maxDiagonal = diagonal
      dict = [[diagonal, square]]
      maxSquareWithMaxDiagonal = square
    } else if (diagonal === maxDiagonal) {
      // if current diagonal the same than max previous - we compare curr
      // square and max prev square. Than add our rect in dictionary
      if (maxSquareWithMaxDiagonal < square) maxSquareWithMaxDiagonal = square
      dict.push([diagonal, square])
    }
  })

  return maxSquareWithMaxDiagonal
}
```