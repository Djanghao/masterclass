# Go | Calculate Parent Node | O(logn), O(logn)

**Author:** laiweili
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/5469889/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/5469889/)

---

# Approach
Find the level of input number $$num$$.
Calculate the parent.
  - $$ lv $$ : The level of current number
  - $$ base $$ :  The minimum number in the level $$lv$$
  - $$ \u230A(num-base)/2\u230B = base-parent-1  \\\\
       => parent = base-1-\u230A(num-base)/2\u230B$$

Assign $$parent$$ to $$num$$.
Loop to root.
  

# Complexity
$$n$$: The input number
- Time complexity: $$O(logn)$$

- Space complexity: $$O(logn)$$

# Code
## Go
``` Go
func pathInZigZagTree(num int) []int {
	base := 1
	lv := 0
	for num-base >= 0 {
		base <<= 1
		lv++
	}
	base >>= 1
	lv--

	res := make([]int, lv+1)
	for lv >= 0 {
		res[lv] = num
		num = base - 1 - (num-base)/2
		base >>= 1
		lv--
	}

	return res
}
```