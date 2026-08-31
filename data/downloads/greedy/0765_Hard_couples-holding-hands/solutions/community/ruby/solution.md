# Greedy Ruby O(n) solution 100%/100%

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/3290240/](https://leetcode.com/problems/couples-holding-hands/solutions/3290240/)

---

# Intuition
Let's do a greedy strategy!  Intuition says it's most efficient here.

# Approach
Basically, look at each pair one at a time and swap the second number with what it should be if neccesary.  Specifically:
-Create a hash to store indices of each value for efficient swapping
-Go through pair of values in the row
-If the indices aren't a valid pair, swap the second number with the number it should be.  (Change the indices in the hash, as well.)  Add one to the number of swaps.
-Return the number of swaps

# Complexity
- Time complexity:
$$O(n)$$, both to create the idx hash and to iterate through rows

- Space complexity:
$$O(n)$$ for the idx hash

# Code
```
def min_swaps_couples(row)
    idx = Hash.new
    row.each_with_index { |val,i| idx[val] = i }
    swaps = 0
    i = 0

    while i < row.length
        if (row[i] - row[i+1]).abs != 1 || [row[i],row[i+1]].max % 2 == 0
            target = row[i] % 2 == 0 ? row[i] + 1 : row[i] - 1
            index = idx[target]

            idx[target],idx[row[i+1]] = idx[row[i+1]],idx[target]
            row[i+1],row[index] = row[index],row[i+1]
            swaps += 1
        end

        i += 2
    end

    swaps
end
```