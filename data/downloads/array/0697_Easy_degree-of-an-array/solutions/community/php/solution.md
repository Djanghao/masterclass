# Hash map (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/5458669/](https://leetcode.com/problems/degree-of-an-array/solutions/5458669/)

---

# Approach
It uses a hash map to store the frequency, start index, and end index of each element in the input list. 

1. The function iterates through the list to determine the degree and then finds the shortest subarray with that degree.
- If an element is not in the freq_map, add it with its frequency, start index, and end index.
- If an element is already in the freq_map, increment its frequency and update its end index.
- Update degree to the maximum frequency encountered so far.

2. Iterate through the freq_map to find the shortest subarray with the same degree as the maximum frequency.
- If the frequency of an element is equal to degree, calculate the length of the subarray and update min_len if it is smaller.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input list. This is because we iterate through the list once to build the freq_map and another time to find the shortest subarray.

- Space complexity:
$$O(n)$$, as we use the freq_map to store the frequency of each element.

# Code
``` python3 []
class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        degree = 0
        freq_map: Dict[int, List[int]] = {}

        for i, num in enumerate(nums):
            if num not in freq_map:
                # If the element is not in the map, add it with its frequency, start index and end index
                freq_map[num] = [1, i, i]
            else:
                # If the element is already in the map, increment its frequency and update its end index
                freq_map[num][0] += 1
                freq_map[num][2] = i

            degree = max(degree, freq_map[num][0])

        min_len = len(nums)
        for freq, start, end in freq_map.values():
            # Iterate through each element in the map to find the shortest subarray with the same degree
            if freq == degree:
                min_len = min(min_len, end - start + 1)

        return min_len
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let degree = 0;
    const freqMap = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // If the element is not in the map, add it with its frequency, start index, and end index
        if (!freqMap[num]) {
            freqMap[num] = [1, i, i];
        } else {
        // If the element is already in the map, increment its frequency and update its end index
            freqMap[num][0]++;
            freqMap[num][2] = i;
        }

        degree = Math.max(degree, freqMap[num][0]);
    }

    let minLen = nums.length;
    for (const [freq, start, end] of Object.values(freqMap)) {
        // Iterate through each element in the map to find the shortest subarray with the same degree
        if (freq === degree) {
            minLen = Math.min(minLen, end - start + 1);
        }
    }

    return minLen;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findShortestSubArray($nums) {
        $degree = 0;
        $freq_map = array();

        foreach ($nums as $i => $num) {
            if (!array_key_exists($num, $freq_map)) {
                // If the element is not in the map, add it with its frequency, start index, and end index
                $freq_map[$num] = array(1, $i, $i);
            } else {
                // If the element is already in the map, increment its frequency and update its end index
                $freq_map[$num][0]++;
                $freq_map[$num][2] = $i;
            }

            $degree = max($degree, $freq_map[$num][0]);
        }

        $min_len = count($nums);
        foreach ($freq_map as list($freq, $start, $end)) {
            // Iterate through each element in the map to find the shortest subarray with the same degree
            if ($freq == $degree) {
                $min_len = min($min_len, $end - $start + 1);
            }
        }

        return $min_len;
    }
}
```