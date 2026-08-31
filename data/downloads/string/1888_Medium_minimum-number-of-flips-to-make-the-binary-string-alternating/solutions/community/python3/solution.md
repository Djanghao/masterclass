# [Python] Simple DP (beats 99.52%)

**Author:** cloverpku
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1259837/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1259837/)

---

* **Type-1** operation doesn't count. It will only benefit when the length of s is **odd** (will allow one-time two adjacent positions with same value, e.g. moving the first '1' of '110' to the end, it will become valid '101'.
* We track 4 DP variables to count the # of Type-2 operations:
	* **start_1**: final valid string starting with '1', e.g. '1010'
	* **start_0**: the final valid string starting with '0', e.g. '0101'
	* **start_1_odd**: only works when s with odd length. positions after type-1 operation are the same with start_1
	* **start_0_odd**: only works when s with odd length. positions after type-1 operation are the same with start_0
* **prev**: 0 or 1 (initial val as 0, used to track start_1)
	* if current **val** == **prev** (conflict with start_1): 1) flip **start_1** (+=1); 2) for odd length s: perform Type-1 operation  move current **start_1** to **start_0_odd**, flip **start_1_odd**
	* if current **val** != **prev** (conflict with start_0): 1) flip **start_0** (+=1); 2) perform Type-1 operation for odd length s, move current **start_0** to **start_1_odd**, flip **start_0_odd**
	* after each iteration, switch the value of prev, i.e. prev = 1- prev
* In the end, pick the smallest operations from: start_1, start_0, start_1_odd, start_0_odd
```
class Solution:
    def minFlips(self, s: str) -> int:
        prev = 0
        start_1, start_0, start_1_odd, start_0_odd = 0,0,sys.maxsize,sys.maxsize
        odd = len(s)%2
        for val in s:
            val = int(val)
            if val == prev:
                if odd:
                    start_0_odd = min(start_0_odd, start_1)
                    start_1_odd += 1
                start_1 += 1
            else:
                if odd:
                    start_1_odd = min(start_1_odd, start_0)
                    start_0_odd += 1
                start_0 += 1
            prev = 1 - prev
        return min([start_1, start_0, start_1_odd, start_0_odd])
```