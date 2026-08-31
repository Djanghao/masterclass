# Priority Queue Most Detailed Solution 100% beats

**Author:** Sumeet_Sharma-1
**Votes:** 12
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6137610/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6137610/)

---

# Intuition \uD83E\uDD14
When faced with the problem of maximizing the total value of gifts after performing a series of operations, my first thought is to focus on the most valuable gifts. The goal is to reduce the value of the top `k` gifts by replacing them with their square roots. This approach suggests that we should always prioritize the highest value gifts for reduction, as this will yield the maximum possible total value after the operations.

# Approach \uD83D\uDE80
1. **Use a Max-Heap (Priority Queue)**: To efficiently retrieve the highest value gift, we can utilize a max-heap (priority queue). This allows us to always access the most valuable gift in logarithmic time.

2. **Calculate Initial Total Value**: Start by calculating the total value of all gifts. This will serve as our baseline for adjustments as we perform the operations.

3. **Perform Reductions**: For `k` iterations:
   - Extract the highest value gift from the heap.
   - Calculate the new value by taking the square root of this gift.
   - Update the total value by subtracting the difference between the original value and the new value.
   - Push the new value back into the heap.

4. **Return the Final Total Value**: After performing the reductions, return the updated total value.

This approach ensures that we are always working with the most valuable gifts, leading to an optimal solution.

# Complexity \uD83D\uDCCA
- **Time complexity**: 
  - The initial insertion of all gifts into the priority queue takes \\(O(nlog n)\\), where \\(n\\) is the number of gifts.
  - Each of the `k` operations involves extracting the maximum and inserting a new value, which takes \\(O(klog n)\\).
  - Therefore, the overall time complexity is \\(O(nlogn + klogn)\\).

- **Space complexity**: 
  - The space complexity is \\(O(n)\\) due to the storage of the gifts in the priority queue.

# Code
```cpp []
class Solution {
public:
    long long pickGifts(vector<int>& gifts, int k) {
        priority_queue<int> q;
        long long ans = 0;
        for (int i : gifts) {
            q.push(i);
            ans += i;
        }
        while (k--) {
            int v = q.top();
            ans -= (v - sqrt(v));
            q.pop();
            q.push(sqrt(v));
        }
        return ans;
    }
};
```
```Java []
import java.util.PriorityQueue;

class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>((a, b) -> b - a);
        long ans = 0;
        for (int i : gifts) {
            q.offer(i);
            ans += i;
        }
        while (k-- > 0) {
            int v = q.poll();
            ans -= (v - (int) Math.sqrt(v));
            q.offer((int) Math.sqrt(v));
        }
        return ans;
    }
}
```
```Python3 []
from typing import List
import heapq

class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        # Create a max-heap using negative values since Python's heapq is a min-heap by default
        max_heap = [-gift for gift in gifts]
        heapq.heapify(max_heap)
        
        total_value = sum(gifts)  # Calculate the initial total value of gifts
        
        for _ in range(k):
            # Get the largest gift (remember to negate back to positive)
            largest_gift = -heapq.heappop(max_heap)
            # Calculate the new value after taking the square root
            new_value = int(largest_gift ** 0.5)
            # Update the total value
            total_value -= (largest_gift - new_value)
            # Push the new value back into the heap
            heapq.heappush(max_heap, -new_value)
        
        return total_value
```
```C []
#include <stdlib.h>
#include <math.h>

void heapify(int* gifts, int giftsSize, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < giftsSize && gifts[left] > gifts[largest]) {
        largest = left;
    }

    if (right < giftsSize && gifts[right] > gifts[largest]) {
        largest = right;
    }

    if (largest != i) {
        int temp = gifts[i];
        gifts[i] = gifts[largest];
        gifts[largest] = temp;

        heapify(gifts, giftsSize, largest);
    }
}

long long pickGifts(int* gifts, int giftsSize, int k) {
    long long total = 0;
    for (int i = 0; i < giftsSize; i++) {
        total += gifts[i];
    }

    // Create a max-heap
    for (int i = giftsSize / 2 - 1; i >= 0; i--) {
        heapify(gifts, giftsSize, i);
    }

    for (int i = 0; i < k; i++) {
        // Extract the largest gift
        int largest = gifts[0];
        // Calculate the new value after taking the square root
        int new_value = (int)sqrt(largest);
        // Update the total value
        total -= (largest - new_value);
        // Replace the largest gift with the new value
        gifts[0] = new_value;
        // Heapify the max-heap again
        heapify(gifts, giftsSize, 0);
    }

    return total;
}
```
```C# []
public class Solution {
    public long PickGifts(int[] gifts, int k) {
        long total = 0;
        var maxHeap = new SortedSet<int>();
        foreach (var gift in gifts) {
            total += gift;
            maxHeap.Add(gift);
        }
        
        for (int i = 0; i < k; i++) {
            // Extract the largest gift
            int largest = maxHeap.Max;
            maxHeap.Remove(largest);
            // Calculate the new value after taking the square root
            int new_value = (int)Math.Sqrt(largest);
            // Update the total value
            total -= (largest - new_value);
            // Add the new value back to the max-heap
            maxHeap.Add(new_value);
        }
        
        return total;
    }
}
```
```Javascript []
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let total = 0;
    for (let gift of gifts) {
        total += gift;
    }
    
    // Create a max-heap
    gifts.sort((a, b) => b - a);
    
    for (let i = 0; i < k; i++) {
        // Extract the largest gift
        let largest = gifts[0];
        // Calculate the new value after taking the square root
        let new_value = Math.floor(Math.sqrt(largest));
        // Update the total value
        total -= (largest - new_value);
        // Replace the largest gift with the new value
        gifts[0] = new_value;
        // Sort the array again to maintain the max-heap property
        gifts.sort((a, b) => b - a);
    }
    
    return total;
};
```
```Ruby []
# @param {Integer[]} gifts
# @param {Integer} k
# @return {Integer}
def pick_gifts(gifts, k)
    total = gifts.sum
    gifts.sort!.reverse!
    
    k.times do
        # Extract the largest gift
        largest = gifts.shift
        # Calculate the new value after taking the square root
        new_value = Math.sqrt(largest).floor
        # Update the total value
        total -= (largest - new_value)
        # Add the new value back to the max-heap
        j = 0
        while j < gifts.size && gifts[j] > new_value
            j += 1
        end
        gifts.insert(j, new_value)
    end
    
    total
end
```

