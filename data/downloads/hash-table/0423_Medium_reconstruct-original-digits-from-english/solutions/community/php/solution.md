# Solution Reconstruct Original Digits from English

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/4723431/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/4723431/)

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
     * @return String
     */
    function originalDigits($s) {
        $count = array_fill(0, 10, 0);
        
        for ($i = 0; $i < strlen($s); $i++) {
            switch ($s[$i]) {
                case 'z': $count[0]++; break;
                case 'w': $count[2]++; break;
                case 'x': $count[6]++; break;
                case 's': $count[7]++; break;
                case 'g': $count[8]++; break;
                case 'u': $count[4]++; break;
                case 'f': $count[5]++; break;
                case 'h': $count[3]++; break; 
                case 'i': $count[9]++; break;
                case 'o': $count[1]++; break;
            }
        }
        
        $count[7] -= $count[6];
        $count[5] -= $count[4];
        $count[3] -= $count[8];
        $count[9] = $count[9] - $count[5] - $count[6] - $count[8];
        $count[1] = $count[1] - $count[0] - $count[2] - $count[4];
        
        $result = '';
        for ($i = 0; $i < 10; $i++) {
            $result .= str_repeat($i, $count[$i]);
        }
        
        return $result;
    }
}

$solution = new Solution();
echo $solution->originalDigits("owoztneoer") . "\
";
echo $solution->originalDigits("fviefuro") . "\
";

```