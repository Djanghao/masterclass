# Easy Solution C++ 🔥 Explained 🔥 Using Sets

**Author:** ribhav_32
**Votes:** 283
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3480249/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3480249/)

---

# **PLEASE UPVOTE \uD83D\uDC4D**
# Intuition
- ##### To solve this problem, we can create two sets: set1 and set2. We can then iterate through nums1 and add each integer to set1. Similarly, we can iterate through nums2 and add each integer to set2.

- ##### Next, we can take the set difference between set1 and set2 to obtain the distinct integers in nums1 that are not present in nums2. Similarly, we can take the set difference between set2 and set1 to obtain the distinct integers in nums2 that are not present in nums1.

- ##### Finally, we can return the results in the form of a Vector of size 2, where the first element is the vector of distinct integers in nums1 that are not present in nums2, and the second element is the vector of distinct integers in nums2 that are not present in nums1.
<!-- Describe your first thoughts on how to solve this problem. -->

# Complexity
- ### Time complexity: O(M+N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- ### Space complexity: O(M+N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# **PLEASE UPVOTE \uD83D\uDC4D**
# Code
```
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1(nums1.begin(), nums1.end());
        unordered_set<int> set2(nums2.begin(), nums2.end());
        
        vector<int> distinct_nums1, distinct_nums2;
        for (int num : set1) {
            if (set2.count(num) == 0) {
                distinct_nums1.push_back(num);
            }
        }

        for (int num : set2) {
            if (set1.count(num) == 0) {
                distinct_nums2.push_back(num);
            }
        }

        return {distinct_nums1, distinct_nums2};
    }
};

```
![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)
