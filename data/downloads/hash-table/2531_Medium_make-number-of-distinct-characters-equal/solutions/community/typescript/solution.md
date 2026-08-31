# NOT Faster with O(n^2), but working, Javascript and Typescript solution.

**Author:** anuchataowkaen
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/4784811/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/4784811/)

---

# Code
``` javascript []
function isItPossible(word1, word2) {
  const freqWord1 = {};
  const freqWord2 = {};
  for (const e of word1) {
    freqWord1[e] = (freqWord1[e] || 0) + 1;
  }
  for (const e of word2) {
    freqWord2[e] = (freqWord2[e] || 0) + 1;
  }
  const keysFreqWord1 = Object.keys(freqWord1);
  const keysFreqWord2 = Object.keys(freqWord2);
  if (
    word1.length === word2.length &&
    keysFreqWord1.length === keysFreqWord2.length
  )
    return true;
  for (const e of keysFreqWord1) {
    for (const r of keysFreqWord2) {
      const copyFreqWord1 = { ...freqWord1 };
      const copyFreqWord2 = { ...freqWord2 };
      copyFreqWord1[e]--;
      if (copyFreqWord1[e] === 0) delete copyFreqWord1[e];
      !copyFreqWord1[r] && (copyFreqWord1[r] = 1);
      copyFreqWord2[r]--;
      if (copyFreqWord2[r] === 0) delete copyFreqWord2[r];
      !copyFreqWord2[e] && (copyFreqWord2[e] = 1);
      if (
        Object.keys(copyFreqWord1).length === Object.keys(copyFreqWord2).length
      )
        return true;
    }
  }
  return false;
}


```

``` typescript []
function isItPossible(word1: string, word2: string): boolean {
  const freqWord1: Record<string, number> = {};
  const freqWord2: Record<string, number> = {};

  for (const e of word1) {
    freqWord1[e] = (freqWord1[e] || 0) + 1;
  }
  for (const e of word2) {
    freqWord2[e] = (freqWord2[e] || 0) + 1;
  }
  const keysFreqWord1 = Object.keys(freqWord1);
  const keysFreqWord2 = Object.keys(freqWord2);
  if (
    word1.length === word2.length &&
    keysFreqWord1.length === keysFreqWord2.length
  )
    return true;

  for (const e of keysFreqWord1) {
    for (const r of keysFreqWord2) {
      const copyFreqWord1 = { ...freqWord1 };
      const copyFreqWord2 = { ...freqWord2 };

      copyFreqWord1[e]--;
      if (copyFreqWord1[e] === 0) delete copyFreqWord1[e];
      !copyFreqWord1[r] && (copyFreqWord1[r] = 1);

      copyFreqWord2[r]--;
      if (copyFreqWord2[r] === 0) delete copyFreqWord2[r];
      !copyFreqWord2[e] && (copyFreqWord2[e] = 1);

      if (
        Object.keys(copyFreqWord1).length === Object.keys(copyFreqWord2).length
      )
        return true;
    }
  }

  return false;
}

```