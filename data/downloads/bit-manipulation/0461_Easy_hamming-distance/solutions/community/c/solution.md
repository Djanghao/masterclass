# C++ Two Simple and Clean Solutions, Explained, 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 49
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/1585400/](https://leetcode.com/problems/hamming-distance/solutions/1585400/)

---

**Solution I:**
We use XOR bitwise operatoin to get all the bits that are set either in `x` or in `y`, not both.
Then we count the number of such bits and we're done!
```
class Solution {
public:
    int hammingDistance(int x, int y) {
        int res = 0;
        int num = x^y;
        while (num) {
            res += num % 2;
            num >>= 1;
        }
        return res;
    }
};
```
****
**Solution II - Without XOR:**
We iterate `x` and `y` in parallel.
If `(x % 2 != y % 2)` - only one of the rightmost bits are set - we add one to `res`.
```
class Solution {
public:
    int hammingDistance(int x, int y) {
        int res = 0;
        while (x || y) {
            res += (x % 2 != y % 2);
            x >>= 1, y >>= 1;
        }
        return res;
    }
};
```
**Like it? please upvote!**