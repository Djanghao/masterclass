# ✅98.44%🔥Easy Soluiton🔥With explanation🔥

**Author:** MrAke
**Votes:** 183
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/4975146/](https://leetcode.com/problems/make-the-string-great/solutions/4975146/)

---

# Intuition
#### The problem can be approached using a stack data structure. By iterating through the string, we can check adjacent characters. If they form a `"bad pair"` according to the given conditions, we remove them from consideration. We repeat this process until no more bad pairs are found.

---
# Approach
#### 1. Initialize an empty stack.
#### 2. Iterate through each character in the input string.
#### 3. For each character, check if it forms a bad pair with the top character of the stack. If it does, pop the character from the stack.
#### 4. If the character doesn't form a bad pair, push it onto the stack.
#### 5. Finally, join the characters left in the stack to form the resultant string.
---

# Complexity
- ## Time complexity:
#### We iterate through each character of the input string once, resulting in a time complexity of $$O(n)$$, where n is the length of the string.

- ## Space complexity:
#### We utilize a stack to store characters. In the worst-case scenario, we might end up storing all characters in the stack. Therefore, the space complexity is $$O(n)$$, where n is the length of the string.
---
# Code

```python []
class Solution:
    def makeGood(self, s: str) -> str:
        stack = []  
        for char in s:
            if stack and abs(ord(char) - ord(stack[-1])) == 32:
                stack.pop()
            else:
                stack.append(char)

        return ''.join(stack)
```
```C++ []
class Solution {
public:
    std::string makeGood(std::string s) {
        std::stack<char> stack;
        
        for (char c : s) {
            if (!stack.empty() && std::abs(c - stack.top()) == 32) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        
        std::string result;
        while (!stack.empty()) {
            result = stack.top() + result;
            stack.pop();
        }
        
        return result;
    }
};
```
```java []
class Solution {
    public String makeGood(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (char c : s.toCharArray()) {
            if (!stack.isEmpty() && Math.abs(c - stack.peek()) == 32) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        
        StringBuilder result = new StringBuilder();
        while (!stack.isEmpty()) {
            result.insert(0, stack.pop());
        }
        
        return result.toString();
    }
}
```
```javascript []
var makeGood = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length > 0 && Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};

```
```C# []
public class Solution {
    public string MakeGood(string s) {
        Stack<char> stack = new Stack<char>();
        
        foreach (char c in s) {
            if (stack.Count > 0 && Math.Abs(c - stack.Peek()) == 32) {
                stack.Pop();
            } else {
                stack.Push(c);
            }
        }
        
        char[] resultChars = stack.ToArray();
        Array.Reverse(resultChars);
        
        return new string(resultChars);
    }
}
```
----

![Screenshot 2023-08-20 065922.png](./images/0.png)






