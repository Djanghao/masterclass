# Greedy Ruby solution, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4086180/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4086180/)

---

# Intuition
Make sure there's a valid solution.  If so, put as many ones as possible in the first row and then shift as many as necessary to the bottom row.

# Approach
1. Return [] if there's no valid solution.  This happens in ones of two cases:
    a. The totals don't match.
    b. Either upper or lower is less than the number of 2s.
2. Initialize the 2D res array with all values in the top row and zeroes in the bottom.
3. Split each two in the top row into one in each row.
4. Check if there are extra values in the top row, and how many.
5. Iterate through the array and swap ones in the top row with zeroes in the bottom until the row sums are correct.
6. Return res.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def reconstruct_matrix(upper, lower, colsum)
    return [] unless colsum.sum == upper + lower
    return [] if colsum.count { |val| val == 2 } > [upper,lower].min

    res = [colsum, Array.new(colsum.length,0)]
    res[0].each_with_index do |num,i|
        if num == 2
            res[0][i] = 1
            res[1][i] = 1
        end
    end

    diff = res[0].sum - upper
    i = 0
    while diff > 0
        if res[0][i] == 1 && res[1][i] == 0
            res[0][i] = 0
            res[1][i] = 1
            diff -= 1
        end
        i += 1
    end

    res
end
```