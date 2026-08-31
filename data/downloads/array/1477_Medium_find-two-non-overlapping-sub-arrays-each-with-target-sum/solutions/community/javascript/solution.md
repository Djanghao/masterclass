# Javascript O(n) with Hashmap, and sliding window

**Author:** fbecker11
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/766171/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/766171/)

---

These are Java solutions with great votes. I've just converted them in to Javascript

**Hashmap**
```
function minSumOfLengths(arr, target) {
  let hmap = new Map();
  let sum = 0, lsize = Number.MAX_VALUE, result = Number.MAX_VALUE;
  hmap.set(0, -1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    hmap.set(sum, i); // stores key as sum upto index i, and value as i.
  }
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (hmap.get(sum - target) != null) {
      lsize = Math.min(lsize, i - hmap.get(sum - target));      // stores minimum length of sub-array ending with index<= i with sum target. This ensures non- overlapping property.
    }
    //hmap.get(sum+target) searches for any sub-array starting with index i+1 with sum target.
    if (hmap.get(sum + target) != null && lsize < Number.MAX_VALUE) {
      result = Math.min(result, hmap.get(sum + target) - i + lsize); // updates the result only if both left and right sub-array exists.
    }
  }
  return result == Number.MAX_VALUE ? -1 : result;
}
```

**Sliding Window**
```
var minSumOfLengths = function (arr, target) {
  let n = arr.length;
  let best = new Array(n).fill(Number.MAX_VALUE);
  let sum = 0, start = 0, ans = Number.MAX_VALUE, bestSoFar = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    while (sum > target) {
      sum -= arr[start];
      start++;
    }
    if (sum == target) {
      if (start > 0 && best[start - 1] != Number.MAX_VALUE) {
        ans = Math.min(ans, best[start - 1] + i - start + 1);
      }
      bestSoFar = Math.min(bestSoFar, i - start + 1);
    }
    best[i] = bestSoFar;
  }
  return ans == Number.MAX_VALUE ? -1 : ans;
};
```