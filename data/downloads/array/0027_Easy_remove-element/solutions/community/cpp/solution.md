# ✅Best 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 2472
**Link:** [https://leetcode.com/problems/remove-element/solutions/3670940/](https://leetcode.com/problems/remove-element/solutions/3670940/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
The intuition behind this solution is to iterate through the array and keep track of two pointers: `index` and `i`. The `index` pointer represents the position where the next non-target element should be placed, while the `i` pointer iterates through the array elements. By overwriting the target elements with non-target elements, the solution effectively removes all occurrences of the target value from the array.\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
1. Initialize `index` to 0, which represents the current position for the next non-target element.\r
2. Iterate through each element of the input array using the `i` pointer.\r
3. For each element `nums[i]`, check if it is equal to the target value.\r
    - If `nums[i]` is not equal to `val`, it means it is a non-target element.\r
    - Set `nums[index]` to `nums[i]` to store the non-target element at the current `index` position.\r
    - Increment `index` by 1 to move to the next position for the next non-target element.\r
4. Continue this process until all elements in the array have been processed.\r
5. Finally, return the value of `index`, which represents the length of the modified array.\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
$$ O(n) $$\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
$$ O(1) $$\r
\r
# Code\r
```C++ []\r
class Solution {\r
public:\r
    int removeElement(vector<int>& nums, int val) {\r
        int index = 0;\r
        for(int i = 0; i< nums.size(); i++){\r
            if(nums[i] != val){\r
                nums[index] = nums[i];\r
                index++;\r
            }\r
        }\r
        return index;\r
    }\r
};\r
```\r
```Java []\r
class Solution {\r
    public int removeElement(int[] nums, int val) {\r
        int index = 0;\r
        for (int i = 0; i < nums.length; i++) {\r
            if (nums[i] != val) {\r
                nums[index] = nums[i];\r
                index++;\r
            }\r
        }\r
        return index;\r
    }\r
}\r
```\r
```Python3 []\r
class Solution:\r
    def removeElement(self, nums: List[int], val: int) -> int:\r
        index = 0\r
        for i in range(len(nums)):\r
            if nums[i] != val:\r
                nums[index] = nums[i]\r
                index += 1\r
        return index\r
```\r
\r
![CUTE_CAT.png](./images/0.png)\r
\r
\r
**If you are a beginner solve these problems which makes concepts clear for future coding:**\r
1. [Two Sum](https://leetcode.com/problems/two-sum/solutions/3619262/3-method-s-c-java-python-beginner-friendly/)\r
2. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/solutions/3651672/best-method-c-java-python-beginner-friendly/)\r
3. [Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/3651712/2-method-s-c-java-python-beginner-friendly/)\r
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/solutions/3666304/beats-100-c-java-python-beginner-friendly/)\r
5. [Remove Element](https://leetcode.com/problems/remove-element/solutions/3670940/best-100-c-java-python-beginner-friendly/)\r
6. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/solutions/3672475/4-method-s-c-java-python-beginner-friendly/)\r
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/solutions/3675747/beats-100-c-java-python-beginner-friendly/)\r
8. [Majority Element](https://leetcode.com/problems/majority-element/solutions/3676530/3-methods-beats-100-c-java-python-beginner-friendly/)\r
9. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/best-method-100-c-java-python-beginner-friendly/)\r
10. **Practice them in a row for better understanding and please Upvote for more questions.**\r
\r
\r
**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**\r
