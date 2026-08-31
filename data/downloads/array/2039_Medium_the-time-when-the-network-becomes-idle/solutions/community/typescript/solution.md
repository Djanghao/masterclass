# Typescript BFS + Math with Explanation

**Author:** michaeleliot
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/5550973/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/5550973/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In order to solve this, we need to know the distance from the master server to each data server. Since the distances between nodes are the same, we can use BFS.

Once we have the distances, we need to calculate the last time the server sent a message. We can do this by finding when the first message was returned, finding the highest multiple of patience less than that value to get the time the last message was sent, and then adding the time for a message to return to the time the last message was sent to get the time the last message was receieved.

# Approach
<!-- Describe your approach to solving the problem. -->
For BFS, add all edges to an edge map. Then create a distance array where each index represents the smallest distance from the data server to the master server. Starting at the master server, go through all neighbors, updating their distance and adding their neighbors to the queue. Repeat this until all connected nodes have a distance.

For the math, the time of return is dist[i] * 2. Meaning that if we are 2 away from our master server, then if we send a message at time 0 we expect a message back on time 4. The last time the message was sent is the time starting to poll (1) plus the highest multiple less than the time of return. This can be calculated by flooring the result of dividing the time of return minus one divided by the patience. We subtract one since we are offseting the time to start polling by 1 which we add back in later as stated above. We then multiple by this back by p to get the highest multiple. We then take the max value of this time + the time required for return.

If the maths are confusing, I've included a helper function that showcases how to find the highest multiple below a threshold with an offset.

# Complexity
- Time complexity: O(n + e) We go through all nodes and edges
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + e) We keep an edge graph and a node dist array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function networkBecomesIdle(edges: number[][], patience: number[]): number {
    /*
        Everything sends a second message at 1
        being sent means it's at the next location immediately (aka send every 2 seconds, means that the nearest neighbor has it on second 1, 3, 5, etc)
        Calculate Distance? BFS? Dijkstras?
        Mathy?
            * How far it is. When it will send a message
            * We can calculate the last time it sent a message?

        x BFS Calculate distances from master server
        x for each node, calculate the time of last sent + distance. Find the maximum of these times

    */

    let edgeGraph = {}
    for (let i = 0; i < patience.length; i++) {
        edgeGraph[i] = []
    }
    for (let edge of edges) {
        edgeGraph[edge[0]].push(edge[1])
        edgeGraph[edge[1]].push(edge[0])
    }

    let queue = [0]
    let dist = Array(patience.length).fill(Infinity)
    dist[0] = 0

    while (queue.length) {
        const node = queue.shift()
        let neighbors = edgeGraph[node]
        for (let neighbor of neighbors.filter(neighbor => dist[neighbor] === Infinity)) {
            dist[neighbor] = dist[node] + 1
            queue.push(neighbor)
        }
    }


    let timeLastMessageRecieved = -Infinity
    for (let i = 1; i < patience.length; i++) {
        let p = patience[i]
        let timeOfFirstReturn = dist[i] * 2
        let timeLastMessageSent = 1 + p * Math.floor((timeOfFirstReturn - 1) / p)
        let timeLastMessageReceieved = timeLastMessageSent + timeOfFirstReturn
        timeLastMessageRecieved = Math.max(timeLastMessageRecieved, timeLastMessageReceieved)
    }

    return timeLastMessageRecieved
};

function findMultiple(m, t) {
  // Calculate the maximum number of times m can be added
  const maxCount = Math.floor((t - 1) / m);

  // Calculate the final value
  return maxCount * m + 1;
}

```