# [C++] O(N) solution, thinking reverse

**Author:** sanjana-302
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/1352397/](https://leetcode.com/problems/find-the-celebrity/solutions/1352397/)

---

```
/* The knows API is defined for you.
      bool knows(int a, int b); */

class Solution {
public:
    int findCelebrity(int n) {
        int possibleCandidate = 0;
        for(int i=1;i<n;i++){
            if(knows(possibleCandidate,i)){
                possibleCandidate = i;
            }
        }
        for(int i=0;i<n;i++){
            if(i==possibleCandidate) continue;
            if(!knows(i,possibleCandidate) || knows(possibleCandidate,i)){
                return -1;
            }
        }
        return possibleCandidate;
    }
};
```