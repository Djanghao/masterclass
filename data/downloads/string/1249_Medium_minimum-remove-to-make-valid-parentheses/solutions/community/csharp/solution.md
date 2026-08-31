# 🔥 BEATS ~100% | ✅ [ C++ / Java / Py / C / C# / JS / GO ]

**Author:** Neoni_77
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4981128/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4981128/)

---


```C++ []
class Solution {
public:
    string minRemoveToMakeValid(string s) {
        int open = 0;
        for (int i = 0; i < s.size(); ++i) {
            if (s[i] == '(') {
                ++open;
            } else if (s[i] == ')') {
                if (open == 0) {
                    s.erase(i, 1);
                    --i; // Adjust index after erasing
                } else {
                    --open;
                }
            }
        }

        // Remove excessive '('
        for (int i = s.size() - 1; open > 0 && i >= 0; --i) {
            if (s[i] == '(') {
                s.erase(i, 1);
                --open;
            }
        }

        return s;
    }
};

```
```python []
class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []
        s = list(s)
        
        # First pass: track indices of '(' and mark ')' for removal
        for i, char in enumerate(s):
            if char == '(':
                stack.append(i)
            elif char == ')':
                if stack:
                    stack.pop()
                else:
                    s[i] = ''  # Mark ')' for removal
        
        # Mark remaining '(' for removal
        while stack:
            s[stack.pop()] = ''  # Mark '(' for removal
        
        return ''.join(s)

```
```Java []
import java.util.Stack;

class Solution {
    public String minRemoveToMakeValid(String s) {
        StringBuilder sb = new StringBuilder(s);
        Stack<Integer> stack = new Stack<>();

        // First pass: remove excessive ')' and track '(' indices
        for (int i = 0; i < sb.length(); ++i) {
            if (sb.charAt(i) == '(') {
                stack.push(i);
            } else if (sb.charAt(i) == ')') {
                if (!stack.isEmpty()) {
                    stack.pop();
                } else {
                    sb.setCharAt(i, '*'); // Mark ')' for removal
                }
            }
        }

        // Mark excessive '(' for removal
        while (!stack.isEmpty()) {
            sb.setCharAt(stack.pop(), '*');
        }

        // Construct result string
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < sb.length(); ++i) {
            if (sb.charAt(i) != '*') {
                result.append(sb.charAt(i));
            }
        }

        return result.toString();
    }
}

```
```C []

char* minRemoveToMakeValid(char* s) {
    int len = strlen(s);
    char* result = (char*)malloc((len + 1) * sizeof(char));
    int* stack = (int*)malloc(len * sizeof(int));
    int top = -1;

    // First pass: track indices of '(' and mark ')' for removal
    for (int i = 0; i < len; i++) {
        if (s[i] == '(') {
            stack[++top] = i;
        } else if (s[i] == ')') {
            if (top >= 0) {
                top--;
            } else {
                s[i] = '\\0'; // Mark ')' for removal
            }
        }
    }

    // Mark remaining '(' for removal
    while (top >= 0) {
        s[stack[top--]] = '\\0'; // Mark '(' for removal
    }

    // Construct result string
    int resultIndex = 0;
    for (int i = 0; i < len; i++) {
        if (s[i] != '\\0') {
            result[resultIndex++] = s[i];
        }
    }
    result[resultIndex] = '\\0';

    free(stack);
    return result;
}

```
```C# []
public class Solution {
    public string MinRemoveToMakeValid(string s) {
        Stack<int> stack = new Stack<int>();
        StringBuilder result = new StringBuilder(s);

        // First pass: track indices of '(' and mark ')' for removal
        for (int i = 0; i < result.Length; i++) {
            if (result[i] == '(') {
                stack.Push(i);
            } else if (result[i] == ')') {
                if (stack.Count > 0) {
                    stack.Pop();
                } else {
                    result[i] = '*'; // Mark ')' for removal
                }
            }
        }

        // Mark remaining '(' for removal
        while (stack.Count > 0) {
            result[stack.Pop()] = '*'; // Mark '(' for removal
        }

        // Construct result string
        StringBuilder finalResult = new StringBuilder();
        foreach (char c in result.ToString()) {
            if (c != '*') {
                finalResult.Append(c);
            }
        }

        return finalResult.ToString();
    }
}

```
```Javascript []
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const chars = s.split('');

    // First pass: track indices of '(' and mark ')' for removal
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '(') {
            stack.push(i);
        } else if (chars[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                chars[i] = ''; // Mark ')' for removal
            }
        }
    }

    // Mark remaining '(' for removal
    while (stack.length > 0) {
        chars[stack.pop()] = ''; // Mark '(' for removal
    }

    // Construct result string
    var minRemoveToMakeValid = function(s) {
    const stack = [];
    const chars = s.split('');

    // First pass: track indices of '(' and mark ')' for removal
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '(') {
            stack.push(i);
        } else if (chars[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                chars[i] = ''; // Mark ')' for removal
            }
        }
    }

    // Mark remaining '(' for removal
    while (stack.length > 0) {
        chars[stack.pop()] = ''; // Mark '(' for removal
    }

    // Construct result string
    return chars.join('');
};

};

```
```Go []
func minRemoveToMakeValid(s string) string {
    var stack []int
    chars := []rune(s)

    // First pass: track indices of '(' and mark ')' for removal
    for i, char := range chars {
        if char == '(' {
            stack = append(stack, i)
        } else if char == ')' {
            if len(stack) > 0 {
                stack = stack[:len(stack)-1]
            } else {
                chars[i] = 0 // Mark ')' for removal
            }
        }
    }

    // Mark remaining '(' for removal
    for _, index := range stack {
        chars[index] = 0 // Mark '(' for removal
    }

    // Construct result string
    result := make([]rune, 0, len(chars))
    for _, char := range chars {
        if char != 0 {
            result = append(result, char)
        }
    }

    return string(result)
}

```


```
//  ------------------- UPVOTE PLZ IF HELPFULL -------------------//
```