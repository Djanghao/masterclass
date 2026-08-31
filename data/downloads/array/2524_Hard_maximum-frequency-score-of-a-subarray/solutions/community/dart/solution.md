# Dart: Comparing List vs. Map for storing frequency counts

**Author:** alexhutcheson
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/3043052/](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/3043052/)

---

# Approach

Sliding window: Calculate frequency score for the first k elements, then "slide" along the array updating frequency score for each window by just updating the frequencies of the first and last elements in the window. Keep track of the max.

Important note: Do *all* the mathematical operations mod 1e7. Otherwise you can run into overflow issues. Google "modular arithmetic" to remind yourself why this is valid.

# Code

## Using List<int> to store frequency counts

- Runtime: ~560 ms
- Memory: ~290 MB

```dart
class Solution {
  int maxFrequencyScore(List<int> nums, int k) {
    // Using a List to store frequency counts makes the code very simple, but it:
    // - Requires a linear scan through the full space of numbers 
    //   to calculate freqScore the first time, and
    // - Might use a lot of memory to store 0 values for numbers that
    //   aren't present.
    final freq = List<int>.filled(nums.reduce(max) + 1, 0);
    
    // Calculate frequency score first the first subarray.
    for (var i = 0; i < k; i++) {
      freq[nums[i]]++;
    }
    var freqScore = 0;
    for (var i = 0; i < freq.length; i++) {
      if (freq[i] > 0) {
        freqScore = _modAdd(freqScore, _modPow(i, freq[i]));
      } 
    }

    var maxScore = freqScore;
    for (var i = 1; i <= nums.length - k; i++) {
      final valBeforeStart = nums[i - 1];
      final valAtEnd = nums[i + k - 1];
      if (valBeforeStart == valAtEnd) {
        continue;
      }
      freqScore = _modSub(freqScore, _modPow(valBeforeStart, freq[valBeforeStart]));
      if (freq[valAtEnd] > 0) {
        freqScore = _modSub(freqScore, _modPow(valAtEnd, freq[valAtEnd]));
      }
      freq[valBeforeStart]--;
      freq[valAtEnd]++;
      if (freq[valBeforeStart] > 0) {
        freqScore = _modAdd(freqScore, _modPow(valBeforeStart, freq[valBeforeStart]));
      }   
      freqScore = _modAdd(freqScore, _modPow(valAtEnd, freq[valAtEnd]));
      maxScore = max(maxScore, freqScore);
    }
    return maxScore;
  }

  // Convenience functions for modular arithmetic in the specified modulo.
  int _modAdd(int a, int b) {
    return (a + b) % _modVal;
  }

  int _modSub(int a, int b) {
    return (a - b) % _modVal;
  }

  int _modPow(int b, int e) {
    return b.modPow(e, _modVal);
  }

  static const _modVal = 1000000007;
}
```


## Using Map<int, int> to store frequency counts

- Runtime: ~570 ms
- Memory: ~205 MB

```dart
class Solution {
  int maxFrequencyScore(List<int> nums, int k) {
    // Using a Map saves some memory, but makes the code more complex 
    // and might increase runtime.
    final freq = <int, int>{};
    
    // Calculate frequency score first the first subarray.
    for (var i = 0; i < k; i++) {
      freq.update(nums[i], (v) => v + 1, ifAbsent: () => 1);
    }
    var freqScore = 0;
    for (final entry in freq.entries) {
      freqScore = _modAdd(freqScore, _modPow(entry.key, entry.value));
    }

    var maxScore = freqScore;
    for (var i = 1; i <= nums.length - k; i++) {
      final valBeforeStart = nums[i - 1];
      var valBeforeStartFreq = freq[valBeforeStart]!;
      final valAtEnd = nums[i + k - 1];
      var valAtEndFreq = freq[valAtEnd];
      if (valBeforeStart == valAtEnd) {
        continue;
      }
      freqScore = _modSub(freqScore, _modPow(valBeforeStart, valBeforeStartFreq));
      if (valAtEndFreq != null) {
        freqScore = _modSub(freqScore, _modPow(valAtEnd, valAtEndFreq));
      }
      if (valBeforeStartFreq == 1) {
        freq.remove(valBeforeStart);
        valBeforeStartFreq = 0;
      } else {
        valBeforeStartFreq = freq.update(valBeforeStart, (v) => v - 1);
      }
      valAtEndFreq = freq.update(valAtEnd, (v) => v + 1, ifAbsent: () => 1);
      if (valBeforeStartFreq > 0) {
        freqScore = _modAdd(freqScore, _modPow(valBeforeStart, valBeforeStartFreq));
      }   
      freqScore = _modAdd(freqScore, _modPow(valAtEnd, valAtEndFreq));
      maxScore = max(maxScore, freqScore);
    }
    return maxScore;
  }

  // Convenience functions for modular arithmetic in the specified modulo.
  int _modAdd(int a, int b) {
    return (a + b) % _modVal;
  }

  int _modSub(int a, int b) {
    return (a - b) % _modVal;
  }

  int _modPow(int b, int e) {
    return b.modPow(e, _modVal);
  }

  static const _modVal = 1000000007;
}
```