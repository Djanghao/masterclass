# Very simple go solution

**Author:** MansurKurbonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/4982573/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/4982573/)

---

# Intuition
Very simple go solution

# Approach
sort and count

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(1)

# Code
```
func maximumGroups(grades []int) int {
    sort.Ints(grades)

    count := 0
    sum := 0
    for i := 0; i < len(grades); i++{
        sum += i
        if len(grades)-sum > i {
            count++
        } else {
            break
        }
    }

    return count
}
```