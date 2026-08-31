# 385: Time 92.59% and Space 97.53%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 13
**Link:** [https://leetcode.com/problems/mini-parser/solutions/3254662/](https://leetcode.com/problems/mini-parser/solutions/3254662/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. We start by checking if the input string s starts with a [. If it doesn't, then it must be a single integer, so we create a NestedInteger object with that value and return it.

```
if s[0] != '[':
  return NestedInteger(int(s))
```
2. If the input string does start with a [, we create an empty stack to keep track of NestedInteger objects and sublists as we parse the input string.
```
stack = []
```
3. We then loop through each character in the input string, using enumerate to keep track of the index of the current character.
```
for i, c in enumerate(s):
```
4. If we encounter an opening bracket [, we push a new empty NestedInteger object onto the stack and set the starting index for the next element to be parsed.
```
if c == '[':
  stack.append(NestedInteger())
  start = i + 1
```
5. If we encounter a comma ,, we check if there was a number between the previous comma or opening bracket and this one. If there was, we create a new NestedInteger object with that value and add it to the NestedInteger object on the top of the stack. We then update the starting index for the next element to be parsed.
```
elif c == ',':
  if i > start:
    num = int(s[start:i])
    stack[-1].add(NestedInteger(num))
  start = i + 1
```
6. If we encounter a closing bracket ], we pop the top NestedInteger object from the stack and check if there was a number between the previous comma or opening bracket and this one. If there was, we create a new NestedInteger object with that value and add it to the popped NestedInteger object. If there are still NestedInteger objects on the stack, we add the popped NestedInteger to the one on top. Otherwise, we return the popped NestedInteger. We then update the starting index for the next element to be parsed.

```
elif c == ']':
  popped = stack.pop()
  if i > start:
    num = int(s[start:i])
    popped.add(NestedInteger(num))
  if stack:
    stack[-1].add(popped)
  else:
    return popped
  start = i + 1
```
7. After the loop is finished, we should have only one NestedInteger object left on the stack. We return this object as the final deserialized result.
```
return stack[-1]
```
# Complexity
- Time complexity:
92.59%

- Space complexity:
97.53%

# Code
```
class Solution:
  def deserialize(self, s: str) -> NestedInteger:
    # If s doesn't start with a '[', it must be a single integer, so create a NestedInteger object with that value
    if s[0] != '[':
      return NestedInteger(int(s))

    # Create an empty stack to keep track of NestedInteger objects and sublists as we parse the input string
    stack = []

    # Loop through each character in the string
    for i, c in enumerate(s):
      if c == '[':
        # If we encounter an opening bracket, push a new empty NestedInteger object onto the stack and set the starting index for the next element
        stack.append(NestedInteger())
        start = i + 1
      elif c == ',':
        # If we encounter a comma, check if there was a number between the previous comma or opening bracket and this one.
        # If there was, create a new NestedInteger object with that value and add it to the NestedInteger object on the top of the stack
        if i > start:
          num = int(s[start:i])
          stack[-1].add(NestedInteger(num))
        # Update the starting index for the next element to be parsed
        start = i + 1
      elif c == ']':
        # If we encounter a closing bracket, pop the top NestedInteger object from the stack and check if there was a number between the previous comma or opening bracket and this one.
        # If there was, create a new NestedInteger object with that value and add it to the popped NestedInteger object
        popped = stack.pop()
        if i > start:
          num = int(s[start:i])
          popped.add(NestedInteger(num))
        # If there are still NestedInteger objects on the stack, add the popped NestedInteger to the one on top. Otherwise, return the popped NestedInteger
        if stack:
          stack[-1].add(popped)
        else:
          return popped
        # Update the starting index for the next element to be parsed
        start = i + 1

```