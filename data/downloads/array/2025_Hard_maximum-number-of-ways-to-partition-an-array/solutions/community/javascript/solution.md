# Easy-to-understand JavaScript solution

**Author:** lccpc10
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/5612264/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/5612264/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Not the fastest solution, but much easier to understand and it passes the LeetCode tests.
# Approach
- Iterate through the array from i = 1 to i = nums.length - 1, partitioning it into left and right subarrays.
- There are three possible scenarios:
  - lTotal === rTotal: update the count for non-change
  - Update left: lTotal+k-target = rTotal
  - Update right: lTotal = rTotal+k-target
- From the target value, determine the index at which updating its value to k will result in a valid partition.
- After evaluating all possible partitions, take the maximum value among them.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var waysToPartition = function (array, k) {
  let lTotal = 0, lLookup = {};
  let [rTotal, rLookup] = preprocess(array);
  let countZero = 0;
  const counts = new Array(array.length).fill(0);
  for (let i = 1; i < array.length; i++) {
    const value = array[i - 1];
    lTotal += value;
    rTotal -= value;
    lookupByAdd(lLookup, i - 1, value);
    lookupByRemove(rLookup, i - 1, value);
    // for lTotal === rTotal
    if (lTotal === rTotal) {
      countZero++;
    }
    // changeLeft
    else if (!!lLookup[lTotal - rTotal + k]) {
      const lTarget = lTotal - rTotal + k;
      const lIndices = [...lLookup[lTarget]];
      lIndices.forEach(index => {
        counts[index]++;
      });
    }
    // changeRight
    else if (!!rLookup[rTotal - lTotal + k]) {
      const rTarget = rTotal - lTotal + k;
      const rIndices = rLookup[rTarget];
      rIndices.forEach(index => {
        counts[index]++;
      });
    }
  }
  return Math.max(countZero, ...counts);
}
//+++++++++++++++++++++++++
// helpers
//+++++++++++++++++++++++++
function preprocess(array) {
  const lookup = {};
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    lookup[value] = lookup[value] || new Set();
    lookup[value].add(i);
    total += value;
  }
  return [total, lookup];
}
function lookupByAdd(lookup, index, value) {
  lookup[value] = lookup[value] || new Set();
  lookup[value].add(index);
}
function lookupByRemove(lookup, index, value) {
  lookup[value].delete(index);
  if (lookup[value].size === 0) {
    delete lookup[value];
  }
}
```