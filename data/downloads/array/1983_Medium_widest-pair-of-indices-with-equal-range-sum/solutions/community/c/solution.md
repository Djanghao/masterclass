# C++ Simple Syntax Prefix Sum O(n) space and time

**Author:** mohdabidaliusa
**Votes:** 0
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/2171981/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/2171981/)

---

class Solution {
public:
    int widestPairOfIndices(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> mp;
        mp[0] = -1;
        
        int ans = 0;
        int diff = 0;
        
        for(int i=0; i<nums1.size(); i++){
            diff = diff + (nums1[i]-nums2[i]);
            if(mp.find(diff)!=mp.end()){
                ans = max(ans,i-mp[diff]);
            }
            else{
                mp[diff] = i;
            }
        }
        
        return ans;
    }
};