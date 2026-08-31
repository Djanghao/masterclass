# C++ Easy O(N^2) solution using LIS twice

**Author:** jlmurry
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/951981/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/951981/)

---

The basic idea of this problem is that the minimum number of removals to make a mountain array is equal to nums-(longest mountain subsequence). We can calculate the longest mountain subsequence by first calculating the LIS from the left and the right and storing the answers in dpleft and dpright. Then consider each 0<i<n to be the middle of a mountain subsequence only if dpleft[i]>1 and dpright[i]>1 the length of this mountain subsequence is dpleft[i]+dright[i]-1 (we subtract 1 to not double count the middle element)

```
int minimumMountainRemovals(vector<int>& nums) {
    vector<int> dpleft(nums.size(), 1);
    vector<int> dpright(nums.size(), 1);
    for(int i=1; i<nums.size(); i++) {
        for(int j=0; j<i; j++) {
            if(nums[i]>nums[j]) {
                dpleft[i] = max(dpleft[i], dpleft[j]+1);
            }
        }
    }
    //coming from right
    for(int i=nums.size()-2; i>=0; i--) {
        for(int j=nums.size()-1; j>i; j--) {
            if(nums[i]>nums[j]) {
                dpright[i] = max(dpright[i], dpright[j]+1);
            }
        }
    }
    //calculate the longest
    int longest = 0;
    //conside i the middle
    for(int i=1; i<nums.size()-1; i++) {
        if(dpleft[i]>1 && dpright[i]>1) {
            int ans = dpleft[i]+dpright[i]-1;
            longest = max(longest, ans);
        }
    }
    return nums.size()-longest;
}
```