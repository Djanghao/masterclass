# C++ {Speed,Mem} = {O(J+S), O(1)} simple + Video

**Author:** crab_10legs
**Votes:** 23
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/711118/](https://leetcode.com/problems/jewels-and-stones/solutions/711118/)

---

https://www.youtube.com/watch?v=Se3kXWEtxrw&feature=youtu.be
```
class Solution {
public:
    
    // ascii from A to z
    bool list[58];
    
    int numJewelsInStones(string J, string S) {
        int cnt=0;
                
        for(int i=0; i < J.size(); i++)
            list[J[i]-65]=true;
        
        for(int i=0; i < S.size(); i++)
            if(list[S[i]-65])
                cnt++;
        
        return cnt;
    }
};
```