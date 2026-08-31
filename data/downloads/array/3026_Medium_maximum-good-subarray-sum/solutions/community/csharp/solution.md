# Prefix Sum and Map/Dictionary solution, trying to give detailed explanation with example

**Author:** dungtranm65
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5708879/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5708879/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I can't think of the solution by myself, then I read the solutions from others and it was first a bit tricky to me to understand, it took me some time. 

So I tried to explain it again here with examples, hopefully it's clear enough.

The tricky part to understand for me is **prefixSum terminology apply for a sub array ending with a value (num) instead of an index (which is regular usage)**


# Approach
<!-- Describe your approach to solving the problem. -->
(1) Find valid subarray:
- Look for a subarray with **abs(start - end) = k** (start and end are values, not indices)
- When iterating through the array, at every num: **nums[i]**, it can be the **end** of a valid solution. The valid subarray exists if:
    - There is another number occurred before in the array where its value is **nums[i] - k** or **nums[i] + k**. This value will be the **start** 

(2) From (1), if we can find **start** and **end** pairs. How to calculate and check the max sum of those subarrays?
- First thought should be using **prefix sum**
- Then, how can we compare and pick the max sum?
  - Given a **sum of subarray with (start, end) 
         = prefixSum[end] - prefixSum[start] + start**
  - (*) Just note **"start"** and **"end"** are values, not indices
  - **end** will be fine, as when we iterate throught the array, it's actually the same as value at the current position **nums[i]** 
  - Have more focus on **start** value: So if there is a **start** value **repeated multiple times** **before the end** (*current nums[i]*), do we need to calculate sums for all subarrays starting at all those **start** values? 
  - No, we can just need to store the **smallest prefixSum for a given **start**** value. Why is that?
  - Reason is, look again at this calculation for subarray sum: **prefixSum[end] - prefixSum[start] + start**
     - The smaller the prefixSum[start], the bigger the resul
     - Example: there are two occurences of 2:
           1   7   **2**   -3   -4   **2**   1   -5  10 
           **The prefix sum of first number 2** is  1 + 7 + 2 = **10**
           **The prefix sum of second number 2** is 1 + 7 + 2 -3 -4 + 2 = **5** 
        If we are **at last number 10**, and **k = 8**, apparently, to have a subarray with bigger sum, the option to pick is the second number 2 (**prefix[10] - 5 > prefix[10] - 10**) 
        The result sub array with maximum sum is:
           2  1  -5  10
- (*) Also, since we want to **ensure the start value** ($$nums[i] - k$$ or $$nums[i] + k$$) **comes before current number** ($$nums[i]$$),
                 the computation of minPrefixSum should be updated after every iteration 




# Complexity
- Time complexity: O(n)
- Space complexity: O(n)
# Code
```csharp []
public class Solution {
    public long MaximumSubarraySum(int[] nums, int k) {

        int n = nums.Length;
        long[] prefixSum = new long[n];
        prefixSum[0] = nums[0];
        for (int i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + nums[i];
        }

        // Using the map to store the mininum previous of subarray ending with given number
        // Just need to populate the first one, the others should be update
        // along with iteration to find max subarray sum
        var minPrefixSumOfNum = new Dictionary<int, long>();   
        minPrefixSumOfNum[nums[0]] = prefixSum[0];

        long res = long.MinValue;
        for (int i = 1; i < n; i++) {
            int end = nums[i];
            if (minPrefixSumOfNum.ContainsKey(end - k)) {
                int start = end - k;
                res = Math.Max(res, prefixSum[i] - minPrefixSumOfNum[start] + start);
            }   
            if (minPrefixSumOfNum.ContainsKey(end + k)) {
                int start = end + k;
                res = Math.Max(res, prefixSum[i] - minPrefixSumOfNum[start] + start);
            }

            if (!minPrefixSumOfNum.TryGetValue(nums[i], out long curMin))
                curMin = long.MaxValue; 
            minPrefixSumOfNum[nums[i]] = Math.Min(curMin, prefixSum[i]); 
        }

        return res == long.MinValue ? 0 : res;
    }
}
```