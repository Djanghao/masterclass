# Simple and readable solution using Sets and Maps

**Author:** asoov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5415093/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5415093/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Wanted to use leverage of Maps and Sets as with frequent access these are usually more performant.

First I analyze the word array to match with first and last letter being a vowel and store this information via prefix sum in a Map. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const vowels = new Set(["a", 'e','i', 'o', 'u'])
function vowelStrings(words: string[], queries: number[][]): number[] {
    const map = new Map<number, number>
    const result = []
    for(let m = 0; m < words.length; m++) {
        const word = words[m]
        const firstLetter = word[0];
        const lastLetter = word[word.length - 1];
        const isFirstLetterString = vowels.has(firstLetter)
        const isLastLetterString = vowels.has(lastLetter)
        const firstAndLastString = isFirstLetterString && isLastLetterString

        const previousPrefixIndex = map.get(m-1) ?? 0
        map.set(m, firstAndLastString ? previousPrefixIndex + 1 : previousPrefixIndex)
    }

    for(let n = 0; n < queries.length; n++) {
        const [start, end] = queries[n]

        const sumEnd = map.get(end)
        const sumStart = map.get(start -1 ) ?? 0
        result.push(sumEnd - sumStart)
    }
    return result
};
```