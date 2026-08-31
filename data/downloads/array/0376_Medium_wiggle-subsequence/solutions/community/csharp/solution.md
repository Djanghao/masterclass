# C#: Very easy solution without any extra space | O(n) | O(1)

**Author:** abhisheksingh78617
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/3989673/](https://leetcode.com/problems/wiggle-subsequence/solutions/3989673/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
A Wiggle sequence is a sequence which goes like Up -> Down ->Up ...
or Down -> Up -> Down ......
So it's clear, there can be only 3 cases
Initiall, value of Up/Down is 1

1. Nums[i] > Nums[i-1]
We will assign Up to Down + 1
I.e: up = down +1;

2. Nums[i] < Nums[i-1]
We will assign Down to Up + 1
i.e: down = up +1;

3. Nums[i] == Nums[i+1]
Both Up and Down will remain same.


# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int WiggleMaxLength(int[] nums) {
        int pos =1;
        int neg = 1;
        int startingNumb = nums[0];
        List<int> numbArr = new List<int>();

        for(int i =1; i < nums.Length; i++)
        {
            if(nums[i] > nums[i-1])
            {
                pos = neg +1;
            }
            else if(nums[i] < nums[i-1])
            {
                neg = pos +1;
            }
        }

        return pos > neg ? pos : neg;
    }
}
```