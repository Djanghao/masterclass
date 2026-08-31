# 🔥✅✔️Very Easiest C++✅ Python3 🐍✅ C ✅ Java ✅ C# ✅ W/Explanation 🔥☠️💀 Beats 💯

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4815911/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4815911/)

---

# Intuition
![Screenshot 2024-03-03 152549.png](./images/0.png)
```C++ []
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        vector<int> arr1, arr2;
        arr1.push_back(nums[0]);
        arr2.push_back(nums[1]);
        for (int i = 2; i < nums.size(); ++i) {
            if (arr1[arr1.size() - 1] > arr2[arr2.size() - 1])
                arr1.push_back(nums[i]);
            else
                arr2.push_back(nums[i]);
        }
        vector<int> result;
        for (auto& x : arr1)
            result.push_back(x);
        for (auto& y : arr2)
            result.push_back(y);
        arr1.clear();
        arr2.clear();
        return result;
    }
};
```
```python3 []
class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        list1 = []
        list2 = []
        list1.append(nums[0])
        list2.append(nums[1])
        for i in range(2, len(nums)):
            if list1[-1] > list2[-1]:
                list1.append(nums[i])
            else:
                list2.append(nums[i])
        result = []
        result.extend(list1)
        result.extend(list2)
        del list1
        del list2
        return result
```
```java []
class Solution {
    public int[] resultArray(int[] nums) {
        int len = nums.length;
        int a1[] = new int[len];
        int a2[] = new int[len];
        int ind1 = 1, ind2 = 1;
        a1[0] = nums[0];
        a2[0] = nums[1];
        for (int i = 2; i < len; i++) {
            if (a1[ind1 - 1] > a2[ind2 - 1])
                a1[ind1++] = nums[i];
            else
                a2[ind2++] = nums[i];
        }

        for (int i = 0; i < ind1; i++)
            if (a1[i] != 0)
                nums[i] = a1[i];

        for (int i = ind1, j = 0; j < ind2; j++, i++)
            if (a2[j] != 0)
                nums[i] = a2[j];

        return nums;
    }
}
```
```C []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* resultArray(int* nums, int numsSize, int* returnSize) {
    int* arr1 = malloc(sizeof(int) * numsSize);
    int* arr2 = malloc(sizeof(int) * numsSize);
    int x = 0, y = 0, z = 0;
    arr1[x++] = nums[0], arr2[y++] = nums[1];
    for (int i = 2; i < numsSize; ++i) {
        if (arr1[x - 1] > arr2[y - 1])
            arr1[x++] = nums[i];
        else
            arr2[y++] = nums[i];
    }
    for (int i = 0; i < y; i++)
        arr1[x++] = arr2[i];
    free(arr2);
    *returnSize = numsSize;
    return arr1;
}
```
```Python []
class Solution(object):
    def resultArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        list1 = []
        list2 = []
        list1.append(nums[0])
        list2.append(nums[1])
        for i in range(2, len(nums)):
            if list1[-1] > list2[-1]:
                list1.append(nums[i])
            else:
                list2.append(nums[i])
        result = []
        result.extend(list1)
        result.extend(list2)
        del list1
        del list2
        return result
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)
# Code
```
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        vector<int> arr1 , arr2;
        arr1.push_back(nums[0]);
        arr2.push_back(nums[1]);
        for(int i = 2;i < nums.size(); ++i){
            if(arr1[arr1.size()-1] > arr2[arr2.size()-1])
                arr1.push_back(nums[i]);
            else
                arr2.push_back(nums[i]);
        }
        vector<int> result;
        for(auto& x : arr1)
            result.push_back(x);
        for(auto& y : arr2)
            result.push_back(y);
        arr1.clear();
        arr2.clear();
        return result;
    }
};
```