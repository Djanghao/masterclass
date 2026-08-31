# Good solution with O(1) and O(n)

**Author:** behzodhalil
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/4617924/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/4617924/)

---


# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countInterestingSubarrays(nums: List<Int>, modulo: Int, k: Int): Long {
        val bucket = mutableMapOf(0 to 1L).withDefault { 0L }
        var prefix = 0L

        var answer = 0L
        /*
            Array: [3,1,9,6]
            Indices: [0..3]

            [0] = nums[i] % modulo == k
                  3         0         3
            prefix = 1
            key = (1 + 0 - 3) % 0 = 1

            [1] = nums[i] % modulo == k
                  1         0         3 
            prefix = 1     
            key = (1 + 0 - 3) % 0 = 1          
         */
        nums.forEach { number  ->
            if(number % modulo == k) prefix++

            val key = (prefix + modulo -k) % modulo
         
            answer += bucket.getValue(key.toInt())
            
            bucket[prefix.toInt() % modulo] = bucket.getValue(prefix.toInt() % modulo)+1
        }

        return answer
    }
}
```