# C # solution without using sort

**Author:** pamyann
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/2909673/](https://leetcode.com/problems/sort-transformed-array/solutions/2909673/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
o(n) is most cases. But do some manual sort when value of b is  high. 
For example,
Test case 
int[] nums =new int[] { -4, -2, 2, 4 };
            int a = 1, b = 43, c = 5;
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
     public int[] SortTransformedArray(int[] nums, int a, int b, int c)
        {
            int[] sols = new int[nums.Length];
            int i = 0;

            bool isAPositive = a >= 0;
            int left, right;
            if (isAPositive)
            {
                left = ((nums.Length - 1) / 2) + 1;
                right = (nums.Length - 1) / 2;
            }
            else
            {
                right = nums.Length - 1;
                left = 0;
            }
            while ((left <= right && !isAPositive) || ((left < nums.Length || right >= 0) && isAPositive))
            {
                int? leftsum = calc(nums, a, b, c, left);
                int? rightsum = calc(nums, a, b, c, right);

                if (leftsum == null)
                {
                    sols = AddSorted(sols, rightsum.Value, i++);
                    right--;
                }
                else if (rightsum == null)
                {
                    sols = AddSorted(sols, leftsum.Value, i++);
                    left++;
                }
                else if (rightsum < leftsum)
                {
                    sols = AddSorted(sols, rightsum.Value, i++);
                    right--;
                }
                else if (rightsum > leftsum)
                {
                    sols = AddSorted(sols, leftsum.Value, i++);
                    left++;
                }
                else
                {
                    sols = AddSorted(sols, leftsum.Value, i++);
                    sols = AddSorted(sols, rightsum.Value, i++);
                    left++;
                    right--;
                }
            }

            return sols;
        }
        private int? calc(int[] nums, int a, int b, int c, int pos)
        {
            if (pos < 0 || pos >= nums.Length)
                return null;
            return (a * nums[pos] * nums[pos]) + (b * nums[pos]) + c;
        }
        private int[] AddSorted(int[] sols, int s, int position)
        {
            if (position < sols.Length)
            {
                int i = position;
                //Manual sort when value of b is high
                while (i > 0 && sols[i - 1] > s)
                {
                    sols[i] = sols[i - 1];
                    i--;
                }
                sols[i] = s;
            }
            return sols;
        }
    
        }
```