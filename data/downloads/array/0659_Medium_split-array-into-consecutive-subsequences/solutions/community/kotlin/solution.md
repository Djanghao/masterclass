# 2 HashMaps

**Author:** gnayoaix
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/3757035/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/3757035/)

---

# Intuition
Just need to keep track of frequency of each item and number of sub arrays end with each item.

The logic is as follows:
* If freq[item] == 0, used up, just skip
* If item is the end of some subarray, use it and update these two maps + item + 1 can now be served as end for a subarray, so +1 here
* If the item is the head of a subarray, we need to make sure we have enough item + 1 and item + 2 to use, we also need to add item + 3 to the ends map
* Else, return false

# Code
```
class Solution {
    fun isPossible(nums: IntArray): Boolean {
        val freq = mutableMapOf<Int, Int>().withDefault{0}
        val ends = mutableMapOf<Int, Int>().withDefault{0}

        nums.forEach { freq[it] = freq.getValue(it) + 1 }

        for (num in nums) {
            if (freq[num] == 0) continue

            if (ends.getValue(num) > 0) {
                ends[num] = ends.getValue(num) - 1
                freq[num] = freq.getValue(num) - 1

                ends[num + 1] = ends.getValue(num + 1) + 1
            } else if (freq.getValue(num + 1) > 0 && freq.getValue(num + 2) > 0) {
                freq[num] = freq.getValue(num) - 1
                freq[num + 1] = freq.getValue(num + 1) - 1
                freq[num + 2] = freq.getValue(num + 2) - 1
                
                ends[num + 3] = ends.getValue(num + 3) + 1
            } else {
                return false
            }
        }

        return true
    }
}
```