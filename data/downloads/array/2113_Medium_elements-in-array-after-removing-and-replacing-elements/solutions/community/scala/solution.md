# scala solution

**Author:** urbanclimatefr
**Votes:** 1
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/5318200/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/5318200/)

---

# Code
```
object Solution {
    def elementInNums(nums: Array[Int], queries: Array[Array[Int]]): Array[Int] = {

        def answerQuery(query: Array[Int]): Int = {
            val time = query(0) % (nums.length * 2)
            val idx = query(1)
            
            if (time <= nums.length) {
                if (0 <= idx + time && idx + time < nums.length) {
                    nums(idx + time)
                } else {
                    -1
                }
            } else {
                if (0 <= idx && idx < time - nums.length) {
                    nums(idx)
                } else {
                    -1
                }
            }
        }

        queries.map(answerQuery)
    }
}

```