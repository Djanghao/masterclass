# Fast and easy O(n) solution

**Author:** Aksafan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886408/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886408/)

---

# Intuition
We are interested only in `c` occurancies.

# Approach
- Iterrate through a `s` string and look for the 1st character to be `c`.
- If found it than we add to `totalCounter`:
  - `1` for this current `c` occurance; 
  - amount of `cCounter` for all previous `c` occurances.

# Complexity
- Time complexity:
`O(n)` - worst case scenario.

- Space complexity:
`O(1)`

# Code
```
class Solution
{
    /**
     * @param string $s
     * @param string $c
     * @return int
     */
    function countSubstrings(string $s, string $c): int
    {
        $totalCounter = $cCounter = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] === $c) {
                $totalCounter += $cCounter + 1;
                $cCounter++;
            }
        }

        return $totalCounter;
    }
```