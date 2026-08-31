# Most Optimal Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 1
**Link:** [https://leetcode.com/problems/patching-array/solutions/5323635/](https://leetcode.com/problems/patching-array/solutions/5323635/)

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
    def minPatches(nums: Array[Int], n: Int): Int = {
        //BRUTE FORCE
        // var cost=0
        // var upper=0
        // var i=0
        // while   (upper   <   n)
        // {
        //     if   (i<   nums.length  &&   nums(i)   <=   upper+1)
        //     {
        //         upper   +=   nums(i)
        //         i   +=   1
        //     }
        //     else
        //     {
        //         cost   +=   1
        //         upper   +=   upper+1
        //     }
        // }
        //  cost

        def hlpr(acc:Long,i:Int,result:Int):Int=
        {
            if   (acc>n)   result
            else
            {
                if   (i<nums.size   &&   nums(i)   <=   acc)   hlpr(acc+nums(i),i+1,result)
                else   hlpr(acc+acc,i,result+1)
            }
        }
        hlpr   (1L,0,0)
    }
}
```