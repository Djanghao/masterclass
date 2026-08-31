# Ruby solution with memoization, explained

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766444/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766444/)

---

# Intuition
For each event, you can choose to include it (and exclude any overlapping events), or exclude it (and move onto the next event).  Sort and memoize for efficiency.

# Approach
Main function:
1. Sort the events and store in a class variable.
2. Create a memo using an array for fast lookup.
3. Use a helper function starting at the first event, with k events.

Helper function:
1. Return 0 if you've checked all events or you can't attend any more events.
2. Return your stored value if it's in memo.
3. Create option 1: do not go to current event, and call the function starting at the next event.
4. For option 2, you *will* go to current event.  Use a while loop to skip past any overlapping events, then create option 2 starting at j (next non-overlapping event) and adding the value of current event.
5. Find the max of option 1 and option 2, memoize, and return.

# Complexity
- Time complexity:
$$O(n * k)$$ or $$O(n * log(n))$$ (whichever is higher), where *n* is the number of events.

- Space complexity:
$$O(n * k)$$

# Code
```
def max_value(events, k)
    @events = events.sort
    @memo = Array.new(events.length) { {} }
    max_val(0,k)
end

def max_val(i,k)
    return 0 if i == @events.length || k == 0
    return @memo[i][k] if @memo[i][k]

    option1 = max_val(i+1,k)

    j = i+1
    while @events[j] && @events[j][0] <= @events[i][1]
        j += 1
    end
    option2 = max_val(j,k-1) + @events[i][2]

    @memo[i][k] = [option1,option2].max
end

```