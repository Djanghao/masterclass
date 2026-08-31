# C++ || basic  || set and find

**Author:** priyamesh28
**Votes:** 46
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/1265039/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/1265039/)

---

```
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
      // put the values in set to remove duplicate
        set<int>s1,s2;
        vector<int>out;
        for(auto val:nums1)
            s1.insert(val);
        for(auto val:nums2)
            s2.insert(val);
        
        //find if we can get the value from first set in second set
        for(auto val:s1)
        {
           if(s2.find(val)!=s2.end()) //if found push it into output vector
               out.push_back(val);
        }
        return out;
    }
};

# If you find any issue in understanding the solutions then comment below, will try to help you.
If you found my solution useful.
So please do upvote and encourage me to document all leetcode problems\uD83D\uDE03
Happy Coding :)
```