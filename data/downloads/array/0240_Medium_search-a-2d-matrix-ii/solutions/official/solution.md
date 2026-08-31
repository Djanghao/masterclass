# Official Solution

**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solution/](https://leetcode.com/problems/search-a-2d-matrix-ii/solution/)

---

[TOC]

## Solution
---
### Approach 1: Brute Force

**Intuition**

As a baseline, we can search the 2D array the same way we might search an
unsorted 1D array -- by examining each element.

**Algorithm**

The algorithm doesn't really do anything more clever than what is explained
by the intuition; we loop over the array, checking each element in turn. If
we find it, we return `true`. Otherwise, if we reach the end of the nested
`for` loop without returning, we return `false`. The algorithm must return
the correct answer in all cases because we exhaust the entire search space.

<iframe src="https://leetcode.com/playground/85hBivYM/shared" frameBorder="0" width="100%" height="276" name="85hBivYM"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(nm)$$

    Becase we perform a constant time operation for each element of an
    $$n\times m$$ element matrix, the overall time complexity is equal to the
    size of the matrix.

* Space complexity : $$\mathcal{O}(1)$$

    The brute force approach does not allocate more additional space than a
    handful of pointers, so the memory footprint is constant.
<br />
<br />


---
### Approach 2: Binary Search

**Intuition**

The fact that the matrix is sorted suggests that there must be some way to use
binary search to speed up our algorithm.

**Algorithm**

First, we ensure that `matrix` is not `null` and not empty. Then, if we
iterate over the matrix diagonals, we can maintain an invariant that the
slice of the row and column beginning at the current $$(row, col)$$ pair is
sorted. Therefore, we can always binary search these row and column slices
for `target`. We proceed in a logical fashion, iterating over the diagonals,
binary searching the rows and columns until we either run out of diagonals
(meaning we can return `False`) or find `target` (meaning we can return
`True`). The `binarySearch` function works just like normal binary search,
but is made ugly by the need to search both rows and columns of a
two-dimensional array.

<iframe src="https://leetcode.com/playground/848oETar/shared" frameBorder="0" width="100%" height="500" name="848oETar"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(\log(n!))$$

    It's not super obvious how $$\mathcal{O}(\log(n!))$$ time complexity arises
    from this algorithm, so let's analyze it step-by-step. The
    asymptotically-largest amount of work performed is in the main loop,
    which runs for $$min(m, n)$$ iterations, where $$m$$ denotes the number
    of rows and $$n$$ denotes the number of columns. On each iteration, we
    perform two binary searches on array slices of length $$m-i$$ and
    $$n-i$$. Therefore, each iteration of the loop runs in
    $$\mathcal{O}(\log(m-i)+\log(n-i))$$ time, where $$i$$ denotes the current
    iteration. We can simplify this to $$\mathcal{O}(2\cdot \log(n-i))=\mathcal{O}(\log(n-i))$$
    by seeing that, in the worst case, $$n\approx m$$. To see why, consider
    what happens when $$n \ll m$$ (without loss of generality); $$n$$ will
    dominate $$m$$ in the asymptotic analysis. By summing the runtimes of all
    iterations, we get the following expression:

    $$
        (1) \quad \mathcal{O}(\log(n) + \log(n-1) + \log(n-2) + \ldots + \log(1))
    $$

    Then, we can leverage the log multiplication rule ($$\log(a)+\log(b)=\log(ab)$$)
    to rewrite the complexity as:

    $$
    \begin{aligned}
        (2) \quad \mathcal{O}(\log(n) + \log(n-1) + \log(n-2) + \ldots + \log(1)) &=
                  \mathcal{O}(\log(n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot 1)) \\ &=
                  \mathcal{O}(\log(1 \cdot \ldots \cdot (n-2) \cdot (n-1) \cdot n)) \\
                                                             &= \mathcal{O}(\log(n!))
    \end{aligned}
    $$

    Because this time complexity is fairly uncommon, it is worth thinking about
    its relation to the usual analyses. For one, $$\log(n!) = \mathcal{O}(n\log n)$$.
    To see why, recall step 1 from the analysis above; there are $$n$$ terms, each no
    greater than $$\log(n)$$. Therefore, the asymptotic runtime is certainly no worse than
    that of an $$\mathcal{O}(n\log n)$$ algorithm.

* Space complexity : $$\mathcal{O}(1)$$

    Because our binary search implementation does not literally slice out
    copies of rows and columns from `matrix`, we can avoid allocating
    greater-than-constant memory.
<br />
<br />


---
### Approach 3: Divide and Conquer

**Intuition**

We can partition a sorted two-dimensional matrix into four sorted submatrices,
two of which might contain `target` and two of which definitely do not.

**Algorithm**

Because this algorithm operates recursively, its correctness can be asserted
via the correctness of its base and recursive cases.

*Base Case*

For a sorted two-dimensional array, there are two ways to determine in
constant time whether an arbitrary element `target` can appear in it. First,
if the array has zero area, it contains no elements and therefore cannot
contain `target`. Second, if `target` is smaller than the array's smallest
element (found in the top-left corner) or larger than the array's largest
element (found in the bottom-right corner), then it definitely is not
present.

*Recursive Case*

If the base case conditions have not been met, then the array has positive
area and `target` could potentially be present. Therefore, we seek along the
matrix's middle column for an index `row` such that
$$ matrix[row-1][mid] < target < matrix[row][mid] $$ (obviously, if we find
`target` during this process, we immediately return `true`). The existing
matrix can be partitioned into four submatrice around this index; the
top-left and bottom-right submatrice cannot contain `target` (via the
argument outlined in *Base Case* section), so we can prune them from the
search space. Additionally, the bottom-left and top-right submatrice are
sorted two-dimensional matrices, so we can recursively apply this algorithm
to them.

<iframe src="https://leetcode.com/playground/VsoRHt79/shared" frameBorder="0" width="100%" height="500" name="VsoRHt79"></iframe>

Here is a visualization for the above code.

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/570771097" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(n\log n)$$

    First, for ease of analysis, assume that $$n \approx m$$, as in the
    analysis of approach 2. Also, assign $$x=n^2=|matrix|$$; this will make
    the [master method](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms))
    easier to apply. Now, let's model the runtime of the
    divide & conquer approach as a recurrence relation:

    $$
        T(x) = 2 \cdot T(\frac{x}{4}) + \sqrt{x}
    $$

    The first term ($$2 \cdot T(\frac{x}{4})$$) arises from the fact that we
    recurse on two submatrices of roughly one-quarter size, while
    $$\sqrt{x}$$ comes from the time spent seeking along a $$O(n)$$-length
    column for the partition point. After binding the master method variables
    ($$a=2;b=4;c=0.5$$) we notice that $$\log_b{a}=c$$. Therefore, this
    recurrence falls under case 2 of the master method, and the following
    falls out:

    $$
    \begin{aligned}
        T(x) &= \mathcal{O}(x^c \cdot \log x) \\
             &= \mathcal{O}(x^{0.5} \cdot \log x) \\
             &= \mathcal{O}((n^2)^{0.5} \cdot \log(n^2)) \\
             &= \mathcal{O}(n \cdot \log(n^2)) \\
             &= \mathcal{O}(2n \cdot \log n) \\
             &= \mathcal{O}(n \cdot \log n) \\
    \end{aligned}
    $$

    Extension: what would happen to the complexity if we binary searched for
    the partition point, rather than used a linear scan?

* Space complexity : $$\mathcal{O}(\log n)$$

    Although this approach does not fundamentally require
    greater-than-constant addition memory, its use of recursion means that it
    will use memory proportional to the height of its recursion tree. Because
    this approach discards half of `matrix` on each level of recursion (and
    makes two recursive calls), the height of the tree is bounded by $$\log n$$.
<br />
<br />


---
### Approach 4: Search Space Reduction

**Intuition**

Because the rows and columns of the matrix are sorted (from left-to-right and
top-to-bottom, respectively), we can prune $$\mathcal{O}(m)$$ or 
$$\mathcal{O}(n)$$ elements when looking at any particular value.

**Algorithm**

First, we initialize a $$(row, col)$$ pointer to the bottom-left of the
matrix.[^1] Then, until we find `target` and return `true` (or the pointer
points to a $$(row, col)$$ that lies outside of the dimensions of the
matrix), we do the following: if the currently-pointed-to value is larger
than `target` we can move one row "up". Otherwise, if the
currently-pointed-to value is smaller than `target`, we can move one column
"right". It is not too tricky to see why doing this will never prune the
correct answer; because the rows are sorted from left-to-right, we know that
every value to the right of the current value is larger. Therefore, if the
current value is already larger than `target`, we know that every value to
its right will also be too large. A very similar argument can be made for the
columns, so this manner of search will always find `target` in the matrix (if
it is present).

Check out some sample runs of the algorithm in the animation below:

!?!../Documents/240_Search_a_2D_Matrix_II.json:1280,720!?!

<iframe src="https://leetcode.com/playground/75rCbS6o/shared" frameBorder="0" width="100%" height="463" name="75rCbS6o"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(n+m)$$

    The key to the time complexity analysis is noticing that, on every
    iteration (during which we do not return `true`) either `row` or `col` is
    is decremented/incremented exactly once. Because `row` can only be
    decremented $$m$$ times and `col` can only be incremented $$n$$ times
    before causing the `while` loop to terminate, the loop cannot run for
    more than $$n+m$$ iterations. Because all other work is constant, the
    overall time complexity is linear in the sum of the dimensions of the
    matrix.

* Space complexity : $$\mathcal{O}(1)$$

    Because this approach only manipulates a few pointers, its memory
    footprint is constant.
<br />


### Footnotes ####

[^1]: This would work equally well with a pointer initialized to the
top-right. Neither of the other two corners would work, as pruning a
row/column might prevent us from achieving the correct answer.