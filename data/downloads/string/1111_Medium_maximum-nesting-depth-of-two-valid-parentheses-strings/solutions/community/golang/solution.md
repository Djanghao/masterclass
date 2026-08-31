# Golang solution with explanation for understanding

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/1252877/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/1252877/)

---

I wouldn't say that this problem statment is the easiest to understand, so I am going to try to explain it in my own words. Let us say that we have `(())()()` the maximum depth is `2`, because `(())` has a depth of `2` the problem wants us to find two subsequences `A`, and `B`, so that `A` and `B` are both at their minimum depths, and minimum lengths (When we want minimum lengths `seq` has to be split into two pieces) so in the following input, `A` and `B` will be shown:

input := `( ( ) ) ( ) ( )`
depth = `1 2 2 1 1 1 1 1`
A and B `A B B A B B A A`

```
func maxDepthAfterSplit(seq string) []int {
	res := make([]int, len(seq))
	evenOrOdd := 0
	for i, i2 := range seq {
		if i2 == '(' {
			evenOrOdd++
			res[i] = evenOrOdd % 2
		} else {
			res[i] = evenOrOdd % 2
			evenOrOdd--
		}
	}
	return res
}
```