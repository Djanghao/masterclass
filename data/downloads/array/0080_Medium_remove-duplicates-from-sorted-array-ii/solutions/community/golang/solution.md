# ✅Easy || O(n) || PYTHON || JAVA || GO || C++ || Beginner Friendly🔥😎🔥

**Author:** geekytaurus
**Votes:** 114
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4511964/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4511964/)

---


# Approach
<!-- Describe your approach to solving the problem. -->

The solution approach involves iterating through the input array `nums` and maintaining two pointers, `index` and `occurrence`. The `index` pointer represents the length of the modified array, and the `occurrence` pointer tracks the number of occurrences of the current element.

- Initialize `index` to 1 (for the first element) and `occurrence` to 1.
- Iterate through the array, starting from index 1.
- If the current element is equal to the previous one, increment `occurrence`.
- If not, reset `occurrence` to 1.
- If `occurrence` is less than or equal to 2, update `nums[index]` with the current element and increment `index`.
- Continue until the end of the array.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int removeDuplicates(int[] nums) {

        int index = 1;
        int occurance = 1;

        for(int i=1; i < nums.length; i++){
            if (nums[i] == nums[i-1]){
                occurance++;
            }else{
                occurance = 1;
            }

            if (occurance <= 2){
                nums[index] = nums[i];
                index++;
            }
        }  

        return index;
    
    }
}
```
```python []
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:

        index = 1
        occurance = 1

        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                occurance += 1
            else:
                occurance = 1

            if occurance <= 2:
                nums[index] = nums[i]
                index += 1
        
        return index
        
```
```Go []
func removeDuplicates(nums []int) int {

    index := 1
    occurance := 1

    for i := 1; i < len(nums); i++{
        if (nums[i] == nums[i-1]){
            occurance++
        }else{
            occurance = 1
        }

        if occurance <= 2{
            nums[index] = nums[i]
            index++
        }
    }

    return index
}
```
```C++ []
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {

        int index = 1;
        int occurance = 1;

        for(int i=1; i < nums.size(); i++){
            if (nums[i] == nums[i-1]){
                occurance++;
            }else{
                occurance = 1;
            }

            if(occurance <= 2){
                nums[index] = nums[i];
                index++;
            }
        }

        return index;
        
    }
};
```
![LeetCodeUpvote.png](./images/0.png)

# Top 10 Easy-Medium LeetCode problems must to do for coding interviews:

1. [Two Sum](https://leetcode.com/problems/two-sum/) (Easy): Given an array of integers, return indices of the two numbers such that they add up to a specific target.
1. [Reverse Integer](https://leetcode.com/problems/reverse-integer/)(Easy): Reverse digits of an integer.
1. [Palindrome Number](https://leetcode.com/problems/palindrome-number/) (Easy): Determine whether an integer is a palindrome.
1. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) (Easy): Convert a Roman numeral to an integer.
1. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) (Medium): Given a string, find the length of the longest substring without repeating characters.
1. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) (Hard): Find the median of two sorted arrays.
1. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) (Easy): Merge two sorted linked lists and return it as a new sorted list.
1. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (Easy): Find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.
1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) (Easy): Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid.
1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/) (Medium): Given a collection of intervals, merge any overlapping intervals.

You'll gain proficiency in manipulating arrays, strings, and integers with efficiency, addressing edge cases, and employing data structures like hash tables and stacks. These challenges will expose you to more advanced principles such as binary search, dynamic programming, and interval manipulation.

### Please do Upvote \u2B06, If it helps you :)

