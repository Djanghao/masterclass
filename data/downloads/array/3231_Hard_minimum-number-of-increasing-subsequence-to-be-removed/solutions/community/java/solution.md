# Java | Time: O(n log n) Space: O(n) | TreeMap

**Author:** Majerked
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/6092666/](https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/6092666/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Answer seemed to be equal to the number of increasing subsequences.
Each numbers is either continuing a sequence are creating a new one.
Utilizing a TreeMap seemed like an efficent way to get access to the closest subsequence to extend.

# Approach
Create TreeMap to map number to frequency.
If a number is in the map, it is the end of a subsequence.
for each number we do 2 things -
- get the closest smaller number from the map if exists and decrease the frequency (because we are utilizing this number in the sequence that includes the current number)
- if frequency becomes 0, remove it from tree
Update or Insert frequency for the current number in the map.

After iterating the whole array, we should have a map of all numbers that end a increasing subsequency.

The answer is the sum of all the frequencys of the remaining numbers in the treemap.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
Most operations on a TreeMap are log n, and we are doing N of them.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
We store a TreeMap of numbers (this can end up being N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int minOperations(int[] nums) {
        TreeMap<Integer, Integer> numFreq = new TreeMap<>();
        for (int num : nums) {
            // delete closest frequency below num
            Integer floorKey = numFreq.floorKey(num - 1);
            if (floorKey != null) {
                int floorFreq = numFreq.get(floorKey) - 1;
                if (floorFreq == 0) {
                    numFreq.remove(floorKey);
                } else {
                    numFreq.put(floorKey, floorFreq);
                }
            }
            // increase frequency for num
            numFreq.put(num, numFreq.getOrDefault(num, 0) + 1);
        }

        int total = 0;
        for (int value : numFreq.values()) {
            total += value;
        }
        return total;
    }
}
```