# Go. Backtracking

**Author:** sobik
**Votes:** 1
**Link:** [https://leetcode.com/problems/24-game/solutions/2424136/](https://leetcode.com/problems/24-game/solutions/2424136/)

---

```
var epsilon = math.Pow10(-6)

func judgePoint24(cards []int) bool {

	generateAllPossibleResults := func(a, b float64) []float64 {
		res := [] float64 {a+b, a*b, a-b, b-a}
	    if b != 0 {res = append(res, a/b) }
	    if a != 0 {res = append(res, b/a) }
		return res
	}

	isValid := func(a []float64) bool {
		return math.Abs(a[0] - 24) <= epsilon
	}

	cardsWithoutIndexes := func(a []float64, index1, index2 int) []float64 {
		r := []float64{}
		for i, v := range a {
			if i != index1 && i != index2 {
				r = append(r, v)
			}
		}
		return r
	}

	var backtrack func(a []float64) bool 

	backtrack = func(a []float64) bool {
		if len(a) == 1 { return isValid(a) }
		for i:=0; i<len(a);i++ {
			for j:=i+1; j<len(a); j++ {
				possibleResults := generateAllPossibleResults(a[i], a[j])
				for _,v  := range possibleResults {
					newA := cardsWithoutIndexes(a, i, j)
					newA = append(newA, v)
					if backtrack(newA) { return true }
				}
			}
		}
		return false
	}
	
	fCards := []float64{}
	for _,v := range cards {
		fCards = append(fCards, float64(v))	
	}
	return backtrack(fCards)
}
```