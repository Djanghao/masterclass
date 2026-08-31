# Stack TS Solution

**Author:** kussha
**Votes:** 13
**Link:** [https://leetcode.com/problems/decode-string/solutions/3051710/](https://leetcode.com/problems/decode-string/solutions/3051710/)

---


# Code
```
function decodeString(s: string): string {
    const stack: [number, string][] = []
    let currentString = ''
    let currentMultiplier = 0

    for (let ch of s) {
        if (ch === '[') {
            stack.push([currentMultiplier, currentString])
            currentMultiplier = 0
            currentString = ''
        } else if (ch === ']') {
            const [prevMultiplier, prevString] = stack.pop()
            currentString = prevString + currentString.repeat(prevMultiplier)
        } else if (!isNaN(Number(ch))) {
            // it's digit
            currentMultiplier = currentMultiplier*10 + +ch
        } else {
            // it's a char
            currentString += ch
        }
    }

    return currentString
};
```