# Go | Inorder Traversal | O(n), O(logn)

**Author:** laiweili
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/5345799/](https://leetcode.com/problems/beautiful-array/solutions/5345799/)

---

# Complexity
- Time complexity: $$O(n)$$


- Space complexity: 
    - $$O(logn)$$ : If we take recursion stack space considered
    - $$O(1)$$: If we do not count the stack space


# Code
## Go
``` Go
func beautifulArray(n int) []int {
	res := []int{}
	dfs(n, 0, 0, &res)
	return res
}

func dfs(n, num, lv int, res *[]int) {
	if num > n {
		return
	}
	ld := 1 << lv
	rd := 1 << (lv + 1)

	dfs(n, num+ld, lv+1, res)
	if num > 0 {
		(*res) = append((*res), num)
	}
	dfs(n, num+rd, lv+1, res)
}

////
////                                0
////               1                                   2
////        3              5                  4                6
////     7     11      9       13        8        12      10        14
////   15 23  19 27  17 25    21 29    16 24     20 28   18 26     22 30
////

```