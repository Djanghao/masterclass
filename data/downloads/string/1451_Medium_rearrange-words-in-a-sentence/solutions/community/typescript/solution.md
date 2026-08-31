# Simple TypeScript soluttion

**Author:** danil-boiko
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4396825/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4396825/)

---

# Approach
1. Split our `text` by space and push it to array
2. Sort array from step 1
3. Create `sortedString` from array by space and reduce all letters to lowercase
4. Return first letter in uppercase + `sortedString` without 1 letter

# Code
```
function arrangeWords(text:string): string {
  const array = text.split(' ')
  array.sort((a, b) => a.length - b.length)
  let sortedString = array.join(' ').toLowerCase()
  let firstLetter = sortedString[0].toUpperCase()

  return `${firstLetter}${sortedString.slice(1)}`
};
```