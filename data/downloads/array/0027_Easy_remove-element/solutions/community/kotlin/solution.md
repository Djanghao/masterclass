# Kotlin simple

**Author:** GeorgCantor
**Votes:** 14
**Link:** [https://leetcode.com/problems/remove-element/solutions/1041826/](https://leetcode.com/problems/remove-element/solutions/1041826/)

---

```
    fun removeElement(nums: IntArray, num: Int): Int {
        var counter = 0
        nums.forEach { if (it != num) nums[counter++] = it }

        return counter
    }
```