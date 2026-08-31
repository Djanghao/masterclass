# [py][ts][c#] Simple solution

**Author:** alex_lanes
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/4707842/](https://leetcode.com/problems/reverse-only-letters/solutions/4707842/)

---

# Code
``` Python []
class Solution:
    def is_letter (self, char: str) -> bool:
        """
            a..z -> 97..122
            A..Z -> 65..90
        """
        ascii = ord(char)
        return (ascii >= 97 and ascii <= 122) or (ascii >= 65 and ascii <= 90)


    def reverseOnlyLetters (self, s: str) -> str:
        s = list(s) # to char array
        l, r = 0, len(s) - 1 # left and right indexes

        # sliding window
        while l < r and r >= 0 and l < len(s):
            if not self.is_letter(s[l]): # skip non letter on left
                l += 1
                continue
            if not self.is_letter(s[r]): # skip non letter on right
                r -= 1
                continue
            
            # swap
            tmp = s[l] 
            s[l] = s[r]
            s[r] = tmp
            
            # next
            l += 1
            r -= 1

        return "".join(s)
       
```
``` Typescript []
function is_letter (char: string): boolean {
    // a..z -> 97..122
    // A..Z -> 65..90
    const ascii = char.charCodeAt(0)
    return (ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90)
}

function reverseOnlyLetters (s: string): string {
    const chars = s.split("")
    let l = 0, r = s.length - 1 // left and right indexes

    // sliding window
    while (l < r && r >= 0 && l < s.length) {
        if (!is_letter(chars[l])) { // skip non letter on left
            l++
            continue
        }
        if (!is_letter(chars[r])) { // skip non letter on right
            r--
            continue
        }
        
        // swap
        const tmp = chars[l] 
        chars[l] = chars[r]
        chars[r] = tmp
        
        // next
        l++
        r--
    }
    
    return chars.join("")
};
```
``` C# []
public class Solution {
    private bool is_letter (char c) {
        // a..z -> 97..122
        // A..Z -> 65..90
        int ascii = (int)c;
        return (ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90);
    }

    public string ReverseOnlyLetters (string s) {
        char[] chars = s.ToCharArray();
        int l = 0, r = s.Length - 1; // left and right indexes

        // sliding window
        while (l < r && r >= 0 && l < s.Length) {
            if (!is_letter(chars[l])) { // skip non letter on left
                l++;
                continue;
            }
            if (!is_letter(chars[r])) { // skip non letter on right
                r--;
                continue;
            }
            
            // swap
            char tmp = chars[l];
            chars[l] = chars[r];
            chars[r] = tmp;
            
            // next
            l++;
            r--;
        }
        
        return new string(chars);
    }
}
```