# Min Heap (with explanation)

**Author:** Angielf
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/5479066/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/5479066/)

---

# Approach
Min heap.

1. It initializes an empty result list and a heap.
2. It pushes the sums of each element in nums1 with the first element in nums2 into the heap.
3. It then iteratively pops the smallest pair from the heap, adds it to the result list, and potentially pushes 
the sum of the current element in nums1 with the next element in nums2 back into the heap.
- It decrements k until it reaches 0 or the heap is empty.
4. Finally, it returns the result list containing the k smallest pairs.

# Complexity
- Time complexity:
$$O(k*log(N))$$, where N is the length of the nums1 list.
- - Building the initial heap takes O(N*log(N)) time.
- - The while loop runs k times, and each iteration involves popping an element from the heap and potentially 
pushing another element into the heap, both of which take O(log(N)) time each.

- Space complexity:
$$O(N)$$, where N is the length of the nums1 list. This is because the heap can potentially store all elements 
from nums1 if all pairs are considered.

# Code
``` python3 []
class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        result = []
        heap = []
        
        # Push the sums of each element in nums1 with the first element in nums2 into the heap
        for num in nums1:
            heapq.heappush(heap, (num + nums2[0], 0))
        
        # Pop the smallest pair from the heap and add it to the result list
        while k > 0 and heap:
            nums_sum, index = heapq.heappop(heap)
            result.append([nums_sum - nums2[index], nums2[index]])
            
            # If there are more elements in nums2, push the sum of the current element in nums1
            # with the next element in nums2 into the heap
            if index + 1 < len(nums2):
                heapq.heappush(heap, (nums_sum - nums2[index] + nums2[index + 1], index + 1))
            
            # Decrease the number of pairs to be returned
            k -= 1
        
        return result
```
``` javascript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    const heap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
    
    // Push the sums of each element in nums1 with the first element in nums2 into the heap
    for (let i = 0; i < nums1.length; i++) {
        heap.enqueue([nums1[i] + nums2[0], 0]);
    }
    
    // Pop the smallest pair from the heap and add it to the result list
    while (k > 0 && !heap.isEmpty()) {
        const [nums_sum, index] = heap.dequeue();
        result.push([nums_sum - nums2[index], nums2[index]]);
        
        // If there are more elements in nums2, push the sum of the current element in nums1
        // with the next element in nums2 into the heap
        if (index + 1 < nums2.length) {
            heap.enqueue([nums_sum - nums2[index] + nums2[index + 1], index + 1]);
        }
        
        // Decrease the number of pairs to be returned
        k--;
    }
    
    return result;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer[][]
     */
    function kSmallestPairs($nums1, $nums2, $k) {
        $result = [];
        $heap = new SplMinHeap();

        // Push the sums of each element in nums1 with the first element in nums2 into the heap
        foreach ($nums1 as $num) {
            $heap->insert([$num + $nums2[0], 0]);
        }

        // Pop the smallest pair from the heap and add it to the result list
        while ($k > 0 && !$heap->isEmpty()) {
            $pair = $heap->extract();
            $nums_sum = $pair[0];
            $index = $pair[1];

            $result[] = [$nums_sum - $nums2[$index], $nums2[$index]];

            // If there are more elements in nums2, push the sum of the current element in nums1
            // with the next element in nums2 into the heap
            if ($index + 1 < count($nums2)) {
                $heap->insert([$nums_sum - $nums2[$index] + $nums2[$index + 1], $index + 1]);
            }

            // Decrease the number of pairs to be returned
            $k--;
        }

        return $result;
    }
}
```