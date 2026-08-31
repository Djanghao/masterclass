# C++||Two Pointers||Easy to Understand

**Author:** return_7
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/2531661/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/2531661/)

---

```
class Solution {
public:
    int countTriplet(vector<int> &nums1,vector<int> &nums2)
    {
        int ans=0,left,right;
        unordered_map<int,int> freq;
        for(auto &n:nums2)
        {
            freq[n]++;
        }
        for(int i=0;i<nums1.size();i++)
        {
            long long t=(long long)nums1[i]*nums1[i];
            left=0;
            right=nums2.size()-1;
            while(left<right)
            {
                long long temp=(long long)nums2[left]*nums2[right];
                if(t==temp)
                {
                    if(nums2[left]==nums2[right])
                    {
                        ans+=(freq[nums2[left]]*(freq[nums2[left]]-1))/2;
                            break;
                    }
                    ans+=freq[nums2[left]]*freq[nums2[right]];
                    left+=freq[nums2[left]];
                    right-=freq[nums2[right]];
                }
                else if(t>temp)
                {
                    left+=freq[nums2[left]];
                }
                else
                {
                    right-=freq[nums2[right]];
                }
            }
        }
        return ans;
    }
    int numTriplets(vector<int>& nums1, vector<int>& nums2)
    {
        sort(nums1.begin(),nums1.end());
        sort(nums2.begin(),nums2.end());
        return countTriplet(nums1,nums2)+countTriplet(nums2,nums1);
        
    }
};
//if you like the solution plz upvote.