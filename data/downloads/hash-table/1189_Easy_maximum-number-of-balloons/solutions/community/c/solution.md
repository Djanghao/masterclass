# C++ 3 line solution, using unordered_map. 4ms 9mb

**Author:** scaa
**Votes:** 64
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/395059/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/395059/)

---

```
class Solution {
public:
    int maxNumberOfBalloons(string text) {
        unordered_map<char, int> mm;
        for (char i : text) mm[i] += 1;
        return min(mm['b'], min(mm['a'], min(mm['l']/2, min(mm['o']/2, mm['n']))));
    }
};
```

---
# **Suggestions listed below**
---

Suggestion made by [muhammetzahitaydin](https://leetcode.com/muhammetzahitaydin/): you can use one min for return:
```
return min ( { mm['b'] , mm['a'] , mm['l']/2 , mm['o']/2 ,mm['n'] } ) ;
```

Suggestion made by [Body_sweep69](https://leetcode.com/body_sweep69/) to use array of size 256 instead of unordered map to reduce memory usage. [BSalwiczek](https://leetcode.com/bsalwiczek/) suggested using array of size 5 since we only care about 5 chars (b, a, l, o, n).

---

*suggestions added on June 29th 2020