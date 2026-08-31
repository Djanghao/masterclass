# Solution Replace the Substring for Balanced String

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/4903822/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/4903822/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function balancedString($s) {
        $charIndex = function ($char) {
            switch ($char) {
                case "Q": return 0;
                case "W": return 1;
                case "E": return 2;
                case "R": return 3;
                default: return 4;
            }
        };

        $s = str_split($s);
        $requiredOccurrence = count($s) / 4;
        $occurrence = array_fill(0, 4, 0);

        foreach ($s as $char) {
            $occurrence[$charIndex($char)] += 1;
        }

        $oddCount = 0;
        foreach ($occurrence as $count) {
            if ($count > $requiredOccurrence) {
                $oddCount += $count - $requiredOccurrence;
            }
        }

        if ($oddCount == 0) {
            return 0;
        }

        // slide the window to find the min substring
        // move the right end, till we find the valid result, move the left end
        // until the result is invalid >> [l -> r] is the minimum length
        $l = 0;
        $r = 0;
        $ans = count($s) + 1;
        while ($r < count($s)) {
            if ($occurrence[$charIndex($s[$r])] > $requiredOccurrence) {
                $oddCount -= 1;
            }
            $occurrence[$charIndex($s[$r])] -= 1;

            while ($oddCount == 0) {
                $ans = min($ans, $r - $l + 1);
                $occurrence[$charIndex($s[$l])] += 1;
                if ($occurrence[$charIndex($s[$l])] > $requiredOccurrence) {
                    $oddCount += 1;
                }
                $l += 1;
            }

            $r += 1;
        }

        return $ans == count($s) + 1 ? 0 : $ans;
    }
}

```