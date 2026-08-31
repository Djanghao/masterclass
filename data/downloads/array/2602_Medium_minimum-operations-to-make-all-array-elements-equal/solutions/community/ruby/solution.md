# Beats 100%. Sort, Prefix Sum and Binary Search. Comments explaining approach and logic included.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/4757779/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/4757779/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} nums
# @param {Integer[]} queries
# @return {Integer[]}
def min_operations(nums, queries)

    # Sort nums to make binary search viable.
    nums.sort!

    # Create prefix sum array
    prefix_sum = Array.new(nums.size) 
    total = 0
    nums.each_with_index do |n, i|
        total += n
        prefix_sum[i] = total
    end

    size = nums.size 
    sum = nums.sum
    i = 0
    while i < queries.size
        gt_or_eq_query_index = nums.bsearch_index{|v| queries[i] <= v}
        # Remember bsearch does not work when there are no elements which evaluate to
        # false before elements which evalute to true.
        lt_query_index = ( (nums[0] < queries[i]) ? 0 : nums.bsearch_index{|v| queries[i] >= v})

        q_total = 0
        # If greater than query index available and no less than index. 
        # This situation tells us all elements are greater than or eq to our query.
        # Opposite situation also works exactly the same wayt, when we have a less than query index 
        # and no greater than query subtracting the sum of all elements against the total of query * size of
        # elements gets us the information we need.
        if (gt_or_eq_query_index and lt_query_index == nil) || (gt_or_eq_query_index == nil and lt_query_index)
            q_total = ( prefix_sum[-1] - (queries[i] * size) ).abs
        # When we both greater than and less than index we know at some point
        # we have numbers in num which are smaller and some which are larger than 
        # the query.
        elsif (gt_or_eq_query_index and lt_query_index)
            greater_than_sum = prefix_sum[gt_or_eq_query_index- 1]
            greater_than_sum_size = gt_or_eq_query_index + lt_query_index
            q_total = (greater_than_sum - (queries[i] * (greater_than_sum_size))).abs
            q_total += (prefix_sum[-1] - greater_than_sum) - (queries[i] * (size - greater_than_sum_size))
        end
        
        queries[i] = q_total
        i += 1
    end

    queries
end
```