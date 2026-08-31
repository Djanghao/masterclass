# 100% Optimized Even XOR Triplets Count Dart

**Author:** d_sushkov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5379777/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5379777/)

---

# Intuition
The problem requires counting triplets (a[i], b[j], c[k]) such that the XOR of these elements has an even number of set bits. Given the constraints and the nature of XOR operations, we need an efficient way to determine the parity (even or odd) of the set bits in the XOR result.

# Approach
1. Count Set Bits Function: Define a function countSetBits that calculates the number of set bits in a number. This will help classify numbers into those with even and odd set bit counts.

2. Preprocessing: Create a function preprocess that takes an array and counts how many numbers have even and odd numbers of set bits using the countSetBits function.

3. Triplet Counting: Use the preprocess function to obtain counts for arrays a, b, and c. Based on these counts:

- Calculate the number of triplets where all three numbers have even set bits (evenTriplets).
- Calculate triplets where exactly two numbers have odd set bits and one has even set bits (oddOddEvenTriplets, oddEvenOddTriplets, evenOddOddTriplets).
- Sum up these counts to get the total number of valid triplets.

# Complexity
- Time complexity:
1. Count Set Bits Function (countSetBits): O(logx), where x is the maximum value in the arrays.
2. Preprocessing (preprocess): O(n) for each array (a, b, c), where 
n is the length of the array.
3. Triplet Count (tripletCount): Overall O(n) time complexity, as preprocessing and counting operations are linear with respect to the total number of elements in arrays a, b, and c.
- Combining all the above steps, the overall time complexity of the solution is dominated by the preprocessing step, which is O(n) for each of the three arrays (a, b, and c), where n is the total number of elements across all arrays.
Therefore, the overall time complexity of the solution is O(n), where 
n is the sum of the lengths of arrays a, b, and c.

- Space complexity: O(1) apart from the input arrays, since we only maintain a constant amount of space (evenCount and oddCount) during preprocessing.

# Code
**Dart**
```
class Solution {
  int tripletCount(List<int> a, List<int> b, List<int> c) {
    // Method to count set bits in a number
    int countSetBits(int x) {
      return x.toRadixString(2).replaceAll('0', '').length;
    }

    // Method to preprocess array and count even and odd set bits
    List<int> preprocess(List<int> arr) {
      int evenCount = 0;
      int oddCount = 0;
      for (int num in arr) {
        if (countSetBits(num) % 2 == 0) {
          evenCount += 1;
        } else {
          oddCount += 1;
        }
      }
      return [evenCount, oddCount];
    }

    // Preprocess each array
    List<int> aCount = preprocess(a);
    List<int> bCount = preprocess(b);
    List<int> cCount = preprocess(c);

    // Calculate valid triplets
    int evenTriplets = aCount[0] * bCount[0] * cCount[0]; // even + even + even
    int oddOddEvenTriplets = aCount[1] * bCount[1] * cCount[0]; // odd + odd + even
    int oddEvenOddTriplets = aCount[1] * bCount[0] * cCount[1]; // odd + even + odd
    int evenOddOddTriplets = aCount[0] * bCount[1] * cCount[1]; // even + odd + odd

    // Total count of valid triplets
    return evenTriplets + oddOddEvenTriplets + oddEvenOddTriplets + evenOddOddTriplets;
  }
}     
```