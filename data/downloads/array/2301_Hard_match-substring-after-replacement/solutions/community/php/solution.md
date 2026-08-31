# PHP sliding window approachslidin

**Author:** lina_jamadar23
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/4205288/](https://leetcode.com/problems/match-substring-after-replacement/solutions/4205288/)

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
     * @param String $sub
     * @param String[][] $mappings
     * @return Boolean
     */
    function matchReplacement($s, $sub, $mappings) {
      
        $h = array();
        foreach ($mappings as $pair) {
            $a = $pair[0];
            $b = $pair[1];
            if (!isset($h[$a])) {
                $h[$a] = array();
            }
            $h[$a][] = $b;
        }
        $l = strlen($sub);
        for ($i = 0; $i < (strlen($s) - $l + 1); $i++) {
            $flag = true;
            for ($j = 0; $j < $l; $j++) {
                $s_val = $s[$i + $j];
                $sub_val = $sub[$j];
                if ($s_val == $sub_val || (isset($h[$sub_val]) && in_array($s_val, $h[$sub_val]))) {
                    continue;
                } else {
                    $flag = false;
                    break;
                }
            }
            if ($flag) {
                return true;
            }
        }
        return false;

    }
}
```