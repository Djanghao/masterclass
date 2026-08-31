# Using CharCode

**Author:** lochyb
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/6050723/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/6050723/)

---

# Intuition
Using CharCode and Incrementing the value to get a non clashing letter.

# Approach
Get Char Code then loop until you find a replacement letter that does not clash with the prev and next char.

# Code
```typescript []
function modifyString(s: string): string {
    const arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            const prevChar = arr[i - 1]?.charCodeAt(0);
            const nextChar = arr[i + 1]?.charCodeAt(0);

            let replacement = 'a'.charCodeAt(0);
            while (
                (prevChar && replacement === prevChar) || 
                (nextChar && replacement === nextChar)
            ) {
                replacement++;
            }
            
            arr[i] = String.fromCharCode(replacement);
        }
    }

    return arr.join('');
}

```