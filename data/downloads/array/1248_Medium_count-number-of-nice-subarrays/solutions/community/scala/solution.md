# Easy Scala Sliding Window Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5363771/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5363771/)

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
    def numberOfSubarrays(nums: Array[Int], k: Int): Int = {
        def hlpr(nums:Array[Int],k:Int):Int   =   
        {
            var i=0
            var j=0
            var oddCnt=0
            var result=0
            while   (j   <   nums.size)
            {
                if   (nums(j)%2   ==   1)   oddCnt   +=   1
                while   (oddCnt   >   k)
                {
                    if   (nums(i)%2   ==   1)   oddCnt   -=   1
                    i=i+1
                }
                result   +=   j-i+1
                j=j+1
            }
            result
        }
        hlpr(nums,k)   -   hlpr(nums,k-1)
    }
}
```