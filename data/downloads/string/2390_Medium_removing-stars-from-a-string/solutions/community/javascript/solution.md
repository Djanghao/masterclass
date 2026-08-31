# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 89
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402529/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402529/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use a stack to keep track of the characters in the input string. Whenever we encounter a star, we can remove the topmost character from the stack. After processing all characters in the input string, we can convert the stack to a string and return it as the output.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a new stack to keep track of characters encountered so far.
2. Iterate over each character in the input string.
3. If the current character is a star, remove the topmost character from the stack.
4. If the current character is not a star, add it to the stack.
5. Create a new StringBuilder to store the characters in the stack.
6. Iterate over each character in the stack and append it to the StringBuilder.
7. Convert the StringBuilder to a string and return it as the output.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$, where n is the length of the input string. We iterate over each character in the input string once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$, where n is the length of the input string. The space used by the stack and StringBuilder is proportional to the length of the input string.



![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public String removeStars(String l) {
        // Create a new stack to keep track of characters encountered so far
        Stack<Character> s = new Stack<>();
        
        // Iterate over each character in the input string
        for (char c : l.toCharArray()) {
            // If the current character is a star, remove the topmost character from the stack
            if (c == '*') {
                s.pop();
            }
            // If the current character is not a star, add it to the stack
            else {
                s.push(c);
            }
        }
        
        // Create a new StringBuilder to store the characters in the stack
        StringBuilder sb = new StringBuilder();
        
        // Iterate over each character in the stack and append it to the StringBuilder
        for (char c : s) {
            sb.append(c);
        }
        
        // Convert the StringBuilder to a string and return it as the output
        return sb.toString();
    }
}

```
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    // Iterate over each character in the input string
    for (const c of s) {
        // If the current character is a star and the stack is not empty, pop the topmost character
        // from the stack
        if (c === '*' && stack.length) {
            stack.pop();
        }
        // Otherwise, push the current character onto the stack
        else {
            stack.push(c);
        }
    }

    // Convert the stack to a string and return it as the output
    return stack.join('');
};
```
```python []
class Solution(object):
    def removeStars(self, s):
        stack = []

        # Iterate over each character in the input string
        for c in s:
            # If the current character is a star and the stack is not empty, pop the topmost character
            # from the stack
            if c == '*' and stack:
                stack.pop()
            # Otherwise, push the current character onto the stack
            else:
                stack.append(c)

        # Convert the stack to a string and return it as the output
        return ''.join(stack)
```

```C++ []
class Solution {
public:
    string removeStars(string s) {
        // create a stack to store the characters
        stack<char> st;
        
        // iterate through each character in the input string
        for (char c : s) {
            // if the current character is a star and the stack is not empty, pop the topmost character
            // from the stack
            if (c == '*' && !st.empty()) {
                st.pop();
            } else {
                // otherwise, push the current character onto the stack
                st.push(c);
            }
        }
        
        // create a string to store the result
        string ans;
        
        // pop the elements of the stack and add them to the result string
        while (!st.empty()) {
            ans += st.top();
            st.pop();
        }
        
        // reverse the result string and return it as the output
        reverse(ans.begin(), ans.end());
        return ans;
    }
};

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```