# Solution Split Two Strings to Make Palindrome

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/5195182/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/5195182/)

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
    public function isPalindrome($s, $i, $j) {
        while ($i < $j && $s[$i] === $s[$j]) {
            ++$i;
            --$j;
        }
        return $i >= $j;
    }
    
    public function check($a, $b) {
        $i = 0;
        $j = strlen($a) - 1;
        while ($i < $j && $a[$i] === $b[$j]) {
            ++$i;
            --$j;
        }
        return $this->isPalindrome($a, $i, $j) || $this->isPalindrome($b, $i, $j);
    }
    
    public function checkPalindromeFormation($a, $b) {
        return $this->check($a, $b) || $this->check($b, $a);
    }
}

```