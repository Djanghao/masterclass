# Solution Kth Smallest Instructions

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/5214591/](https://leetcode.com/problems/kth-smallest-instructions/solutions/5214591/)

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
    private function comb($n, $r) {
        $ans = 1;
        for ($i = 1, $j = $n - $r + 1; $i <= $r; ++$i, ++$j) {
            $ans = $ans * $j / $i;
        }
        return $ans;
    }

    public function kthSmallestPath($A, $k) {
        $h = $A[1];
        $v = $A[0];
        $N = $h + $v;
        $s = '';

        for ($i = 0; $i < $N; ++$i) {
            if ($h) { 
                $c = $this->comb($h - 1 + $v, $v); 
                if ($k <= $c) { 
                    $s .= 'H';
                    --$h;
                } else { 
                    $k -= $c;
                    $s .= 'V';
                    --$v;
                }
            } else { 
                $s .= 'V';
                --$v;
            }
        }

        return $s;
    }
}

```