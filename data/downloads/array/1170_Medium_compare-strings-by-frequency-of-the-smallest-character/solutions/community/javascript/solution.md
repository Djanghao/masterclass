# Faster than 80 % Very easy intutive solution!!!!!!!

**Author:** harsh_sutaria_25
**Votes:** 2
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/2570922/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/2570922/)

---

```

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  let res = [];

  // frequency of query
  queries = queries.map((q) => countFrequency(q)); //[3,2]

  //frequency of words
  words = words.map((w) => countFrequency(w)); //[1,2,3,4]

  //sorting in assending   order
  words = words.sort((a, b) => a - b);

  //iterate over and do binary search
  for (let i of queries) {
    //start and end pointer
    let start = 0,
      end = words.length - 1;

    // classic binary search
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      console.log("start , mid , end", start, mid, end);
      if (i < words[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    res.push(words.length - 1 - end);
  }

  return res;
};

function countFrequency(str) {
  let freq = {};
  

  for (let i of str) {
    freq[i] ? (freq[i] += 1) : (freq[i] = 1);
  }

  return freq[Object.keys(freq).sort()[0]];
}

```