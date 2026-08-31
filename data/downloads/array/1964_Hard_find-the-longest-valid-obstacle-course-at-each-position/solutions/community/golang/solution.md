# Golang | Time Space 100%

**Author:** tw13
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/2921065/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/2921065/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func longestObstacleCourseAtEachPosition(obstacles []int) []int {
    var stack []int
    answer := make([]int, len(obstacles))
    for i, obstacle := range obstacles {
        if len(stack) == 0 || obstacle >= stack[len(stack)-1] {
            stack = append(stack, obstacle)
            answer[i] = len(stack)
            continue
        }
        index := sort.Search(len(stack), func(j int) bool {
            return stack[j] > obstacle
        })
        answer[i] = index+1
        stack[index] = obstacle
    }
    return answer
}
```