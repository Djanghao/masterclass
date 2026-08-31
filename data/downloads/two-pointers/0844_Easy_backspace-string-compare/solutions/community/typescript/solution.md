# [TypeScript] O(N) time and O(1) space

**Author:** austinrsands
**Votes:** 8
**Link:** [https://leetcode.com/problems/backspace-string-compare/solutions/1803112/](https://leetcode.com/problems/backspace-string-compare/solutions/1803112/)

---

```
function backspaceCompare(s: string, t: string): boolean {
    let sIndex = s.length - 1;
    let tIndex = t.length - 1;
    
    // Start from end of strings and compare the surviving characters (those that don't get backspaced)
    while (sIndex >= 0 || tIndex >= 0) {
        
        // Go to index of next surviving character in s
        if (s.charAt(sIndex) === '#') {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                sIndex--;
                if (s.charAt(sIndex) === '#')
                    charactersToSkip++;
                else
                    charactersToSkip--;
            }
        }
        
        // Go to index of next surviving character in t
        if (t.charAt(tIndex) === '#') {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                tIndex--;
                if (t.charAt(tIndex) === '#')
                    charactersToSkip++;
                else
                    charactersToSkip--;
            }
        }
        
        // If the surviving characters do not match, the strings are different
        if (s.charAt(sIndex) !== t.charAt(tIndex)) return false;
        
        sIndex--;
        tIndex--;
    }
    return true;
};
```