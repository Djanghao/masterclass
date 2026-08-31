# Go GCD with explanation

**Author:** shuoyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/469539/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/469539/)

---

For more Golang solution please check https://github.com/yinfirefire/LeetCode-GoSol

To partition the array into groups of size>=2, equals to the Greatest Common Divisor of all number of appeareances is larger or equal to 2.

Solution:
1. count all the number of appearances
2. get the gcd of the number of appearance array

Similar Question: https://leetcode.com/problems/check-if-it-is-a-good-array/

```go
func hasGroupsSizeX(deck []int) bool {
    cnt := make(map[int]int, 0)
	for _, v := range deck {
		cnt[v]++
	}
    res:=cnt[deck[0]]
    for _, i:= range cnt{
        res = gcd(res, i)
    }
    return res>=2
}

func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}
```
