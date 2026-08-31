# Efficient Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3623196/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3623196/)

---

# Intuition
Having repeat rows doesn't affect if this is true or false, and any valid solution can be done in two or fewer rows.

# Approach
1. Create an indices hash, and assign an index to each unique element in the array.  (The purpose of this is to ignore repeat elements.  We need to have an index from the original array, though, so we can't just do grid.uniq!)
2. If we have an array of all zeroes in the grid, that's a solution -- return its index in an array.
3. Otherwise, check each pair of distinct rows.  (This loop checks each element with itself, and checks each pair both ways.  It could be improved, but it doesn't need to be, since there are at most 31 distinct rows.)  Use a helper function.
4. Return an empty array if there are no pairs.

Helper function:
(This was written to check any number of rows, but in practice, it would only be two.  Feel free to improve this.)
1. Create an array of all zeroes (of the appropriate length).
2. For each row, add the values of its elements to your array.
3. Check if all values in your array are at most half the number of rows.  (Since there are always two rows, all values must be less than 2.)

# Complexity
- Time complexity:
$$O(n)$$, because we have to iterate through the array.  The part checking pairs is $$O(1)$$.

- Space complexity:
$$O(1)$$, since there are at most 32 distinct rows.

# Code
```
def good_subsetof_binary_matrix(grid)
    indices = Hash.new
    grid.each_with_index { |row,i| indices[row] = i }
    @n = grid[0].length
    
    return [indices[Array.new(@n,0)]] if indices[Array.new(@n,0)]
    
    rows = indices.keys
    
    rows.each do |row|
        rows.each do |row2|
            return [indices[row],indices[row2]].sort if valid?([row,row2])
        end
    end
    
    []
end

def valid?(rows)
    arr = Array.new(@n,0)
    rows.each do |row|
        (0...@n).each { |i| arr[i] += row[i] }
    end
    
    arr.all? { |n| n <= rows.length / 2 }
end
```