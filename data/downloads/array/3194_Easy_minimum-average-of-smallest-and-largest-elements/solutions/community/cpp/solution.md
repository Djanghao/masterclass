# Easy Video Solution 🔥 || How to 🤔 in Interview  || Sorting ✅ || 2 Pointers 🔥

**Author:** ayushnemmaniwar12
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355234/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355234/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe



# ***Easy Video Explanation***

https://youtu.be/EZTuSum-Mnw


# Code
```
class Solution {
public:
    double minimumAverage(vector<int>& v) {
        int n=v.size();
        sort(v.begin(),v.end());
        int i=0,j=n-1;
        double ans=1000;
        while(i<j) {
            double k = (v[i]+v[j])/(2*1.0);
            ans=min(ans,k);
            i++;
            j--;
        }
        return ans;
    }
};
```