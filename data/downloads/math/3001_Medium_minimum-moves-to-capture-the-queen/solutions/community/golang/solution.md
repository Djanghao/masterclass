# Beats 100% Runtime & Memory | O(1)

**Author:** efk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4526109/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4526109/)

---

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(1)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(1)$$ -->

# Code
```
package main

func minMovesToCaptureTheQueen(rx, ry int, bx, by int, qx, qy int) int {
	if canBishopCaptureQueen(bx, by, qx, qy, rx, ry) || canRookCaptureQueen(rx, ry, qx, qy, bx, by) {
		return 1
	}

	return 2
}

func canBishopCaptureQueen(bx, by, qx, qy, rx, ry int) bool {
	return (onUpwardDiagonal(bx, by, qx, qy) && (!onUpwardDiagonal(bx, by, rx, ry) || !isInTheMiddle(bx, rx, qx))) || (onDownwardDiagonal(bx, by, qx, qy) && (!onDownwardDiagonal(bx, by, rx, ry) || !isInTheMiddle(bx, rx, qx)))
}

func canRookCaptureQueen(rx, ry, qx, qy, bx, by int) bool {
	return (onHorizontalLine(rx, qx) && (!onHorizontalLine(rx, bx) || !isInTheMiddle(ry, by, qy))) || (onVerticalLine(ry, qy) && (!onVerticalLine(ry, by) || !isInTheMiddle(rx, bx, qx)))
}

func onUpwardDiagonal(x1, y1, x2, y2 int) bool {
	return y1-x1 == y2-x2
}

func onDownwardDiagonal(x1, y1, x2, y2 int) bool {
	return y1+x1 == y2+x2
}

func onHorizontalLine(x1, x2 int) bool {
	return x1 == x2
}

func onVerticalLine(y1, y2 int) bool {
	return y1 == y2
}

func isInTheMiddle(start, mayBeMiddle, end int) bool {
	if end < start {
		start, end = end, start
	}

	return start < mayBeMiddle && mayBeMiddle < end
}

```
![image.png](./images/0.png)
