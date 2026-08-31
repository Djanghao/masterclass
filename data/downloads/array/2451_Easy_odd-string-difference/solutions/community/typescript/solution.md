# Solution checking the first 3 words and comparing them against remaining ones

**Author:** mnjk
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/6079670/](https://leetcode.com/problems/odd-string-difference/solutions/6079670/)

---

# Intuition

We have the constraint `3 <= words.length <= 100`, so we can expect at least 3 words to appear. We will first check the first 3 words and see whether the word being different appears among those 3 words. If that's the case, we already found our solution. If that's not the case, the first 3 words are all the same. Given that the first 3 words are all the same, we pick one as the *representative word* for the *true difference array* and start finding the one word being different in the remaining part of the input.

# Approach

We will first check whether we already find the word being different among the first 3 words. If that's not the case, we need to find it in the remaining words. We can simply pick any word from the first 3 words and reference it since it is the one that is definitely the *representive word*.



# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$


# Code
```typescript []

function oddString(words: string[]): string {

  const toDiffArray = (s: string): number[] => {
    const result: number[] = [];
    for (let i = 0; i < s.length - 1; i++) {
      result.push(s[i + 1].charCodeAt(0) - s[i].charCodeAt(0));
    }
    return result;
  }

  const areSame = (a: number[], b: number[]): boolean => {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  // check the first 3 words manually
  const a0 = toDiffArray(words[0]);
  const a1 = toDiffArray(words[1]);
  const a2 = toDiffArray(words[2]);

  let prev: number[] = [];

  if (areSame(a0, a1)) {
    if (areSame(a1, a2)) {
      prev = a0;
    } else {
      return words[2];
    }
      
  } else { // found difference within the first 3 words
    if (areSame(a1, a2)) {
      // a0 is the one being differen
      return words[0];
    } else {
      // a1 is the one being different
      return words[1];
    }
  }

  // You reach this if there are more than 3 words in the input array
  // since we checked the first 3 words manually and they're all equal at this 
  // point, the one word "being different" MUST be in the remaining words that
  // start at 'n >= 4'

  for (let i = 3; i < words.length; i++) {
    const w = words[i];
    const newPrev: number[] = [];
    // console.log('Co: ', w, prev)
    for (let j = 0; j < w.length - 1; j++) {
      const diff = w[j + 1].charCodeAt(0) - w[j].charCodeAt(0);
      newPrev.push(diff);
      if (prev[j] !== diff) return w;
    }
    prev = newPrev;
  }
    
  return ''; // This shouldn't never be reached
};
```