# Solution Rearrange Spaces Between Words

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/5183478/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/5183478/)

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
    public function reorderSpaces($s) {
        if (strlen($s) < 2) {
            return $s;
        }
        
        $i = 0;
        $j = strlen($s);
        $v = [];
        $str = "";

        for ($k = 0; $k < $j; $k++) {
            if ($s[$k] == ' ') {
                $i++;
            }
            
            if ($s[$k] != ' ') {
                $str .= $s[$k];
            } else if (strlen($str) > 0 && $s[$k] == ' ') {
                $v[] = $str;
                $str = "";
            }
        }
        
        if (strlen($str) > 0) {
            $v[] = $str;
        }
        
        $ans = "";
        $totalS = 0;
        if (count($v) > 1) {
            $totalS = intdiv($i, count($v) - 1);
        } else {
            $totalS = $i / count($v);
        }
        
        $k = $totalS;

        foreach ($v as $d) {
            $ans .= $d;
            while ($k > 0) {
                $ans .= ' ';
                $k--;
            }
            if ($k == 0) {
                $k = $totalS;
            }
        }
        
        $b = strlen($ans);
        $x = 0;
        for ($i = $b - 1; $i >= 0; $i--) {
            if ($ans[$i] == ' ') {
                $x++;
            } else {
                break;
            }
        }
        
        $ans1 = substr($ans, 0, strlen($ans) - $x);

        while (strlen($s) != strlen($ans1)) {
            $ans1 .= " ";
        }

        return $ans1;
    }
}

```