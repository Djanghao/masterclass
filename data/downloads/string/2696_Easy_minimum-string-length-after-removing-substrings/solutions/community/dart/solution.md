# 🔥SIMPLE 💯🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5882823/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5882823/)

---



---

# Intuition
The problem requires removing consecutive "AB" or "CD" substrings from the input string until no more such pairs can be found. A stack-based approach works well here, as it allows efficient checking of the top elements and removing the required substrings in constant time.

---

# Approach
1. Iterate through each character of the input string.
2. Push each character into a stack.
3. After adding each character, check the top two elements of the stack:
   - If the top two elements form "AB" or "CD", remove them from the stack.
4. At the end, the remaining characters in the stack represent the minimum possible length of the string after all valid removals.
5. Return the size of the stack, which is the result.

---

# Complexity
- **Time Complexity**: \\(O(n)\\), where \\(n\\) is the length of the input string. Each character is processed once and added to the stack or removed from it.
- **Space Complexity**: \\(O(n)\\), due to the stack that stores the remaining characters after the removals.

---

```dart []
class Solution {
  int minLength(String s) {
    List<String> stack = [];
    
    for (int i = 0; i < s.length; i++) {
      stack.add(s[i]);
      
      if (stack.length > 1) {
        String last = stack[stack.length - 1];
        String secondLast = stack[stack.length - 2];
        
        if (secondLast + last == "AB" || secondLast + last == "CD") {
          stack.removeLast();
          stack.removeLast();
        }
      }
    }
    
    return stack.length;
  }
}
```

```c []
#include <stdio.h>
#include <string.h>

int minLength(char *s) {
    char stack[100000];
    int top = -1;
    
    for (int i = 0; s[i] != '\\0'; i++) {
        stack[++top] = s[i];
        
        if (top > 0) {
            if ((stack[top - 1] == 'A' && stack[top] == 'B') || 
                (stack[top - 1] == 'C' && stack[top] == 'D')) {
                top -= 2;
            }
        }
    }
    
    return top + 1;
}

int main() {
    char s[] = "ABCD";
    printf("Minimum Length: %d\
", minLength(s));
    return 0;
}
```

```cpp []
#include <iostream>
#include <stack>
using namespace std;

class Solution {
public:
    int minLength(string s) {
        stack<char> stk;
        
        for (char ch : s) {
            stk.push(ch);
            
            if (stk.size() > 1) {
                char last = stk.top();
                stk.pop();
                char secondLast = stk.top();
                
                if ((secondLast == 'A' && last == 'B') || 
                    (secondLast == 'C' && last == 'D')) {
                    stk.pop();
                } else {
                    stk.push(last);
                }
            }
        }
        
        return stk.size();
    }
};
```

```java []
import java.util.Stack;

class Solution {
    public int minLength(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (char ch : s.toCharArray()) {
            stack.push(ch);
            
            if (stack.size() > 1) {
                char last = stack.pop();
                char secondLast = stack.pop();
                
                if (!((secondLast == 'A' && last == 'B') || 
                      (secondLast == 'C' && last == 'D'))) {
                    stack.push(secondLast);
                    stack.push(last);
                }
            }
        }
        
        return stack.size();
    }
}
```

```javascript []
var minLength = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        
        if (stack.length > 1) {
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];
            
            if (secondLast + last === "AB" || secondLast + last === "CD") {
                stack.pop();
                stack.pop();
            }
        }
    }
    
    return stack.length;
};
```

```python []
class Solution:
    def minLength(self, s: str) -> int:
        stack = []
        
        for ch in s:
            stack.append(ch)
            
            if len(stack) > 1:
                if (stack[-2] == 'A' and stack[-1] == 'B') or (stack[-2] == 'C' and stack[-1] == 'D'):
                    stack.pop()
                    stack.pop()
        
        return len(stack)
```

```go []
func minLength(s string) int {
    stack := []byte{}
    
    for i := 0; i < len(s); i++ {
        stack = append(stack, s[i])
        
        if len(stack) > 1 {
            last := stack[len(stack)-1]
            secondLast := stack[len(stack)-2]
            
            if string(secondLast)+string(last) == "AB" || string(secondLast)+string(last) == "CD" {
                stack = stack[:len(stack)-2]
            }
        }
    }
    
    return len(stack)
}
```

