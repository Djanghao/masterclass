# One-liner Ruby Solution 💎♦️♦️💎

**Author:** lowie_
**Votes:** 2
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/3499596/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/3499596/)

---

# Intuition
We need to find sum of elements in `mat` with row and column indices are `i` and `j` respectively, that satisfies either: `i = j` or `i + j + 1 = n`.

# Approach
Since we are trying to do one-liner, the use of blocks are almost forbidden. Therefore, we will use `each_with_index` to get the indices and filter using the condition above.

`map` is used to apply a lambda on each row of a matrix, we want that lambda to return the array of elements that satisfy the conditions on each row.

On each row `i`, there are maximum 2 elements that satisfiable: the `i`-th and `n - i - 1`-th. We put these two indices into an array, then use `uniq` in case these two indices are equal. Then, we `map` on this array to get the actual element on the matrix.

Afterwards, our matrix become an array of arrays, that only include the elements that will be added to the result. We can use `flatten` to reduce into a 1D array, then use either `sum` or, my personal preference, `reduce(:+)` to get the final answer.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
def diagonal_sum(mat)
    mat.each_with_index.map { |arr, i| [i, mat.size() - 1 - i].uniq.map {|j| arr[j]} }.flatten.reduce(:+)
end
```