# Minimum Subsequence with Greater Sum||Easy Greedy Solution

**Author:** Aashiq_Edavalapati
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5086381/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5086381/)

---

# Problem Explanation:
You are given an array of positive integers. Find a subsequence from the array such that:

1. The sum of the numbers in this subsequence is strictly greater than the sum of the numbers not included in the subsequence.
2. Among all valid subsequences meeting the above condition, return the one with the smallest size. If there are ties in size, return the subsequence with the maximum total sum of its elements.

# Intuition:
1. Sorting in Non-Increasing Order: Sorting the array nums in non-increasing order allows us to start with the largest numbers, maximizing the sum of the chosen subsequence.
2. Greedy Approach: Starting from the largest numbers after sorting, add them to the subsequence until the sum of this subsequence exceeds half of the total sum of nums.
3. Exit Condition: Once the sum of the chosen subsequence becomes greater than the sum of the remaining numbers, stop and return the subsequence.

# Approach:
1. **Sort the Array:** Sort the array nums in non-increasing order.
2. **Calculate Total Sum:** Compute the total sum of all elements in nums.
3. **Construct the Subsequence:** 
    - Iterate through the sorted array nums from largest to smallest.
    - Add each element to the minSubSequence and keep track of the current sum of this subsequence (currentSum).
    - Compare currentSum with the remaining sum (totalSum - currentSum).
    -  If currentSum becomes greater than the remaining sum, stop and return the subsequence.
4. **Return the Result:** Return the constructed minSubSequence.
# Code
```java []
class Solution {
    public List<Integer> minSubsequence(int[] nums) {
        // Initialize an ArrayList to store the result subsequence
        List<Integer> minSubSequence = new ArrayList<>();
        
        // Sort the array in non-decreasing order
        Arrays.sort(nums);
        
        // Calculate the total sum of the array
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        
        // Initialize current sum of the subsequence
        int current_sum = 0;
        
        // Iterate through sorted array to construct the subsequence
        for (int j = nums.length - 1; j >= 0; j--) {
            sum -= nums[j];  // Subtract the current number from total sum
            current_sum += nums[j];  // Add the current number to current sum
            minSubSequence.add(nums[j]);  // Add current number to subsequence
            
            // Check if current sum of subsequence > sum of remaining elements
            if (current_sum > sum) {
                return minSubSequence;  // Return the subsequence
            }
        }
        
        return minSubSequence;  // Return the subsequence if no conditions met
    }
}

```
```python3 []
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        # Initialize an empty list to store the result subsequence
        minSubSequence = []
        
        # Sort the array in non-increasing order
        nums.sort(reverse=True)
        
        # Calculate the total sum of the array
        totalSum = sum(nums)
        
        # Initialize current sum of the subsequence
        currentSum = 0
        
        # Iterate through sorted array to construct the subsequence
        for num in nums:
            totalSum -= num  # Subtract the current number from total sum
            currentSum += num  # Add the current number to current sum
            minSubSequence.append(num)  # Add current number to subsequence
            
            # Check if current sum of subsequence > sum of remaining elements
            if currentSum > totalSum:
                return minSubSequence  # Return the subsequence
        
        return minSubSequence  # Return the subsequence if no conditions met

```
