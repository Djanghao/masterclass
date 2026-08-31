# ✍ ✅ [PHP🚀 Beats 100%][JavaScript] Bracket Validation with a Stack

**Author:** akunopaka
**Votes:** 18
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/3401175/](https://leetcode.com/problems/valid-parentheses/solutions/3401175/)

---

# Approach
This approach uses a stack to validate if a given string of brackets is valid. 

First, the length of the string is checked to ensure that it is even, as any string of brackets that is not even can not be balanced. 

Then, if s[i] is the opening brackets, matching closing bracket pushed onto the stack, and as the string is traversed, if the character is a closing bracket, the top of the stack popped off the stack and is checked to see if it matches. 

If it does the process continues. 
If it does not match, the string is invalid. 
After the loop is complete, the stack should be empty, as all of the opening brackets should have been popped off the stack. 
If it is not empty, the string is invalid.

# Complexity
- Time complexity: $$O(n)$$ as the loop only needs to traverse the string once. 
- Space complexity: $$O(n)$$ as in the worst case, the stack will contain all of the characters in the string.

### JavaScript
```javascript
var isValid = function (s) {
    const sLength = s.length;
    if (sLength % 2 !== 0) return false;

    const brackets = {'(': ')', '{': '}', '[': ']'};
    const stack = [];
    for (let i = 0; i < sLength; i++) {
        if (brackets[s[i]]) {
            stack.push(s[i]);
        } else if (s[i] !== brackets[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
};
```

### PHP
```php
class Solution
{
    /**
     * @param String $s
     * @return Boolean
     */
    function isValid(string $s): bool {
        $sLength = strlen($s);
        if ($sLength % 2 !== 0) return false;
        $bracketSet = ['(' => ')', '[' => ']', '{' => '}'];

        $bracketStack = [];

        for ($i = 0; $i < $sLength; $i++) {
            if (array_key_exists($s[$i], $bracketSet)) {
                $bracketStack[] = $bracketSet[$s[$i]];
            } elseif (array_pop($bracketStack) !== $s[$i]) {
                return false;
            }
        }
        return count($bracketStack) === 0;
    }
}
```

##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**
