# JavaScript Hash Table

**Author:** ektegjetost
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2994814/](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2994814/)

---

I don't know of any clever math we can use on the current result to subtract one multiple and add another since there are no common factors.

Instead, we can store lists of multiples of each number within our window.

Given that example in the description, we'd have:
```javascript
input: [5,4,5,7,4,4]
// if k were 6, we'd have a map that looks like this:
{
  4: [0, 4, 16, 64],
  5: [0, 5, 25],
  7: [0, 7]
}
```

So as we iterate through nums:
- When we add a number to our map, we'll subtract the current multiple and push a new multiple to the list
- When we remove a number from our map, we'll subtract the current multiple, pop from the list and add our new current multiple
- This is all pretty simple with MOD math since we're only doing addition / subtraction. If our current value ever goes below 0 just add MOD to it.


```javascript
var maxFrequencyScore = function(nums, k) {
  const MOD = 10 ** 9 + 7;
  const scores = new Map();  

  let curr = 0;
  
  // build out the initial window
  for (let i = 0; i < k; i += 1) {
    // default to [0] so we can subtract this from curr easily
    const scoreList = scores.get(nums[i]) || [0];
	
	// but then we gotta make sure we do || 1 here
    scoreList.push((scoreList.at(-1) || 1) * nums[i] % MOD);
    scores.set(nums[i], scoreList);
	
	// subtract the previous multiple, add the current multiple
    curr = (curr - scoreList.at(-2) + scoreList.at(-1)) % MOD;
    if (curr < 0) curr += MOD;
  }
  
  let max = curr;
  
  for (let i = k; i < nums.length; i += 1) {
    const prevList = scores.get(nums[i - k])
    
    curr = curr - prevList.at(-1) + prevList.at(-2);
    if (curr < 0) curr += MOD;
    prevList.pop();
    
    const scoreList = scores.get(nums[i]) || [0];
    scoreList.push((scoreList.at(-1) || 1) * nums[i] % MOD);
    scores.set(nums[i], scoreList);
    
    curr = curr - scoreList.at(-2) + scoreList.at(-1);
    if (curr < 0) curr += MOD;
    
    curr %= MOD;
    
    max = Math.max(max, curr);
  }
  
  return max;
};
```