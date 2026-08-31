# 0 ms easy to understand solution

**Author:** rextail
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/5151677/](https://leetcode.com/problems/rabbits-in-forest/solutions/5151677/)

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
```
func numRabbits(answers []int) int {
    rabbits := make(map[int]int)
    res := 0
    for _, ans := range answers {
        rabbits[ans] += 1
        //for example, if 3 rabbits telling us that there's 1 more same rabbit
        if rabbits[ans] == ans + 1{
            res += ans + 1
            delete(rabbits, ans)
        }
    }
    for ans, _ := range rabbits {
            res += ans + 1
    } 
    return res
}
```