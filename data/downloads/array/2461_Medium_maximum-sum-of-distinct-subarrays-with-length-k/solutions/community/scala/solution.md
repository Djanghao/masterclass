# Scala sliding window

**Author:** adorable_http
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/3092249/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/3092249/)

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
object Solution {
    def maximumSubarraySum(nums: Array[Int], k: Int): Long = {
        var currentSum = 0L
        var left = 0
        var sum = 0L
        val hash = scala.collection.mutable.Map.empty[Int, Int]
        for(i <- nums.indices){
            hash += (nums(i) -> (hash.getOrElse(nums(i), 0) + 1))
            currentSum += nums(i)
            while(hash(nums(i)) > 1){
                hash += (nums(left) -> (hash(nums(left)) - 1))
                currentSum -= nums(left)
                left += 1
            }
            
            if(i - left + 1 == k){
                sum = Math.max(sum, currentSum)
                hash += (nums(left) -> (hash(nums(left)) - 1))
                currentSum -= nums(left)
                left += 1
            }
        }
        sum
    }
}
```