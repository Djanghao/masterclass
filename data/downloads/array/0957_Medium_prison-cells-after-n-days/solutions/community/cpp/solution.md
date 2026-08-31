# [C++] Super Easy Solution Explained,100% Time, 50% Space

**Author:** Ajna
**Votes:** 121
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/717519/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/717519/)

---

Typical finite state machine, you will have to build an automata that changes states at each tick; given that we are basically only changing 6 bits (since after the first step the first and the last are always going to be `0`, this is why I only loop in the `1` - `6` range) and that initial state will always match the same following state, for bigger values of `n` you can expect cycles to be come over and over again (after all, your state can only have `64` (`2 ** 6`) different values.

Once a cycle is detected (ie: it matches the first value in my `seen` container - [here](https://leetcode.com/problems/prison-cells-after-n-days/discuss/717519/) some discussion about it, feel free to expand upon it!), I just return the pre-stored state in `seen` with index equal to `n % seen.size()`, with `seen.size()` telling me how big is my loop interval (for this specific exercise, the loop seems to always be 14 steps large, but forgive me for using a more general approach and discuss the logic altogether at the cost of computing an extra `%` operation for each execution).

The code:

```cpp
class Solution {
public:
    vector<int> prisonAfterNDays(vector<int>& res, int n) {
        vector<int> tmp(8);
        vector<vector<int>> seen;
        while (n--) {
            for (int i = 1; i < 7; i++) {
                tmp[i] = res[i - 1] == res[i + 1];
            }
            if (seen.size() && seen.front() == tmp) return seen[n % seen.size()]; 
            else seen.push_back(tmp);
            res = tmp;
        }
        return res;
    }
};
```