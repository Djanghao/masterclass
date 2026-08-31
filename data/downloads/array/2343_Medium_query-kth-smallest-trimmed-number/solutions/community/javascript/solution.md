# JavaScript Bucket Sort O(mn) ~200-250ms

**Author:** ektegjetost
**Votes:** 3
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2296474/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2296474/)

---

**TLDR:** Sort the queries by ```trim``` ascending. We'll bucket sort by nth digit from the right until we reach ```trim```, then return the kth index. Since they want the index of the number instead of the number itself, we'll keep an intermediate array of indices and keep sorting that instead of nums.

**Full Explanation:**
Suppose we have these inputs

```
const nums = [
  "65461289",
  "15640616",
  "89765543",
  "55312314",
]
const queries = [[4,3],[3,1],[1,5]]
```

This means we're being asked to slice nums along these columns and return the num at these rows
```
         3   1   2
3 "6 5 4 6 1 2 8 9"
  "1 5 6 4 0 6 1 6"
2 "8 9 7 6 5 5 4 3"
1 "5 5 3 1 2 3 1 4"
```

One solution would be to just sort all the nums for every query in ```O(m * n log n)``` time.

If we didn't have to think about the queries at all, a better way to sort these nums would be with a bucket sort in ```O (m * n)``` time. We would throw all the nums into buckets by digit starting from the right-most digit, and in each iteration we re-build the nums array starting from the lowest bucket (0 - 9). The ordering would look like:
```
     ... 5 4 3 2 1
  "6 5 4 6 1 2 8 9"
  "1 5 6 4 0 6 1 6"
  "8 9 7 6 5 5 4 3"
  "5 5 3 1 2 3 1 4"
```

So how about we re-arrange our queries so they line up with the order we would bucket sort these nums, and then sort until we reach the next column we're supposed to query.
```
         3   2   1
3 "6 5 4 6 1 2 8 9"
  "1 5 6 4 0 6 1 6"
1 "8 9 7 6 5 5 4 3"
2 "5 5 3 1 2 3 1 4"
```

Ok but we have to return our answer in the same order our queries came in, and we also have to return the original index of the kth number from each query (not the number itself). So we'll use two arrays which map to the queries and numbers and sort those instead of the queries and nums themselves.

```
var smallestTrimmedNumbers = function (nums, queries) {
  // create query index mapping and sort it to match the direction of our bucket sort
  const queriesByTrimLength = queries
    .map((_, i) => i)
    .sort((a, b) => queries[a][1] - queries[b][1]);
  
  // num mapping which we'll bucket sort and use to fill in our answer with indices
  const numIndices = nums.map((_, i) => i);
  const numLength = nums[0].length;
  // index of the current digit we're sorting
  let digit = 0;

  return queriesByTrimLength.reduce((queryAnswers, queryIdx) => {
    const [k, trim] = queries[queryIdx];

    // sort until we reach the index they want us to query
    while (trim > digit) {
      digit += 1;
      bucketSort(numIndices, nums, numLength - digit);
    }

    queryAnswers[queryIdx] = numIndices[k - 1];
    return queryAnswers;
  }, queries.map(() => 0));
};

const bucketSort = (indices, nums, digit) => {
  const buckets = new Array(10).fill(0).map(() => []);

  for (const idx of indices) buckets[+nums[idx][digit]].push(idx);

  let current = 0;
  for (const bucket of buckets) {
    for (const idx of bucket) {
      indices[current] = idx;
      current += 1;
    }
  }
};
```