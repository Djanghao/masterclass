# Simple C# Solution (With Explanation)

**Author:** inderbindra
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/3994151/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/3994151/)

---

# Two Approaches

# Approach 1:

The given code is for solving the "K Closest Points to Origin" problem. You are given an array of points in the form `[x, y]`, and you need to return the `k` closest points to the origin (0,0).

Here's how the code works:

1. Create a priority queue (`pq`) to store the points along with their distances from the origin. The priority queue is implemented using an array of integers `[x, y]` to store the point's coordinates and a `double` to store the distance.

2. Iterate through each point in the `points` array:
   - Calculate the squared distance of each point from the origin using the formula: `distance = x^2 + y^2`.
   - Enqueue the point `[x, y]` along with its distance into the priority queue.

3. Initialize a 2D array `result` of size `k` to store the `k` closest points.

4. Dequeue the top `k` elements from the priority queue, which represent the `k` closest points, and store them in the `result` array.

5. Return the `result` array containing the `k` closest points.

# Complexity
- **Time complexity: O(N log N)**
    - The code iterates through all the points in the `points` array once, which takes O(N) time, where N is the number of points.

    - Enqueuing and dequeuing from the priority queue takes O(log(N)) time for each point.

    - Overall, the time complexity is O(N * log(N)), where N is the number of points.

- **Space complexity: O(N)**
    - The space complexity is determined by the priority queue (`pq`) and the result array.

    - The priority queue can store all N points and their distances, so the space complexity is O(N).

# Code
```
public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        PriorityQueue<int[], double> pq = new PriorityQueue<int[], double>();
        double distance = 0.0;
        int i;
        for(i=0; i< points.Length; i++)    
        {
            distance = Math.Pow(points[i][0], 2) + Math.Pow(points[i][1], 2);
            pq.Enqueue(new int[]{points[i][0], points[i][1]}, distance);
        }
        int[][] result = new int[k][];
        for(i=0; i< k; i++)
        {
            result[i] = pq.Dequeue();
        }
        return result;
    }
}
```

# Approach 2:

- It also inserts all points into the priority queue, but with a modification in the priority calculation.
- It dequeues points from the priority queue while ensuring that the size of the priority queue never exceeds k.

# Complexity:
- **Time Complexity: O(N log(k))**
    - Enqueues up to k elements into the priority queue (O(log k) each).
    - Maintains at most k elements in the queue, ensuring a smaller heap for dequeue operations.
    - Dequeues the remaining k elements (O(log k) each).

- **Space Complexity: O(k)**
    - Stores only up to k points in the priority queue at any given time.

# Code
```
public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        PriorityQueue<int[], double> pq = new PriorityQueue<int[], double>();
        double distance = 0.0;
        int i;
        for(i=0; i< points.Length; i++)    
        {
            distance = Math.Pow(points[i][0], 2) + Math.Pow(points[i][1], 2);
            pq.Enqueue(new int[]{points[i][0], points[i][1]}, -distance);
            while(pq.Count > k)
            {
                pq.Dequeue();
            }
        }
        int[][] result = new int[k][];
        for(i=0; i< k; i++)
        {
            result[i] = pq.Dequeue();
        }
        return result;
    }
}
```


