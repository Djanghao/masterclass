# Javascript Two Pointers

**Author:** awryong
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/738241/](https://leetcode.com/problems/minimum-window-subsequence/solutions/738241/)

---

Ref:
https://www.youtube.com/watch?v=W2DvQcDPD9A
https://www.youtube.com/watch?v=eS6PZLjoaq8

```
var minWindow = function(S, T) {
  let i=0;
  let j=0;
  let last = 0;
  let min = S.length + 1;
  let ret = '';
  while(i<S.length) {
    if(S[i] === T[j]) {
      j++;
      if(j === T.length) {
        last = i;
        j--;
        while(j>=0) {
          // backward
          if(T[j] === S[i]) j--;
          i--;
        }
        i++;
        j=0;
        
        if(last - i + 1 < min) {
          min = last - i;
          ret = S.substring(i, last+1) ;
        }
      }
    }
    i++;
  }
  return ret;
};
```