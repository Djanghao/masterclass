# Ruby | O(n^2 * m * log2(m)) using binary search. With comments!

**Author:** codingstar1
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2492688/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2492688/)

---

Seems like nobody except me has published a solution for Ruby. Nobody knows about `bsearch` method? Ok, here it is for you: [link](https://ruby-doc.org/core-3.1.2/doc/bsearch_rdoc.html).

```ruby
def max_sum_submatrix(matrix, k)
    m, n = matrix.length, matrix[0].length
    res = -Float::INFINITY
    # Lets iterate through start and last columns and then we'll iterate through last rows setting boundaries to our rectangle.
    # We won't iterate through start rows since we will find the most efficient start row with a binary search 
    # that is way faster having complexity only O(log2(last_row)) instead of O(last_row).
    for start_col in (0...n)
        sum_row = Array.new(m, 0)   # There will be sums of elements in rows that are limited by the start and last columns.
        for last_col in (start_col...n)
            sum = 0     # Current sum of all sums of rows from 0 to last_row.
            accum_sums = [0] # It will be a sorted from min to max array of accumulated sums with size m + 1.
            for last_row in (0...m)
                sum += ( sum_row[last_row] += matrix[last_row][last_col] )
                # Now we want to find a minimum subsum to substract from sum so that (sum - subsub) <= k. Lets name it 'excess'.
                excess = accum_sums.bsearch { |x| x >= sum - k }   
                unless excess.nil? # If excess == nil then it appeared to be imposible to achieve a condition (sum - subsub) <= k
                    res = [res, sum - excess].max
                end
                # Now we need to find an index to insert sum so that accum_sums array stayed sorted from min to max.
                idx = accum_sums.bsearch_index { |x| x >= sum }
                accum_sums.insert(idx || (last_row + 1), sum)
            end
        end
    end
    res
end
```
