# ✅Easy solution || ✅Short & Simple || ✅Best Method || ✅Easy-To-Understand

**Author:** sanjaydwk8
**Votes:** 5
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948819/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948819/)

---


# Code
```
class Solution {
public:
    int closetTarget(vector<string>& words, string target, int startIndex) {
        int f=-1;
        vector<int> v;
        for(int i=0;i<words.size();i++)
        {
            if(words[i]==target)
            {
                f=1;
                v.push_back(i);
            }
        }
        if(f==-1)
            return -1;
        int ans=INT_MAX;
        int n=words.size();
        for(int i=0;i<v.size();i++)
        {
            int k=abs(v[i]-startIndex);
            ans=min({ans, k, n-k});
            
        }
        return ans;
    }
};
```
Please **UPVOTE** if it helps \u2764\uFE0F\uD83D\uDE0A
Thank You and Happy To Help You!!