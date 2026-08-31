# Short, no binary search, no sparse table, beats 100%

**Author:** kaathewise
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/solutions/4318908/](https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/solutions/4318908/)

---

# Intuition
Let's move the right end of the subarray from left to right and consider what options we have for its left end. It is clear that when the left end runs from the beginning of the array to the right end, the GCDs can only increase (because the subarray has fewer and fewer elements), and for each particular GCD we only need to consider the leftmost position. There is no reason to consider a shorter subarray, if the GCD stays the same.

# Approach
So let's maintain the sequence of GCD steps!

Let's say, for a particular right end the sequence of GCDs was $g_1, g_2, ..., g_m$, and we add an element $x$ to the right, then the new sequence of GCDs will simply be $gcd(g_1, x), gcd(g_2, x), ..., gcd(g_m, x), x$ in the same positions, plus the last one.

Note, that some steps might disappear, e.g., $gcd(g_1, x)$ might be equal to $gcd(g_2, x)$, so we need to skip duplicates.

And it is all quite fast! It is linear in $n$, and if $M$ is the maximum value, then calculating GCD is $O(log(M))$ ([sort-of](https://en.wikipedia.org/wiki/Euclidean_algorithm#Algorithmic_efficiency)), while the length of GCD sequence is bounded by the [prime omega function](https://en.wikipedia.org/wiki/Prime_omega_function), which has the average order of only $O(log(log(M)))$.

# Complexity
- Time complexity: $$O(n * log(M)log(log(M))$$, where M is the maximum value in the array.

- Space complexity: $$O(n)$$ for the prefix sums, but can be easily improved to $$O(log(log(M))$$, because we only need to store prefix sums for the steps of the sequence.

# Code
```
class Solution:
    def maxGcdSum(self, nums: List[int], k: int) -> int:
        # Sequence of pairs (idx, gcd), both strictly increasing.
        gcds = []
        prefix_sum = [0]
        best = 0
        for i, x in enumerate(nums):
            prefix_sum.append(prefix_sum[-1] + x)
            new_gcds = []
            for j, g in gcds + [(i, x)]:
                ng = gcd(g, x)
                # Skipping duplicates.
                if not new_gcds or new_gcds[-1][1] != ng:
                    new_gcds.append((j, ng))
            gcds = new_gcds
            for j, g in gcds:
                if i - j + 1 < k: break
                best = max(best, (prefix_sum[-1] - prefix_sum[j]) * g)
        return best

        
```