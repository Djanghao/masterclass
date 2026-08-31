# Kotlin | Iterate through the Array twice

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/5366337/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/5366337/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Test all subarrays for the LCM between elements. Since GCD has the property, that the total GCD is a gcd of all elements, this property can be used for LCM as well.

# Approach
<!-- Describe your approach to solving the problem. -->
First write a function for the GCD, since Kotlin doesnt have on build in. The LCM is a*b / gcd(a,b).

Go through every subarray and calculate the current LCM by using the previous one. Note that a LCM can only stay the same or grow, so if the current LCM for the subarray exceeds k then all subarrays which this is a part of is going to exceed k as well. If the current value of LCM is k then we just increment the solution value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
class Solution {
    fun gcd(a: Int, b: Int): Int {
        if(a > b){
            if(a % b == 0) return b

            return gcd(b, a % b)
        }

        if(b % a == 0) return a

        return gcd(a, b % a)
    }

    fun subarrayLCM(nums: IntArray, k: Int): Int {
        val n:Int = nums.size
        var sol:Int = 0

        for(i:Int in 0..n-1){
            var cur:Int = nums[i]

            for(j:Int in i..n-1){
                cur = cur * nums[j] / gcd(cur, nums[j])

                if(cur > k) break
                if(cur == k){
                    sol++
                }
            }
        }

        return sol
    }
}
```