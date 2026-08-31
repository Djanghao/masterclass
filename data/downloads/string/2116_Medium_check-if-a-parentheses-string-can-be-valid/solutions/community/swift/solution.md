# Swift | Clean and simple solution

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4971932/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4971932/)

---

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func canBeValid(_ s: String, _ locked: String) -> Bool
    {
        if s.length % 2 == 1 { return false } // odd count of perentheses can't be balanced

        var minOpened = 0 // minimal possible count of not closed parentheses "("
        var maxOpened = 0 // maximal possible count of not closed parentheses "("

        for (char, lock) in zip(s, locked)
        {
            if lock == "0" // can change char
            {
                if minOpened > 0 { minOpened -= 1 } // if char set to ")"
                maxOpened += 1                      // if char set to "("
            }
            else // lock == "1", can't change char
            {
                if char == "("
                {
                    minOpened += 1
                    maxOpened += 1
                }
                else // ")"
                {
                    if minOpened > 0 { minOpened -= 1 }
                    maxOpened -= 1
                    if maxOpened < 0 { return false } // closing ")" that does not have preceding "("
                }
            }
        }
        return minOpened == 0
    }
}
```