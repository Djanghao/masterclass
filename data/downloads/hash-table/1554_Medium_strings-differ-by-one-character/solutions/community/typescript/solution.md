# javascript/Typescript  500ms

**Author:** gourav_gunjan
**Votes:** 0
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/1873429/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/1873429/)

---

```
function differByOne(dict: string[]): boolean {
    const wordCombinations = new Set<string>();
    for (let word of dict) {
        for (let i = 0; i < word.length; i++) {
            const combination = word.slice(0,i) + '*' + word.slice(i+1);
            if (wordCombinations.has(combination)) {
                return true;
            }
            wordCombinations.add(combination);
        }
        
    }
    return false;
};
```