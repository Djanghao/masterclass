# ✍ ✅ [PHP🚀][JavaScript] Beats 100%

**Author:** akunopaka
**Votes:** 5
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402285/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402285/)

---

# Approach
 This approach iterates through the string from the end and builds a result string by adding characters from the given string from the end. 
For each character encountered, if it is a '*' character, the backspace count is incremented, and if **backspace count is greater** than 0, it is decremented and the **character is not added** to the result string. 
If the backspace count is 0, the character is added to the result string.
At the end of the loop, we return the result string.

# Complexity
- Time complexity: $$O(n)$$ as we are looping through the input string of size N once. 

- Space complexity: $$O(n)$$ as we are creating a result string of size N.

# Code
#### JavaScript
```
var removeStars = function (s) {
    let result = '';
    let backspaces = 0;

    for (let i = s.length; i--;) {
        if (s[i] === '*') {
            backspaces += 1;
        } else if (backspaces > 0) {
            backspaces -= 1;
        } else {
            result = s[i] + result;
        }
    }
    return result;
};
```

#### PHP
```
class Solution
{
    function removeStars(string $s): string {
        $backspaceCount = 0;
        $result = '';
        $sLength = strlen($s);
        for ($i = $sLength; $i--;) {
            if ($s[$i] === "*") {
                $backspaceCount++;
            } elseif ($backspaceCount > 0) {
                $backspaceCount--;
            } else {
                $result = $s[$i] . $result;
            }
        }
        return $result;
    }
}
```


##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**