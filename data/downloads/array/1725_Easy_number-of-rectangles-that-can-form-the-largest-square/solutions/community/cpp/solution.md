# ✅C++ solution with sorting!

**Author:** dhruba-datta
**Votes:** 25
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1532737/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1532737/)

---

> **If you\u2019re interested in coding you can join my Discord Server, link in the comment section. Also if you find any mistakes please let me know. Thank you!\u2764\uFE0F**
> 

---
## Code:

```
class Solution {
public:
    int countGoodRectangles(vector<vector<int>>& rectangles) {
        int count=0;
        vector<int>a;
        for(int i=0; i<rectangles.size();i++)
        {
            int m=rectangles[i][0], n=rectangles[i][1];
            int y=min(m,n);
            a.push_back(y);
        }
        sort(a.begin(),a.end());
        int n=a.size();
        int x=a[n-1];
        for(int i=0;i<n;i++)
        {
            if(a[i]==x)
                count++;
        }
        return count;
    }
};
```
---
***Please upvote if it was helpful for you, thank you!***