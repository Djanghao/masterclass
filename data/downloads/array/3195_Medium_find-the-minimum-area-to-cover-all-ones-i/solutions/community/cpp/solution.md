# Easy Video Solution 🔥 || How to 🤔 in Interview || Math 🔥

**Author:** ayushnemmaniwar12
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355210/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355210/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can choose max and min value



# ***Easy Video Explanation***

https://youtu.be/UHPPseqZW2I




# Code
```
class Solution {
public:
    int minimumArea(vector<vector<int>>& v) {
        int n=v.size();
        int m=v[0].size();
        int r1=INT_MAX,c1=INT_MAX,r2=INT_MIN,c2=INT_MIN;
        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++) {
                if(v[i][j]==1) {
                    r1=min(r1,i);
                    r2=max(r2,i);
                    c1=min(c1,j);
                    c2=max(c2,j);
                }
            }
        }
        int r=r2-r1+1;
        int c=c2-c1+1;
        return r*c;
    }
};
```