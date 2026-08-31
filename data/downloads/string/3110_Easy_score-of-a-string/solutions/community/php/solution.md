# php

**Author:** 9SdWaZ11SF
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/6088632/](https://leetcode.com/problems/score-of-a-string/solutions/6088632/)

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
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    public static function scoreOfString($s) {
        $score = 0;

        for ($i = 0; isset($s[$i + 1]); $i++)
        {
            $score += abs(ord($s[$i]) - ord($s[$i + 1]));
        }

        return $score;
    }
}


```