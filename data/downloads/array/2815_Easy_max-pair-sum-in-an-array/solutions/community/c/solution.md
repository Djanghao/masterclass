# C++ Easy Solution to_string()

**Author:** jishu123
**Votes:** 4
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3901833/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3901833/)

---

Time Complexity can be better if pre map nums[i] with its string form in unordered_map
Since nums[i].size() <= 4 so for easy i did this 

UPVOTE if you find this a little useful

# Code
```
class Solution {
public:
    int maxSum(vector<int>& nums) {
        int res = 0;
        for(int i = 0; i<nums.size(); i++){
            string first = to_string(nums[i]);
            sort(begin(first),end(first));
            
            for(int j = i+1; j<nums.size(); j++){
                string sec = to_string(nums[j]);
                sort(begin(sec),end(sec));
                if(first[first.size()-1] == sec[sec.size()-1]){
                    res = max(res,nums[i]+nums[j]);
                }
            }
        }
        
        return res == 0 ? -1 : res;
    }
};
```