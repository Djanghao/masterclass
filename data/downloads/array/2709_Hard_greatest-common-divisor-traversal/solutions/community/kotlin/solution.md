# Union-find with precalculated primes (100% space-time)

**Author:** lifran
**Votes:** 2
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778307/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778307/)

---

# Intuition
There is a path between numbers `x` and `y` iff there exists a series of number `x = z_0, ..., z_n = y` such that `z_i` and `z_(i + 1)` have a `gcd > 1`.
If we add any two numbers with a common divisor > 1 to the same component, then we know that we can traverse between any pair of numbers iff all numbers are in the same component.

# Approach
For each prime number `p` (up to `sqrt(max(nums))`), we add any number `x` that is divisible by `p` to the same union-find component.

(For completeness, we have to clean up afterwards, in case there were prime factors > 1 left, but that doesn't add anything to the solution. Consider the case nums = [2, 3, 6] as an example for thise edge case).

Once this process is finished, we have efficiently implemented our intution, and can simply check for the size of any number's component to answer the problem.

# Code
```
class Solution {
    private fun find(v: Int, parent: IntArray, size: IntArray): Int {
        var w = v
        while (w != parent[w]) w = parent[w]
        return w
    }

    private fun union(v: Int, w: Int, parent: IntArray, size: IntArray): Boolean {
        val rootV = find(v, parent, size)
        val rootW = find(w, parent, size)

        if (rootV == rootW) return false

        if (size[rootV] > size[rootW]) {
            parent[rootW] = rootV
            size[rootV] += size[rootW]
        } else {
            parent[rootV] = rootW
            size[rootW] += size[rootV]
        }

        return true
    }


    fun canTraverseAllPairs(nums: IntArray): Boolean {
        val parent = IntArray(nums.size) { it }
        val size = IntArray(nums.size) { 1 }
        val max = nums.max()

        val primes = intArrayOf(
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,
            73,
            79,
            83,
            89,
            97,
            101,
            103,
            107,
            109,
            113,
            127,
            131,
            137,
            139,
            149,
            151,
            157,
            163,
            167,
            173,
            179,
            181,
            191,
            193,
            197,
            199,
            211,
            223,
            227,
            229,
            233,
            239,
            241,
            251,
            257,
            263,
            269,
            271,
            277,
            281,
            283,
            293,
            307,
            311,
            313,
            317
        )

        val rep = IntArray(max + 1) { -1 }

        for (p in primes) {
            if (p * p > max) break
            for (i in nums.indices) {
                if (nums[i] % p != 0) continue
                while (nums[i] % p == 0) nums[i] /= p

                if (rep[p] == -1) {
                    rep[p] = i
                    continue
                }
                union(i, rep[p], parent, size)
            }
        }

        for (i in nums.indices) {
            if (nums[i] == 1) continue
            if (rep[nums[i]] == -1) {
                rep[nums[i]] = i
                continue
            }
            union(i, rep[nums[i]], parent, size)
        }

        return size[find(0, parent, size)] == nums.size
    }
}
```