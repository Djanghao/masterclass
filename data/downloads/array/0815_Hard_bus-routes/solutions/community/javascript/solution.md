# 【Video】Give me 10 minutes - Beats 99.53% - How we think about a solution

**Author:** niits
**Votes:** 61
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4279742/](https://leetcode.com/problems/bus-routes/solutions/4279742/)

---

# Intuition
Keep track of route relation.

---

# Solution Video

https://youtu.be/LcJYpE92UHs

\u25A0 Timeline of the video

`0:03` Explain difficulty and a key point of the question
`1:31` Demonstrate how it works
`4:08` Coding
`10:15` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,049
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach

## How we think about a solution

```
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
```

I think difficulty of this question is that source and target are located in different routes(index). In that case, we have to take another bus to get to target stop.

I think the idea of keeping track of which bus stop has which route is a good approach.

In this case,

```
{1: [0], 2: [0], 7: [0, 1], 3: [1], 6: [1]}

stop 1: 0 route only
stop 2: 0 route only
stop 7: 0 and 1 routes
stop 3: 1 route only
stop 6: 1 route only
```
I use `HashMap`. I call the values `bus_id` in the solution code.

---

\u2B50\uFE0F Points

Keeping track of which bus stop has which route. There is possibility that one stop has multiple routes.

---

### How it works

We start from `stop 1`. We use `deque`.

````
{1: [0], 2: [0], 7: [0, 1], 3: [1], 6: [1]}

queue = [1]
res = 1
````
`res` is number of buses we took so far.

`stop 1` have `bus id 0`, so we can check `stop 2 and stop 7` easily because they are also located in the same route (= `bus id 0`). They are new stops we found. So add them to queue.

````
queue = [1,2,7]
res = 2
````
We increment `res` when we start new iteration.

We iterate through `[1,2,7]`. But `stop 1` and `stop 2` has only `bus id 0`, so we can skip(= continue) in the solution code.

About `stop 7`, it has `2 routes` which are `bus id 0` and `bus id 1`. We already check `bus id 0` but we don't check `bus id 1` yet. We can check `bus id 1` from `stop 7`.

```
Check `stop 3`

That is new stop. Add stop 3 to queue.
queue = [3]
```
```
Check `stop 6`
That is target stop!
```
```
Output: 2(= res)
```

Easy!\uD83D\uDE06

There are a lot of duplicate calculations, so we use `set` to prevent the calculations, so that we can make execution time short.

Solution code is very long but it's simple. I added comments to Python code. I hope it helps you understand the code easily.

Let's see a real algorithm!


---


**Algorithm Overview:**

The algorithm finds the minimum number of buses needed to travel from a source bus stop to a target bus stop using a Breadth-First Search (BFS) approach. It first builds a graph where each bus stop is associated with the buses that pass through it. Then, it uses BFS to explore the possible routes, incrementing the number of buses taken at each level of stops until it reaches the target stop.

**Detailed Explanation:**

1. **Build Graph:**
   - Initialize an empty defaultdict (`stop_to_buses`) to associate each bus stop with the buses that pass through it.
   - Iterate through the given `routes` (list of bus routes).
   - For each bus route, iterate through the stops (`route`) and add the current bus's ID to the list of buses for that stop.

   ```python
   for bus_id, route in enumerate(routes):
       for stop in route:
           stop_to_buses[stop].append(bus_id)
   ```

2. **Check Validity:**
   - Check if the source and target stops are in the graph. If not, return -1 since there is no valid route.

   ```python
   if source not in stop_to_buses or target not in stop_to_buses:
       return -1
   ```

3. **Base Case:**
   - If the source and target stops are the same, return 0 as no buses are needed.

   ```python
   if source == target:
       return 0
   ```

4. **BFS:**
   - Initialize a queue with the source stop, an empty set to track buses taken (`buses_taken`), an empty set to track stops visited (`stops_visited`), and initialize the result (`res`) to 0.
   - Use a while loop to perform BFS until the queue is empty.
   - For each level of stops, increment the result (`res`).
   - Iterate through the stops in the current level.
   - Check buses passing through the current stop. If a bus is already taken, skip it.
   - Mark the bus as taken and check stops reachable from the current bus.
   - If the target stop is reached, return the result (`res`).
   - Add the next stop to the queue and mark it as visited.

   ```python
   while queue:
       res += 1
       stops_to_process = len(queue)

       for _ in range(stops_to_process):
           current_stop = queue.popleft()

           for bus_id in stop_to_buses[current_stop]:
               if bus_id in buses_taken:
                   continue

               buses_taken.add(bus_id)

               for next_stop in routes[bus_id]:
                   if next_stop in stops_visited:
                       continue

                   if next_stop == target:
                       return res

                   queue.append(next_stop)
                   stops_visited.add(next_stop)
   ```

5. **No Valid Route:**
   - If the while loop completes without finding a valid route, return -1.

   ```python
   return -1
   ```


# Complexity
- Time complexity: $$O(N + M)$$

    Building the graph: The graph is constructed by iterating over the routes and stop lists, which has a time complexity of O(N), where N is the total number of stops across all routes.

    BFS traversal: The BFS traversal explores the graph to find the shortest path from the source stop to the target stop. The worst-case scenario occurs when the target stop is the farthest reachable stop, requiring a traversal of all stops. This leads to a time complexity of O(M), where M is the total number of stops in the graph.

    Therefore, the overall time complexity of the algorithm is $$O(N + M)$$

- Space complexity: $$O(M + B)$$

    Graph representation: The graph is stored using a dictionary stop_to_buses, which has a space complexity of O(M), as it maps each stop to its associated buses.

    BFS auxiliary structures: The BFS traversal uses a queue queue to store the stops to be explored and a set stops_visited to track visited stops. Both these structures have a space complexity of O(M), as they can potentially hold all stops in the worst case.

    Set buses_taken: The set buses_taken keeps track of the buses used to avoid revisiting them. Its space complexity is O(B), where B is the total number of buses.

    Constants: The algorithm also uses a few constant-space variables for bookkeeping, which have negligible impact on the overall space complexity.

    Therefore, the overall space complexity of the algorithm is $$O(M + B)$$

```python []
class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
        # Build a graph where each stop is associated with the buses that pass through it
        stop_to_buses = defaultdict(list)

        for bus_id, route in enumerate(routes):
            for stop in route:
                stop_to_buses[stop].append(bus_id)

        # Check if source and target stops are in the graph
        if source not in stop_to_buses or target not in stop_to_buses:
            return -1

        # If the source and target are the same stop, no buses are needed
        if source == target:
            return 0

        # Use BFS to find the minimum number of buses to reach the target stop
        queue = deque([source])
        buses_taken = set()
        stops_visited = set()
        res = 0

        while queue:
            # Increment the res for each level of stops
            res += 1
            stops_to_process = len(queue)

            for _ in range(stops_to_process):
                current_stop = queue.popleft()

                # Check buses passing through the current stop
                for bus_id in stop_to_buses[current_stop]:
                    if bus_id in buses_taken:
                        continue

                    buses_taken.add(bus_id)

                    # Check stops reachable from the current bus
                    for next_stop in routes[bus_id]:
                        if next_stop in stops_visited:
                            continue

                        # If the target is reached, return the res
                        if next_stop == target:
                            return res

                        # Add the next stop to the queue and mark it as visited
                        queue.append(next_stop)
                        stops_visited.add(next_stop)

        # If no valid route is found
        return -1
```
```javascript []
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    const stopToBuses = new Map();

    for (let busId = 0; busId < routes.length; busId++) {
        const route = routes[busId];
        for (const stop of route) {
            if (!stopToBuses.has(stop)) {
                stopToBuses.set(stop, []);
            }
            stopToBuses.get(stop).push(busId);
        }
    }

    if (!stopToBuses.has(source) || !stopToBuses.has(target)) {
        return -1;
    }

    if (source === target) {
        return 0;
    }

    const queue = [source];
    const busesTaken = new Set();
    const stopsVisited = new Set();
    let res = 0;

    while (queue.length > 0) {
        res++;
        const stopsToProcess = queue.length;

        for (let i = 0; i < stopsToProcess; i++) {
            const currentStop = queue.shift();

            for (const busId of stopToBuses.get(currentStop) || []) {
                if (busesTaken.has(busId)) {
                    continue;
                }

                busesTaken.add(busId);

                for (const nextStop of routes[busId]) {
                    if (stopsVisited.has(nextStop)) {
                        continue;
                    }

                    if (nextStop === target) {
                        return res;
                    }

                    queue.push(nextStop);
                    stopsVisited.add(nextStop);
                }
            }
        }
    }

    return -1;    
};
```
```java []
class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        Map<Integer, List<Integer>> stopToBuses = new HashMap<>();

        for (int busId = 0; busId < routes.length; busId++) {
            for (int stop : routes[busId]) {
                stopToBuses.computeIfAbsent(stop, k -> new ArrayList<>()).add(busId);
            }
        }

        if (!stopToBuses.containsKey(source) || !stopToBuses.containsKey(target)) {
            return -1;
        }

        if (source == target) {
            return 0;
        }

        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> busesTaken = new HashSet<>();
        Set<Integer> stopsVisited = new HashSet<>();
        int res = 0;

        queue.offer(source);

        while (!queue.isEmpty()) {
            res++;
            int stopsToProcess = queue.size();

            for (int i = 0; i < stopsToProcess; i++) {
                int currentStop = queue.poll();

                for (int busId : stopToBuses.getOrDefault(currentStop, new ArrayList<>())) {
                    if (busesTaken.contains(busId)) {
                        continue;
                    }

                    busesTaken.add(busId);

                    for (int nextStop : routes[busId]) {
                        if (stopsVisited.contains(nextStop)) {
                            continue;
                        }

                        if (nextStop == target) {
                            return res;
                        }

                        queue.offer(nextStop);
                        stopsVisited.add(nextStop);
                    }
                }
            }
        }

        return -1;
    }
}
```
```C++ []
class Solution {
public:
    int numBusesToDestination(vector<vector<int>>& routes, int source, int target) {
        unordered_map<int, vector<int>> stopToBuses;

        for (int busId = 0; busId < routes.size(); busId++) {
            for (int stop : routes[busId]) {
                stopToBuses[stop].push_back(busId);
            }
        }

        if (stopToBuses.find(source) == stopToBuses.end() || stopToBuses.find(target) == stopToBuses.end()) {
            return -1;
        }

        if (source == target) {
            return 0;
        }

        queue<int> q;
        unordered_set<int> busesTaken;
        unordered_set<int> stopsVisited;
        int res = 0;

        q.push(source);

        while (!q.empty()) {
            res++;
            int stopsToProcess = q.size();

            for (int i = 0; i < stopsToProcess; i++) {
                int currentStop = q.front();
                q.pop();

                for (int busId : stopToBuses[currentStop]) {
                    if (busesTaken.count(busId)) {
                        continue;
                    }

                    busesTaken.insert(busId);

                    for (int nextStop : routes[busId]) {
                        if (stopsVisited.count(nextStop)) {
                            continue;
                        }

                        if (nextStop == target) {
                            return res;
                        }

                        q.push(nextStop);
                        stopsVisited.insert(nextStop);
                    }
                }
            }
        }

        return -1;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281210/video-give-me-5-minutes-how-we-think-about-a-solution/

video
https://youtu.be/fVv8R93DaTc

\u25A0 Timeline of the video

`0:04` Explain a key point of the question
`1:19` Demonstrate how it works
`3:09` Coding
`5:02` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4276911/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/llptwOvEstY

\u25A0 Timeline of the video

`0:05` Explain constructor and addEdge function
`1:31` Explain shortestPath
`3:29` Demonstrate how it works
`11:47` Coding
`17:17` Time Complexity and Space Complexity