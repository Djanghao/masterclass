# Clean Codes🔥🔥|| Full Explanation✅|| Breadth First Search✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 19
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3257971/](https://leetcode.com/problems/jump-game-iv/solutions/3257971/)

---

# Intuition :
- We ha ve to find the minimum number of jumps needed to reach the last index of an array. 
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach :
- The idea is to use a **Breadth First Search** approach to explore all the possible paths starting from the first index.

---



# Steps needed to solve the Problem :

 ***\u27A1\uFE0FStep 1: Initialize data structures***
- The first step is to initialize few data structures that will be used later in the algorithm. 
- Create a map to store the indices of each value in the input array, a queue to store the indices of the current nodes to be visited, and a boolean array to mark whether each index has been seen before:
```
final int n = arr.length;

// Initialize a map to store the indices of each value in the array
Map<Integer, List<Integer>> graph = new HashMap<>();

// Initialize a queue with the first index and mark it as seen
Queue<Integer> q = new ArrayDeque<>(Arrays.asList(0));

// Initialize a boolean array to keep track of visited indices
boolean[] seen = new boolean[n];
seen[0] = true;

```
***\u27A1\uFE0FStep 2: Build the graph***
- Next step is to build a graph that represents the relationships between the elements in the input array. And loop through the array and add each index to the list of indices for its corresponding value in the map:
```
for (int i = 0; i < n; ++i) 
{
  // Add the current index to the list of indices for its corresponding value
  graph.putIfAbsent(arr[i], new ArrayList<>());
  graph.get(arr[i]).add(i);
}

```
***\u27A1\uFE0FStep 3: BFS Algorithm***
- Now, in this step enter a loop that performs a BFS algorithm to find the minimum number of jumps needed to reach the end of the array.
-  At each iteration of the loop, dequeue the next node from the queue, check if it's the last index of the array, and mark it as visited.
-  Then add the adjacent nodes to the list of indices for their corresponding value in the map, and enqueue any adjacent nodes that have not been visited yet:
```
for (int steps = 0; !q.isEmpty(); ++steps) 
{
  // Iterate over all the nodes at the current level of the BFS
  for (int sz = q.size(); sz > 0; --sz) 
  {
    // Dequeue the next node and check if it's the last index of the array
    final int i = q.poll();
    if (i == n - 1)
      return steps;
    seen[i] = true;
    final int u = arr[i];
    // Add the adjacent nodes to the list of indices for their corresponding value
    if (i + 1 < n)
      graph.get(u).add(i + 1);
    if (i - 1 >= 0)
      graph.get(u).add(i - 1);
    // Iterate over all the adjacent nodes and enqueue them if they haven't been seen yet
    for (final int v : graph.get(u)) 
    {
      if (seen[v])
        continue;
      q.offer(v);
    }
    // Clear the list of indices for the current node value to avoid revisiting it
    graph.get(u).clear();
  }
}

```
***\u27A1\uFE0FStep 4: Return the minimum number of jumps***
- If the end of the array is reached, return the number of steps it took to get there. Otherwise, throw an error:
```
// If the last index is not reached, throw an exception
throw new IllegalArgumentException();

```
<!-- Describe your approach to solving the problem. -->

# Complexity :
- Time complexity : O(N+K)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(N+K)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
***Let's Code it Up .
There may be minor syntax difference in C++ and Python***
# Codes [C++ |Java |Python3] : With Comments
```C++ []
class Solution {
public:
  int minJumps(vector<int>& arr) {
    const int n = arr.size();
    // {a: indices}
    unordered_map<int, vector<int>> graph;
    // Initialize queue with first index and mark as seen
    queue<int> q{{0}};
    vector<bool> seen(n);
    seen[0] = true;

    // Create graph where keys are elements and values are their indices in arr
    for (int i = 0; i < n; ++i)
      graph[arr[i]].push_back(i);

    // BFS
    for (int steps = 0; !q.empty(); ++steps) {
      // Process all nodes at current level
      for (int sz = q.size(); sz > 0; --sz) {
        const int i = q.front();
        q.pop();
        // If last index is reached, return number of steps
        if (i == n - 1)
          return steps;
        seen[i] = true;
        const int u = arr[i];
        // Add adjacent indices to graph
        if (i + 1 < n)
          graph[u].push_back(i + 1);
        if (i - 1 >= 0)
          graph[u].push_back(i - 1);
        // Process all adjacent nodes
        for (const int v : graph[u]) {
          if (seen[v])
            continue;
          q.push(v);
        }
        // Clear indices in graph to avoid revisiting
        graph[u].clear();
      }
    }
    // Should never reach here
    throw;
  }
};
```
```Java []
class Solution 
{
  public int minJumps(int[] arr) 
  {
    final int n = arr.length;
    // {a: indices}
    Map<Integer, List<Integer>> graph = new HashMap<>();
    // Initialize a map to store the indices of each value in the array
    Queue<Integer> q = new ArrayDeque<>(Arrays.asList(0));
    // Initialize a queue with the first index and mark it as seen
    boolean[] seen = new boolean[n];
    seen[0] = true;

    for (int i = 0; i < n; ++i) 
    {
      // Add the current index to the list of indices for its corresponding value
      graph.putIfAbsent(arr[i], new ArrayList<>());
      graph.get(arr[i]).add(i);
    }

    for (int steps = 0; !q.isEmpty(); ++steps) 
    {
      // Iterate over all the nodes at the current level of the BFS
      for (int sz = q.size(); sz > 0; --sz) 
      {
        // Dequeue the next node and check if it's the last index of the array
        final int i = q.poll();
        if (i == n - 1)
          return steps;
        seen[i] = true;
        final int u = arr[i];
        // Add the adjacent nodes to the list of indices for their corresponding value
        if (i + 1 < n)
          graph.get(u).add(i + 1);
        if (i - 1 >= 0)
          graph.get(u).add(i - 1);
        // Iterate over all the adjacent nodes and enqueue them if they haven't been seen yet
        for (final int v : graph.get(u)) 
        {
          if (seen[v])
            continue;
          q.offer(v);
        }
        // Clear the list of indices for the current node value to avoid revisiting it
        graph.get(u).clear();
      }
    }
    // If the last index is not reached, throw an exception
    throw new IllegalArgumentException();
  }
}
```
```Python []
class Solution:
  def minJumps(self, arr: List[int]) -> int:
    n = len(arr)
    # {num: indices}
    graph = collections.defaultdict(list)
    steps = 0
    q = collections.deque([0])
    seen = {0}

    # Create graph where keys are elements and values are their indices in arr
    for i, a in enumerate(arr):
      graph[a].append(i)

    # BFS
    while q:
      # Process all nodes at current level
      for _ in range(len(q)):
        i = q.popleft()
        # If last index is reached, return number of steps
        if i == n - 1:
          return steps
        seen.add(i)
        u = arr[i]
        # Add adjacent indices to graph
        if i + 1 < n:
          graph[u].append(i + 1)
        if i - 1 >= 0:
          graph[u].append(i - 1)
        # Process all adjacent nodes
        for v in graph[u]:
          if v in seen:
            continue
          q.append(v)
        # Clear indices in graph to avoid revisiting
        graph[u].clear()
      steps += 1
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)

