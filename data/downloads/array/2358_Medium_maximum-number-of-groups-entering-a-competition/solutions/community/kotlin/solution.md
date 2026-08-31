# kotlin, arithmetic progression, O(1)

**Author:** LeonidIvankin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/4324680/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/4324680/)

---

# Code
```
class Solution {
    fun maximumGroups(grades: IntArray): Int {
    return ((-1 + Math.sqrt(1.toDouble() + 8 * grades.size)) / 2).toInt()
}
}
```