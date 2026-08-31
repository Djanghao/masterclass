# Performant PHP solution

**Author:** maierlaurin1995
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4984105/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4984105/)

---

# Intuition
A few thoughts before starting this problem:
- The number oof opening parentheses must match the number of closing.
- When removing unmatch parentheses, it does not matter which are removed.

# Approach
- Cleanup string from left to right first, removing all unmatched closing parentheses.
- Track the unmatched parentheses using a balance; Neg. balance means there are unmatched closing parentheses, pos. balance means unmatched opening parentheses.
- After the first loop, the balance must be >=0, since we already removed unmatched ")".
- In the second loop, we remove all unmatched "("  from right to left, until the balance is =0

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the string.

- Space complexity: $$O(1)$$, since the only memory required is the balance, and the balanceOpMap. Memory usage is independent of the string length
- 
# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function minRemoveToMakeValid($s) {
        $balanceOpMap = [ '(' => 1, ')' => -1 ];
        $balance = 0;
        for ($i=0; $i < strlen($s); $i++) { 
            $balance = $balance + ($balanceOpMap[$s[$i]] ?? 0);
            if($s[$i] === ')' && $balance < 0) {
                $s = substr_replace($s, '', $i, 1);
                $i--;
                $balance++;
            }
        }
        
        for ($i = strlen($s) - 1; $i >= 0 && $balance > 0; $i--) { 
            if($s[$i] === '(') {
                $s = substr_replace($s, '', $i, 1);
                $balance--;
            }
        }
        return $s;

    }
}
```