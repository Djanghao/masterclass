# simple, fast, solution

**Author:** user1674H
**Votes:** 0
**Link:** [https://leetcode.com/problems/tag-validator/solutions/5949292/](https://leetcode.com/problems/tag-validator/solutions/5949292/)

---

# Intuition
When faced with the problem of validating a string as a well-formed XML-like structure, the primary challenge is to ensure that every tag is properly opened and closed in a nested manner, and that special CDATA sections are correctly identified and handled. The string should not contain any stray text outside of the tags unless it's encapsulated within CDATA sections.
# Approach
## To solve this problem, the approach involves:
1. Using a Stack: A stack is utilized to keep track of open tags. This helps in ensuring that tags are closed in the correct order, adhering to the Last In, First Out (LIFO) principle.
2. Parsing the String: The string is parsed character by character. When an opening tag is encountered, its name is validated and pushed onto the stack. For closing tags, the stack is popped and the tag name is checked for a match. If there's a mismatch, or if the stack is empty when trying to pop (indicating an unbalanced tag), the string is immediately deemed invalid.
3. Handling CDATA Sections: CDATA sections are identified by their specific starting sequence <![CDATA[. The content inside a CDATA section is ignored in terms of tag validation, and parsing resumes after the closing sequence ]]>.
4. Validation Checks: Additional checks are performed to ensure there's no text outside of the root tag and that the entire string is properly enclosed within a single root element.
# Complexity
Time complexity: The time complexity is $$O(n)$$, where $$n$$ is the length of the input string. This is because each character in the string is processed once.
Space complexity: The space complexity is $$O(m)$$, where $$m$$ is the maximum depth of nested tags. This is due to the stack used to keep track of the open tags.


# Code
```typescript []
function isValid(code: string): boolean {
    const tagStack: string[] = [];
    let i = 0;

    // Early exit if the code does not start with a tag
    if (!code.startsWith("<") || code[1] === '!' || code[1] === '/') {
        return false;
    }

    while (i < code.length) {
        if (code.startsWith("<![CDATA[", i)) {
            const cdataEnd = code.indexOf("]]>", i);
            if (cdataEnd === -1) {
                return false; // Unclosed CDATA section
            }
            i = cdataEnd + 3; // Move past the CDATA section
        } else if (code.startsWith("</", i)) {
            // Closing tag
            const closeTagEnd = code.indexOf('>', i);
            if (closeTagEnd === -1) {
                return false; // No closing '>'
            }
            const tagName = code.substring(i + 2, closeTagEnd);
            if (tagStack.length === 0 || tagStack.pop() !== tagName) {
                return false; // Tag mismatch or stack underflow
            }
            i = closeTagEnd + 1;
            if (tagStack.length === 0 && i !== code.length) {
                return false; // There should be no text after the outermost tag
            }
        } else if (code.startsWith("<", i)) {
            // Opening tag
            const openTagEnd = code.indexOf('>', i);
            if (openTagEnd === -1) {
                return false; // No closing '>'
            }
            const tagName = code.substring(i + 1, openTagEnd);
            if (!/^[A-Z]{1,9}$/.test(tagName)) {
                return false; // Invalid tag name
            }
            tagStack.push(tagName);
            i = openTagEnd + 1;
        } else {
            if (tagStack.length === 0) {
                return false; // Text outside of a tag
            }
            i++; // Continue through the text content
        }
    }

    return tagStack.length === 0; // All tags should be closed
}
```