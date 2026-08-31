# Beginner Friendly - C++ Solution

**Author:** shreshthg30
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2158765/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2158765/)

---

```
class Solution {
public:
    int maxConsecutive(int bottom, int top, vector<int>& special) {
        
        sort(special.begin(), special.end());
        
        int ans = max((special[0]-bottom), (top-special[special.size()-1]));  // Maximum of non special floors before 1st special floor and last special floor

        int count  = 0;
        
        for(int i=0;i<special.size()-1;i++)                                 //  Counting the number of floors between two consecutive special floors
        {
            count = special[i+1]-special[i]-1;
            ans=max(count,ans);
        }
        
        return ans;
    } 
};
```