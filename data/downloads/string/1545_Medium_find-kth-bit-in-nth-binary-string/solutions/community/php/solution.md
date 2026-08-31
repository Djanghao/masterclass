# Solution Find Kth Bit in Nth Binary String

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5138451/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5138451/)

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
    function invert($s) {
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] == '0') {
                $s[$i] = '1';
            } else {
                $s[$i] = '0';
            }
        }
        return $s;
    }

    function reverse($s) {
        return strrev($s);
    }

    function findKthBit($n, $k) {
        $s1 = "0";

        while ($n != 0) {
            $n--;
            $temp = "";
            $del = $this->invert($s1);
            $del = $this->reverse($del);
            $temp .= $s1 . "1" . $del;
            $s1 = $temp;
        }

        return $s1[$k - 1];
    }
}

```