# C++ Easy Short and Concise Solution || O(n^2) time || O(1) Space

**Author:** raghav_maskara
**Votes:** 44
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1907004/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1907004/)

---

**Approach-**
In 1st loop we iterate n-1 times as size of triangle decreases by 1 at every level.
In second loop we iterate the array and store the sum of nums[j] + nums[j+1] and store it in nums[j]
Here we modify the same array to store the sum so O(1) space is used.

```
class Solution {
public:
    int triangularSum(vector<int>& nums) {
        int n=nums.size();
        for(int i=n-1;i>=1;i--){
            for(int j=0;j<i;j++){
                nums[j]=(nums[j]+nums[j+1])%10;                
            }
        }
        return nums[0];
    }
};