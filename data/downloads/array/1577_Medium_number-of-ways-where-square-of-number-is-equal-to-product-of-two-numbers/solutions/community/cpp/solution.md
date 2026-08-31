# C++  Brute force | Using Hash_map

**Author:** HustlerNitin
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1660254/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1660254/)

---

```
#define ll long long int
class Solution {
public:
    
    int find(vector<int>nums1,vector<int>nums2)
    {
        unordered_map<ll,ll>mp;
        // O(n^2)
        for(int i=0;i<nums2.size();i++)
        {
            for(int j=i+1;j<nums2.size();j++)
            {
                ll p=(long long)nums2[i]*nums2[j];
                mp[p]++;
            }
        }
        
        ll count=0;
        // square of a number
        for(int i=0;i<nums1.size();i++)
        {
            ll p=(long long)nums1[i]*nums1[i]; // square of num1
            if(mp.find(p)!=mp.end())
            {
                count+=mp[p];
            }
        }
        return count;
    }
    
    int numTriplets(vector<int>& nums1, vector<int>& nums2) 
    {
        return find(nums1,nums2)+find(nums2,nums1);
    }
};
```
**please hit upvote if you like it : )**