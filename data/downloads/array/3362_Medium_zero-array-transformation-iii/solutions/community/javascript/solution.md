# Simple Priority Queue | Javascript

**Author:** nishit-mangal
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-iii/solutions/6079642/](https://leetcode.com/problems/zero-array-transformation-iii/solutions/6079642/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The earlier approches for iterating through the 'prefix array' doesn't work here.
I want to exhaust the nums[i] from the query covering the maximum range. If nums[i] is still > 0, I will exhaust by smaller queries.
# Approach
<!-- Describe your approach to solving the problem. -->
- I iterate through all the elements of nums array.
- Accumulate all the queries covering i such that the query with largest end comes on the top. Use priority queue for the above.
- Till now I have not started to exhaust the nums[i]
- On all the queries in priority queue, start exhausting the nums[i] till the pq is empty or the nums[i]+prefix[i] becomes 0.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nLog(n))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
    queries.sort((a,b)=>a[0]-b[0]);
    let pq = new MaxPriorityQueue({compare:(a,b)=>b[1]-a[1]});
    let prefixArray = new Array(nums.length+1).fill(0);
    let i=0, j=0;
    
    while(i<nums.length){
        if(i>0)
            prefixArray[i]+=prefixArray[i-1];
        
        while(j<queries.length && queries[j][0]<=i){
            pq.enqueue(queries[j]);
            j++;
        }
        
        while(!pq.isEmpty() && nums[i]+prefixArray[i]>0 && pq.front()[1]>=i){
            let [start, end] = pq.dequeue();
            prefixArray[i]--;
            prefixArray[end+1]++;
        }
        
        if(nums[i]+prefixArray[i]>0)
            return -1;
        i++;
    }
    
    return pq.size();
};
```