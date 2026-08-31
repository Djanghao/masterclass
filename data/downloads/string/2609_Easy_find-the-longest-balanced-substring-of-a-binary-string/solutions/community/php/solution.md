# PHP Solution - Time complexity O(n),  Space complexity O(1)

**Author:** Brizzl
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4361303/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4361303/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function findTheLongestBalancedSubstring($s) {
        $zerosCounter = 0;
        $onesCounter = 0;
        $length = 0;

        foreach (str_split($s) as $i){
            if($i == 0 ){
                if($flag){
                    $zerosCounter = 0;
                    $onesCounter = 0;
                }
                $zerosCounter++;
                $flag = false;
            } else {
                $onesCounter++;
                if($zerosCounter >= $onesCounter && $length < $onesCounter){
                    $length = $onesCounter;
                }
                $flag=true;
            }
        }
        return ($length*2);
    }
}

```