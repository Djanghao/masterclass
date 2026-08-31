# Two solutions. O(n log n) time O(1) space and O(nm) time + O(n) space

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/4182532/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/4182532/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @param {Integer[]} queries
# @return {Integer[]}
def answer_queries(nums, queries)
    # Sort nums.
    nums.sort!

    # Create prefix sums array using nums as the container.
    i = 1
    total = nums[0]
    while i < nums.size
        total += nums[i]
        nums[i] = total
        i += 1
    end
    
    # Traverse sorted queries and prefix_sum array using two pointer.
    # We only increase i and j making this O(n log n).
    i = 0
    j = 0
    while i < queries.size
        j = nums.bsearch_index {|n| n >= queries[i]} || nums.size
        
        if nums[j] == queries[i]
            queries[i] = j + 1
        else
            queries[i] = j
        end
            
       i += 1 
    end

    queries
end



```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nm)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer[]} nums
# @param {Integer[]} queries
# @return {Integer[]}
def answer_queries(nums, queries)
    # Setup answer array.
    answer = Array.new(queries.size) {0}

    # Sort nums.
    nums.sort!

    # Setup hash to reference original index of queries to map back to our answer[i]
    # later.
    queries_index_hash = {}
    queries.each_with_index do |q, i|
        queries_index_hash[q] ||= []
        queries_index_hash[q] << i
    end

    # Sort queries.
    queries = queries.sort

    # Create prefix sums array.
    i = 1
    total = nums[0]
    while i < nums.size
        total += nums[i]
        nums[i] = total
        i += 1
    end
    
    # Traverse sorted queries and prefix_sum array using two pointer.
    # We only increase i and j making this O(nm).
    i = 0
    j = 0
    while i < queries.size
        while j < nums.size and nums[j] < queries[i] 
            j += 1
        end

        if nums[j] == queries[i]
            answer[queries_index_hash[queries[i]].pop] = j + 1
        else
            answer[queries_index_hash[queries[i]].pop] = j
        end
            
       i += 1 
    end
    
    answer
end
```