# Simple logic explained || Easy to understand || C++ || O(n^2)

**Author:** siddhantsoam
**Votes:** 63
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600589/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600589/)

---

We want to reach from j -> i
path 1 : j->i , streets = (i-j)
path 2 : j->x->y->i , streets = abs(j-x) + 1 + abs(i-y)
take the path which has less streets

# Code
```
class Solution {
public:
    vector<int> countOfPairs(int n, int x, int y) {
        // to make sure that x<=y in every case
        if(x>y)
            return countOfPairs(n, y, x);
        
        vector<int> res(n, 0);
        
        for(int i=1;i<=n;i++){
            for(int j=1;j<i;j++){
                int idx = i-j;          
                idx = min(idx, abs(j-x) + 1 + abs(i-y));
                if(idx>=1)
                    res[idx-1]+=2;  // add 2 as we can go from j->i and i->j
            }
        }
        return res;
        
    }
};
```