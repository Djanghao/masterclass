# C++: Simple, no arrays or loops

**Author:** andnik
**Votes:** 4
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/513150/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/513150/)

---

```
class Solution {
public:
    vector<int> numMovesStones(int a, int b, int c) {
	    // Sort so that a < b < c;
        if (c < b) swap(c, b);
        if (c < a) swap(c, a);
        if (b < a) swap(a, b);
		// Calculate distances a to b and b to c
        int d1 = b - a - 1, d2 = c - b - 1;
        return vector<int> {
            !d1 && !d2 ? 0
            : d1 <= 1 || d2 <= 1 ? 1 : 2
            , d1 + d2
        };
    }
};
```