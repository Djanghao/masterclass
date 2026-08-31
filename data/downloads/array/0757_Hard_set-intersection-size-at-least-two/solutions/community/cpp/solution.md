# C++ Sorting Solution

**Author:** arya_012
**Votes:** 3
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/3688425/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/3688425/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:

    static bool compare(vector<int>&a, vector<int>&b){
        if(a[1]==b[1])return a[0]<b[0];
        else return a[1]<b[1];
    }

    int intersectionSizeTwo(vector<vector<int>>& inter) {
        int n = inter.size();

        sort(inter.begin(), inter.end(), compare);
        vector<int>res;

        res.push_back(inter[0][1]-1);
        res.push_back(inter[0][1]);

        for(int i=1;i<n;i++){
            int strt = inter[i][0];
            int end = inter[i][1];

            if(strt>res.back()){
                res.push_back(end-1);
                res.push_back(end);
            }else if(strt == res.back()){
                res.push_back(end);
            }else if(strt > res[res.size()-2]){
                res.push_back(end);
            }
        }
        return res.size();
    }
};
```