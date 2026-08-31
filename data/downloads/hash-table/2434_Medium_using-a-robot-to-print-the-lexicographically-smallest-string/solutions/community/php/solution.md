# Stack + count frequency (Beats 100% PHP submissions)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/4525233/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/4525233/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Find the smallest character in "s" and compare if it is smaller than the last one in "t", if smaller then put it in "t" and then in "p", if not,  then take top element from  "t" and put it in "p" until the top character in "t" is greater than the minmal symbol from "s".
# Approach
<!-- Describe your approach to solving the problem. -->
I'm using the "freq" array to find the minimum character in the remaining "s".
This array already has a mapping between the ordinal number of a character and the frequency of that character in the string \u201Cs\u201D. Each time I push a new character onto the "t" stack, I decrease the frequency for that character, it will help to find next minimal symbol in method $this->smaller();
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
    // Returns the smaller element to the right of the current character
    private function smaller(&$freq) {
        for ($i = 0; $i < 26; $i++) {
            if ($freq[$i] > 0) {
                return chr(ord('a') + $i);
            }
        }
        return chr(ord('a') + 26);
    }

    public function robotWithString($s) {
        // Store the frequencies, which help in finding the smaller char to the right of the current char
        $freq = array_fill(0, 26, 0);
        for ($i = 0; $i < strlen($s); $i++) {
            $freq[ord($s[$i]) - ord('a')]++;
        }

        $ans = "";
        $stack = new SplStack();

        for ($i = 0; $i < strlen($s); $i++) {
            // If there is no smaller character to the right of the top, then it should be added to the ans
            while (!$stack->isEmpty() && $s[$stack->top()] <= $this->smaller($freq)) {
                $ans .= $s[$stack->top()];
                $stack->pop();
            }
            $stack->push($i);
            $freq[ord($s[$i]) - ord('a')]--;
        }

        while (!$stack->isEmpty()) {
            $ans .= $s[$stack->top()];
            $stack->pop();
        }

        return $ans;
    }
}
```