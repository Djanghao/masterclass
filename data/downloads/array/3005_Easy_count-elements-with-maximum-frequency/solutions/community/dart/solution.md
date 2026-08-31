# dart

**Author:** 4khil_Raj
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4841470/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4841470/)

---

# Code
```
class Solution {
  int maxFrequencyElements(List<int> nums) {
    Map<int, int> freq = {};
    for (int n in nums) {
      freq[n] = (freq[n] ?? 0) + 1;
    }
    int maxFreq = freq.values.fold(0, (max, frequency) => max > frequency ? max : frequency);
    int sumfreq = freq.entries
        .where((entry) => entry.value == maxFreq)
        .fold(0, (sum, entry) => sum + entry.value);
    return sumfreq;
  }
}

```