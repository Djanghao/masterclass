# Dart Solution

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/5111666/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/5111666/)

---

# Code
```
class Solution {
  int maxFrequencyScore(List<int> nums, int k) {
    nums.sort();
    int operation = 0, answer = 0;
    int i = 0, j = 0;
    while (j < nums.length) {
      operation += nums[j] - nums[(i + j) ~/ 2];
      while (operation > k) {
        operation += nums[i] - nums[(i + j + 1) ~/ 2];
        i++;
      }
      answer = max(answer, j - i + 1);
      j++;
    }
    return answer;
  }
}
```