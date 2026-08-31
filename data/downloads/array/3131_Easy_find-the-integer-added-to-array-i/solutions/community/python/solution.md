# 🔥💥⚡Easiest C++✅Python3✅Java✅C✅Python🐍✅☠💀 Beats 💯 Contest 28/04/2024🌛💥🔥

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5082065/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5082065/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-04-28 093735.png](./images/1.png)
![Screenshot 2024-04-28 093855.png](./images/2.png)
![Screenshot 2024-04-28 094122.png](./images/3.png)
```C++ []
class Solution {
public:
    int addedInteger(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        return nums2[0] - nums1[0];
    }
};
```
```python3 []
class Solution:
    def addedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        diff = [nums2[i] - nums1[i] for i in range(len(nums1))]
        x = sum(diff) // len(diff)
        return x
```
```Java []
class Solution {
    public int addedInteger(int[] nums1, int[] nums2) {
        int n = nums1.length;
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        return nums2[0] - nums1[0];
    }
}
```
```Python []
class Solution(object):
    def addedInteger(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: int
        """
        return (sum(nums2) - sum(nums1)) // len(nums1)
```
```C []
int addedInteger(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int mx1 = 0, mx2 = 0;
    for (int i = 0; i < nums1Size; i++)
        mx1 = fmax(mx1, nums1[i]);

    for (int i = 0; i < nums2Size; i++)
        mx2 = fmax(mx2, nums2[i]);
    return mx2 - mx1;
}
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
      O(1)
# Code
```
int addedInteger(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int mx1 = 0, mx2 = 0;
    for (int i = 0; i < nums1Size; i++)
        mx1 = fmax(mx1, nums1[i]);

    for (int i = 0; i < nums2Size; i++)
        mx2 = fmax(mx2, nums2[i]);
    return mx2 - mx1;
}
```
# Please Upvote if it's usefull
![th.jpeg](./images/4.jpeg)
