# Pretty simple DP with a bit of number theory

**Author:** pioneer10
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/solutions/5976042/](https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/solutions/5976042/)

---

# Intuition
It is pretty obvious that the only thing we need to know about some subsequence is GCD of its elements.

The question becomes: how do we form pairs of non-overlapping subsequences?

Let's imagine we already processed some prefix of `nums` and know all the pairs of non-overlapping non-empty subsequences (no matter if they have the same GCD or not). Now we have some new element (the next in `nums`) and we need to form new pairs. Obviously, new pairs are those having one of the subsequences to contain the new element.

The subsequence containing the new element is either of length 1, or it can be formed by taking some non-empty subsequence of processed prefix and adding the new element.

In the first case, any non-empty subsequence of the processed prefix and subsequence consisting of only the new element is a new pair of non-overlapping non-empty subsequences.

In the second case, we just take every pair for the prefix and add the new element to each of the subsequences of that pair, thus forming a new pair of non-overlapping non-empty subsequences.

# Approach
Let `seq` be a hash table, where `seq[d]` is the number of non-empty subsequences having GCD equal to `d`.

Let `pairs` be a hash table, where `pairs[a][b]` is the number of pairs `(seq1, seq2)` such that `gcd(seq1) == a` and `gcd(seq2) == b`.

That's perfectly enough to calculate new pairs for the new element, so we just iterate through elements of `nums` and update these hash tables accordingly, i.e. we solve the problem for just few numbers and then use `seq` and `pairs` to solve the new problem with one additional element being added.

The only question remains: how do we update these hash tables efficiently?

Obviously, if we add one element to some subsequence, GCD of the new subsequence is not greater than GCD of the original one. So, if we iterate `seq` in ascending order of its keys, we can update values in place.

The situation with `pairs` is a bit different. To solve this, we would store only such `pairs[a][b]` that `a <= b`, i.e. both pairs `(seq1, seq2)` and `(seq2, seq1)` would be counted to the same element in `pairs`. Therefore, we iterate it in ascending order of `a`, and for the specific `a` in ascending order of `b`.

The answer would be the sum of `pairs[a][a]` for all possible `a`.

# Complexity
- Time complexity: $$O(n*M^2)$$
- Space complexity: $$O(M^2)$$

where `M` is the maximum among values of `nums` (it could be the constant from the constraints).

# Code
```golang []
const (
    Modulo = 1000000007
    MaxVal = 200
)

func subsequencePairCount(nums []int) int {
    if len(nums) < 2 {
        return 0
    }
    seq := make([]int, MaxVal)
    pairs := make([][]int, MaxVal)
    for i := range pairs {
        pairs[i] = make([]int, MaxVal)
    }
    if nums[0] == nums[1] {
        seq[nums[0] - 1] = 3
        add_pairs(nums[0], nums[0], 2, pairs)
    } else {
        for _, num := range nums[:2] {
            seq[num - 1] = 1
        }
        seq[gcd(nums[0], nums[1]) - 1]++
        add_pairs(nums[0], nums[1], 2, pairs) // order doesn't matter
    }
    for _, num := range nums[2:] {
        for i, row := range pairs {
            for j, c := range row[i:] { // first i elements are zeroes
                if c != 0 {
                    add_pairs(gcd(i + 1, num), j + 1, c, pairs)
                    add_pairs(i + 1, gcd(j + 1, num), c, pairs)
                }
            }
        }
        for i, c := range seq {
            j := gcd(i + 1, num) - 1
            seq[j] = (seq[j] + c) % Modulo
            add_pairs(i + 1, num, 2 * c, pairs) // order doesn't matter
        }
        // new sequence containing only the new element
        seq[num - 1] = (seq[num - 1] + 1) % Modulo
    }
    res := 0
    for i, row := range pairs {
        res = (res + row[i]) % Modulo
    }
    return res
}

func gcd(a, b int) int {
    if a < b {
        a, b = b, a
    }
    for b != 0 {
        a, b = b, a % b
    }
    return a
}

func add_pairs(a, b, c int, pairs [][]int) {
    if b < a {
        a, b = b, a
    }
    pairs[a - 1][b - 1] = (pairs[a - 1][b - 1] + c) % Modulo
}
```