# ☠💀💯 Faster✅💯 Lesser🧠 🎯 C++✅Python3✅Java✅C✅Python✅C#✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 13
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5098845/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5098845/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-05-02 072514.png](./images/1.png)
![Screenshot 2024-05-02 072549.png](./images/2.png)
```C++ []
class Solution {
public:
    int findMaxK(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int low = 0, high = nums.size() - 1;

        while (low < high) {
            if ((nums[low] + nums[high]) == 0) {
                return nums[high];
            }
            else if ((nums[low] + nums[high]) < 0)
                low++;
            else
                high--;
        }
        return -1;
    }
};
```
```python3 []
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        sm = [0] * 1001
        maxi = -1
        for n in nums:
            idx = n if n > 0 else -n
            if sm[idx] != n:
                sm[idx] += n
            if sm[idx] == 0:
                maxi = maxi if maxi > idx else idx
        return maxi
```
```C# []
public class Solution {
    public int FindMaxK(int[] nums) {
        Array.Sort(nums);
        int j = nums.Length - 1, i = 0;
        while (i < j) {
            int a = -1 * nums[j];
            if (nums[i] == a)
                return nums[j];
            else if (nums[i] < a)
                i++;
            else
                j--;
        }
        return -1;
    }
}
```
```Java []
class Solution {
    public int findMaxK(int[] nums) {
        Arrays.sort(nums);
        int j = nums.length - 1, i = 0;
        while (i < j) {
            int a = -1 * nums[j];
            if (nums[i] == a)
                return nums[j];
            else if (nums[i] < a)
                i++;
            else
                j--;
        }
        return -1;
    }
}
```
```python []
class Solution(object):
    def findMaxK(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        k = -1
        nums_set = set(nums)
        for n in nums:
            if n > 0:
                if n > k and -n in nums_set:
                    k = n


        return k
```
```C []
int cmpfunc(const void* a, const void* b) { 
    return (*(int*)a - *(int*)b);
    }
int findMaxK(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmpfunc);
    int j = numsSize - 1, i = 0;
    while (i < j) {
        int a = -1 * nums[j];
        if (nums[i] == a)
            return nums[j];
        else if (nums[i] < a)
            i++;
        else
            j--;
    }
    return -1;
}
```

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
      O(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(1)
# Code
```
class Solution {
public:
    int findMaxK(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int low = 0, high = nums.size() - 1;

        while (low < high) {
            if ((nums[low] + nums[high]) == 0) {
                return nums[high];
            }
            else if ((nums[low] + nums[high]) < 0)
                low++;
            else
                high--;
        }
        return -1;
    }
};
```