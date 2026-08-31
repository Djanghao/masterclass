# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4985444/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4985444/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```

class Solution {
public:
    int lenOfLongDecSubArr(vector<int>&a)
    {
        int mx = 1, cur = 1, n = a.size();
        for(int i=1;i<n;i++)
        {
            if(a[i]<a[i-1]) cur++;
            else 
            {
                mx = max(mx, cur);
                cur = 1;
            }
        }
        return max(cur, mx);
    }
    int lenOfLongIncSubArr(vector<int>&a)
    {
        int mx = 1, cur = 1, n = a.size();
        for(int i=1;i<n;i++)
        {
            if(a[i]>a[i-1]) cur++;
            else 
            {
                mx = max(mx, cur);
                cur = 1;
            }
        }
        return max(cur, mx);
    }
    int longestMonotonicSubarray(vector<int>& nums) 
    {
        return max(lenOfLongIncSubArr(nums), lenOfLongDecSubArr(nums));
    }
};


```