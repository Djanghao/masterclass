# Efficient Ruby Implementation

**Author:** btoconnor
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/4578351/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/4578351/)

---

# Approach
Dynamic Programming with sorting.

# Code
```
# @param {Integer} n
# @param {Integer[][]} rides
# @return {Integer}
def max_taxi_earnings(n, rides)
    # We start by sorting the list of rides by their end position.
    rides_sorted = rides.sort_by { |_, e, _| e }

    # Create an array to store the incremental results
    vals = [0] * (n + 1)


    # We maintain a pointer (`ptr`) to the current ride that we're
    # currently evaluating (see below).
    ptr = 0
    
    # For each position on the road, calculate the max profit the taxi
    # can generate
    for idx in 1..n do
        # We start with the baseline that for a given spot on the road,
        # we can at least generate the amount from the prior spot.
        vals[idx] = vals[idx-1]

        # Go through the list of sorted rides by end point, and check to
        # see if taking this ride + tip, plus the amount that could be
        # generated up to the start of this ride would be more than what
        # we currently have generated for this position.
        # We maintain the ride pointer to the rides we've evaluated along
        # the way, since they are sorted.
        while rides_sorted[ptr] && rides_sorted[ptr][1] == idx
            ride = rides_sorted[ptr]
            profit = ride[1] - ride[0] + ride[2]
            if (vals[ride[0]] + profit) > vals[idx]
                vals[idx] = vals[ride[0]] + profit
            end
            ptr += 1
        end
    end

    # The maximum profit is the last entry in the amount of values in the array.
    vals[-1]
end

```