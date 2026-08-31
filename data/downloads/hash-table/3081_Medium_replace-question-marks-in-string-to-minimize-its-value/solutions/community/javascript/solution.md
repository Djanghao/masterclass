# JavaScript solution

**Author:** aditya_0_kasaudhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/5066583/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/5066583/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function(s) {
  /* 
    find the character to minimize the sum of value.
    xxx??xxx??xxx
    abcXdefj
    m Q, n Q; + (m + n)

    freq

    fill the x with the min freq character, lexicographically smallest charater.
  */
  const charFreq = new Array(26).fill(0);
  const questionIndices = [];
  const offset = 'a'.charCodeAt(0);
  for (let cur = 0; cur < s.length; cur++) {
    if (s.charAt(cur) !== '?') {
      const idx = s.charCodeAt(cur) - offset;
      charFreq[idx]++;
    } else {
      questionIndices.push(cur);
    }
  }

  const charFreqHeap = new PriorityQueue({
    compare: (a, b) => {
      if (a.freq !== b.freq) return a.freq - b.freq;
      else return a.idx > b.idx
    }
  });
  charFreq.forEach((freq, idx) => {
    charFreqHeap.enqueue({freq, idx})
  })
  const resArr = s.split("")
  const replacement = []
  questionIndices.forEach(idx => {

    const target = charFreqHeap.dequeue();
    target.freq++;
    charFreqHeap.enqueue(target);

    replacement.push(target.idx);
  })
  replacement.sort((a, b) => a - b)

  questionIndices.forEach((idx, no) => {
    resArr.splice(idx, 1, String.fromCharCode(replacement[no]+offset))
  })
  
  return resArr.join("");
};
```