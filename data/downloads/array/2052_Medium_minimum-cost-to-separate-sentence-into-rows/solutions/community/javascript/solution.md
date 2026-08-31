# Javascript - top down, recursive, memoization, explanation

**Author:** quadcoders
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/1814206/](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/1814206/)

---

```
/** https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/
 * @param {string} sentence
 * @param {number} k
 * @return {number}
 */
var minimumCost = function(sentence, k) {
  // Memo
  this.memo = new Map();
  
  // Split the sentences into array
  let sentences = sentence.split(' ');
  return dp(sentences, k, 0);
};

var dp = function(sentences, k, index) {
  // Base case
  // There are 2 base case, first is when index is at the end of the sentences, second is when the length of the sentences is less than or equal to `k`
  let length = sentences.reduce((sum, x) => sum + x.length, 0) + sentences.length - 1;
  if (index >= sentences.length || length <= k) {
    return 0;
  }
  
  // Return from memo
  if (this.memo.has(index) === true) {
    return this.memo.get(index);
  }
  
  let min = Infinity;
  
  // Grab as many words as possible, loop start from the end
  for (let i = sentences.length - 1; i >= index; i--) {
    // Current words
    let curr = sentences.slice(index, i + 1);
    
    // Count the length of current words
    let currLength = curr.reduce((sum, x) => sum + x.length, 0) + curr.length - 1;
    
    // Current length is longer than the limit, continue
    if (currLength > k) {
      continue;
    }
    
    let cost = 0;
    
    // Only count the cost if it's not the last row
    if (i !== sentences.length - 1) {
      cost += (k - currLength) ** 2;
      cost += dp(sentences, k, i + 1);
    }
    
    // Minimum cost
    min = Math.min(min, cost);
  }
  
  // Set memo
  this.memo.set(index, min);
  
  return min;
};
```