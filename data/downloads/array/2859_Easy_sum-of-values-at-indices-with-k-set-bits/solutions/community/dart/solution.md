# Binary Representation Summation: Counting Indices with k Set Bits

**Author:** adhilfouzi
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4657759/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4657759/)

---

# Intuition
We aim to find the sum of indices where the corresponding binary representations have exactly k set bits.

# Approach
We iterate through each element in the list. For each index, we convert it to a binary string and count the number of set bits ('1's). If the count matches k, we add the corresponding element from the nums list to the total count.

# Complexity
- Time complexity:
  The time complexity of this solution is O(n*m), where n is the length of the nums list and m is the number of bits required to represent the maximum index.

- Space complexity:
  The space complexity is O(m), where m is the number of bits required to represent the maximum index.

# Code
```
class Solution {
  int sumIndicesWithKSetBits(List<int> nums, int k) {
    int count = 0;

    for (int i = 0; i < nums.length; i++) {
      // Convert the index i to binary string
      String bin = i.toRadixString(2);

      // Convert the binary string to a list of characters
      List<String> binaryDigits = bin.split('');

      // Remove all characters except '1's
      binaryDigits.retainWhere((digit) => digit == '1');
      print('After removing 0s: $binaryDigits');

      // If the count of '1's equals k, add the corresponding nums[i] to count
      if (binaryDigits.length == k) {
        count += nums[i];
      }
    }

    return count;
  }
}

```