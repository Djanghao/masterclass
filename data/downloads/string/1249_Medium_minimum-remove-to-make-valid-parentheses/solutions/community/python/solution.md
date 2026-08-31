# Super simple Python solution with explanation. Faster than 100%, Memory Usage less than 100%

**Author:** dreamcoder21
**Votes:** 581
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/663204/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/663204/)

---

1. Convert string to list, because String is an immutable data structure in Python and it's much easier and memory-efficient to deal with a list for this task.
2. Iterate through list
3. Keep track of indices with open parentheses in the stack. In other words, when we come across open parenthesis we add an index to the stack.
4. When we come across close parenthesis we pop an element from the stack. If the stack is empty we replace current list element with an empty string
5. After iteration, we replace all indices we have in the stack with empty strings, because we don't have close parentheses for them.
6. Convert list to string and return

```
def minRemoveToMakeValid(self, s: str) -> str:
    s = list(s)
    stack = []
    for i, char in enumerate(s):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                s[i] = ''
    while stack:
        s[stack.pop()] = ''
    return ''.join(s)
```

Time complexity is O(n)
Memory complexity is O(n)