# Ruby solution with binary search, explained (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821405/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821405/)

---

# Intuition
It's comparatively easy to check whether a a specific number of minutes is possible.  Use binary search to check for possible values efficiently.

# Approach
1. Save n and the batteries array as class variables so they're accessible inside the helper function.  Sort the batteries array, also.
2. Find the maximum number of minutes theoretically possible by adding all the batteries and dividing by the number of computers.  (It will often be lower than this, but this is an upper bound.)
3. Perform a binary search to find the smallest number of minutes that *isn't* possible, and subtract one.

Helper function:
1. Create a duplicate of the array.
2. If there are any batteries with more than *k* charge, they can power one computer for the whole time but won't be able to make use of any additional charge.  Remove the battery and one computer.
3. Any remaining batteries can be shuffled around to provide charge until they run out.  Return true if the total charge of remaining batteries is at least as high as the number of remaining computers times k, false otherwise.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
def max_run_time(n, batteries)
    @n, @arr = n, batteries.sort
    max = batteries.sum / n
    (1..max+1).bsearch { |k| !possible?(k) } - 1
end

def possible?(k)
    n, arr = @n, @arr.dup
    while arr[0] && arr[-1] >= k
      arr.pop
      n -= 1
    end
    arr.sum >= n * k
end
```