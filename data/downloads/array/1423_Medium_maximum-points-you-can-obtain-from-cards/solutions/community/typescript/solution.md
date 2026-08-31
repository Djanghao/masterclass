# Typescript | Javascript | Sliding window | With comments

**Author:** OsidAbu-Alrub
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/2469999/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/2469999/)

---

```
function maxScore(cardPoints: number[], k: number): number {
  
  // first get the sum from length of array - k to length of array 
  let sum = 0;
  for(let i = cardPoints.length - k ; i < cardPoints.length ; i++)
    sum += cardPoints[i];
  
  // set the maxSum as the sum we got previously
  let maxSum = sum;
  
  // loop k times, removing the values added from previous loop (from end of array)
  // and adding new values from beginning of array
  // take the maximum value that you find whilst doing the previous two steps
  for(let i = 0, j = cardPoints.length - k ; i < k ; i++, j++){
    sum = sum - cardPoints[j] + cardPoints[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};
```
