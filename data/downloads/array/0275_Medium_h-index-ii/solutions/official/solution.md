# Official Solution

**Link:** [https://leetcode.com/problems/h-index-ii/solution/](https://leetcode.com/problems/h-index-ii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Linear search, O(k) time

**Intuition**

Since the list of citation numbers is sorted in ascending order, we can solve the problem in a single pass.

Consider a paper with citation number `c` at index `i`, _i.e_ `c = citations[i]`. The number of papers with a citation number larger than `c` is `n - i - 1`. Hence, including the current paper, there are `n - i` papers that are cited at least `c` times.

Per the definition of H-Index, we need to find the first paper at index `i` where citation number `c = citation[i]` is greater than or equal to `n - i`, _i.e._ `c >= n - i`. Since all papers after paper `i` are cited at least `c` times, there are `n - i` papers (including paper `i`) that are cited at least `c` times. In other words, the H-Index is `n - i`.

![pic](../Figures/275/dia.png)

**Implementation**

<iframe src="https://leetcode.com/playground/3cKNAHCr/shared" frameBorder="0" width="100%" height="276" name="3cKNAHCr"></iframe>

**Complexity Analysis**

- Time complexity: $$O(N)$$ where N is the length of the input list, since in the worst case, we would have to iterate the entire list.

- Space complexity: $$O(1)$$, because no additional data structures were used.
  <br />
  <br />

---

### Approach 2: Binary Search, O(log N) time

**Intuition**

As mentioned earlier, the problem can be re-phrased like so:

> Given a sorted list `citations` of size `n`,
> find the _first_ number `citations[i]`
> that meets the constraint: `citations[i] >= n - i`.

Since this is a sorted list, we can leverage binary search by reducing the search space by half at each iteration. This leads to a better optimized $$O(\log N)$$ time complexity (compared to $$O(N)$$ for linear search).

![pic](../Figures/275/binary.png)

**Algorithm**

1. Find a pivot (middle of list), _i.e._ `citations[mid]`, which divides the original list into two sublists: `citations[0: mid - 1]` and `citations[mid + 1: n]`.

2. Compare `n - mid` to `citations[mid]`, to determine the next step as one of the following 3 options:

   - `citations[mid] == n - mid`: We found our target!
     There's (n - mid) papers with an equal or higher citation count than citations[mid]. If (citations[mid] == n - mid), it's the optimal result since if we move to the right, the next paper is going to have max(0, n - mid - 1) papers with equal or higher citations and citations[mid + 1] > (n - mid - 1), which won't work as the h-index. If we move to the left, we'll have a smaller (or equal) h-index - a sub-optimal result. So, if found, this can be returned right away.

   - `citations[mid] < n - mid`:
     Since the target needs to be greater than or equal to `n - mid`, we need to look at the sublist on the right, _i.e._ `citations[mid + 1: n]`.

   - `citations[mid] > n - mid`:
     In this case, look at the sublist on the left, _i.e._ `citations[0: mid - 1]`.

One difference from the textbook binary search algorithm is that here we return `n - mid` (the count of indices beginning at `mid` through the end of the array), instead of a value at some position in the array.

**Implementation**

<iframe src="https://leetcode.com/playground/7QjoTVsq/shared" frameBorder="0" width="100%" height="500" name="7QjoTVsq"></iframe>

**Complexity Analysis**

- Time complexity: $$O(\log N)$$ since we apply binary search, which reduces the search space by half at each iteration.

- Space complexity : $$O(1)$$, because no additional data structures were used.