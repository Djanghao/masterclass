# 🍼Easy (without xor).

**Author:** Trisodium
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5772111/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5772111/)

---

# Intuition
You can compare numbers while converting to a binary number.
To convert from decimal to binary you need to divide by 2 and get the remainder.

# Approach
1. Divide by 2 to get the digit of the binary number from the end in turn.
2. Compare numbers.
3. If both numbers are less than 2, then this is the last comparison

# Complexity
- Time complexity: $$O(Log(Max(X,Y)))$$
- Space complexity: $$O(1)$$

# Code
```python3 []
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        r = 0
        while True:
            stop = start < 2 and goal < 2
            r += start % 2 != goal % 2
            start, goal = start // 2, goal // 2
            if stop: break
        return r
```
```PHP []
class Solution {

    /**
     * @param Integer $start
     * @param Integer $goal
     * @return Integer
     */
    function minBitFlips(int $start, int $goal) : int {
        $r = 0;
        do {
            $stop = $start < 2 && $goal < 2;
            $r += $start % 2 != $goal % 2;
            $start = intdiv($start, 2);
            $goal = intdiv($goal, 2);
        } while(!$stop);
        return $r;
    }
}
```
```JavaScript []
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let r = 0;
    do {
        stop = start < 2 && goal < 2;
        r += start % 2 != goal % 2;
        start = Math.floor(start / 2);
        goal = Math.floor(goal / 2);
    } while(!stop);
    return r;
};
```