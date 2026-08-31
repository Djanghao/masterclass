# Easy C++ / Python3 / JavaScript / C# / Java / Python / C  -- beats 100%

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4931594/](https://leetcode.com/problems/minimum-number-game/solutions/4931594/)

---

# Intuition
![Screenshot 2024-03-27 101513.png](./images/0.png)
![Screenshot 2024-03-27 092743.png](./images/1.png)
```C++ []
class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
        vector<int> result;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); i = i + 2) {
            result.push_back(nums[i + 1]);
            result.push_back(nums[i]);
        }
        return result;
    }
};
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
    }
    return nums
};
```
```python3 []
class Solution:
    def numberGame(self, v: List[int]) -> List[int]:
        n = len(v)
        v.sort()
        for i in range(0, n, 2):
            if i + 1 < n:
                v[i], v[i + 1] = v[i + 1], v[i]
        return v
```
```C++ []
class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for (int i = 1; i < nums.size(); i = i + 2) {
            swap(nums[i], nums[i - 1]);
        }
        return nums;
    }
};
```
```java []
class Solution(object):
    def numberGame(self, v):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(v)
        v.sort()
        for i in range(0, n, 2):
            if i + 1 < n:
                v[i], v[i + 1] = v[i + 1], v[i]
        return v
```
```C# []
public class Solution {
    public int[] NumberGame(int[] nums) {
        Array.Sort(nums);
        for(int i = 0; i <= nums.Length - 2; i += 2){
            int temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1]= temp;
        }
        return nums;
    }
}
```
```Python []
class Solution(object):
    def numberGame(self, v):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(v)
        v.sort()
        for i in range(0, n, 2):
            if i + 1 < n:
                v[i], v[i + 1] = v[i + 1], v[i]
        return v
```
```C  []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int cmpfunc(const void* a, const void* b) { 
    return (*(int*)a - *(int*)b);
    }
int* numberGame(int* nums, int numsSize, int* returnSize) {
    qsort(nums, numsSize, sizeof(int), cmpfunc);
    for (int i = 0; i < numsSize; i += 2) {
        if (i + 1 < numsSize) {
            int tmp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = tmp;
        }
    }
    *returnSize = numsSize;
    return nums;
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n/2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)
# Code
```
class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for (int i = 1; i < nums.size(); i = i + 2) {
            swap(nums[i], nums[i - 1]);
        }
        return nums;
    }
};
```
# Please upvote if it's useful for u
![th.jpeg](./images/2.jpeg)
