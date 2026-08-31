# 591: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 3
**Link:** [https://leetcode.com/problems/tag-validator/solutions/3302456/](https://leetcode.com/problems/tag-validator/solutions/3302456/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. The function starts by checking if the input code starts and ends with '<' and '>', respectively. If it does not, it returns False since code must contain at least one tag.

2. The function initializes two variables: containsTag and stack. containsTag is a flag that is set to True if code contains at least one tag. stack is a list that will be used to keep track of the tags that have been opened but not closed yet.

3. Two helper functions are defined: isValidCdata and isValidTagName. isValidCdata checks if a given string is a valid CDATA section, which starts with '<![CDATA[' and ends with ']]>'. isValidTagName checks if a given tag name is valid. A tag name is valid if it is not empty, has a length of at most 9 characters, and all characters are uppercase. If isEndTag is True, it also checks if the corresponding start tag is at the top of the stack.

4. The function loops through each character in code. If the stack is empty and containsTag is True, it means that code contains a tag that has not been closed yet, so the function returns False.

5. If the current character is '<', the function checks if it is a CDATA section, an end tag, or a start tag. If it is a CDATA section, the function checks if it is valid by looking for the closing ']]>' sequence. If it is an end tag, the function checks if it is valid by looking for the corresponding start tag at the top of the stack. If it is a start tag, the function checks if it is valid by looking for the closing '>' character. If any of these checks fail, the function returns False.

6. If the current character is not '<', the function moves on to the next character.

7. If the function reaches the end of code and the stack is not empty, it means that some tags were not closed, so the function returns False.

8. If the function reaches the end of code and containsTag is False, it means that code did not contain any tags, so the function returns False.

9. If none of the above conditions are met, it means that code is valid, so the function returns True.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
  def isValid(self, code: str) -> bool:
    if code[0] != '<' or code[-1] != '>':
      return False
    containsTag = False  # Flag to check if code contains a tag
    stack = []  # Stack to keep track of tags

    def isValidCdata(s: str) -> bool:  # Check if a given string is valid CDATA
        return s.find('[CDATA[') == 0

    def isValidTagName(tagName: str, isEndTag: bool) -> bool:  # Check if a given tag name is valid
        nonlocal containsTag
        if not tagName or len(tagName) > 9:  # Check tag name length
            return False
        if any(not c.isupper() for c in tagName):  # Check if all characters in tag name are uppercase
            return False

        if isEndTag:  # Check if end tag is valid
            return stack and stack.pop() == tagName

        containsTag = True  # Set flag to True
        stack.append(tagName)  # Push tag to stack
        return True

    i = 0
    while i < len(code):
        if not stack and containsTag:  # If stack is empty but code contains a tag, return False
            return False
        if code[i] == '<':
            if stack and code[i + 1] == '!':  # Check if CDATA
                closeIndex = code.find(']]>', i + 2)
                if closeIndex == -1 or not isValidCdata(code[i + 2:closeIndex]):  # Check if CDATA is valid
                    return False
            elif code[i + 1] == '/':  # Check if end tag
                closeIndex = code.find('>', i + 2)
                if closeIndex == -1 or not isValidTagName(code[i + 2:closeIndex], True):  # Check if end tag is valid
                    return False
            else:  # Check if start tag
                closeIndex = code.find('>', i + 1)
                if closeIndex == -1 or not isValidTagName(code[i + 1:closeIndex], False):  # Check if start tag is valid
                    return False
            i = closeIndex  # Set index to end of tag
        i += 1

    return not stack and containsTag  # Check if stack is empty and code contains a tag

```