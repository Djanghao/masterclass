# Sliding Window: O(n) time, O(1) space.

**Author:** radixon
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/6097859/](https://leetcode.com/problems/diet-plan-performance/solutions/6097859/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem statement requires some calculation for every consecutive sequence of k days.  This lends itself to the sliding window approach.  Simply put for each window of size k, make a calculation and apply the rules as prescribed.

# Approach
<!-- Describe your approach to solving the problem. -->
    Initialization:
Initialize the left pointer, the res variable to track points, and the curr variable to track total calories in the current window.

    Maintenance:
Add the element at the right pointer to the curr calories consumed window.  

If the window size == k, check if T > upper.  If T > upper, add +1 point to res.  If T > upper is false, check if T < lower.  If T < lower, subtract -1 point from res.  If T > upper is false and T < lower is false, take no action with res.  After checking T, remove the left most element from the window and increment the left pointer.

    Termination:
After all element of calories has been processed, res will contain the current point total.  Thus, return res.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)  Each element of calories will be processed.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)  


# Code
```golang []
func dietPlanPerformance(calories []int, k int, lower int, upper int) int {
    left, res, curr := 0, 0, 0
    for right,_ := range calories{
        curr += calories[right]

        // Check the size of the current window
        if right - left + 1 == k{

            // If T > upper
            if curr > upper{
                res++

            // If T < lower
            }else if curr < lower{
                res--
            }

            // Remove the left most value in the window
            curr -= calories[left]

            // Increment the left pointer
            left++
        }
    }
    return res
}
```