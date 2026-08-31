# Simple greedy solution in Scala |Runtime: 100%

**Author:** denisOgr
**Votes:** 1
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/3608609/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/3608609/)

---

# Intuition
Use greedy approach.

# Approach
Use greedy approach.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
/**
* Solution #1. Greedy algo.
* The main idea is find (tune) first and second element with the difference as less as possible.
* If after find num that is greater than second - return true.
* Steps:
* - define first and second values as MAX_INT
* - iterate over nums:
* -- if num less than first then define first as num
* -- if num more than first and less than second then define second as num
* -- if num more than second return true (update flag)
*
* Runtime: O(N), Space: O(N)
*/
object Solution {
    def increasingTriplet(nums: Array[Int]): Boolean = {
        var first: Int = Int.MaxValue
        var second: Int = Int.MaxValue
        var isFind: Boolean = false

        nums.foreach(num => {
            if (!isFind) {
                first = Math.min(num, first)
                second = if(num > first) Math.min(num, second) else second
                isFind = num > second
            }
        })
        isFind
    }
}
```