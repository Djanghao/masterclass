# ✅C++ ✅Easy String Conversion

**Author:** Bhushan_Mahajan
**Votes:** 31
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3141479/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3141479/)

---



# Code
```
class Solution {
public:
    vector<int> separateDigits(vector<int>& nums) {
        vector<int> ans ;
        
        for( auto &it : nums ){
            
            string tmp = to_string(it);
            
            for( auto &s : tmp ) ans.push_back(s-'0');
            
        }
        
        return ans ;
    }
};
```
# Please Upvote If U like the Solution :D