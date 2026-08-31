# Original approach with DP and Hash Table | Easy to understand | No Trie | O(N * sqrt(M))

**Author:** IvanTerekh
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5501695/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5501695/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

## Limits

The constraints are very specific and tight. This problem accepts a very limited set of approaches that wouldn't result in TLE.

Pay attention to these 2 constraints:
- `1 <= words.length == costs.length <= 5 * 10^4`
- The total sum of `words[i].length` is less than or equal to `5 * 10^4`.

The conclusion from these two statements is that there are not that many unique lengths of a word possible. More specificly, the number of words with unique lenght is $$\\sqrt{5 * 10^4}) < 250$$

## Dynamic Programming

If we know the minimal cost for a prefix of the target `target[:i]`, we can compute possible costs for `target[:i+l]` by attaching possible words of lenght `l`. In fact for any length `l` there is only one possible word that can be used to build the target. E.g. we can iterate through possible lengthes and eventually fill the optimal values for `i+l` if an appropriate word exists.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Build word hashmap. As mentioned we will be trying to attach exact words to existing results. So, we will need to find the words in O(1) time.
2. Find all possible word lengths and keep them in sorted order. Sorted order is needed because some words will become to large to use as we approach the end of the DP table.
3. Fill in DP table. On first iteration try every word that is a prefix of `target` to put some values in the table. For every feasible value in dp, try to attach words by iterating through the possible length. A word to check would be `target[i:i+l]`. When such word exists, we can check if using it would reduce cost for cell `i+l`

# Complexity
- Time complexity: $$O(N\\cdot \\sqrt{M})$$, where $$N$$ is the length of the `target` and $$M$$ is the sum of word lengthes. In this problem both $$N$$ and $$M$$ are constrained by $$5\\cdot 10^4$$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$ where $$N$$ is maximum of the `target` length and `words` length. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumCost(target string, words []string, costs []int) int {
    // Init word cost map and word lengths set.
    ww := make(map[string]int, len(words))
    lenMap := make(map[int]bool)
    for i, w := range words {
        if ww[w] == 0 || ww[w] > costs[i] {
            ww[w] = costs[i]
        }

        lenMap[len(w)] = true
    }

    // Convert set of lengths to a sorted list.
    lens := make([]int, 0, len(lenMap))
    for l := range lenMap {
        lens = append(lens, l)
    }
    sort.Ints(lens)

    // Fill DP, zeros mean infeasible. Can do it since costs are non-zero.
    dp := make([]int, len(target))
    cost := 0
    for i := range dp {
        if i != 0 {
            cost = dp[i-1]
            if cost == 0 {
                continue
            }
        }

        for _, l := range lens {
            if i + l > len(target) {
                break
            }

            w := target[i:i+l]
            c, ok := ww[w]
            if !ok {
                continue
            }

            j := i + l - 1
            if dp[j] == 0 || dp[j] > cost + c {
                dp[j] = cost + c
            }
        }
    }

    // feasibility check
    res := dp[len(dp)-1]
    if res == 0 {
        return -1
    }

    return res
}

```