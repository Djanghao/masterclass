# 100% Optimized Even XOR Triplets Count Rust

**Author:** d_sushkov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5379783/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5379783/)

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
**Rust**
```
impl Solution {
    pub fn triplet_count(a: Vec<i32>, b: Vec<i32>, c: Vec<i32>) -> i32 {
        // Method to count set bits in a number
        fn count_set_bits(x: i32) -> i32 {
            x.count_ones() as i32
        }

        // Method to preprocess array and count even and odd set bits
        fn preprocess(arr: Vec<i32>) -> (i32, i32) {
            let mut even_count = 0;
            let mut odd_count = 0;
            for num in arr {
                if count_set_bits(num) % 2 == 0 {
                    even_count += 1;
                } else {
                    odd_count += 1;
                }
            }
            (even_count, odd_count)
        }

        // Preprocess each array
        let (a_even, a_odd) = preprocess(a);
        let (b_even, b_odd) = preprocess(b);
        let (c_even, c_odd) = preprocess(c);

        // Calculate valid triplets
        let even_triplets = a_even * b_even * c_even;
        let odd_odd_even_triplets = a_odd * b_odd * c_even;
        let odd_even_odd_triplets = a_odd * b_even * c_odd;
        let even_odd_odd_triplets = a_even * b_odd * c_odd;

        // Total count of valid triplets
        even_triplets + odd_odd_even_triplets + odd_even_odd_triplets + even_odd_odd_triplets
    }
}    
```