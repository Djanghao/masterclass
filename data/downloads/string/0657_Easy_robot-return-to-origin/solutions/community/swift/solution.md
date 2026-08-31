# Swift 5.1 Solution

**Author:** FlightyNEO
**Votes:** 2
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/385629/](https://leetcode.com/problems/robot-return-to-origin/solutions/385629/)

---

```
func judgeCircle(_ moves: String) -> Bool {
	return moves.reduce(into: (0, 0)) {
		switch $1 {
		case "R": $0.0 += 1
		case "L": $0.0 += -1
		case "U": $0.1 += 1
		case "D": $0.1 += -1
		default: break
		}
	} == (0, 0)
}
```