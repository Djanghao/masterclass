# Simple solution using sorting, prefix sum and sliding window

**Author:** pioneer10
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5669767/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5669767/)

---

# Intuition
Let's imagine there is substring `s[l..r]` that contains more than `k` `0`s and more than `k` `1`s. Obviously, any substring `s[a..b]` where `a <= l` and `b >= r` also contains more than `k` `0`s and more than `k` `1`s.

On the other hand, if there is substring `s[l..r]` that satisfies k-constraint, any substring of this substring also satisfies k-constraint.

This means that we can use sliding window to find all k-constraint substrings in `s`. But the problem is to count such substrings for each query. How to do this?

We can slightly modify the algorythm as follows. Whenever the right boundary of the window is about to pass some of the $$r_i$$, we already know all k-constraint substrings having right boundary less than or equal to $$r_i$$. At this moment, the window is also k-constraint meaning that any substring inside the window is k-constraint. Moreover, any k-constraint substring which starts at any index to the left of the left boundary of the window cannot end to the right of the right boundary of the window because at some point we moved the left boundary due to non-constrainity of the window.

In other words, we can calculate number of k-constraint substrings starting at particular index whenever the left boundary of the window is about to pass that index.

# Approach
Let's have a closer look at the algorythm.

We sort the `queries` in a such way so the $$r_i$$ are sorted in non-decreasing order (i.e. sort them by the right boundary). Alternatively, we can use hash table where keys are right boundaries of the queries and values are arrays with the indices in the `queries`. The latter approach has lower time complexity while higher extra space complexity.

Now, we calculate the number of k-constraint substrings starting at particular index. More precisely, we calculate prefix sums of those numbers.

1. Let `l` and `r` would be the boundaries of the window. NB: in the code below, `r` is not included to the window which is opposed to the queries where right boundary is included
2. Let `c` would be an array where `c[i]` is the number of k-constraint substrings starting at any index `j < i` (prefix sum). Of course, this is to calculate, so initially `c` is an array of length `n + 1` (`n` is length of `s`) filled with zeroes.
3. Sort `queries` by the right boundary in non-decreasing order.
4. Then, iterate over `queries`. For each query, move the window until right boundary is about to pass $$r_i$$ as follows:
    * In case the window is k-constraint, we move right boundary `r` one index to the right
    * Otherwise, we need to move the left boundary one index to the right. But before we calculate `c[l + 1]`. Remember that removing the rightmost character of the window would make it k-constraint, therefore the number of k-constraint substrings starting at index `l` is equal to the length of the window decreased by `1`.
5. Now, we're ready to calculate the answer for the current query:
    * In case the window contains the whole interval $$[l_i,r_i]$$, any substring of $$s[l_i..r_i]$$ is k-constraint
    * Otherwise, there are k-constraint substrings which start at index `j` such that $$l_i <= j < l$$ and the rest of k-constraint substrings are substrings of the window (any substring within the window is k-constraint). In order to calculate k-constraint substrings outside the window we use prefix sum array `c`

# Complexity
- Time complexity: $$O(m*log(m) + n)$$ (in case of sorting) where $$m$$ is the length of `queries` and $$n$$ is the length of `s`
- Space complexity: $$O(m + n)$$ (in both cases)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func countKConstraintSubstrings(s string, k int, queries [][]int) []int64 {
    n, m := len(s), len(queries)
    idx := make([]int, m)
    for i := range idx {
        idx[i] = i
    }
    sort.Slice(idx, func (i, j int) bool { return queries[idx[i]][1] < queries[idx[j]][1] })
    c := make([]int64, n + 1)
    l, r, c0, c1 := 0, 0, 0, 0
    res := make([]int64, m)
    for _, i := range idx {
        q := queries[i]
        for r <= q[1] || c0 > k && c1 > k { // r might be greater since it is not included to the window as opposed to q[1] which is included
            if c0 > k && c1 > k {
                c[l + 1] = c[l] + int64(r - l - 1)
                if s[l] == '0' {
                    c0--
                } else {
                    c1--
                }
                l++
            } else {
                if s[r] == '0' {
                    c0++
                } else {
                    c1++
                }
                r++
            }
        }
        if l <= q[0] {
            // any substring of s[q[0]..q[1]] is k-constraint
            w := int64(q[1] - q[0] + 1)
            res[i] = w * (w + 1) / 2
        } else {
            // any substring of the window is k-constraint
            // plus k-constraint substrings starting at any index in the range q[0]..(l - 1)
            w := int64(r - l)
            res[i] = w * (w + 1) / 2 + c[l] - c[q[0]]
        }
    }
    return res
}
```