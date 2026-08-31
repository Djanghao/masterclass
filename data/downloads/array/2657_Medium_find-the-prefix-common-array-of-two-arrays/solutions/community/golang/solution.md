# Runtime 98.8%, without map

**Author:** mansimnovruzov
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4968308/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4968308/)

---

# Intuition
I wanted to avoid using hash tables because they consume a lot of memory. Since the conditions here allow us to do so, I decided to use slicing.

# Approach
So, there's nothing complicated here. We simply mark True where we've already been, and if we have an intersection, we increment the Counter.
In the second condition, we protect ourselves from the situation where both lists have the same value.
In my opinion, it's a very simple solution :)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func findThePrefixCommonArray(A []int, B []int) []int {
	resA := make([]bool, len(A)+1)
	resB := make([]bool, len(B)+1)
	res := make([]int, len(A))
	c := 0
	for i := 0; i < len(A); i++ {
        a:=A[i]
        b:=B[i]
		resA[a] = true
		resB[b] = true
		if resB[a] && resA[a] {
			c++
		}
		if a != b && resA[b] && resB[b] {
			c++
		}
		res[i] = c
	}
	return res
}
```