# C# Greedy Solution With Combinatorial Optimization

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/5760820/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/5760820/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Find the kth smallest wonderful integer:

A wonderful integer is a permutation of the digits of the input string num that is larger than the current integer.
We can generate permutations iteratively until we get the kth one using the next lexicographical permutation algorithm.
Count the minimum number of adjacent swaps:

Once we have the kth permutation, we need to count how many adjacent swaps are required to transform the original string num into this permutation.
___

# Approach
<!-- Describe your approach to solving the problem. -->Next Permutation Algorithm:
We generate the kth smallest wonderful integer by applying the "next lexicographical permutation" algorithm k times. This algorithm is a standard technique to find the next permutation in lexicographical order.
Counting the minimum adjacent swaps:
After finding the kth permutation, compare it with the original string num.
To transform num into the kth permutation, simulate adjacent swaps, counting how many swaps are required to move each digit to its correct position.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(k x n + n^2).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```csharp []
using System;

public class Solution {
    // Helper function to get the next lexicographical permutation
    private void NextPermutation(char[] num) {
        int i = num.Length - 2;
        // Find the first decreasing element from the end
        while (i >= 0 && num[i] >= num[i + 1]) {
            i--;
        }
        if (i >= 0) {
            int j = num.Length - 1;
            // Find the smallest element greater than num[i] and swap
            while (num[j] <= num[i]) {
                j--;
            }
            Swap(num, i, j);
        }
        // Reverse the suffix starting at i + 1
        Reverse(num, i + 1);
    }
    
    // Helper function to reverse part of the array
    private void Reverse(char[] num, int start) {
        int end = num.Length - 1;
        while (start < end) {
            Swap(num, start, end);
            start++;
            end--;
        }
    }
    
    // Helper function to swap elements in the array
    private void Swap(char[] num, int i, int j) {
        char temp = num[i];
        num[i] = num[j];
        num[j] = temp;
    }

    // Function to get the minimum number of adjacent swaps
    public int GetMinSwaps(string num, int k) {
        char[] original = num.ToCharArray();
        char[] target = num.ToCharArray();

        // Apply nextPermutation k times to get the k-th permutation
        for (int i = 0; i < k; i++) {
            NextPermutation(target);
        }

        // Count the minimum number of swaps to transform original to target
        return CountMinSwaps(original, target);
    }

    // Helper function to count the minimum swaps to transform source to target
    private int CountMinSwaps(char[] source, char[] target) {
        int swaps = 0;

        for (int i = 0; i < source.Length; i++) {
            if (source[i] != target[i]) {
                // Find the position of target[i] in source and swap it into place
                int j = i;
                while (source[j] != target[i]) {
                    j++;
                }
                // Perform swaps to move source[j] to position i
                while (j > i) {
                    Swap(source, j, j - 1);
                    j--;
                    swaps++;
                }
            }
        }

        return swaps;
    }
}

//  Next Permutation:
//  *We use the next permutation technique to generate the lexicographically next permutation of the digits
//  in the string.
//  *We do this k times to get the kth permutation.
//  Count Minimum Swaps:
//  *Once we have the kth permutation, we compare it to the original string num.
//  *For each mismatch between the original and target strings, we find the correct position of the 
//  mismatched digit and swap it into place, counting the swaps as we go.
```