# go 1.21, clean code

**Author:** Colix
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-square/solutions/6014463/](https://leetcode.com/problems/valid-square/solutions/6014463/)

---

```golang []
func validSquare(p1, p2, p3, p4 []int) bool {
	distances := []int{distanceSquared(p1, p2), distanceSquared(p1, p3), distanceSquared(p1, p4), distanceSquared(p2, p3), distanceSquared(p2, p4), distanceSquared(p3, p4)}
	slices.Sort(distances)
	return distances[0] > 0 && distances[0] == distances[1] && distances[1] == distances[2] && distances[2] == distances[3] && distances[4] == distances[5]
}

func distanceSquared(p1, p2 []int) int {
	return int(math.Pow(float64(p1[0]-p2[0]), 2) + math.Pow(float64(p1[1]-p2[1]), 2))
}
```