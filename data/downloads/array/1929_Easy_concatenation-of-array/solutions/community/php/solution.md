# ✅Java, PHP, Python, C++, JavaScript || Simple Solution || ✅Runtime 90% ||

**Author:** ayeshakalsoom06
**Votes:** 11
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/4130345/](https://leetcode.com/problems/concatenation-of-array/solutions/4130345/)

---

# Intuition
The intuition behind this solution is straightforward. We want to concatenate the given array with itself to create a new array that has the same elements repeated twice.

# Approach
- We start by initializing an empty list called ans, which we'll use to store the concatenated array.

- We iterate through the elements of the input nums array using a for loop. For each element num in nums, we append it to the ans list.

- After the loop, we concatenate the nums array again to the ans list using the += operator. This effectively adds all the elements of nums to the end of ans.

- Finally, we return the ans list, which now contains the concatenated array.

# Complexity
- Time complexity:
O(n) - We iterate through the input nums array once, where n is the length of nums.


- Space complexity:
We use additional space to store the ans list, which has the same length as nums.

# Code
```
class Solution:
    def getConcatenation(self, nums):
        # Initialize an empty list to store the concatenated array
        ans = []
        
        # Iterate through the elements of the input 'nums' array
        for num in nums:
            # Append the current number to the 'ans' list
            ans.append(num)
        
        # Concatenate 'nums' again to 'ans' to form the final result
        ans += nums
        
        return ans
};
```

![478xve.jpg](./images/0.jpeg)
