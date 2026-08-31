# C# Priority Queue (Min-Heap) Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/5635836/](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/5635836/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem using C#, we can approach it by leveraging a priority queue (min-heap) to efficiently find the k-th smallest sum. The idea is to iteratively combine rows of the matrix while keeping track of the smallest sums.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initial Sums:
//  *We start by initializing the sums list with the first row of the matrix.
//  Merging Rows:
//  *The MergeRows function takes two lists (or a list and an array) and merges them to create a new list 
//  of sums.
//  *It uses a priority queue (min-heap) to efficiently get the smallest sums while merging.
//  Heap Operations:
//  *We start by pushing the smallest possible sum (the sum of the first elements of both rows) into the 
//  heap.
//  *As we pop the smallest sum from the heap, we push the next possible sums that can be formed by 
//  increasing the indices of the two rows.
//  Keeping Track of the Smallest Sums:
//  *We keep track of the smallest k sums to prevent unnecessary computation and memory usage.
//  Final Result:
//  *After processing all rows, we sort the final list of sums and return the k-th smallest.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(m x k x log k)
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(k).
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public int KthSmallest(int[][] mat, int k) {
        // Initial sums are just the elements of the first row
        List<int> sums = new List<int>(mat[0]);
        
        // Process each row of the matrix
        for (int i = 1; i < mat.Length; i++) {
            sums = MergeRows(sums, mat[i], k);
        }
        
        // Return the k-th smallest sum
        sums.Sort();
        return sums[k - 1];
    }
    
    private List<int> MergeRows(List<int> row1, int[] row2, int k) {
        List<int> merged = new List<int>();
        PriorityQueue<(int sum, int idx1, int idx2), int> pq = new PriorityQueue<(int, int, int), int>();
        
        pq.Enqueue((row1[0] + row2[0], 0, 0), row1[0] + row2[0]);
        
        while (pq.Count > 0 && merged.Count < k) {
            var (sum, idx1, idx2) = pq.Dequeue();
            merged.Add(sum);
            
            if (idx1 + 1 < row1.Count) {
                pq.Enqueue((row1[idx1 + 1] + row2[idx2], idx1 + 1, idx2), row1[idx1 + 1] + row2[idx2]);
            }
            if (idx2 + 1 < row2.Length && idx1 == 0) {
                pq.Enqueue((row1[idx1] + row2[idx2 + 1], idx1, idx2 + 1), row1[idx1] + row2[idx2 + 1]);
            }
        }
        
        return merged;
    }
}
```