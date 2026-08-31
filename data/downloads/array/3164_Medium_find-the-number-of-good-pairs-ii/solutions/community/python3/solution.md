# O(nlogn), Beats 100%, Full Explanation

**Author:** Likey_00
**Votes:** 34
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5209378/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5209378/)

---

# Intuition
Consider a simplified version of the problem where k=1 always, and all values of both arrays are distinct. Then the problem just becomes finding for each element of nums1, how many elements of nums2 divide it. Equivalently, we are finding how many numbers in nums1 are a multiple of each value in nums2

# Approach
<!-- Describe your approach to solving the problem. -->
In this simplified case, we can go through each value of nums2, and then go through all its multiples. If any occurs in nums1, add 1 to the solution since we have found a good pair. At the end, we will have the total number of good pairs.

To remove the restriction of all unique values, consider just tracking frequencies of values in nums2 instead. Then if any multiple occurs once or more in nums1, we add the frequency times the frequency in nums1 to the solution rather than 1.

To remove the restriction of k=1, we simply store the frequencies of value * k for each value in nums2. This ensures that we are searching for multiples of value * k, rather than just value. The whole solution works the same after this change.

For simplicity and speed, rather than checking if a number exists at some frequency in nums1 and then adding to the solution directly, I just maintain an array for counts, and always add to each multiple. Then at the end, I can sum over the values for each element of nums1.

# Complexity
- Time complexity: O(n logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
In the worst case, the maximum value in nums1 is 10^6, k=1, and the frequencies include all natural numbers from 1 to 10^6. Letting n = 10^6, we see that our runtime is n + n/2 + n/3 + ... + 1, which is bounded by n * (first n terms of harmonic series), which is in turn bounded by n log(n)

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We use a counter to track frequencies, as well as a list to track counts

# Code
```
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        freqs = Counter(num * k for num in nums2)
        counts = [0] * (max(nums1)+1)

        for num, count in freqs.items():
            for multiplier in range(num, len(counts), num):
                counts[multiplier] += count
        
        return sum(counts[num] for num in nums1)
```