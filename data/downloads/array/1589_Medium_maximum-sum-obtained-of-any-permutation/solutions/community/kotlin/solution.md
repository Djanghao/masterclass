# Stack-like approach

**Author:** adrian1703
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5913189/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5913189/)

---

# Intuition
If I can iterate through the indices of nums, I should be able to calculate the number of "active" ranges. Then I can assign the highest occurence to the largest value in nums. 

# Approach
* Split the requests into starts and ends.
* Sort both of them.
* Move the pointer along the nums index
    - if a value in arrayStarts matches the index that means a range opens
    - if a value in arrayEnds matches the index that means a range closes
* multiply highest value * highest occurences

# Complexity
- Time complexity:
O(N*LogN)

- Space complexity:
O(N)

# Code
```kotlin []
class Solution {
   fun maxSumRangeQuery(nums: IntArray, requests: Array<IntArray>): Int {
        nums.sortDescending()
        var sum = 0
        val mod = 10.0.pow(9.0).toInt() + 7
        val indexCount  = IntArray(nums.size)
        val arrayStarts = IntArray(requests.size)
        val arrayEnds   = IntArray(requests.size)
        requests.forEachIndexed { index, ints ->
            arrayStarts[index] = ints[0]
            arrayEnds[index] = ints[1]
        }
        arrayStarts.sort()
        arrayEnds.sort()
        var stackCount         = 0
        var arrayStartsPointer = 0
        var arrayEndsPointer   = 0
        indexCount.forEachIndexed { index, cnt ->
            while(index == arrayStarts.getOrNull(arrayStartsPointer)){
                stackCount ++
                arrayStartsPointer++
            }
            while(index == arrayEnds.getOrNull(arrayEndsPointer)?.plus(1)){
                stackCount--
                arrayEndsPointer++
            }
            indexCount[index] = stackCount
        }
        indexCount.sortDescending()
        indexCount.forEachIndexed { index, cnt ->
            sum += ((cnt.toLong() * nums[index] % mod)).toInt()
            sum %=  mod
        }
        return sum
    }
}
```