# ✅ Easy to understand fast solution

**Author:** Zakariae_233
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4921040/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4921040/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const A_ASCII_CODE = 97;

type charData = {
    char: string;
    frequency: number;
    lastIndex: number;
};

const lastNonEmptyString = (s: string): string => {
    const resultArr: charData[] = [];
    let maxFrequency = 1;
    let result = "";

    for(let i = 0; i < s.length; i++) {
        const charIndex = s.charCodeAt(i) - A_ASCII_CODE;
        const currentItem = resultArr[charIndex];

        if(!currentItem) {
            resultArr[charIndex] = { 
                char: s[i],
                frequency: 1,
                lastIndex: i,
            };
        } else {
            const newFreq = currentItem.frequency + 1;

            resultArr[charIndex] = {
                char: s[i],
                frequency: newFreq,
                lastIndex: i,
            };
            if (maxFrequency < newFreq)
                maxFrequency = newFreq;
        }
    }

    resultArr.filter(({ frequency }) => frequency === maxFrequency)
        .sort((a,b) => a.lastIndex - b.lastIndex)
        .forEach(item => {
            result += item.char;
        });
    
    return result;
}
```