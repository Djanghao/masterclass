# C++ O(N) Concise, Try Not To Flip Challange!

**Author:** shtanriverdi
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/963325/](https://leetcode.com/problems/minimum-suffix-flips/solutions/963325/)

---

```
class Solution {
public:
    int minFlips(string target) {
        int count = 0, size = target.size();
        char prev = '0';
        for (int i = 0; i < size; i++) {
            if (target[i] != prev) {
                count++;
                prev = target[i];
            }
        }
        return count;
    }
};
```