# Simple go solution

**Author:** noomaher12
**Votes:** 3
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/3374226/](https://leetcode.com/problems/boats-to-save-people/solutions/3374226/)

---

# Code
```
func numRescueBoats(people []int, limit int) int {
    sort.Ints(people)
    start := 0
    end := len(people) - 1
    res := 0
    for start <= end {
       if people[start] + people[end] <= limit {
           start++
           end--
           res++
       } else {
           end--
           res++
       }
    }
    return res
}
```