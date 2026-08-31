# Python / Kotlin / JavaScript Merge Sort

**Author:** ektegjetost
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-index-of-permutation/solutions/5005790/](https://leetcode.com/problems/find-the-index-of-permutation/solutions/5005790/)

---

# Intuition
- The number of permutations with ```n``` numbers is all the ways you can re-arrange them, ```n!``` ways
- The number of permutations with ```n``` numbers starting with ```x``` is just the number of ways you can arrange all the numbers except for ```x```, or ```(n - 1)!```
- Now to get the index of a permutation, we can look at it this way:
  - Say we have the perm ```[3,2,1]```
  - We know there are ```3! = 6``` total permutations, and for any starting num, there are ```2!``` permutations
  - Because the first num is ```3```, we know all the permutations starting with ```1``` and ```2``` come before this one, so this is at least ```2! + 2!``` permutations before this one
  - Because the second num is ```2```, we know there's a permutation from the second num starting with ```1``` that comes before this one, so there is ```1``` additional permutation (```[x,1,3]```) to consider
  - Lastly, there are no permutations that come before our last num ```1```
  - Add up all the permutations that came before the current one, and we get ```5```
- This is a slightly simplistic way to look at it, say our permutation is ```[2,3,1,4]``` - when we get to the second num, we don't actually have ```1``` and ```2``` below our ```3``` since ```2``` was the first num, what we really have is all the remaining numbers less than the current num (so just ```1```).
- So we need to be able to do two things
    - Count the number of elements smaller and to the right of the current num we're looking at
    - Count the number of permutations (the factorial) of the length of the array to the right of our current num
- Once we can do that, we'll sum up the permutations smaller than the num at each position

# Approach
- To get the count of numbers smaller than a num to the right of it, we can use merge sort - whenever we merge a number from the left nums, the count smaller and to the right will be the current pointer to the right nums (as the smaller right nums have been merged in)
- To get the number of permutations for any size array, we can create a factorial table to quickly look this up

# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` python []
class Solution:
    def getPermutationIndex(self, perm: List[int]) -> int:
        smaller_to_right = [0] * len(perm)

        def merge(left, right):
            if left >= right: return [left]

            mid = left + right >> 1
            l_nums, r_nums = merge(left, mid), merge(mid + 1, right)
            merged, p_l, p_r = [], 0, 0

            while p_l < len(l_nums) or p_r < len(r_nums):
                if p_r == len(r_nums) or (p_l < len(l_nums) and perm[l_nums[p_l]] < perm[r_nums[p_r]]):
                    smaller_to_right[l_nums[p_l]] += p_r
                    merged.append(l_nums[p_l])
                    p_l += 1
                else:
                    merged.append(r_nums[p_r])
                    p_r += 1
            
            return merged
        
        merge(0, len(perm) - 1)

        MOD = 10 ** 9 + 7
        fact = [1, 1]
        for i in range(2, len(perm) + 1):
            fact.append(fact[-1] * i % MOD)
        
        return sum(smaller_to_right[i] * fact[len(perm) - i - 1] % MOD for i in range(len(perm))) % MOD

```

``` kotlin []
class Solution {
    fun getPermutationIndex(perm: IntArray): Int {
        val smallerToRight = IntArray(perm.size)

        fun merge(left: Int, right: Int): List<Int> {
            if (left >= right) return listOf(left)

            val mid = (left + right) / 2
            val (lNums, rNums) = listOf(merge(left, mid), merge(mid + 1, right))
            val merged = ArrayDeque<Int>()
            var (pL, pR) = listOf(0, 0)

            while (pL < lNums.size || pR < rNums.size) {
                if (pR == rNums.size || (pL < lNums.size && perm[lNums[pL]] < perm[rNums[pR]])) {
                    smallerToRight[lNums[pL]] += pR
                    merged.add(lNums[pL++])
                } else {
                    merged.add(rNums[pR++])
                }
            }

            return merged
        }

        merge(0, perm.lastIndex)

        val MOD = 10.0.pow(9.0).toLong() + 7L;
        val fact = ArrayDeque(listOf(1L, 1L))
        for (i in 2L..perm.size.toLong()) fact.add(fact.last() * i % MOD)

        return perm.foldIndexed(0L) { i, total, _ ->
            (total + (smallerToRight[i].toLong() * fact[perm.lastIndex - i] % MOD)) % MOD
        }.toInt()
    }
}
```

``` javascript []
var getPermutationIndex = function(perm) {
    const smallerToRight = perm.map(() => 0);

    const merge = (left, right) => {
        if (left >= right) return [left];

        const mid = left + right >> 1;
        const lNums = merge(left, mid);
        const rNums = merge(mid + 1, right);
        const merged = [];
        let [pL, pR] = [0, 0, 0];

        while (pL < lNums.length || pR < rNums.length) {
            if (pR === rNums.length || (pL < lNums.length && perm[lNums[pL]] < perm[rNums[pR]])) {
                smallerToRight[lNums[pL]] += pR
                merged.push(lNums[pL++]);
            } else {
                merged.push(rNums[pR++]);
            }
        }

        return merged;
    }

    merge(0, perm.length - 1);
    
    const MOD = 10 ** 9 + 7;
    const fact = getFact(perm.length);

    return perm.reduce((total, _, i) => (total + smallerToRight[i] * fact[perm.length - 1 - i]) % MOD, 0)
};

const getFact = (n) => {
    const MOD = 10n ** 9n + 7n;
    const N = BigInt(n);
    const fact = [1n, 1n];
    for (let i = 2n; i <= N; i += 1n) fact.push(i * fact.at(-1) % MOD)

    return fact.map((val) => parseInt(val))
}
```