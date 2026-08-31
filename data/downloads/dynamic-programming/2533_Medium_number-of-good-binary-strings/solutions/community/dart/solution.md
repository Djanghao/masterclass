# Dart: DP with descriptive variable names

**Author:** alexhutcheson
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3042067/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3042067/)

---

# Intuition
We start with 2 "base strings". For example, if `oneGroup = 2` and `zeroGroup = 3`, then our base strings are:

- '11'
- '000'

We can extend those base strings in exactly 2 ways: by appending a "chunk" of `oneGroup` '1' characters, or appending a "chunk" of `zeroGroup` zero characters. This always results in strings that are longer than the base string we appended to. Example:

- `11` can be used as a base to create:
  - `1111`
  - `11000`
- `000` can be used as a base to create:
  - `00011`
  - `000000`


# Approach
This approach naturally lends itself to a recursive definition. Importantly, we don't need (or want) to generate the actually strings, we just want to count that we *could* create a string of a given length via some sequence of "chunks".

A simple recursive approach to the problem would be something like:

## Recursive code (will timeout)

```dart
class Solution {
  int goodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
    // Returns the number of binary strings matching the above criteria that have
    // length >= thisLength.
    int goodStringCountWithMinLength(int thisLength) {
      if (thisLength > maxLength) {
        return 0;
      }
      final thisStringCount = thisLength >= minLength ? 1 : 0;
      return thisStringCount + goodStringCountWithMinLength(thisLength + oneGroup) + goodStringCountWithMinLength(thisLength + zeroGroup);
    }
    return goodStringCountWithMinLength(0);
  }
}
```

This simple approach has two problems:
- **Repeated subproblems**: We'll evaluate `goodStringCountWithMinLength(i)` an arbitrary number of times, which leads to exponential runtime. This could be solved with memoization.
- **Stack overflow**: This approach will create up to `maxLength` stack frames, which will overflow the stack limit for most environments. This is *not* fixed by memoization.

The stack overflow problem means that a top-down dynamic programming (DP) approach generally won't work. It works for some language environments like Python, but only because system variables have been specially configured to allow very deep stacks. 

Instead, we need to reframe the problem to use bottom-up DP.

We define our DP array such that `dp[i]` stores "the number of good strings that can be created of exactly length i". Two quirks are:
- We ignore the `minLength` criteria in our definition of "good strings" for the purposes of computing this array.
- We store `count % (1e7 + 7)`, rather than storing count. This takes advantage of the distributive property of the modulus operator to allow us to avoid integer overflow in our counts. 

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code (Bottom-up DP)
```dart
class Solution {
  int goodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
    // goodStringsWithLength[i] stores the number of possible good strings with length == i.
    // Verbose name, but helps understand semantics.
    final goodStringsWithLength = List<int>.filled(maxLength + 1, 0);
    // "Base strings", with one group of 1s or 0s.
    goodStringsWithLength[oneGroup]++;
    goodStringsWithLength[zeroGroup]++;
    var goodStringsAtLeastMinLength = 0;
    for (var i = min(oneGroup, zeroGroup); i < maxLength + 1; i++) {
      if (goodStringsWithLength[i] > 0) {
        if (i + oneGroup <= maxLength) {
          // We can turn any string of length i into one of length i + oneGroup by appending
          // oneGroup '1' characters.
          goodStringsWithLength[i + oneGroup] = 
            _modAdd(goodStringsWithLength[i + oneGroup], goodStringsWithLength[i]);
        }
        if (i + zeroGroup <= maxLength) {
          // We can turn any string of length i into one of length i + zeroGroup by appending
          // zeroGroup '0' characters.
          goodStringsWithLength[i + zeroGroup] = 
            _modAdd(goodStringsWithLength[i + zeroGroup], goodStringsWithLength[i]);
        }
        if (i >= minLength) {
          goodStringsAtLeastMinLength = 
            _modAdd(goodStringsAtLeastMinLength, goodStringsWithLength[i]);
        }
      }
    }
    return goodStringsAtLeastMinLength;
  }

  // Returns a + b using modular arithmetic in modulus [_modValue]
  int _modAdd(int a, int b) {
    return (a + b) % _modValue;
  }

  static const _modValue = 1000000007;
}
```