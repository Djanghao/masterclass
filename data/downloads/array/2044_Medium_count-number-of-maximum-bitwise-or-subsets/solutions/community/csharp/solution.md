# C# Solution for Count Number of Maximum Bitwise - OR Subsets Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929218/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929218/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about finding subsets whose bitwise OR equals the maximum possible OR that can be achieved from the array. Since there are 2^n subsets for an array of length n, and the OR operation accumulates values as elements are added to a subset, we can generate all possible subsets and track the OR for each one. Using bit manipulation (bitmasking) allows us to efficiently iterate through all possible subsets.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Bitwise OR Calculation:
	\u2022	First, compute the maximum OR by iterating through all elements of the array and performing the bitwise OR across the entire array. This tells us the value we want to match for the subsets.
2.	Subset Generation Using Bitmasking:
	\u2022	Each subset of the array can be represented by a bitmask. A bitmask is an integer where each bit indicates whether a corresponding element is included in the subset.
	\u2022	For an array of length n, there are 2^n possible subsets, which can be represented by integers from 1 to 2^n - 1. The bit representation of these integers tells us which elements are included in the subset.
	\u2022	For each bitmask, we calculate the OR of the elements in the subset that correspond to the set bits.
3.	Counting Valid Subsets:
	\u2022	For each subset (bitmask), we compute the bitwise OR of the subset. If the result matches the maximum OR computed earlier, we increment our count of valid subsets.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Subset Generation: For an array of size n, there are 2^n subsets. Each subset is represented by a bitmask, and for each bitmask, we potentially check all n elements to compute the OR.
\u2022	Iterating over all 2^n subsets: O(2^n)
\u2022	For each subset, checking which elements to include based on the bitmask takes O(n) time in the worst case.
\u2022	Therefore, the total time complexity is O(n * 2^n).
Given that n <= 16 (as per the problem constraints), this is feasible. The maximum number of subsets is 2^{16} = 65536, which makes this approach efficient enough for the problem.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Bitmasking: The space required to store intermediate results (the OR of the subset and the current bitmask) is minimal. The only significant memory usage comes from the recursion depth or loop iterations, which is proportional to n (the number of elements in the array).
\u2022	O(n) space is required to store the subset ORs during computation.
\u2022	Hence, the total space complexity is O(n).

# Code
```csharp []
public class Solution {
    public int CountMaxOrSubsets(int[] nums) {
        int maxOr = 0;
        int n = nums.Length;
        foreach (int num in nums) {
            maxOr |= num;
        }

        int count = 0;
        int totalSubsets = 1 << n;  
        
        for (int mask = 1; mask < totalSubsets; mask++) {
            int currentOr = 0;
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    currentOr |= nums[i];
                }
            }
            if (currentOr == maxOr) {
                count++;
            }
        }

        return count;
    }
}
```