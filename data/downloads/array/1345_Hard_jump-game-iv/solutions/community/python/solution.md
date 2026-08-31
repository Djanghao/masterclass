# 🔥Easy Solutions in Java 📝, Python 🐍, and C++ 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 35
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3257817/](https://leetcode.com/problems/jump-game-iv/solutions/3257817/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can start at the first index and try to reach the last index by taking jumps as given in the problem. If we can reach the last index in one of these jumps, we can return the number of jumps. However, we might need to take jumps to indices we have already visited before, so we need to keep track of visited indices to avoid infinite loops.

# Approach
1. Create a dictionary to store the indices of each value in the array.
2. Use a queue to perform a breadth-first search of the indices.
3. For each index in the queue, add the indices corresponding to the adjacent values in the
dictionary and to the left and right of the current index.
4. If the last index is reached, return the number of jumps taken so far.
5. If the queue is emptied and the last index is not reached, return -1 to indicate that it is
not possible to reach the last index.


# Complexity
- Time complexity: The worst-case time complexity is $$O(n)$$, where n is the length of the array. In the worst case, we might need to visit all the indices in the array to reach the last index.

- Space complexity: The space complexity is also $$O(n)$$, where n is the length of the array. We need to store the dictionary, visited indices, and the queue. The size of the queue can be up
to n in the worst case.

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code

``` Java []
class Solution {
    public int minJumps(int[] arr) {
        int n = arr.length;
        if (n == 1) {
            return 0;
        }
        
        Map<Integer, List<Integer>> valueToIndex = new HashMap<>();
        for (int i = 0; i < n; i++) {
            valueToIndex.computeIfAbsent(arr[i], k -> new ArrayList<>()).add(i);
        }
        
        boolean[] visited = new boolean[n];
        visited[0] = true;
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        int steps = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int curr = queue.poll();
                if (curr == n - 1) {
                    return steps;
                }
                
                if (curr - 1 >= 0 && !visited[curr - 1]) {
                    visited[curr - 1] = true;
                    queue.offer(curr - 1);
                }
                
                if (curr + 1 < n && !visited[curr + 1]) {
                    visited[curr + 1] = true;
                    queue.offer(curr + 1);
                }
                
                for (int index : valueToIndex.getOrDefault(arr[curr], Collections.emptyList())) {
                    if (!visited[index]) {
                        visited[index] = true;
                        queue.offer(index);
                    }
                }
                
                // remove the indices with the same value to avoid revisiting them
                valueToIndex.remove(arr[curr]);
            }
            steps++;
        }
        
        return -1;
    }
}

```
``` C++ []
class Solution {
public:
    int minJumps(vector<int>& arr) {
        int n = arr.size();
        if (n == 1) {
            return 0;
        }
        
        unordered_map<int, vector<int>> valueToIndex;
        for (int i = 0; i < n; i++) {
            valueToIndex[arr[i]].push_back(i);
        }
        
        vector<bool> visited(n, false);
        visited[0] = true;
        queue<int> q;
        q.push(0);
        int steps = 0;
        
        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int curr = q.front();
                q.pop();
                if (curr == n - 1) {
                    return steps;
                }
                
                if (curr - 1 >= 0 && !visited[curr - 1]) {
                    visited[curr - 1] = true;
                    q.push(curr - 1);
                }
                
                if (curr + 1 < n && !visited[curr + 1]) {
                    visited[curr + 1] = true;
                    q.push(curr + 1);
                }
                
                for (int index : valueToIndex[arr[curr]]) {
                    if (!visited[index]) {
                        visited[index] = true;
                        q.push(index);
                    }
                }
                
                // remove the indices with the same value to avoid revisiting them
                valueToIndex.erase(arr[curr]);
            }
            steps++;
        }
        
        return -1;
    }
};

```
``` Python []
class Solution(object):
    def minJumps(self, arr):
        n = len(arr)
        if n == 1:
            return 0
        
        # Build a dictionary to store the positions of each value in the array
        positions = {}
        for i in range(n):
            if arr[i] not in positions:
                positions[arr[i]] = []
            positions[arr[i]].append(i)
        
        # BFS algorithm to find the minimum number of jumps
        visited = set()
        q = [(0, 0)]  # (position, jumps)
        while q:
            pos, jumps = q.pop(0)
            
            # Check if we've reached the end of the array
            if pos == n - 1:
                return jumps
            
            # Jump to adjacent indices
            for next_pos in [pos-1, pos+1]:
                if 0 <= next_pos < n and next_pos not in visited:
                    visited.add(next_pos)
                    q.append((next_pos, jumps+1))
            
            # Jump to indices with the same value
            if arr[pos] in positions:
                for next_pos in positions[arr[pos]]:
                    if next_pos not in visited:
                        visited.add(next_pos)
                        q.append((next_pos, jumps+1))
                
                # We don't need to keep track of the positions anymore
                del positions[arr[pos]]
        
        return -1  # It's not possible to reach the end of the array

```
```
Table Representation of the iteration for given example
I hope you will like it \uD83D\uDE0A
----------------------------------------------------------------------
Example 1:

arr = [100,-23,-23,404,100,23,23,23,3,404]

i  Current Value  Next Possible Values   Jumps
0  100            -23, 1, 4               1
1  -23            100, -23, 2, 3          2
3  404            4                       3
4  100            -23, 1, 3, 5, 9         4
5  23             100, 23, 6, 7, 8        4
6  23             100, 23, 5, 7, 8        4
7  23             100, 23, 5, 6, 8        4
8  23             100, 23, 5, 6, 7        4
9  3              404                     3
----------------------------------------------------------------------
Example 2:

arr = [7]

i  Current Value  Next Possible Values   Jumps
0  7              None                     0
----------------------------------------------------------------------
Example 3:

arr = [7,6,9,6,9,6,9,7]
i  Current Value  Next Possible Values   Jumps
0  7              7, 1, 7                  1
1  6              9, 3, 7                  2
2  9              6, 4, 6, 7               2
4  9              6, 2, 6, 7               2
6  9              7, 5                     2
7  7              7, 0                     1


```


# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```