# Beginner Friendly | 100% Faster

**Author:** gameboey
**Votes:** 93
**Link:** [https://leetcode.com/problems/sort-colors/solutions/5298663/](https://leetcode.com/problems/sort-colors/solutions/5298663/)

---

# Intuition
We count zeros and ones in the array and overwrite the original array with 0s and then with 1s and the remaining is overwritten as 2s.

# Approach
1. Count the occurrences of `0s` and `1s`, denoted as `zeros` and `ones`.
2. Iterate from the 0th index up to `zeros`, setting each element to `0`.
3. Iterate from the `zeros` index up to `zeros + ones`, assigning each element to `1`.
4. The remaining elements, starting from `zeros + ones` index, are necessarily `2s`, so iterate from this index up to the end of the array, setting each element to `2`.


# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```C++ []
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int zeros = 0, ones = 0, n = nums.size();
        for(int num : nums) {
            if(num == 0) zeros++;
            else if(num == 1) ones++;
        }  

        for(int i = 0; i < zeros; ++i) {
            nums[i] = 0;
        }

        for(int i = zeros; i < zeros + ones; ++i) {
            nums[i] = 1;
        }

        for(int i = zeros + ones; i < n; ++i) {
            nums[i] = 2;
        }
    }
};
```
```java []
class Solution {
    public void sortColors(int[] nums) {
        int zeros = 0, ones = 0, n = nums.length;
        for(int num : nums) {
            if(num == 0) zeros++;
            else if(num == 1) ones++;
        }  

        for(int i = 0; i < zeros; ++i) {
            nums[i] = 0;
        }

        for(int i = zeros; i < zeros + ones; ++i) {
            nums[i] = 1;
        }

        for(int i = zeros + ones; i < n; ++i) {
            nums[i] = 2;
        }
    }
}
```
```python []
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zeros, ones, n = 0, 0, len(nums)
        for num in nums:
            if num == 0:
                zeros += 1
            elif num == 1:
                ones += 1

        for i in range(0, zeros):
            nums[i] = 0

        for i in range(zeros, zeros + ones):
            nums[i] = 1

        for i in range(zeros + ones, n):
            nums[i] = 2
```
```Go []
func sortColors(nums []int)  {
    zeros, ones := 0, 0
    n := len(nums)
    for _, num := range nums {
        if num == 0 {
            zeros++
        } else if num == 1 {
            ones++
        }
    }

    for i := 0; i < zeros; i++ {
        nums[i] = 0
    }

    for i := zeros; i < zeros+ones; i++ {
        nums[i] = 1
    }

    for i := zeros + ones; i < n; i++ {
        nums[i] = 2
    }
}
```
---
**Sasuke**: "Hey Naruto, I bet I can sort this array faster than you."

**Naruto**: "Sure, but can you handle the power of my 'Shadow Clone Sorting Jutsu'? Believe it!"

![naruto x sasuke.png](./images/0.png)
