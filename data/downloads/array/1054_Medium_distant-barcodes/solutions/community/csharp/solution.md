# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/6109178/](https://leetcode.com/problems/distant-barcodes/solutions/6109178/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Counting Frequencies: Count how often each barcode appears because the distribution depends heavily on these counts.
- Prioritize the Highest Frequency: To reduce adjacency conflicts, focus on placing barcodes with higher frequencies first, as they are harder to fit in later.
- Safe Placement: Use a "temporary hold" for barcodes that have just been placed. This ensures that when barcodes are reinserted into the heap, they aren't placed back-to-back.
- Iterative Placement: Keep repeating the process of placing barcodes and reducing their counts until the arrangement is complete.
___
# Approach
- <!-- Describe your approach to solving the problem. -->Frequency Count: We first count the occurrences of each barcode using a dictionary.
- Max-Heap: The priority queue is used to always retrieve the most frequent barcode available. This helps ensure that barcodes are spaced out evenly.
- Rearrangement:
- *Use the barcode with the highest frequency from the heap.
- *Keep track of the previously used barcode and only reinsert it into the heap when a different barcode has been placed, ensuring no two adjacent elements are the same.
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n log n).
___
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___
# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    public int[] RearrangeBarcodes(int[] barcodes) {
        // Step 1: Count frequencies of barcodes
        Dictionary<int, int> freq = new Dictionary<int, int>();
        foreach (int barcode in barcodes) {
            if (!freq.ContainsKey(barcode)) {
                freq[barcode] = 0;
            }
            freq[barcode]++;
        }

        // Step 2: Use a max heap to store barcodes by frequency
        PriorityQueue<(int barcode, int count), int> maxHeap = new PriorityQueue<(int, int), int>(
            Comparer<int>.Create((x, y) => y - x)
        );
        foreach (var kvp in freq) {
            maxHeap.Enqueue((kvp.Key, kvp.Value), kvp.Value);
        }

        // Step 3: Arrange the barcodes
        int[] result = new int[barcodes.Length];
        int idx = 0;
        (int barcode, int count) prev = (-1, 0);    // Previous barcode used

        while (maxHeap.Count > 0) {
            var current = maxHeap.Dequeue();

            // Place the current barcode in the result
            result[idx++] = current.barcode;

            // If the previous barcode still has remaining count, add it back to the heap
            if (prev.count > 0) {
                maxHeap.Enqueue(prev, prev.count);
            }

            // Update the previous barcode to the current one with reduced count
            prev = (current.barcode, current.count - 1);
        }

        return result;
    }
}
```