# ✅ Easy | ✨ O(N) | 🏆 Simple Greedy | 👍 With Math Proof

**Author:** hero080
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622824/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622824/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since each row in the input is small ($n < 5$), we can encode them into a integer. We have at most $2^5$ integers to handle. We call them **values**.

A valid subset of **values** can be a single `{0}` or a pair `{a, b}` where `a & b == 0`.

In the sections below we will always consider subset of **values** rather than their indices. It is trivial to get the indices once we figured out the values.

# Approach
<!-- Describe your approach to solving the problem. -->
We prove that if any valid non empty subset exists then there must be a valid subset of one of the following types:
  1. A subset of a single value `{0}`.
  1. A subset of two values`{a, b}` where `a & b == 0`

We prove it by contradiction:

Assume there is a valid non empty subset $S$ and there is no valid subset of the two above cases.
  * If $|S| = 1$, then the single element in it must be 0, which is the type 1 above. Therefore $|S| > 1$
  * For two elements $a \\in S$ and $b \\in S$, if `a & b == 0` then we have a subset `{a, b}` of type 2 above. Therefore any two elements in $S$ must share some bits.

Now consider the average number of bits in all the values in $S$. They can be at most 2.5 since $n \\le 5$ (`n` is the number of bits involved in this question) and each bit "column" has at most half set. This means that we have at least one value $x \\in S$ that has at most 2 bits set.
  * If $x$ has 0 bit set, that gives us type 1.
  * If $x$ has 1 bit set, then all other values in $S$ must have that bit set as well, therefore that bit position will violate the "half length" condition.

Now $x$ has exactly two bits set. **WLOG** let's say we get `x = 0b00011`.
Since any other values in $S$ must share at least a bit with $x$, we have the total bit counts at bit position 0 and 1 to be at least $|S| + 1$ (each number has bit position 0 or 1 set and $x$ has both set). This means one of them will violate the "half the length" condition.
Q.E.D.

Note: As the proof goes, we can see that it is only valid for $n \\le 5$. In fact for $n = 6$ we have a counter example:
`0 0 0 1 1 1`
`1 1 0 1 0 0`
`1 0 1 0 1 0`
`0 1 1 0 0 1`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$\\Theta(N)$ where $N$ is the number of rows.

Technically it is actually $\\Theta(N k + 2^{2k})$ where $k$ is the number of columns. We ignored that since our algorithm only works for $k \\le 5$ anyway so we treated it as a constant.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$\\Theta(2^k)$ where $k$ is the number of columns.

# Code
```
class Solution {
public:
  vector<int> goodSubsetofBinaryMatrix(vector<vector<int>>& grid) {
    // This is actually the $2^k$ we mentioned in above explanation.
    // It is NOT the $N$ we mentioned.
    const int N = 1 << grid[0].size();
    vector<int> first_index(N, -1);
    for (int i = grid.size() - 1; i >=0; --i) {
      first_index[Encode(grid[i])] = i;
    }
    if (first_index[0] != -1) {
      // We got a 0 row.
      return {first_index[0]};
    }

    for (int a = 1; a < N; ++a) {
      if (first_index[a] == -1) continue;
      for (int b = a + 1; b < N; ++b) {
        if (first_index[b] == -1) continue;
        if ((a & b) == 0) {
          // We found a valid pair.
          int ra = first_index[a];
          int rb = first_index[b];
          return {min(ra, rb), max(ra, rb)};
        }
      }
    }
    return {};
  }
  
  static uint Encode(const vector<int>& row) {
    uint x = 0;
    for (int i = 0; i < row.size(); ++i) {
      if (row[i] == 0) continue;
      x |= 1 << i;
    }
    return x;
  }
};
```