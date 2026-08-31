# Scala O(n) beats 100%

**Author:** user5648e
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/6118096/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/6118096/)

---

# Intuition
When you actually think about it, we really only need to track two values. The largest value, and the seconds largest. 

# Approach
Iterate through the list of values. Maintain two variables representing the largest and second largest.  If the current value is larger than the largest, that should be the new largest, and whatever the old largest value was, becomes the second largest.

if the current value isn't the largest, it might still be larger than the second largest. If it is, set the second largest to the current value.

Since we want to keep things functional, no sense using variables and a for-loop, we can actually construct a tail-recursive function that will be optimized for us under the hood.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```scala []
object Solution {
    def maxProduct(nums: Array[Int]): Int = {
        def loop(i: Int, max: Int, secondMax: Int): Int = {
            if(i < nums.size){
                if(nums(i) > max)
                    loop(i + 1, nums(i), max)
                else if(nums(i) > secondMax)
                    loop(i + 1, max, nums(i))
                else loop(i + 1, max, secondMax)
            } else (max - 1) * (secondMax - 1)
        }

        loop(0, -1, -1)
    }
```