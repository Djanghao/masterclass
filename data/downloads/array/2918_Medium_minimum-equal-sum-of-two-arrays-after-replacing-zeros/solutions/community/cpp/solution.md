# C++ || Greedy

**Author:** abhay5349singh
**Votes:** 34
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4220739/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4220739/)

---

```
class Solution {
public:
    
    #define ll long long
    
    long long minSum(vector<int>& nums1, vector<int>& nums2) {
        ll int s1=0, s2=0;
        int c1=0, c2=0;
        
        for(int val:nums1){
            s1 += val;
            c1 += (val==0);
        }
        for(int val:nums2){
            s2 += val;
            c2 += (val==0);
        }
        
        if(c1==0 && s1<s2+c2) return -1;
        if(c2==0 && s2<s1+c1) return -1;
        
        return max(s1+c1,s2+c2);
    }
};
```