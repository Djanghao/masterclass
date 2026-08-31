# Easyy straight forward solution

**Author:** user8697Ix
**Votes:** 0
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/5695527/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/5695527/)

---

# Intuition
Easyy and straight forward solution
# Approach
count the letters of s that equals the letters, and calc 
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```typescript []
function percentageLetter(s: string, letter: string): number {
    let countLetterInsideS = 0
    for (let char of s) {
         if (char === letter) {
            countLetterInsideS++
        }
    }


    return Math.floor((countLetterInsideS / s.length) * 100)
};
```