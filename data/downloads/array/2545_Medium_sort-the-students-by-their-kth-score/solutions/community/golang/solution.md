# I use sort package for reverse and sorting

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/6031970/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/6031970/)

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
func sortTheStudents(score [][]int, k int) (r [][]int) {
    t := []int{}
    for i := 0; i < len(score); i++{
        for j := 0; j < len(score[i]); j++{
            if j == k {
                t = append(t, score[i][j])
            }
        }   
    }
    sort.Sort(sort.Reverse(sort.IntSlice(t)))
    for i := 0; i < len(t); i++{
        for j := 0; j < len(score); j++{
            if score[j][k] == t[i]{
                r = append(r, score[j])
            }
        }   
    }
	return
}
```