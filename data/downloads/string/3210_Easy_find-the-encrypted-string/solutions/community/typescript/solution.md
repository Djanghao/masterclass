# time: O(N), space: O(1)

**Author:** brudnovskyi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5986790/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5986790/)

---

```typescript []
function getEncryptedString(str: string, shift: number): string {
    const len = str.length;
    const shiftIdx = shift >= len ? shift - (Math.floor(shift / len) * len) : shift;
    let result = "";

    for (let i = 0; i < len; i++) {
        let decodeIdx = shiftIdx + i;

        if (i + shiftIdx > len - 1) decodeIdx = shiftIdx - (len - i);
        
        result += str[decodeIdx];
    }

    return result;
};
```