# Don't calculate weights!

**Author:** borysll
**Votes:** 9
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3111897/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3111897/)

---

# Intuition
Effectively we are not putting marbles to k bags we rather set k-1 boundaries in array. E.g. given
```
[1, 4, 2, 5, 2]
```
there are 4 placeholders for boundaries (where commas are), and we can place two boundaries e.g.
```
1, 4| 2| 5, 2
```
That gives us bags [[1,4],[2],[5,2]] or (1+4)+(2+2)+(5+2) = 16 scores.
In total there are (n-1)(n-2) ... (n-k) combinations

# Approach
Since we at the end need to output only difference between weights instead of calculating weights we actually can calculate *weight increments*. That means how greatly weight will be increased when we place the boundary. And to our luck the weight contribution always equals sum of the neighbouring boundary weights. E.g. in example above:
```
1, 4| 2| 5, 2
    \u2191  \u2191
   1st 2nd
```
weight contribution for the 1st and the 2nd boundary is
```
w1 = weights[1] + weights[2] = 4 + 2 = 6
w2 = weights[2] + weights[3] = 2 + 5 = 7
```

In other words we don't need to calculate differences of scores, because we can calculate differences between increments.

Thus approach will be like this:
1. Create array of boundary weight increments. (I used JavaScript array method map and slice for that)
2. sort the array of boundary weight increments from lowest to highest
3. Calculate maximal contribution by summing k-1 last element of the sorted array. In JavaScript I am using reduce.
4. Calculate minimal contribution by summing k-1 first element of the sorted array
5. Return the difference between the maximal and the minimal contributions. 

Since we need only to do direct calculation of each element O(n) and do sorting O(n*log(n)) and index k elements that give us complexity O(n*log(n))

# Complexity
- Time complexity:
O(n*log(n))

- Space complexity:
O(n)

# Code
```
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  if (weights.length === k) return 0;
  let getEdgeWeights = weights.map((n, i, a) => (i < a.length - 1 ? n + a[i + 1] : 0));
  getEdgeWeights = getEdgeWeights.slice(0, weights.length - 1);
  getEdgeWeights = getEdgeWeights.sort((a, b) => a - b);
  let maxScores = getEdgeWeights.slice(getEdgeWeights.length - k + 1).reduce((a, b) => a + b, 0);
  let minScores = getEdgeWeights.slice(0, k - 1).reduce((a, b) => a + b, 0);
  return maxScores - minScores;
};

```