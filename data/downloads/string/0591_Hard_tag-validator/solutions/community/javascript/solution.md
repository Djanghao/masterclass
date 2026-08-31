# Javascript solution using regular expressions. Readable, commented

**Author:** alpaca79
**Votes:** 1
**Link:** [https://leetcode.com/problems/tag-validator/solutions/1714198/](https://leetcode.com/problems/tag-validator/solutions/1714198/)

---

Seeing no other Javascript solutions using the stack method described in the solution, I decided to post my result. I was able to solve the initial test case with regular expressions and using the stack solution to add opening tags as they are seen and popping them off when corresponding closing tags are seen. But wow, the test cases here are pretty tough to get through. 3-4 hours of trial and error, mostly tweaking the regexes to get to this working solution.

I'm sure there may be some optimizations I'm missing or improved regexes. Leave them in the comments! Also if you disagree with the time complexity being O(n) leave that in the comments as well! I'm not entirely sure what additional complexity Javascript regexes may impy under the hood.

```
// O(n) time - sliding window, considering regex checks as O(1)
// O(n) space - stack containing opening tags seen + substring slices for regex checks

const isValid = function(code) {    
    const stack = []
    
    // magic regexes
    const openingTag = /^<[A-Z]{1,9}(>){1}/
    const closingTag = /<\\/[A-Z]{1,9}(>){1}/
    const cdata = /<\\!\\[CDATA\\[.*?(\\]\\]>)+?/
        
    // return early if string does not open with valid opening tag
    // and close with valid end tag
    const closingTagEndIndex = code.length < 13 ? 0 : code.length - 13
    const openingTagEndIndex = code.length < 12 ? code.length : 12
    if (!openingTag.test(code.slice(0, openingTagEndIndex))) {
        return false
    }
    if (!closingTag.test(code.slice(closingTagEndIndex, code.length))) {
        return false
    }
    
    // valid last index must be at least "</A>" characters
    const lastIndex = code.length - 3
    let index = 0
    
    // sliding window
    while (index < lastIndex) {
        const char = code[index]
        
        if (char === "<") {
            const nextChar = code[index + 1]
            const str = code.slice(index, code.length)

            // check if valid opening tag, if so push onto stack and advance index to end of opening tag
            if (/[A-Z]/.test(nextChar) && openingTag.test(str)) {
                const tag = str.match(openingTag)[0]
                stack.push(tag)
                index = index + tag.length - 1
            }
            
            // check valid closing tag
            else if (nextChar === "/" && closingTag.test(str)) {
                const tag = str.match(closingTag)[0]
                
                // strip out "/" to compare with opening tag on top of stack
                const matchingOpeningTag = tag[0] + tag.slice(2)
                if (stack.length && stack[stack.length - 1] === matchingOpeningTag) {
                    stack.pop(tag)
                }
                // if corresponding opening tag is not on top of stack, invalid
                else {
                    return false
                }
                // advance index to end of closing tag
                index = index + tag.length - 1
                
                // if this is final closing tag, index must be at end of string, otherwise invalid
                if (stack.length === 0 && index !== code.length - 1) {
                    return false
                }
            }
            
            // check if valid cdata tag, if so, advance index to end of cdata tag
            else if (nextChar === "!" && cdata.test(code.slice(index))) {
                const cdataTag = code.slice(index).match(cdata)[0]
                index = index + cdataTag.length - 1
            }
 
            // invalid char after <
            else {
                return false
            }
        }
        index++   
    }

    // if we got here and no opening tags are in the stack, string is valid
    return stack.length === 0
};
```