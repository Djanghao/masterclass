# Solution Decode XORed Permutation

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/5401364/](https://leetcode.com/problems/decode-xored-permutation/solutions/5401364/)

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
    public function decode($encoded) {
        $n = count($encoded) + 1;

        $xor_n = 0;
        for ($i = 1; $i <= $n; $i++) {
            $xor_n ^= $i;
        }

        $xor_e = 0;
        for ($j = 0; $j < $n - 1; $j += 2) {
            $xor_e ^= $encoded[$j];
        }

        $last = $xor_e ^ $xor_n;
        $v = array_fill(0, $n, 0);
        $v[$n - 1] = $last;

        for ($i = $n - 2; $i >= 0; $i--) {
            $v[$i] = $v[$i + 1] ^ $encoded[$i];
        }

        return $v;
    }
}

```