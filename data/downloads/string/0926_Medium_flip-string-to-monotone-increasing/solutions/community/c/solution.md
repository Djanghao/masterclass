# C++ Simple and Short O(n) Solution, With Explanation

**Author:** YehudisK
**Votes:** 122
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1394750/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1394750/)

---

**idea:**
This is simple dynamic programming.
We loop through the string.
If we got a 1, go on. No need to flip. We just increment the 1 counter.
If we got a 0, we increment the flips counter.
Now, we have two options. Either to flip the new zero to one or to flip all previous ones to zeros.
So we take the min between flips and counter.
```
class Solution {
public:
    int minFlipsMonoIncr(string s) {
        int flips = 0, counter = 0;
        for (auto c : s) {
            if (c == '1') counter++;
            else flips++;
            
            flips = min(flips, counter);
        }
        return flips;
    }
};
```
**Like it? please upvote!**