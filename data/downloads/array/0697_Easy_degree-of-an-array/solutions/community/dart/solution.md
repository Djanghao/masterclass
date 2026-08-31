# O(n) Dart solution

**Author:** magnito232
**Votes:** 0
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/4787127/](https://leetcode.com/problems/degree-of-an-array/solutions/4787127/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
  int findShortestSubArray(List<int> nums) {
    Map<int, List<int>> numOccurrences = {};
    int maxFrequency = 0;
    List<int> maxFreqNums = [];

    // Frequency calculation with tracking positions
    for (int i = 0; i < nums.length; i++) {
      if (!numOccurrences.containsKey(nums[i])) {
        numOccurrences[nums[i]] = [1, i, i]; // frequency, firstOccurrence, lastOccurrence
      } else {
        numOccurrences[nums[i]]![0]++;
        numOccurrences[nums[i]]![2] = i;
      }

      int freq = numOccurrences[nums[i]]![0];
      if (freq > maxFrequency) {
        maxFrequency = freq;
        maxFreqNums = [nums[i]];
      } else if (freq == maxFrequency) {
        maxFreqNums.add(nums[i]);
      }
    }

    // Find shortest length among max frequency numbers
    int shortestLength = nums.length;
    for (int number in maxFreqNums) {
      int length = numOccurrences[number]![2] - numOccurrences[number]![1] + 1;
      if (length < shortestLength) {
        shortestLength = length;
      }
    }

    return shortestLength;
  }
}
```