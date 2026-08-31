# Python 3: A Bit of Clever Pattern Recognition

**Author:** BiggestChungus
**Votes:** 1
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/4410284/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/4410284/)

---

# Intuition\r
\r
This is a kind of tricky problem to work out if you try to start with dynamic programming.\r
\r
So instead I tackled it by finding a pattern. First we note that if we can find a pattern starting with 0, then we can do a circular shift of the array to get the final answer.\r
* `n=1: [0, 1]`\r
* `n=2: [00, 01, 11, 10]`\r
* `n=3: [000, 001, 011, 010, 110, 111, 101, 100]`\r
\r
A pattern begins to emerge, where for `n=3` I realized I was reading the solution for `n=2` to build the solution from `n=3`. Let's look at the last 2 bits for `n=3`:\r
\r
ASCII art:\r
```a\r
n=3: 000, 001, 011, 010, 110, 111, 101, 100\r
      00   01   11   10   10   11   01   00\r
      -----------------   -----------------\r
        n=2 solution        reverse of n=2\r
        with 0 in front     solution with\r
        i.e. just the       a 1 in front\r
        n=2 solution \r
```\r
\r
The pattern makes some sense:\r
* if we have the answer `S[n]` for the `n-bit` sequence\r
* then we know that `S[n]` has the right property: it varies by only 1 bit difference each pair, and the first and last are one bit off\r
* if we do `S[n] + reverse(S[n])` then we *almost* have a solution, with two problems:\r
  * the middle two elements are the same\r
  * the first and last elements are the same\r
  * because we took `S[n]` and appended the reverse\r
* we can fix both problems to adding `100_2` to the reversed list.\r
  * then the middle two elements are one off\r
  * the first and last two elements are one off\r
  * and we traversed all possible values\r
\r
Final recurrence relation: `S[n] = S[n-1] + [p + k for k in reversed(S[n-1])]`\r
  * `S[n]` is the answer for `n` bits\r
  * `p` is `1 << (n-1)`\r
\r
So we take the answer for `n-1`, and append the reverse of it with `1 << (n-1)` added to each element.\r
\r
# Approach\r
\r
Not much to add. I store the current sequence length as `S`, starting with `n=1`.\r
\r
Then I use `list.extend` to apply its reverse, with `p` added, to form the sequence for the next list.\r
\r
This produces `[0, ...]`. So I just find the index of `start` using `list.index(start)` and do the circular rotation of the array.\r
\r
That rotation works because we know the first and last are 1 bit off, and all pairs are 1 bit off, so any circular rotation of the array has the expected property too.\r
\r
# Complexity\r
- Time complexity: `O(2^n)`\r
\r
- Space complexity: `O(2^n)` for the final rotation\r
\r
The space complexity can be reduced to just O(1) extra space if we did a smarter rotation. You can rotate the array in place with a temp variable.\r
\r
But rotating with the temp variable is annoying and prone to off-by-one errors so I didn't bother.\r
\r
\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution:\r
    def circularPermutation(self, n: int, start: int) -> List[int]:\r
        # super brute force: DFS + backtracking\r
        # smarter: pattern\r
\r
        # wlog we can make the permutation of 0..2^n-1 starting with zero, then cycle through to start at `start`\r
\r
        # n = 1: 0, 1\r
        # n = 2: 00, 01, 11, 10\r
        # so take 0S_{n-1} and 1rev(S_{n-1}) (?)\r
        # because we know S_{n-1} has the right property, and same with rev(S_{n-1})\r
        # so S + rev(S) has that property, EXCEPT\r
        #   the outer two: same element\r
        #   and the inner two: same element\r
        #   so if we put a 1 in front of rev(S) then we're good\r
\r
        if n == 1:\r
            if start == 0: return [0, 1]\r
            else: return [1, 0]\r
\r
        S = [0, 1]\r
        for m in range(2, n+1):\r
            # existing S is S_{n-1}; we leave it as-is ("prepend 0")\r
            # then we append elements in reverse with a 1 in front, for m=2 we want to add 10 == 1 << (m-1)\r
            p = 1 << (m-1)\r
            S.extend(p + S[k] for k in range(len(S)-1, -1, -1))\r
\r
        i = S.index(start)\r
        if i: return S[i:] + S[:i]\r
        else: return S\r
```