# Store count and indices in hash map

**Author:** mrkou
**Votes:** 0
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/5979641/](https://leetcode.com/problems/degree-of-an-array/solutions/5979641/)

---

# Intuition
- You need to find which elements appear most in the input array.
- For each of those, find the subarray that they appear in.
- For all those sub arrays, find the shortest one. The length of that is your answer.

# Approach
Iterate through input `nums` and create a hash table that stores the count of each element along with the inicies it appears at. For example when nums is `[1,2,2,3,1]` we can create a hash table that looks like:

```
{
  '1': { count: 2, indices: [ 0, 4 ] },
  '2': { count: 2, indices: [ 1, 2 ] },
  '3': { count: 1, indices: [ 3 ] }
}
```

We then need to find which elements appear the most. We can loop through the keys of the hash table and just find the max count value;

Once we have the max count value, we can loop through the hash table's keys again and find all the records where `count === maxCount`. If that's the case, we now can see every index that the element appears at. In order to get the length of the sub array, we can simply subtract the last index from the first index. For example, we can see with this: `'1': { count: 2, indices: [ 0, 4 ] }` the indices are `[0, 4]`. This means the range of the subarray is from index 0 to index 4 `(4 - 0 = 4)`. We can then compare that to a running value minRange and set it if it's less than the running value.

Once you're done looping, return `minRange + 1` because the length will be one extra since arrays are 0 indexed based.

# Complexity
- Time complexity:
O(3n) -> O(n)
we need to 1) loop through the input array to create the hash table. 2) loop throught the hash table to find the max count. 3) loop through the hash table to compare the subarray lengths.

- Space complexity:
- O(n) - need to create a hash table where each key is an element of the input array

# Code
```typescript []
function findShortestSubArray(nums: number[]): number {
  const map = {};

  nums.forEach((n, i) => {
    if (!map[n]) {
        map[n] = {
            count: 1,
            indices: [i],
        }
    } else {
        map[n]["count"]++;
        map[n]["indices"].push(i);
    }
  });

  let maxCount = 0;

  Object.keys(map).forEach((key) => {
    const count = map[key].count;
    if (count > maxCount) maxCount = count;
  });

  let minRange = Number.POSITIVE_INFINITY;

  Object.keys(map).forEach((key) => {
    const value = map[key];

    if (value.count === maxCount) {
        const indicies = value.indicies;
        const diff = indicies[indicies.length - 1] - indicies[0];

        if (diff < minRange) {
            minRange = diff;
        }
    }
  });

  return minRange + 1;
};
```