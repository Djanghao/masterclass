# JS & TS Solution

**Author:** JinZihang
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-subsets/solutions/2355574/](https://leetcode.com/problems/word-subsets/solutions/2355574/)

---

For Javascript, just ignore type declarations.

```
function wordSubsets(words1: string[], words2: string[]): string[] {
    const parents: string[] = [];
    const maxCharMap = new Map<string, number>();
    
    // Find the maximum occurences of characters
    words2.forEach(word => {
        let charMap = new Map<string, number>();
        Array.from(word).forEach(char => {
            charMap.set(char, !charMap.has(char) ? 1 : charMap.get(char) + 1);
        });
        
        charMap.forEach((count, char) => {
            maxCharMap.set(char, !maxCharMap.has(char) ? count : Math.max(count, maxCharMap.get(char)));
        });
    });
    
    // Check for the word that meets the need of character occurences
    words1.forEach(word => {
        let isParent = true;
        
        maxCharMap.forEach((count, char) => {
            if (isParent) isParent = word.split(char).length - 1 >= count;
        })
        
        if (isParent) parents.push(word);
    });
    
    return parents;
};
```