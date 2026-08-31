# Ruby solution with hash, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4052251/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4052251/)

---

# Intuition
XOR is a reversible operation.  There are only k+1 possible matches for each coordinate that would have a distance of k, so we can check each of them.

# Approach
1. Initialize total as 0.
2. Create a hash for the count of each pair of coordinates, then populate it with coordinates.
3. Iterate through coordinates.  For each coordinate:
    - Decompose into x and y.
    - Go through the numbers 0 to k.  For each one, find the coordinate pair with an x distance of j and a y-distance of k-j.  Check the count of that coordinate and add to total.
5. If k is zero, subtract the length of coordinates from total.  Each coordinate would match with itself, but coordinates must be distinct to be a valid pair.
6. Return total divided by 2, since each pair was counted twice.

# Complexity
- Time complexity:
$$O(n * k)$$

- Space complexity:
$$O(n)$$

# Code
```
def count_pairs(coordinates, k)
    total = 0
    count = Hash.new(0)
    coordinates.each { |coord| count[coord] += 1 }
    coordinates.each do |coord|
        x,y = coord
        (0..k).each do |j|
            total += count[[x^j,y^(k-j)]]
        end
    end
    total -= coordinates.length if k == 0
    total / 2
end
```