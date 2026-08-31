# Kotlin with description beats 100% runtime and space

**Author:** OmarNajjar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/4956823/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/4956823/)

---

# Intuition
Using sortedSet

# Approach
At the begining if x == 0 then we can take the same index twice, So the answer is 0

Rather than that will loop throw the list adding the valid nums to sorted set, valid num is a num that has at least x distance from the current num

then we have these higher and lower functions which is a built in functions from the sortedSet, 
lower will get you the biggest number in the set lower than the number you provided,
heigher will get you the lowest number in the set heigher than the number you provided,

So we will provide nums[i]-1 to higher to include the value of nums[i] in the result and will do the same with lower

then will compare it to the min and that's it ^^


# Complexity
- Time complexity:
O(nlog(n))

- Space complexity:
O(n)

# Code
```
class Solution {
    fun minAbsoluteDifference(nums: List<Int>, x: Int): Int {
        if(x == 0) {
            return 0
        }
        var min = Int.MAX_VALUE
        val sortedSet = sortedSetOf<Int>()
        for(i in 0 until nums.size) {
            if(i - x >= 0){
                sortedSet.add(nums[i - x])
            }

            val h = sortedSet.higher(nums[i]-1)
            h?.let {
                min = Math.min(it-nums[i], min)
            }
            val l = sortedSet.lower(nums[i]+1)
            l?.let {
                min = Math.min(nums[i]-it, min)
            }
        }

        return min
    }
}
```