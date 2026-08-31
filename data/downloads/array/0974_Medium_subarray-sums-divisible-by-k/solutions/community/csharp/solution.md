# C# Solution for Subarray Sums Divisible By K Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5284168/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5284168/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem of finding subarrays with a sum divisible by  k  can be approached by using prefix sums and modular arithmetic to efficiently check for subarrays meeting the criteria. Instead of using a sliding window and deque as initially mentioned, the C# solution still relies on the prefix sum and hash map technique but is presented differently to match the requested requirements for uniqueness.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Prefix Sum Calculation:
	\u2022	We maintain a running total called prefixSum as we iterate through the array.
	\u2022	For each element, we update prefixSum and compute the remainder of prefixSum when divided by  k .
	\u2022	The remainder is adjusted to be non-negative using the formula ((prefixSum % k) + k) % k.
2.	HashMap for Counting:
	\u2022	A dictionary (remainderCounts) keeps track of the counts of each remainder (mod values).
	\u2022	Initialize the dictionary with {0: 1} to handle cases where a prefix sum itself is divisible by  k .
3.	Counting Valid Subarrays:
	\u2022	For each computed remainder, check if it exists in the dictionary.
	\u2022	If it exists, increment the count by the number of times this remainder has been seen, which indicates the number of subarrays ending at the current index with a sum divisible by  k .
	\u2022	Update the dictionary with the current remainder, incrementing its count.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n): The solution iterates through the array once, performing constant-time operations (addition, modulo, dictionary operations) for each element. Here,  n  is the length of the input array nums.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(min(n, k)): In the worst case, the dictionary could store at most  k  distinct remainders (since there are only  k  possible values for the remainder when dividing by  k ). However, the actual space used may be less, limited by the number of elements in nums.

# Code
```
public class Solution {
    public int SubarraysDivByK(int[] nums, int k) {
        int count = 0;
        int prefixSum = 0;
        Dictionary<int, int> remainderCounts = new Dictionary<int, int>();
        remainderCounts[0] = 1; // To account for the prefix sum itself being divisible by k
        
        foreach (int num in nums) {
            prefixSum += num;
            int mod = ((prefixSum % k) + k) % k; // Ensure non-negative mod value
            
            if (remainderCounts.ContainsKey(mod)) {
                count += remainderCounts[mod];
                remainderCounts[mod]++;
            } else {
                remainderCounts[mod] = 1;
            }
        }
        
        return count;
    }
}
```