# Brute force + O(n) Hashmap solution

**Author:** jaimeloeuf
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/5008052/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/5008052/)

---

### Brute Force
Simple brute force method by computing the reverse of every single word and looking ahead the rest of the words to see if any of those match. This has a TC of O(n^2) where n is the number of elements in `words`, and a SC of O(1).

```typescript
function maximumNumberOfStringPairs(words: string[]): number {
  let pairs = 0;

  for (let i = 0; i < words.length; i++) {
    const reversedWord = words[i].split("").reverse().join("");

    for (let j = i + 1; j < words.length; j++) {
      console.log("object", reversedWord, words[j]);

      if (words[j] === reversedWord) {
        pairs++;
        break;
      }
    }
  }

  return pairs;
}
```

### Efficient hashmap solution
This is a more efficient solution using a "Hashmap" or Set in this case, so that the loop only run once as we "remember" what was already seen before.

This has a TC and SC of O(n) where n is the number of elements in `words`.

```typescript
function maximumNumberOfStringPairs(words: string[]): number {
  let pairs = 0;
  const set: Set<string> = new Set();

  for (let i = 0; i < words.length; i++) {
    // If the set already contains the current word, it means a pair is found!
    if (set.has(words[i])) {
      pairs++;
      continue;
    }

    // Else, reverse the current word and add it to the set
    set.add(words[i].split("").reverse().join(""));
  }

  return pairs;
}
```