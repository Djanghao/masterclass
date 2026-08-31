# [Golang] Backtracking

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/3894651/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/3894651/)

---

# Code
```
func maximumBobPoints(numArrows int, aliceArrows []int) []int {
  var bobArrows []int
  currPoints := make([]int, 12)
  backtrack(numArrows, aliceArrows, 0, currPoints, &bobArrows)
  return bobArrows
}

func backtrack(numArrows int, aliceArrows []int, pos int, currPoints []int, bobArrows *[]int) {
  if pos == 12 {
    if calcPoints(aliceArrows, currPoints) > calcPoints(aliceArrows, *bobArrows) {
      points := make([]int, len(currPoints))
      copy(points, currPoints)
      if numArrows > 0 {
        // Put the remaining arrows in 0
        points[0] += numArrows
      }
      *bobArrows = points

    }
    return
  }
  backtrack(numArrows, aliceArrows, pos+1, currPoints, bobArrows)
  if numArrows >= aliceArrows[pos] + 1 {
    currPoints[pos] = aliceArrows[pos] + 1
    backtrack(numArrows - aliceArrows[pos] - 1, aliceArrows, pos+1, currPoints, bobArrows)
    currPoints[pos] = 0
  }
}

func calcPoints(alice, bob []int) int {
  var res int
  for i := 0; i < len(bob); i++ {
    if bob[i] > alice[i] {
      res += i
    }
  }
  return res
}
```