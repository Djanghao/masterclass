# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5891879/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5891879/)

---

![image.png](./images/0.png)



---

# Intuition
To ensure the string has balanced parentheses, every opening parenthesis `(` must have a corresponding closing parenthesis `)`. By using a stack, we can track unmatched opening parentheses and count how many unmatched closing parentheses appear. At the end, the total number of unmatched parentheses will give us the minimum number of additions required.

---

# Approach
1. **Stack to track opening parentheses**: Whenever we encounter an opening parenthesis `(`, we push it onto the stack. When we encounter a closing parenthesis `)`, we check if the stack contains any unmatched opening parenthesis. If it does, we pop the stack, indicating a valid pair. If it doesn\u2019t, the closing parenthesis is unmatched, and we increment a counter for unmatched closing parentheses.
2. **Result Calculation**: At the end of the string traversal, the remaining unmatched opening parentheses in the stack and the unmatched closing parentheses counter give the total number of parentheses to add to make the string valid.

---

# Complexity
- **Time Complexity**: \\(O(n)\\), where \\(n\\) is the length of the string. Each character is processed once.
- **Space Complexity**: \\(O(n)\\), as we use a stack to store unmatched opening parentheses.

---

```dart []
class Solution {
  int minAddToMakeValid(String s) {
    List<String> stack = [];  // Stack to track unmatched opening parentheses
    int ans = 0;  // Count of unmatched closing parentheses

    for (String c in s.split("")) {
      if (c == ")") {
        if (stack.isNotEmpty) {
          stack.removeLast();  // We have an unmatched '(' to match this ')'
        } else {
          ans++;  // No matching '(', so this ')' is unmatched
        }
      } else {
        stack.add(c);  // Add an unmatched '(' to the stack
      }
    }

    // Total unmatched parentheses = unmatched ')' + unmatched '(' left in stack
    return ans + stack.length;
  }
}
```

```c []
#include <stdio.h>
#include <string.h>

int minAddToMakeValid(char* s) {
    int stack = 0, ans = 0;
    
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] == ')') {
            if (stack > 0) {
                stack--;
            } else {
                ans++;
            }
        } else {
            stack++;
        }
    }
    
    return ans + stack;
}

int main() {
    char s[] = "())";
    printf("Minimum additions: %d\
", minAddToMakeValid(s));
    return 0;
}
```

```cpp []
class Solution {
public:
    int minAddToMakeValid(string s) {
        int stack = 0, ans = 0;
        
        for (char c : s) {
            if (c == ')') {
                if (stack > 0) {
                    stack--;
                } else {
                    ans++;
                }
            } else {
                stack++;
            }
        }
        
        return ans + stack;
    }
};
```

```java []
class Solution {
    public int minAddToMakeValid(String s) {
        int stack = 0, ans = 0;
        
        for (char c : s.toCharArray()) {
            if (c == ')') {
                if (stack > 0) {
                    stack--;
                } else {
                    ans++;
                }
            } else {
                stack++;
            }
        }
        
        return ans + stack;
    }
}
```

```javascript []
var minAddToMakeValid = function(s) {
    let stack = 0, ans = 0;
    
    for (let c of s) {
        if (c === ')') {
            if (stack > 0) {
                stack--;
            } else {
                ans++;
            }
        } else {
            stack++;
        }
    }
    
    return ans + stack;
};
```

```python []
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        stack = 0
        ans = 0
        
        for c in s:
            if c == ')':
                if stack > 0:
                    stack -= 1
                else:
                    ans += 1
            else:
                stack += 1
        
        return ans + stack
```

```go []
func minAddToMakeValid(s string) int {
    stack, ans := 0, 0
    
    for _, c := range s {
        if c == ')' {
            if stack > 0 {
                stack--
            } else {
                ans++
            }
        } else {
            stack++
        }
    }
    
    return ans + stack
}
```

![image.png](./images/1.png) {:style='width:250px'}

