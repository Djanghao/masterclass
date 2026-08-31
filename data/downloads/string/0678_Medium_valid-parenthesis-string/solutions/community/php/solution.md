# 🔥🔥🔥 Simple Solution ✅ Beats 100.00% ✅ TC: O(n) ✅ SC: O(1)

**Author:** Nazaroo
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4985334/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4985334/)

---


![Screenshot 2024-04-06 at 21.38.19.png](./images/0.png)

# Code
```PHP []
function checkValidString($s): bool {
        $open = 0;
        $openMax = 0;
        for($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] == "(") {
                $open++;
                $openMax++;
            } elseif ($s[$i] == ")") {
                $open--;
                $openMax--;
            } else {
                $open--;
                $openMax++;
            }
            if ($openMax < 0) {
                return false;
            }
            if ($open < 0) {
                $open = 0;
            }
        }
        return $open == 0;
    }
```
```Go []
func checkValidString(s string) bool {
    open := 0
    openMax := 0
    for _, char := range s {
        switch char {
        case '(':
            open++
            openMax++
        case ')':
            open--
            openMax--
        default:
            open--
            openMax++
        }
        if openMax < 0 {
            return false
        }
        if open < 0 {
            open = 0
        }
    }
    return open == 0
}
```
```JavaScript []
var checkValidString = function(s) {
    let open = 0; 
    let openMax = 0;

    for (let char of s) {
        switch (char) {
            case '(':
                open++;
                openMax++;
                break;
            case ')':
                open--;
            openMax--;
                break;
            default:
                open--;
                openMax++;
                break;
        }
        if (openMax < 0) return false;
        if (open < 0) open = 0;
    }

    return open === 0;
};
```

# Approach
1. **Maintain Two Counters:** We use two counters (`open` and `openMax`) to keep track of the range of possible open parentheses at $any$ point in the string.

- `open` tracks the minimum number of open parentheses required. It decreases when encountering '', assuming '' acts as ')', but it never goes below zero since '*' can also be an empty string.
- `openMax` tracks the maximum number of open parentheses that could exist, increasing for '' assuming '' acts as '('.


2. **Iterate Through the String:** For each character in the string:

- If it's '(', both `open` and `openMax` are incremented, reflecting an increase in the number of open parentheses.
- If it's ')', both are decremented, indicating a closing parenthesis. Here, `open` is protected from dropping below zero because we adjust it only if it's positive, reflecting the assumption that any previous '*' could act as '('.
- For '', `open` is decreased (with a floor of zero) and `openMax` is increased, capturing the ambiguity of '' by adjusting the range of possible open parentheses.

3. **Validation:**
- If at any point `openMax` becomes negative, we have more closing parentheses than we can account for with open parentheses and '*', marking the string as invalid.
- After the iteration, if `open` is zero, it means we've balanced all parentheses, considering the minimum requirement. If it's more than zero, it implies we have surplus opening parentheses without matching closing ones, even after considering all '*' as ')'.

# Complexity
- **Time complexity:** $O(n)$, where n is the length of the string. We make a single pass through the string, making constant time checks and adjustments at each step.

- **Space complexity:** $O(1)$. The algorithm uses a fixed amount of space (the two counters and a few variables for the iteration), regardless of the input string size.

