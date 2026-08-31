# JS, Python, Java, C++ | Easy Dijkstra's MinPQ Solution w/ Explanation

**Author:** sgallivan
**Votes:** 29
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/1284971/](https://leetcode.com/problems/swim-in-rising-water/solutions/1284971/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

When a problem asks us to find the best path when there is something quantifiable making certain paths worse than others, one natural option would be a **Dijkstra's algorithm** approach. Dijkstra's algorithm uses a **breadth first search** (**BFS**) approach to a graph traversal, but it takes into account the weight/distance/difficulty of the different edges.

In this case, the weight will be the time required to move to a particular cell. To use Dijkstra's, we'll need to use a **min priority queue** (or **min heap**) data structure to store the possible moves at any point. These moves will be prioritized by how early they can be achieved (represented by the value in **grid[i][j]**).

Starting at **(0,0)**, we can iterate through the surrounding squares and enter them into our priority queue (**pq**). After we've entered possible cell move into **pq**, we should mark it as seen so that we don't enter the same cell into **pq** more than once.

_(**Note**: The relative values for the grid coordinates and cell values are low enough that we can optionally store all three in one integer using **bit manipulation** to lower the memory footprint of the priority queue and make it a bit more responsive.)_

We would normally create a seen matrix of **N * N** dimensions to keep track of this, but we can also use an **in-place** approach to keep this information in **grid**. To do this, we can just bump the cell value of the target cell above an arbitrarily high value. The maximum cell value will be **N * N - 1**, and since **N** caps out at **50**, we can use any value of **2500** or more for our seen marker.

After we store the new possible moves in **pq**, we then move to the next cell indicated by **pq**, remembering to keep track of the largest cell value (priority) seen so far (**ans**). We should repeat this process until we reach the end cell, and then we can **return ans**.

 - _**Time Complexity: O(N^2 * log N)** where **N** is the length of **grid**, for inserting/extracting up to **N^2** entries into the priority queue_
 - _**Space Complexity: O(N^2)** for the priority queue / heap_

---

#### ***Implementation:***

Javascript's **MinPriorityQueue()** npm is slower than a custom heap implementation, but it is decidedly easier to use.

C++ defaults to a max priority queue, so we can just flip the signs on each of the insertions and extractions to convert to a min priority queue.

---

#### ***Javascript Code:***

***w/ MinPriorityQueue():***
The best result for the code below is **96ms / 43.8MB** (beats 87% / 85%).
```javascript
const moves = [[1,0],[0,1],[-1,0],[0,-1]]

var swimInWater = function(grid) {
    let pq = new MinPriorityQueue(),
        N = grid.length - 1, ans = grid[0][0], i = 0, j = 0
    while (i < N || j < N) {
        for (let [a,b] of moves) {
            let ia = i + a, jb = j + b
            if (ia < 0 || ia > N || jb < 0 || jb > N || grid[ia][jb] > 2500) continue
            pq.enqueue((grid[ia][jb] << 12) + (ia << 6) + jb)
            grid[ia][jb] = 3000
        }
        let next = pq.dequeue().element
        ans = Math.max(ans, next >> 12)
        i = (next >> 6) & ((1 << 6) - 1)
        j = next & ((1 << 6) - 1)
    }
    return ans
};
```

***w/ Custom Min-Heap:***
The best result for the code below is **76ms / 40.5MB** (beats 100% / 96%).
```javascript
const moves = [[1,0],[0,1],[-1,0],[0,-1]]

var swimInWater = function(grid) {
    let N = grid.length - 1, ans = grid[0][0], i = 0, j = 0, prio = 0
    
    // custom Min-Heap implementation
    let heap = [,]
    const hpush = val => {
        let i = heap.length, par = i >> 1, temp
        heap.push(val)
        while (heap[par] > heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const hpop = () => {
        if (heap.length === 1) return null
        let top = heap[1], left, right, temp,
            i = 1, child = heap[3] < heap[2] ? 3 : 2
        if (heap.length > 2) heap[1] = heap.pop()
        else heap.pop()
        while (heap[i] > heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] < heap[left] ? right : left
        }
        return top
    }
    
    while (i < N || j < N) {
        for (let [a,b] of moves) {
            let ia = i + a, jb = j + b
            if (ia < 0 || ia > N || jb < 0 || jb > N || grid[ia][jb] > 2500) continue
            hpush((grid[ia][jb] << 12) + (ia << 6) + jb)
            grid[ia][jb] = 3000
        }
        let next = hpop()
        ans = Math.max(ans, next >> 12)
        i = (next >> 6) & ((1 << 6) - 1)
        j = next & ((1 << 6) - 1)
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **84ms / 14.5MB** (beats 100% / 100%).
```python
moves = [[1,0],[0,1],[-1,0],[0,-1]]

class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        N, i, j, pq, ans = len(grid) - 1, 0, 0, [], grid[0][0]
        while i < N or j < N:
            for a,b in moves:
                ia, jb = i + a, j + b
                if ia < 0 or ia > N or jb < 0 or jb > N or grid[ia][jb] > 2500: continue
                heappush(pq, (grid[ia][jb] << 12) + (ia << 6) + jb)
                grid[ia][jb] = 3000
            nxt = heappop(pq)
            ans = max(ans, nxt >> 12)
            i = (nxt >> 6) & ((1 << 6) - 1)
            j = nxt & ((1 << 6) - 1)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **7ms / 38.3MB** (beats 83% / 97%).
```java
class Solution {
    public int swimInWater(int[][] grid) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int N = grid.length - 1, ans = grid[0][0], i = 0, j = 0;
        while (i < N || j < N) {
            for (int[] m : moves) {
                int ia = i + m[0], jb = j + m[1];
                if (ia < 0 || ia > N || jb < 0 || jb > N || grid[ia][jb] > 2500) continue;
                pq.add((grid[ia][jb] << 12) + (ia << 6) + jb);
                grid[ia][jb] = 3000;
            }
            int next = pq.poll();
            ans = Math.max(ans, next >> 12);
            i = (next >> 6) & ((1 << 6) - 1);
            j = next & ((1 << 6) - 1);
        }
        return ans;
    }
    private int[][] moves = {{1,0},{0,1},{-1,0},{0,-1}};
}
```

---

#### ***C++ Code:***

The best result for the code below is **8ms / 8.3MB** (beats 100% / 100%).
```c++
class Solution {
public:
    int swimInWater(vector<vector<int>>& grid) {
        priority_queue<int> pq;
        int N = grid.size() - 1, ans = grid[0][0], i = 0, j = 0;
        while (i < N || j < N) {
            for (auto& m : moves) {
                int ia = i + m[0], jb = j + m[1];
                if (ia < 0 || ia > N || jb < 0 || jb > N || grid[ia][jb] > 2500) continue;
                pq.push(-(grid[ia][jb] << 12) - (ia << 6) - jb);
                grid[ia][jb] = 3000;
            }
            int next = -pq.top();
            pq.pop();
            ans = max(ans, next >> 12);
            i = (next >> 6) & ((1 << 6) - 1);
            j = next & ((1 << 6) - 1);
        }
        return ans;
    }
private:
    int moves[4][2] = {{1,0},{0,1},{-1,0},{0,-1}};
};
```