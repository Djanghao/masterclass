# 🏆🔥✅2 different approaches🏆🔥✅

**Author:** Manohar_001
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4408774/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4408774/)

---

# \uD83D\uDE09Don't just watch & move away, also give an Upvote.\uD83D\uDE09

# Code(SET)
```
class Solution {
public:
    vector<int> findIntersectionValues(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> s1(begin(nums1), end(nums1));
        unordered_set<int> s2(begin(nums2), end(nums2));

        int a=0,b=0;
        for(auto i:nums1)
        {
            if(s2.find(i) != s2.end())
                a++;
        }

        for(auto i:nums2)
        {
            if(s1.find(i) != s1.end())
                b++;
        }

<!-- \u2705Well before returning answer don't forget to UPVOTE.\u2705 -->
        return {a,b};
    }
};
```

# Code(Hash-Map)
```
class Solution {
public:
    vector<int> findIntersectionValues(vector<int>& nums1, vector<int>& nums2) {
        vector<int> hash1(102,0);
        vector<int> hash2(102,0);

        for(int i=0; i<size(nums1); i++)
        {
            hash1[nums1[i]]++;
        }

        for(int i=0; i<size(nums2); i++)
        {
            hash2[nums2[i]]++;
        }

        int a=0,b=0;
        for(int i=0; i<102; i++)
        {
            if(hash1[i]>0 && hash2[i]>0)
            {
                a+=hash1[i];
                b+=hash2[i];
            }
        }

<!-- \u2705Well before returning answer don't forget to UPVOTE.\u2705 -->
        return {a,b};
    }
};
```
![Leetcode Upvote_2.jpeg](./images/0.jpeg)
