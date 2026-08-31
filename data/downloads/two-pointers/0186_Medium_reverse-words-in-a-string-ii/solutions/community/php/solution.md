# Reverse words in string II PHP

**Author:** olaleye
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4905763/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4905763/)

---

# Intuition
The first step is to reverse the whole string, and then reverse each word in the string

# Approach
Use two pointers to reverse the entire string and then use two pointers again to reverse each word in the entire string.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param String[] $s
     * @return NULL
     */
    function reverseWords(&$s) {
        $s = $this->reverse($s, 0, count($s) - 1);

        $left = 0;
        
        for($right = 0; $right < count($s); $right++) {
            $left = $right;

            while($s[$right] !== ' ' && $right < count($s)) $right++;
            $s = $this->reverse($s, $left, $right - 1);
        }

        return $s;
    }

    function reverse(array $s, int $left, int $right) {
        while($left < $right) {
            $temp = $s[$left];
            $s[$left++] = $s[$right];
            $s[$right--] = $temp;
        }

        return $s;
    }
}
```