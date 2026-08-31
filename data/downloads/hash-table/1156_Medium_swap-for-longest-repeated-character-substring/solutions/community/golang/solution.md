# O(n) intuitive solution with detailed explanation

**Author:** usr25
**Votes:** 2
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/758917/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/758917/)

---

There are 2 cases:
- There's a different character in between 2 groups of the current character we're checking. E.g: "aaabaa" -> max = 5, swap "b" with either first or last "a".
- There're more than one different character in between 2 groups or at the beginning or the end of one group. -> "aaabbaa" -> max = 4 swap first "b" with one of the last 2 "a".

**The intuition:**
- Check first character, if the next one is the same, keep moving.
- Once we meet a different character, save its position for the next round of check, check if the character after that is the same as the current character, if yes, keep checking, if no, we know that the possible max length of the substring is the length of the substring so far + 1 because we can only swap 1 from somewhere else to the substring.
- Make sure to check if index is out of bound and there're characters left to swap.

**Big O:**
Time = O(n) because:
- Building the hash map: O(n)
- One pass throught `text`: O(n), we jump over groups of the same chars and other operations take O(1)
- Total: O(2n) remove constant = O(n)

Space = O(n) because of the hash map.

**Code in Python3:**
*Runtime: 72 ms, faster than 71.59% of Python3 online submissions for Swap For Longest Repeated Character Substring.
Memory Usage: 14 MB, less than 100.00% of Python3 online submissions for Swap For Longest Repeated Character Substring.*
```python
class Solution:
    def maxRepOpt1(self, text: str) -> int:
        # Use a hash map to count all occurences of distinct characters in text
        counts = {}
        for char in text:
            counts[char] = counts.get(char, 0) + 1
        
        idx = 0
        nextCharIdx = 1
        maxLen = 0
        
        while idx < len(text):
            currentChar = text[idx]
            # Current substring length = 1 because of current char:
            currentLen = 1
            # Current count = value in hash map - 1 because we've included the current char:
            currentCount = counts[currentChar] - 1
            nextIdx = idx + 1
            # Number of different chars:
            diffChars = 0
            # As long as next idx in range and next char = current char
            while nextIdx < len(text) and currentChar == text[nextIdx]:
                currentCount -= 1
                currentLen += 1
                nextIdx += 1
            # Save next idx for the next round of check. This way we can jump forward
            # instead of checking every char:
            nextCharIdx = nextIdx
            # Out of while loop means we've met a different char, increment different chars count:
            diffChars += 1
            # Case 1: there's a different char in the middle of 2 groups:
            # If the char after that = current char:
            if nextIdx < len(text) - 1 and diffChars == 1 and currentChar == text[nextIdx + 1]:
                # Move next idx to the char after:
                nextIdx += 1
                # Do the same thing like above:
                while nextIdx < len(text) and currentChar == text[nextIdx]:
                    currentCount -= 1
                    currentLen += 1
                    nextIdx += 1
            # Out of the 2nd while loop means we've met another different chars:
            if nextIdx < len(text):
                diffChars += 1
            # If we have different chars in between and there're current char somewhere in text
            # we can swap it with one of the different chars to make longer substring:
            if diffChars > 0 and currentCount > 0:
                currentLen += 1
            # Compare the current length of the current substring with the saved max length:
            maxLen = max(maxLen, currentLen)
            # Move the idx to the next char idx to jump over the group of the same char:
            idx = nextCharIdx
            
        return maxLen
```
**Code in Javascript:**
*Runtime: 68 ms, faster than 96.15% of JavaScript online submissions for Swap For Longest Repeated Character Substring.
Memory Usage: 37.5 MB, less than 28.57% of JavaScript online submissions for Swap For Longest Repeated Character Substring.*
```javascript
var maxRepOpt1 = function(text) {
    const counts = new Map();
    for (const char of text) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }
    
    let idx = 0;
    let nextCharIdx = 1;
    let maxLen = 0;
    
    while (idx < text.length) {
        const currentChar = text[idx];
        let currentCount = counts.get(currentChar) - 1;
        let currentLen = 1;
        let nextIdx = idx + 1;
        let diffChars = 0;
        
        while (nextIdx < text.length && currentChar === text[nextIdx]) {
            currentCount--;
            currentLen++;
            nextIdx++;
        }
        nextCharIdx = nextIdx;
        diffChars++;
        
        if (nextIdx < text.length - 1 && diffChars === 1 && currentChar === text[nextIdx + 1]) {
            nextIdx++;
            while (nextIdx < text.length && currentChar === text[nextIdx]) {
                currentCount--;
                currentLen++;
                nextIdx++;
            }
        }
        
        if (nextIdx < text.length) diffChars++;
        if (diffChars > 0 && currentCount > 0) {
            currentLen++;
        }
        
        maxLen = Math.max(maxLen, currentLen);
        idx = nextCharIdx;
    }
    
    return maxLen;
};
```
**Code in Golang:**
*Runtime: 4 ms, faster than 33.33% of Go online submissions for Swap For Longest Repeated Character Substring.
Memory Usage: 2.2 MB, less than 100.00% of Go online submissions for Swap For Longest Repeated Character Substring.*
```go
func maxRepOpt1(text string) int {
    counts := make(map[string]int)
    for _, char := range text {
        letter := string(char)
        _, ok := counts[letter]
        if !ok {
            counts[letter] = 1
        } else {
            counts[letter]++
        }
    }
    
    idx := 0
    nextCharIdx := 1
    maxLen := 0
    
    for idx < len(text) {
        currentChar := text[idx]
        currentCount := counts[string(currentChar)] - 1
        currentLen := 1
        nextIdx := idx + 1
        diffChars := 0
        
        for nextIdx < len(text) && currentChar == text[nextIdx] {
            currentCount--
            currentLen++
            nextIdx++
        }
        nextCharIdx = nextIdx
        diffChars++
        
        if nextIdx < len(text) - 1 && diffChars == 1 && currentChar == text[nextIdx + 1] {
            nextIdx++
            for nextIdx < len(text) && currentChar == text[nextIdx] {
                currentCount--
                currentLen++
                nextIdx++
            }
        }
        
        if nextIdx < len(text) {
            diffChars++
        }
        if diffChars > 0 && currentCount > 0 {
            currentLen++
        }
        
        if currentLen > maxLen {
            maxLen = currentLen
        }
        idx = nextCharIdx
    }
    
    return maxLen
}
```