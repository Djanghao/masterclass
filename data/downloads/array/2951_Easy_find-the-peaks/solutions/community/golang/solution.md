# i use comparison operator for mountain i - 1 and mountain i + 1

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/5945054/](https://leetcode.com/problems/find-the-peaks/solutions/5945054/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func findPeaks(mountain []int) (r []int) {
    for i := 1; i < len(mountain) - 1; i++{
        if mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1] {
            r = append(r, i)
        }
    }
	return
}
```