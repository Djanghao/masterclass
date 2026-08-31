# C++: binary search, faster than 100%

**Author:** jbxmdx
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/559799/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/559799/)

---

First find the starting index, then check if (starting index+N/2)==target
```
class Solution {
public:
    bool isMajorityElement(vector<int>& nums, int target) {
        int N=nums.size();
        int left=0,right=N,mid;
        while(left<right){
            mid=left+(right-left)/2;
            if(nums[mid]>=target){
                right=mid;
            }else{
                left=mid+1;
            }
        }
        if(left<N/2&&nums[left+N/2]==target){
            return true;
        }else{
            return false;
        }
    }
};
```