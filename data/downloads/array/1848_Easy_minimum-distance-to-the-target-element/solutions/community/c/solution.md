# c++ || java || self explanatory

**Author:** rajat_gupta_
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1186825/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1186825/)

---

# c++
```
class Solution {
public:
    int getMinDistance(vector<int>& nums, int target, int start) {
        int ans=INT_MAX;
        for(int i=0;i<nums.size();i++){
            if(nums[i]==target){
                ans=min(ans,abs(i-start));
            }
        }
        return ans;
    }
};
```
# java
```
class Solution {
    public int getMinDistance(int[] nums, int target, int start) {
        int ans = Integer.MAX_VALUE;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                ans = Math.min(ans, Math.abs(i - start));
            }
        }
        return ans;
    }
}
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
