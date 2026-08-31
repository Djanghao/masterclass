# 🟢🔴🟢 Beats 100.00%👏 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/5973672/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/5973672/)

---

## Intuition
The problem asks us to find all possible contiguous substrings of length `k` in the integer `num` and check if each substring divides `num` perfectly. This problem requires extracting and analyzing substrings of `num`, which naturally leads us to use string manipulation for simplicity.

## Approach
1. **Convert Integer to String**:
   - Convert `num` to a string to easily extract substrings.

2. **Extract and Check Divisors**:
   - Loop through all possible contiguous substrings of length `k` in `num`.
   - For each substring, convert it back to an integer (`kBeauty`).
   - If `kBeauty` is non-zero and divides `num` perfectly, increment the count of "k-beautiful" substrings.

3. **Return the Count**:
   - After looping through all substrings of length `k`, return the count of valid divisors found.

## Example Walkthrough

Consider the input `num = 120` and `k = 2`.

1. **Convert `num` to String**:
   - `numString = "120"`

2. **Extract and Check**:
   - Substring from index `0`: `"12"` \u2192 integer `12` (120 % 12 == 0) \u2192 valid divisor.
   - Substring from index `1`: `"20"` \u2192 integer `20` (120 % 20 == 0) \u2192 valid divisor.

3. **Result**:
   - The count of valid "k-beautiful" substrings is `2`.

## Complexity

- **Time complexity**:
  - $$O(n \\cdot k)$$ where `n` is the number of digits in `num`. For each substring of length `k`, we perform a division check.

- **Space complexity**:
  - $$O(1)$$, ignoring the input conversion.

## Solution Code

```dart
class Solution {
  int divisorSubstrings(int num, int k) {
    String numString = num.toString();
    int countBeauty = 0;
    
    for(int i = 0; i <= numString.length - k; i++) {
        int kBeauty = int.parse(numString.substring(i, i + k));
        if(kBeauty != 0 && num % kBeauty == 0) countBeauty++;
    }
    
    return countBeauty;
  }
}
