# Easy C++  O(N)  Solution ||  No fancy

**Author:** saiteja_balla0413
**Votes:** 227
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/1330221/](https://leetcode.com/problems/concatenation-of-array/solutions/1330221/)

---

```
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n=nums.size();
        for(int i=0;i<n;i++)
        {
            nums.push_back(nums[i]);
        }
        return nums;
    }
};
```
**Upvote if this helps you :)**