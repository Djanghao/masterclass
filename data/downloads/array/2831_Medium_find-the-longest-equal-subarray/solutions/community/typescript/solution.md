# JS/TS Sliding Window + HashMap Solution

**Author:** thanir10
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934594/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934594/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate through the nums array and store the index into a hashmap
2. Hashmap should contain array of indices of each element 
Example : [1,2,2,3,2] -> { 1 : [0], 2 : [1,2,4] , 3 : [3] }
3. Iterate through the hashmap to remove the gaps between the indices
4. Use sliding window to prevent nested loop while removing the gap in the indices
5. Deduct the k value by the gap between indices 
6. If the k value is lower than zero , increment the left pointer till the k value is higher than zero.
7. Find the difference between right and left pointer to determine the length of equal subarray.
8. Return the maximum length of equal subarray. 

# Complexity
- Time complexity: O(N) due to sliding window technique
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) due to the usage of hashmap
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const longestEqualSubarray = (nums: number[], k: number) => {
  let max = 0;
  let hashMap: { [key: string]: number[] } = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      hashMap[nums[i]].push(i);
    } else {
      hashMap[nums[i]] = [i];
    }
  }

  const entries = Object.entries(hashMap);

  for (let [_, arr] of entries) {
    let left = 0;
    let kDuplicate = k;
    for (let right = 1; right < arr.length; right++) {
      let len = arr[right] - arr[right - 1] - 1;
      kDuplicate -= len;
      if (kDuplicate < 0) {
        max = Math.max(right - left, max);
        while (kDuplicate < 0) {
          kDuplicate += arr[left + 1] - arr[left] - 1;
          left++;
        }
      }
    }
    max = Math.max(arr.length - left, max);
  }
  return max;
};
```