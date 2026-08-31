# Easy Solution C++ | 2 Cases to Deal

**Author:** peeyushbh1998
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/671969/](https://leetcode.com/problems/maximum-equal-frequency/solutions/671969/)

---

Only 2 cases to deal. 1st->  when all elements have same frequency upto i , then we can add one element in it and we get the result if there is extra element present in array,  2nd->  if all have same frequency except one then we need to update the answer ..That's it
```
class Solution {
public:
    int maxEqualFreq(vector<int>& nums) {
        unordered_map<int,int> mp,mp1;
        int ans=0;
        for(int i=0;i<nums.size();i++){
            mp[nums[i]]++;
            mp1[mp[nums[i]]]++;
            if(i<nums.size()-1 && ((mp1[mp[nums[i]]]*mp[nums[i]])==(i+1))){
                ans=max(ans,i+2);
            }
            else if((mp1[mp[nums[i]]]*mp[nums[i]])==(i)){
                cout<<i<<" ";
                ans=max(ans,i+1);
            }
        }
        return ans;
    }
};
```