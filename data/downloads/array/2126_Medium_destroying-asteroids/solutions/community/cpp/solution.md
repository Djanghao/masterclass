# C++ EASIEST SOLUTION

**Author:** rachit759
**Votes:** 7
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/1691774/](https://leetcode.com/problems/destroying-asteroids/solutions/1691774/)

---

```
class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& ass) {
        long long m = mass;
        sort(ass.begin(),ass.end());
        for(auto i: ass)
        {
            if(i<=m)
                m += i;
            else
                return false; 
        }
        return true;
    }
};
```