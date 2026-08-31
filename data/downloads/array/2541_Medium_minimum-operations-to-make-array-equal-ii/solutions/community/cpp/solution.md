# ✅C++ | ✅Plus-Minus count |✅Intuitive & efficient Approach |

**Author:** Yash2arma
**Votes:** 48
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082031/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082031/)

---

# Intuition
For making nums1 as nums2, we are adding k at any index and substracting k from another index and continue this process until they both are equal (According to the question).

When the element of nums1 is greater than nums2 we need to decrese it and if it is lesser we need to increase it by using k.

So to keep track of it, I used p_diff and n_diff and at last there difference must be 0 which insures it can be possible to make nums1 as nums2 by using p_diff/k or n_diff/k steps.

# Code
```
class Solution 
{
public:
    long long minOperations(vector<int>& nums1, vector<int>& nums2, int k) 
    {
        if(k==0) //if k is 0 then we can do nothing
        {
            //if nums1 and nums2 are equal operations will be 0 
            //otherwise it is impossible to make them equal
            if(nums1==nums2) return 0; 
            return -1;
        }
        
        //p_diff stores positive difference between nums1[i] and nums2[i] 
        //n_diff stores negative difference between nums1[i] and nums2[i] 
        long long p_diff=0, n_diff=0; 
        
        for(int i=0; i<nums1.size(); i++)
        {
            if(nums1[i] >= nums2[i])
            {
                //we need to check whether we can make them equal by using k
                if((nums1[i]-nums2[i])%k==0) 
                    p_diff += nums1[i]-nums2[i];
                else
                    return -1;
            } 
            else 
            {
                //we need to check whether we can make them equal by using k
                if((nums2[i]-nums1[i])%k==0)
                    n_diff += nums2[i]-nums1[i];
                else
                    return -1;
            }
        }
        
        long long ans=-1;
        //if both difference(p_diff,n_diff) are equal, we can make nums1 equals to nums2
        if(p_diff-n_diff==0) ans = (p_diff/k);
        return ans;
        
    }
};
```

# Please upvote if it helps...

