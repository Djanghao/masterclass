# Using Array as PriorityQueue

**Author:** pshegai
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/3831025/](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/3831025/)

---

# Intuition
Using MinHeap approach. If put all the lists in the priority queue sorting by their currently considered element the correct range will be [pq[0][0], pq[-1][0]]

We will use Array with custom insert method to emulate PQ, to leverage ability to check the end of the queue

# Code
```
# @param {Integer[][]} nums
# @return {Integer[]}
def smallest_range(nums)

    # populate pq
    pq = []
    nums.each_with_index {|n, i| pq.hpush([n.first,i, 0])}

    # first valid range
    ans = [pq.first.first, pq.last.first]

    loop do
        _, i, j = pq.shift

        # if we are going beyond the list boundaries the answer is ready
        return ans if j == nums[i].size - 1
        
        # put list back with new leading element
        pq.hpush([nums[i][j+1], i, j+1])
        
        # only update answer if the new range is less than current range
        if pq.last.first - pq.first.first < ans[1] - ans[0]
            ans = [pq.first.first, pq.last.first]
        end
    end
end

# Use this to substitute PriorityQueue
class Array
    def hpush(x)
        idx = bsearch_index {|y| y[0]>x[0]} || size
        insert(idx,x)
    end
end
```