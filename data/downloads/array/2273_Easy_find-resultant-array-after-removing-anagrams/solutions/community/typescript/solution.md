# Simple and easy JavaScript/TypeScript solution

**Author:** alexandresheva
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2127195/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2127195/)

---

My simple and easy JavaScript/TypeScript solution:
```
function removeAnagrams(words: string[]): string[] {
    const newWords = [];
    let prevSortedWord = '';
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (sortedWord === prevSortedWord) continue;
        
        prevSortedWord = sortedWord;
        newWords.push(word);
    }
    return newWords;
};
```
Runtime:\xA081 ms, faster than\xA097.92%\xA0of\xA0TypeScript\xA0online submissions for\xA0Find Resultant Array After Removing Anagrams.
Memory Usage:\xA048.7 MB, less than\xA089.58%\xA0of\xA0TypeScript\xA0online submissions for\xA0Find Resultant Array After Removing Anagrams.
