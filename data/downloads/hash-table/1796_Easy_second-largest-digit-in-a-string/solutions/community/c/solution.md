# [C++] 0ms Linear Time, Constant Space (no Sets) Solution

**Author:** Ajna
**Votes:** 21
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1118925/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1118925/)

---

Nice problem; we might be tempted to use a set, but that would be rather wasteful, since we only need to store at best 2 values.

And so we will do the things the *hard* way.

To do so, we will declare `res`, an array of 2 elements, both initially set to be `-1`.

Then, time to parse each character `c` of `s` and:
* check if it is a numerical character, in which case:
	* normalise its value to be in the `0 - 9` range, the one we will be working on;
	* update `res`:
		* if `c > ress[0]`, we will shift the current value of `res[0]` to `res[1]` and update the first with `c`;
		* the second part is trickier: we need to check if `c > res[1]`, but only if `c != res[0]`, since we do not consider duplicated digits, and, if so, update that too.

Once done, we can retun `res[i]` and be done :)

The code:

```cpp
class Solution {
public:
    int secondHighest(string s) {
        // support variables
        int res[2] = {-1, -1};
        // parsing s
        for (char c: s) {
            // considering only numerical characters
            if (c >= '0' && c <= '9') {
                // normalising c
                c -= '0';
                // updating res
                if (c > res[0]) {
                    res[1] = res[0];
                    res[0] = c;
                } else if (c != res[0] && c > res[1]) res[1] = c;
            }
        }
        return res[1];
    }
};
```