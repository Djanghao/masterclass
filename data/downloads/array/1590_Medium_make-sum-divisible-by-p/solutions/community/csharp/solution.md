# C# Solution for Make Sum Divisible By P Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863010/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863010/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key observation is that if the sum of the entire array isn\u2019t divisible by p, we need to remove a subarray such that the sum of the remaining elements becomes divisible by p. To achieve this, we look for a subarray whose sum (mod p) equals the \u201Cremainder\u201D of the total sum (mod p). Removing such a subarray will make the sum of the rest of the elements divisible by p.

We can efficiently track prefix sums modulo p and use this information to detect subarrays that, when removed, lead to a sum divisible by p.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Total Sum and Remainder: Calculate the total sum of the array and its remainder when divided by p. If the total sum is already divisible by p, no removal is needed, and we return 0.
2.	Prefix Sums and Hash Map: We iterate through the array while keeping track of the current prefix sum modulo p. We store the modulo values in a dictionary (prefixMap) with their indices. The dictionary helps us quickly determine if there is a previously encountered prefix sum that forms a valid subarray that, when removed, results in the sum being divisible by p.
3.	Modulo Arithmetic: For each prefix sum at index i, we calculate the required targetMod (the remainder we need to remove). If targetMod has been seen before (stored in the dictionary), we can calculate the length of the subarray to remove. We keep track of the minimum length.
4.	Result: If no valid subarray is found, we return -1. Otherwise, return the minimum length of the subarray.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n): The algorithm involves iterating through the array once, performing constant-time operations for each element (hash map lookups and insertions). Therefore, the overall time complexity is linear with respect to the number of elements in the array.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n): The space complexity is due to the hash map (prefixMap), which can potentially store n entries (one for each element in the array). Thus, the space complexity is linear.

# Code
```csharp []
public class Solution {
    public int MinSubarray(int[] nums, int p) {
        int n = nums.Length;
        long totalSum = 0;
        
        foreach (int num in nums) {
            totalSum += num;
        }

        long remainder = totalSum % p;
        if (remainder == 0) {
            return 0;
        }

        Dictionary<long, int> prefixMap = new Dictionary<long, int>();
        prefixMap[0] = -1;  

        long prefixSum = 0;
        int minLength = n;

        for (int i = 0; i < n; i++) {

            prefixSum += nums[i];

            long currentMod = prefixSum % p;


            long targetMod = (currentMod - remainder + p) % p;


            if (prefixMap.ContainsKey(targetMod)) {
                minLength = Math.Min(minLength, i - prefixMap[targetMod]);
            }

            prefixMap[currentMod] = i;
        }

        return minLength == n ? -1 : minLength;
    }
}
```