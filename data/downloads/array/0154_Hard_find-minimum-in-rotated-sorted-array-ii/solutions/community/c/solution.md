# 100% FASTER SOLUTION || C++ || BINARY SEARCH

**Author:** Ankushkumar11903
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/2045959/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/2045959/)

---

**AN UPVOTE WOULD BE HIGHLY APPERICIATED**
```
class Solution {
public:
    int findMin(vector<int>& nums) {
        int n=nums.size();
        int i=0;
        int j=n-1;
        while(i<j){
            int mid=(i+j)/2;
            if(nums[mid]>nums[j]){
                i=mid+1;
            }else j--;
        }return nums[i];
    }
};
```