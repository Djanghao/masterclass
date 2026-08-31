# Python 3: Modified Dijkstra

**Author:** BiggestChungus
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5557935/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5557935/)

---

# Intuition

This is a tough problem. My original solution was a lot slower, but still decent, based on Fenwick trees for each node.

The solution here is a LOT faster, I reverse-engineered it from the fastest submission and figured I'd explain it... if only for my own review.

## Cheapest Path: Dijkstra

If the time constraint didn't exist this would be a medium problem because it would just be Dijkstra's algorithm. The cost to visit each node `v` is the cost of the path to `u`, plus the cost to pass through `v`.

The cost doesn't actually depend on the edges at all, it only depends on the nodes which is interesting. But Dijkstra only requires the costs of paths so we're still fine.

## Including Distance: Exploring More Expensive Paths

Something less known about Dijkstra is that we can refactor the algorithm a bit to revisit nodes via paths longer than the shortest one. We just need to modify or remove the usual "if this isn't the optimal path, ignore this path" logic (`if c > cost[u]` part of this code).

In the prior paragraph "longer" really means "more expensive," whatever increases the thing we order the heap/priority queue by in Dijkstra's algo.

For this problem we will need to visit more expensive paths in the interest of reducing the time spent.

## Modifying Dijkstra: Order by Cost, Dual Criteria

We want the cheapest path so we use Dijkstra's algorithm with respect to cost. **We'll explore valid paths in order by cost until we find one that reaches `n-1` within the time limit**... or exhaust all relevant options.

The key to this problem is the *relevant options* part. There are two reasons we'd want to explore from node `v`:
* the usual one: we find a new cheapest path to `v`
* in this problem: we found a new fastest (least time) path to `v`

The first one is pretty obvious, we need to find the minimum cost path, so when we find a new fastest path, we need to push it to the heap.

The second one is a LOT less obvious. It requires a lot of insight and understanding of Dijkstra's algorithm.
* when we pop each next path, to some node `u`, from the heap, it's ordered by *cost*. So over time we're exploring more and more expensive paths
* **we have a cost-time tradeoff. In general the cheapest path will NOT be the lowest time**, and vice-versa
  * **there's an "optimal frontier" or "Pareto front" that describes the best cost for each arrival time and vice-versa**
  * my original algo that I mentioned, based on Fenwick trees, found this optimal frontier literally
  * but we don't need the whole frontier, we just need the single cheapest path that satisfies the arrival time criterion

A `(cost, time)` point belongs on the optimal frontier when `time < time'` for all `cost' < cost` for all `(cost', time')` currently on the frontier. In other words, we only bother adding expensive paths to the frontier if they reduce the minimum time. There's no reason to spend more to get to a node later.

Now we need to remember that
* we're doing Dijkstra ordered by cost: we pop nodes `u` in order by cost
* and **the cost to visit a node only depends on the node**

That means the cost to visit node `v` from here is
* the cheapest prior node `u`
* plus the cost to visit `v` from `u`

We know the second part is constant with respect to `u`, it's just `passingFees[v]`. That means the cheapest path to `v` is the cheapest path to `v`. **Since we're doing Dijkstra in cost order, by popping each node `u` in order, we're also popping the path to each adjacent node in cost order as well.** There will never be a later path that is cheaper. So we'll never have to consider inserting a new `(cost, time)` entry in the frontier with a lower cost: because *this node right now* leads to the lowest cost.

In fact, this means **we're always considering new (cost, time) points on the optimal frontier for `v` where `cost` is at least as high as all prior costs we've seen.** In other words we're always considering a new point on the very edge of the frontier, the high-cost region.

**An optimal frontier can be represented as a stack, increasing in `cost` in this case and decreasing by `time`.** That means each candidate `(cost_to_v, time_to_v)` we pop always has a `cost_to_v` that is at least as large. And following the logic above, that means `time_to_v` must be a new lowest value for it to be part of the frontier.

**The optimal frontier therfore simplifies to just storing the lowest arrival time we've see for each node.**

## Final Thoughts

The giant simplification from "optimal frontier" to "just record min cost" is enabled by the fact that cost only depends on the node, not on the edges. That's why exploring paths to `u` in cost order is equivalent to exploring paths to a specific other node `v` in cost order: because any other `u' -> v` path would have `cost(u') >= cost(u)` and the path cost doesn't depend on `u -> v`.

If it did, e.g. `passingCost` depended on both the source and destination nodes for each edge, we'd have a different picture. Then we wouldn't have the special property that we're popping paths to each adjacent node `v` in order by cost, so we'd have to worry about popping an expensive path with low time early, and then falsely discarding a later medium cost path with higher time later on just because it's not the lowest time we've seen - we don't demand the lowest time, just a time <= maxTime.

For this more complicated situation I think we'd need to return to the optimal frontier - we'd want to
* make sure we explore paths in order by cost as we've done before
* but also make sure we explore all points on the optimal frontier, exhausting cheap paths before medium cost paths, and medium costs before the most expensive ones
* and in general we would not encounter points on the optimal frontier in cost order, or in time order. It depends on the mix of cost and time weights

We can use a segment tree or Fenwick tree to efficiently query an optimal frontier, but that's a story for a later time. This is already super long.

# Complexity

I don't know.

Normal Dijkstra implemented like this is `O(E log(E))` where we only process each node (looking at its neighbors) when we find the cheapest path. There's only one cheapest path so we only iterate over neighbors once per node, and for each neighbor, we push to a big heap. That means `O(E)` pushes, and thus `O(E)` things in the heap, and thus `O(E log(E))` is the time complexity.

But in this case we might push a node to the heap many times:
* a first time with the lowest cost, highest time
* then later with a slightly higher cost, slightly lower time
* and later with a slightly higher cost, slightly higher time
* .. and so on

That suggests that every possible combination of nodes we visit would result in pushing a new node to the path.

But in practice this algorithm doesn't scale with the total possible paths which is exponential.

That means I probably need fancier complexity analysis tools to figure out what the complexity really is.

# Code
```
class Solution:
    def minCost(self, maxTime: int, edges: List[List[int]], passingFees: List[int]) -> int:

        n = len(passingFees)

        # adjacency list # TODO: only use shortest path between each pair
        adj = [[] for _ in range(n)]
        for u, v, dt in edges:
            if dt > maxTime: continue
            adj[u].append((v, dt))
            adj[v].append((u, dt))

        # modified Dijkstra
        #    > main idea: explore paths in order by cost
        #    > ideally the minimum cost path satisifes the maxTime limit
        #    > but if not, we'll need to consider more expensive paths
        #       so we also should visit shorter paths as well
        times = [math.inf]*n
        costs = [math.inf]*n
        times[0] = 0
        costs[0] = passingFees[0]
        pq = [(costs[0], times[0], 0)] # explore by cost asc | time <= maxTime
        while pq:
            c, t, u = heappop(pq)

            if u == n-1:
                return c # first encounter of n-1 ord by cost: we found the min cost

            if c > costs[u] and t > times[u]: continue # stale entry in heap

            # this path to u is either the minimum cost, or the minimum time
            # for costs > u as we explore by costs > u
            for v, dt in adj[u]:
                vt = t+dt
                vc = c+passingFees[v]

                if vt > maxTime: continue # illegal path
                
                if vc < costs[v]:
                    # new lowest cost, want to explore all legal paths from here to get the min cost
                    costs[v] = vc
                    heappush(pq, (vc, vt, v))
                elif vt < times[v]:
                    # higher cost than current min-cost path, but less time. worth exploring
                    times[v] = vt
                    heappush(pq, (vc, vt, v))
                # else: neither the best cost nor best time, ignore it

        return -1 # never encountered n-1 via a path of suitable distance
```

# BONUS: The Fenwick Trees Solution

In this problem, as explained above, we don't actually need a Fenwick tree.

But if, hypothetically, the problem were different and the Fenwick tree / decreasing stack didn't just devolve to a 0/1 stack, then we'll need a Fenwick tree or other ordered collection.

Example: suppose the times and costs were both edge-specific such that we had `edges = [(u, v, time, cost)..]`. Then for every node there would be a tradeoff between
* spending a lot to get there asap
* or cutting costs and getting there late

And in this case with arbitrary values per edge, there's no guarantee that we'd see `cost[v]` values in order.

## Interview-Friendly Fenwick Tree

The code below has a Fenwick tree for every single node in an easy-to-write format you can do duing an interview.

If you're not familiar with Fenwick trees see this [CP Algorithms page](https://cp-algorithms.com/data_structures/fenwick.html) for a primer. It's a pretty confusing primer, but oh well.

Here's [another explanation](https://leetcode.com/problems/count-number-of-teams/solutions/5555721/python-3-ft-97-tc-on-logmax-sc-omax-fenwick-tree/) that I personally wrote for another LC problem, I think that makes more intuitive sense at least.

There's a related interview-friendly segment tree implementation, but that's beyond the scope of this problem.

## Why Use a Fenwick Tree

In a normal Dijkstra's algorithm we want to explore the best paths in order, such that the first time we encounter a node is the best time.

But in this case we have many possible (time, cost) combinations. As explained above these form an optimal frontier where we can find the cheapest way to arrive at a given node within a certain time limit and vice-versa.

When we consider exploring from a node (called "relaxation" in SPFA terms), we only want to do the exploration work if it will give us new best answers.

So what we do is
* have a Fenwick tree whose indices are time units, 1..maxTime
* then if we find that we can reach a node at `time, cost`, then we should only explore from that node if it's cheaper than all other known `(time' <= time, cost')` combinations known thus far. Otherwise there's a way to get to the node at least as soon, AND cheaper.
* we can find the min cost over `1..time` directly using the Fenwick tree

If we find a new best (time, cost) combination (i.e. one on the optimal frontier), then we add it to the frontier by storing it in the Fenwick tree.

The nice thing about Fenwick, and the reason I chose it, is that adding a point to the optimal frontier will automatically make all later queries over that time return the new minimum cost.

In contrast, if you used a sorted set for the frontier for example, then you'd have to spend `O(N log(N))` time or more removing later entries that may no longer be on the optimal frontier.

So Fenwick is a nice way to handle this.

**Note here that the Fenwick trees here store cumulative minimum costs.** Usually they store sums, but you can use Fenwick trees for min *if and only if each element is non-increasing over the whole algorithm.* That's because if you reduce an element, the minimum decreases and we can accumulate or "bubble" that change up through the tree. But if it increases, then we need to recompute all parents' minima and you can't do that efficiently with a Fenwick tree.

## The Fenwick Code

```
class Solution:
    def minCost(self, maxTime: int, edges: List[List[int]], passingFees: List[int]) -> int:

        # a Fenwick tree per node, O(maxTime*n) memory
        n = len(passingFees)
        costTrees = [[math.inf]*(maxTime+2) for _ in range(n)]
        
        def minCost(u: int, t: int) -> float:
            """Returns the minimum cost over paths reaching u in time <= t"""
            t += 1 # since we want the min cost for time 0 as well
            ans = math.inf
            while t:
                ans = min(ans, costTrees[u][t])
                t &= t-1
            return ans

        def reduceCost(u: int, t: int, c: int) -> None:
            tree = costTrees[u]
            t += 1
            while t < maxTime+2:
                tree[t] = min(tree[t], c)
                t += t & -t

        # adjacency list, handle parallel edges by recording only the minimum-weight one
        adj = [defaultdict(lambda: math.inf) for _ in range(n)]
        for u, v, t in edges:
            if t > maxTime: continue

            adj[u][v] = min(adj[u][v], t)
            adj[v][u] = min(adj[v][u], t)

        pq = [(0, passingFees[0], 0)] # time, cost, u
        reduceCost(u=0, t=0, c=passingFees[0])
        while pq:
            t, c, u = heappop(pq)

            if c > minCost(u, t):
                continue # stale entry

            for v, dt in adj[u].items():
                tv = t+dt
                cv = c + passingFees[v]

                if tv > maxTime:
                    continue
                if cv >= minCost(v, tv): 
                    continue # already enqueued a cheaper path at least as fast

                # record that we have a new cheapest path to v, costing cv, so we don't later
                # push any paths with t' >= t and c' >= cv
                reduceCost(v, tv, cv)
                heappush(pq, (tv, cv, v))

        # explored all paths from 0 to all other nodes, in time order, ensuring cost
        # drops monotonically with time to its minimum value
        
        min_cost = min(costTrees[n-1])
        return min_cost if min_cost < math.inf else -1
```