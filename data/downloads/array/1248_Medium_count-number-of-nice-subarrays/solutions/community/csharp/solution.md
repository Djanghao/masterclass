# C# Solution for Count Number of Nice Subarrays Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5351473/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5351473/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this approach is to break down the problem of finding subarrays with exactly k odd numbers into two simpler problems:

1.	Count the number of subarrays with at most k odd numbers.
2.	Count the number of subarrays with at most k-1 odd numbers.

By subtracting the result of the second problem from the first, we get the number of subarrays with exactly k odd numbers. This works because the subarrays with at most k odd numbers include all subarrays with at most k-1 odd numbers plus those with exactly k odd numbers.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Two-Pointer Sliding Window:
	\u2022	Use a helper function AtMost to count the number of subarrays with at most k odd numbers.
	\u2022	Utilize two pointers (left and right) to maintain a sliding window that counts the number of subarrays ending at each position.
2.	Sliding Window Logic:
	\u2022	Traverse the array with the right pointer.
	\u2022	If the current number is odd, decrement k.
	\u2022	If k becomes negative (i.e., the window contains more than k odd numbers), move the left pointer to the right until the window contains at most k odd numbers again.
	\u2022	For each position of the right pointer, the number of valid subarrays ending at the current position is right - left + 1, which gets added to the result.
3.	Main Function:
	\u2022	Call the helper function AtMost(nums, k) to count subarrays with at most k odd numbers.
	\u2022	Call the helper function AtMost(nums, k-1) to count subarrays with at most k-1 odd numbers.
	\u2022	Subtract the latter from the former to get the number of subarrays with exactly k odd numbers.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n): The algorithm processes each element of the array exactly once with the right pointer. The left pointer also moves at most n steps across the entire array. Hence, the overall time complexity is linear in terms of the number of elements in the array.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1): The algorithm uses a constant amount of extra space, primarily for counters and pointers. No additional space proportional to the input size is required.

# Code
```
public class Solution {
    public int NumberOfSubarrays(int[] nums, int k) {
        return AtMost(nums, k) - AtMost(nums, k - 1);
    }
    private int AtMost(int[] nums, int k) {
        int count = 0, left = 0, result = 0;
        
        for (int right = 0; right < nums.Length; right++) {
            if (nums[right] % 2 == 1) {
                k--;
            }
            
            while (k < 0) {
                if (nums[left] % 2 == 1) {
                    k++;
                }
                left++;
            }
            
            result += right - left + 1;
        }
        
        return result;
    }
}
```