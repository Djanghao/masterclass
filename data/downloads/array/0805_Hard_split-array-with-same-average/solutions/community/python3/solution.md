# 💥Python3 | Runtime beats 96.46%, Memory beats 93.81% [EXPLAINED]

**Author:** r9n
**Votes:** 13
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/5747414/](https://leetcode.com/problems/split-array-with-same-average/solutions/5747414/)

---

# Intuition
The challenge is to split the array into two subsets with the same average, which is more nuanced than just finding subsets with equal sums. The trick here is to consider the differences from the average and how we can manipulate those differences to achieve the goal.

# Approach
Compute the Target Average:

To solve the problem, we need to understand that splitting an array into two subsets with the same average is equivalent to splitting it into subsets that can achieve a specific sum based on that average.

Step 1: Calculate the total sum of the array elements. This helps us understand what the average would be if we split the array.

Step 2: Transform the problem by shifting the focus from achieving the same average to achieving the same sum. Specifically, if we can split the numbers such that the sum of one subset equals a specific target, then the other subset will naturally match the average as well.

2. Transform the Array:

To simplify our problem, we translate the task into a bit manipulation problem by transforming the array. For each number in the array, we calculate a value based on how it deviates from what we expect if it were in a subset that meets the target average. This is done by the formula:

transformed_num = n * num - total_sum
Where n is the length of the array and num is an element in the array. This transformation lets us work directly with these differences.

3. Use Bit Manipulation:

The core of the solution involves using bit manipulation to keep track of which subset sums are achievable. Here\u2019s how it works:

Subset Sums: We use a bitmask to represent possible subset sums. Each bit in an integer represents whether a particular sum is achievable.

Update the Bitmask: As we process each number, we update the bitmask to reflect the new achievable sums by shifting and OR-ing with the current sums.

4. Check for Overlaps:

After processing the positive and negative values separately, we check if there\u2019s any overlap in the achievable sums from both positive and negative numbers. If there\u2019s an overlap, it means we can form subsets that meet the target average.

# Complexity
- Time complexity:

Bit Manipulation: The core of our algorithm involves bit manipulation to track subset sums. The complexity here is exponential with respect to the number of unique subset sums. For example, if there are k unique subset sums, the operations related to bitmasking are roughly O(2^k).

Overall Complexity: Since we have to process each number and update the bitmask accordingly, the worst-case time complexity is O(n * 2^n), where n is the number of elements in the array.

- Space complexity:

Bitmask Size: The space complexity primarily comes from the bitmask used to keep track of possible sums. In the worst case, this requires space proportional to the number of unique subset sums we can achieve, which can be quite large but is manageable due to the constraints (array length up to 30).

Overall Complexity: Space complexity is roughly O(2^n), where n is the number of elements, due to the bitmask's size.
# Code
```python3 []
from typing import List

class Solution:
    def splitArraySameAverage(self, nums: List[int]) -> bool:
        total_sum = sum(nums)
        n = len(nums)
        
        # If there's only one element, we cannot split it into two non-empty subsets
        if n == 1:
            return False
        
        # Helper function to calculate the possible subset sums
        def possible_sums(arr: List[int]) -> int:
            subset_sums = 1
            for a in arr:
                subset_sums |= (subset_sums << a)
            return (subset_sums - 1) ^ (1 << sum(arr))
        
        # Transform nums to the differences from the target average
        transformed_nums = [n * num - total_sum for num in nums]
        
        # If there's a zero in transformed_nums, we can split directly
        if 0 in transformed_nums:
            return True
        
        # Split transformed numbers into positive and negative
        positives = [num for num in transformed_nums if num > 0]
        negatives = [-num for num in transformed_nums if num < 0]
        
        # Check if there's an overlap in achievable sums from positive and negative numbers
        return bool(possible_sums(positives) & possible_sums(negatives))

```