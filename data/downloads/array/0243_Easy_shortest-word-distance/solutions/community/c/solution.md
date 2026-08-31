# C++ | EXPLAINED | 7 Lines | 8ms | 91%

**Author:** hg3994
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/1259110/](https://leetcode.com/problems/shortest-word-distance/solutions/1259110/)

---

```
// Use two pointers each for word1 and word2 & keep updating their location as we traverse.
// Keep finding the distance between them and check if this is the minimum distance?

class Solution {
public:
    
    int shortestDistance(vector<string>& words, string word1, string word2) {
        int w1=-1, w2=-1, n=words.size(), min_dist = INT_MAX;
        for(int i=0;i<n; i++){
            if(words[i] == word1) w1 = i;
            else if (words[i] == word2) w2 = i;
            if(w1!=-1 && w2!=-1) min_dist = min(min_dist, abs(w1-w2));
        }
        return min_dist;
    }
};
```