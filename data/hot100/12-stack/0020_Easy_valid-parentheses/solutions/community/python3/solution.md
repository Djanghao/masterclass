# 【Video】2 ways to solve this question

**Author:** niits
**Votes:** 638
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/5139933/](https://leetcode.com/problems/valid-parentheses/solutions/5139933/)

---

# Intuition
Using Stack

---

# Solution Video

https://youtu.be/-CGiyb1Loyc

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,616
Thank you for your support!

---

# Approach
We use `HashMap` and `Stack`. We know valid combination, so initialize the combination with `HashMap` before we iterate through the input string.

```
mapping = { ")":"(", "}":"{", "]":"[" }
```
`Stack` has only open parentheses. When a close parenthesis comes, we use it as a key to find valid open parenthesis in the `mapping`. If the two parentheses(current parenthesis and the latest parenthesis in `Stack`) are not valid combination, we should return `False`.

At last, if `Stack` is empty, we should return `True`.


---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {")":"(", "}":"{", "]":"["}

        for char in s:
            if char in mapping.values():
                stack.append(char)
            elif char in mapping.keys():
                if not stack or mapping[char] != stack.pop():
                    return False
        
        return not stack
```
```javascript []
var isValid = function(s) {
        const stack = [];
        const mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const c of s) {
            if (Object.values(mapping).includes(c)) {
                stack.push(c);
            } else if (mapping.hasOwnProperty(c)) {
                if (!stack.length || mapping[c] !== stack.pop()) {
                    return false;
                }
            }
        }

        return stack.length === 0;    
};
```
```java []
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> mapping = new HashMap<>();
        mapping.put(')', '(');
        mapping.put('}', '{');
        mapping.put(']', '[');

        for (char c : s.toCharArray()) {
            if (mapping.containsValue(c)) {
                stack.push(c);
            } else if (mapping.containsKey(c)) {
                if (stack.isEmpty() || mapping.get(c) != stack.pop()) {
                    return false;
                }
            }
        }

        return stack.isEmpty();        
    }
}
```
```C++ []
class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;
        unordered_map<char, char> mapping = {{')', '('}, {']', '['}, {'}', '{'}};

        for (char c : s) {
            if (mapping.find(c) == mapping.end()) {
                stack.push(c);
            } else if (!stack.empty() && mapping[c] == stack.top()) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.empty();        
    }
};
```

---

# Solution 2

We can solve this question with `Stack` only. If `Stack` has some parenthesis, we check the latest parenthesis in `Stack` and current parenthesis are valid combination.

If true, just pop the parenthesis from the `Stack` and move next, if false, add current parenthesis to the `Stack`.

At last, if `Stack` is empty, return `True`.


---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def isValid(self, s: str) -> bool:
        st = []

        for i in range(len(s)):
            if st:
                last = st[-1]
                if self.is_pair(last, s[i]):
                    st.pop()
                    continue
            st.append(s[i])
        
        return not st
    
    def is_pair(self, last, cur):
        if last == "(" and cur == ")" or last == "{" and cur == "}" or last == "[" and cur == "]":
            return True
        return False
```
```javascript []
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (stack.length) {
            const last = stack[stack.length - 1];
            if (isPair(last, cur)) {
                stack.pop();
                continue;
            }
        }
        stack.push(cur);
    }

    return stack.length === 0;  
};

var isPair = function(last, cur) {
    return (
        (last === '(' && cur === ')') ||
        (last === '{' && cur === '}') ||
        (last === '[' && cur === ']')
    );
};
```
```java []
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char cur = s.charAt(i);
            if (!stack.isEmpty()) {
                char last = stack.peek();
                if (isPair(last, cur)) {
                    stack.pop();
                    continue;
                }
            }
            stack.push(cur);
        }

        return stack.isEmpty();        
    }

    private boolean isPair(char last, char cur) {
        return (last == '(' && cur == ')') ||
               (last == '{' && cur == '}') ||
               (last == '[' && cur == ']');
    }    
}
```
```C++ []
class Solution {
public:
    bool isValid(string s) {
        stack<char> st;

        for (char cur : s) {
            if (!st.empty()) {
                char last = st.top();
                if (isPair(last, cur)) {
                    st.pop();
                    continue;
                }
            }
            st.push(cur);
        }

        return st.empty();        
    }

private:
    bool isPair(char last, char cur) {
        return (last == '(' && cur == ')') ||
               (last == '{' && cur == '}') ||
               (last == '[' && cur == ']');
    }
};    
```

---

Thank you for reading my post.

## \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

## \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

## \u2B50\uFE0F My previous video - Merge Two Sorted Lists #21

https://youtu.be/eaRfv5VY7sI

