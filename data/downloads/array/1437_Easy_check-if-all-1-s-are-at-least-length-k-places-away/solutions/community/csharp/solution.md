# Code Analysis: Checking If All 1s in an Array are at Least K Positions Apart

**Author:** mithunm712
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4103479/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4103479/)

---

# Intuition
The code checks if all occurrences of the value 1 in the given array are at least K positions apart.
# Approach
1-Initialize an integer variable count to k. This variable will be used to keep track of the distance between consecutive 1s.

2-Use a for loop to iterate through the elements of the nums array.

3-Inside the loop, check if the current element nums[i] is equal to 1.

4-If nums[i] is equal to 1, check if count is less than k. If it is, return false because two 1s are not at least k positions apart.

5-Reset count to 0 to start counting the distance again.

6-If nums[i] is not equal to 1, increment count by 1, indicating that there is a gap between consecutive 1s.

7-After the loop, if no violations were found (i.e., all 1s are at least k positions apart), return true.

# Complexity
- Time complexity:
The time complexity of this code is O(n), where 'n' is the length of the input array nums. This is because it iterates through the entire array once.

- Space complexity:
 The space complexity is O(1) because it uses a constant amount of additional space to store the count variable, regardless of the input size.

# Code
```
public class Solution {
    public bool KLengthApart(int[] nums, int k) {
        int count = k;

        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] == 1) {
                if (count < k) {
                    return false; 
                }
                count = 0; 
            } else {
                count++; 
            }
        }
        return true;
    }
}
```