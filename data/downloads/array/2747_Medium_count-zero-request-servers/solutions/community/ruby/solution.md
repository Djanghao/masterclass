# Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/3677725/](https://leetcode.com/problems/count-zero-request-servers/solutions/3677725/)

---

# Intuition
Use merge intervals helper function to find the intervals that each server was occupied.  Create a hash of every time a server changed status (became occupied or unoccupied) with the of active servers.  Use binary search for each query to find the number of server active during each time.

# Approach
1. Create a hash that organizes each request by server id.
2. Iterate through logs and push an array containing the start and end time of each request into the appropriate server's array in requests.
3. Merge intervals in requests to deal with overlapping requests.  Use a helper function.
4. Create a hash of times when the number of servers active changes.  (This will be the beginning of each request and the end+1.)
5. Create a res array, starting with zero servers active (time is -1 so be less than all possible times in changes).
6. Iterate through the changes (sorted by key), adding the change to the number of servers active at the time of previous change.
7. For each query, do a binary search to find the number of servers active at the time of query.  Subtract that from n and return the array.

Merge intervals helper function:
1. Sort intervals.
2. Create a new intervals array.
3. Iterate through the intervals.  If the next intervals does not overlap with current, put current into new_intervals and set current to be the new array.  If it *does* overlap, use whichever endpoint is higher as the new current.  (Note: for this specific problem, the new interval would always have a higher endpoint.  This is a more generalized implementation of merge_intervals.)
4. Add current to new_intervals and return.

# Complexity
- Time complexity:
Oh boy.
I think this would be the max of $$O([n,k].max * log(n))$$, where *n* is the changes and *k* is the number of queries.  We're sorting changes and doing binary search with each query, so we get *log(n)* either way.

- Space complexity:
$$O(m)$$, where *m* is the number of logs.

# Code
```
def count_servers(n, logs, x, queries)
    requests = Hash.new { |h,k| h[k] = [] }
    
    logs.each do |log|
        id, time = log
        requests[id] << [time, time + x]
    end
    
    requests.each do |k,v|
        requests[k] = merge_intervals(v)
    end
    
    change = Hash.new(0)
    requests.values.each do |arr|
        arr.each do |subarr|
            change[subarr[0]] += 1
            change[subarr[1] + 1] -= 1
        end
    end
    
    res = [[-1,0]]
    changes = change.keys.sort
    changes.each { |c| res << [c, res[-1][1] + change[c]] }
    
    queries.map do |query|
        i = res.bsearch_index { |subarr| subarr[0] > query } || res.length
        n - res[i-1][1]
    end
end

def merge_intervals(intervals)
    intervals.sort!
    new_ints = []
    curr = intervals.shift

    until intervals.empty?
        int = intervals.shift

        if int[0] > curr[1]
            new_ints << curr
            curr = int
        else
            curr = [curr[0],[curr[1],int[1]].max]
        end
    end

    new_ints << curr

    new_ints
end
```