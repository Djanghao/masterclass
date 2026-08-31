# O(n^2) --> O(n*logn) || C++

**Author:** fahad_Mubeen
**Votes:** 57
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082036/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082036/)

---


# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool check(vector<int>& nums1, vector<int>& nums2, int k){
        int count = 0, j = 0;
        for(int i = 0; i < nums1.size() && j < nums2.size(); i++){
            if(nums1[i] + k != nums2[j]) count++;
            else j++;
        }
        if(count > 2) return 0;
        return 1;
    }
    int minimumAddedInteger(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        int minEle = INT_MAX;  
        for(int i = 0; i < nums1.size(); i++){
            int x = nums2[0] - nums1[i];
            if(check(nums1, nums2, x)){
                minEle = min(minEle, x);
            }
        }
        return minEle;
    }
};
```

# Follow Up
- Credits to $$@anishsingh0904$$
- The code can be optimized further from $$O(n^2)$$ to $$O(nlogn)$$ by making a small change in the for loop.
 ```
for(int i = 0; i < 3; i++){
    int x = nums2[0] - nums1[i];
    if(check(nums1, nums2, x)){
        minEle = min(minEle, x);
    }    
}
```
- We only have the possibility of choosing nums1[0], [1], or [2] because we can exclude any two of them.
- Why can't we exclude more? Because if we were to choose nums1[3] or elements greater, then the **condition of obtaining identical vectors will be satisfied** but since `nums1[i + 1] > nums[i]` hence **the answer wouldn't be the *minimum* possible number as required in the problem.**
- Hence we wouldn't be able to satisfy the mathematical requirements of nums2.