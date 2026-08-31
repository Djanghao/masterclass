# Using Hashmap in php

**Author:** Tilak01
**Votes:** 1
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/4980319/](https://leetcode.com/problems/top-k-frequent-elements/solutions/4980319/)

---

# Description

```
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

```

## Approach

### Optimize :

    1. Create hashmap and store key value in descending order
    2. push key of hashmap to new array until k elements
    3. return that array

### Time Complexity and Space complexity

     O(n)

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function topKFrequent($nums, $k) {
          // 1. create associate array as key:number value:frequency
    $mp = [];
    for ($i = 0; $i < count($nums); $i++) {
        // if element present in map then increment count
        if (isset($mp[$nums[$i]])) {
            $mp[$nums[$i]]++;
        } else {
            $mp[$nums[$i]] = 1;
        }
    }
    arsort($mp);
    $temp = array_keys($mp);

    $result = [];
    for ($i = 0; $i < $k; $i++) {
        $result[] =  $temp[$i];
    }
    return $result;
    }
}
```