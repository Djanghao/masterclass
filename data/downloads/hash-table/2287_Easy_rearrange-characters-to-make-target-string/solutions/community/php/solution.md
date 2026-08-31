# best result

**Author:** menesterov
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/4951760/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/4951760/)

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
     * @param String $target
     * @return Integer
     */
    function rearrangeCharacters($s, $target) {
        $tar = [];
        $sar = [];
        $res = strlen($s);
        for($i=0;$i<strlen($target);$i++) {
            $tar[$target[$i]]++;
            $sar[$target[$i]] = 0;
        }
        for($i=0;$i<strlen($s);$i++) {
            if (isset($sar[$s[$i]])) $sar[$s[$i]]++;
        }
        foreach ($sar as $ch => $total) {
            $sets = intdiv($total, $tar[$ch]);
            if ($sets < $res) $res = $sets;
        }
        return $res;;
    }
}
```