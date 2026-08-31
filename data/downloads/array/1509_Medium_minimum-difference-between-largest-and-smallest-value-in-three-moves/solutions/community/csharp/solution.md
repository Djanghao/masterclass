# Array Sort and For Loop

**Author:** TarjeiM
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5411326/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5411326/)

---

# Intuition
The maximum range in the array will be between the smallest and largest element. In order to lower the range, we can "neutralize" 3 elements, and it stands to reason that these 3 elements should be taken out of the 3 smallest and 3 largest elements in the array. 

# Approach
We start by checking if the array is of size 4 or less, in which case we are able to make every element equal and thus attain a minimum difference of 0.

Otherwise, we will sort the array to gain index-based access to the smallest and largest elements in the array. You should copy the array before sorting if you do not wish to mutate parameters.

Some combination of the 3 smallest and the 3 largest elements should be removed to attain the minimum difference. We use a for loop to check the range between potential starts and ends of the array that would result from the possible removals. 

At each iteration we check if the current minimum distance is smaller than one we have seen previously, and update the answer accordingly.

# Code
```
public class Solution {
    public int MinDifference(int[] nums) {
        if (nums.Length <= 4) {
            return 0;
        }
        Array.Sort(nums);
        int ans = Int32.MaxValue;
        for (int i = 0; i < 4; i++) {
            ans = Math.Min(ans, nums[nums.Length - 4 + i] - nums[i]);
        }
        return ans;
    }
}
```