# Official Solution

**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solution/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solution/)

---

### Approach: Enumeration

#### Intuition

Enumerating all substrings and checking whether they are dominant would be too slow. From the definition, a substring is dominant when the number of ones is at least the square of the number of zeros. This allows us to enumerate substrings by the number of zeros they contain, which reduces the search range to about the square root of the string length.

Fix a right boundary `i` and let `cnt0` be the number of zeros in the substring. Let the position of the `cnt0`-th zero be `j`. Our task is to count how many valid left boundaries lie between the `cnt0`-th and the `(cnt0 plus 1)`-th zero. Since `cnt0` cannot exceed the square root of `n`, the overall complexity becomes `O(n sqrt n)`.

Let `pre[j]` be the position of the nearest zero before `j`. A substring ending at `i` that contains `cnt0` zeros can contain at most

```
cnt1 = i - pre[j] - cnt0
```

ones. Then:

* If `cnt1` is less than `cnt0 * cnt0`, no dominant substring exists with this configuration.
* Otherwise, at least one dominant substring exists, and the number of valid left boundaries is restricted by both `j - pre[j]` and `cnt1 - cnt0 * cnt0 + 1`.

We process each position `i` using this logic and sum the counts of valid left boundaries. To handle initial consecutive ones conveniently, add a sentinel zero at the start of the string.

#### Implementation

<iframe src="https://leetcode.com/playground/A9sa7jNM/shared" frameBorder="0" width="100%" height="500" name="A9sa7jNM"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string.

- Time complexity: $O(n\sqrt n)$.

- Space complexity: $O(n)$.
  
  We use an array $\textit{pre}$ to mark the position of the nearest $0$ before each position, so the space complexity is $O(n)$.

---