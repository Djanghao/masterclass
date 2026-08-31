# First Ever Solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/5572980/](https://leetcode.com/problems/magical-string/solutions/5572980/)

---

# Code
```
class Solution {
    function magicalString($n) {
        if ($n < 4) return 1;
        $s = array_fill(0, $n + 1, '1');
        $s[1] = $s[2] = '2';
        $ans = 0;
        $need = 2;
        $cur = 3;

        while ($cur < $n) {
            if ($s[$need] === '2') {
                $s[$cur] = $s[$cur + 1] = ($s[$cur - 1] === '2') ? '1' : '2';
                $cur += 2;
            } else {
                $s[$cur] = ($s[$cur - 1] === '2') ? '1' : '2';
                $cur++;
            }
            $need++;
        }

        for ($i = 0; $i < $n; $i++) {
            if ($s[$i] === '1') $ans++;
        }

        return $ans;
    }
}
```