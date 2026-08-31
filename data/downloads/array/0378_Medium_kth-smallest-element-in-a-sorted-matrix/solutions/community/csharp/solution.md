# C# Solution with PriorityQueue

**Author:** saifudinhasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/5814167/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/5814167/)

---

# Code
```csharp []
public class Solution {
    public int KthSmallest(int[][] matrix, int k) {
        int yLen = matrix.Length;
        PriorityQueue<(int val, int row, int col), int> pq = new();

        for (int i = 0; i < yLen; i++) {
            pq.Enqueue((matrix[i][0], i, 0), matrix[i][0]); // first of each row
        }

        // [10,11,13],
        // [1,5,9],
        // [12,13,15]

        // the heap
        // [1,10,12] Step 0
        // [5,10,12] Step 1: Dequeue 1, enqueue 5
        // [9,10,12] Step 2: Dequeue 5, enqueue 9
        // [10,12]   Step 3: Dequeue 9
        // [11,12]   Step 4: Dequeue 10, enqueue 11
        // [12,13]   Step 5: Dequeue 11, enqueue 13
        // [13,13]   Step 6: Dequeue 12, enqueue 13
        // [13]      Step 7: Dequeue 13
        // [15]      Step 8: Dequeue 13, enqueue 15
        // The 8th smallest element is 13, so if k = 8, the result is 13.

        for (int i = 0; i < k - 1; i++) {
            var (val, row, col) = pq.Dequeue();

            if (++col < yLen) {
                pq.Enqueue(
                    (matrix[row][col], row, col),
                    matrix[row][col]
                );
            }
        }

        return pq.Dequeue().val;
    }
}
```