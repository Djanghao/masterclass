# Two problems in one

**Author:** user3954sk
**Votes:** 4
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/1852267/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/1852267/)

---

This task is simplified (and made more efficient) when we ralise that there are two separate problems in this task.

Since every node and every path has the same time and change time, it means that any path that goes through x nodes will take y time, regardless of the path it takes.  Therefore given a number of nodes, we can work out time independently of the path taken using maths rather than calculating it at every step we take.

This calculation is the first problem, and the second problem is working out the second shortest path.

Given example 2, we can see thar we are allowed to backtrackm and therefore the second shortest path is at most 2 more than the shortest, and at least 1.  So the second part of the problem is working out the shortest path and whether it is possible to do it in +1 step rather than +2.

**Steps -> Time calculation**
When we hit a red light, we have to wait for it to change and we can only start moving at the point it turns green.  This is exactly the same as the starting position, so rather than doing it 1 step at a time we can work out how many steps before we hit a red light and therefore what the cycle time is.

If time <= change then after a certain number of steps we must hot the case where 
change <= total time < 2 * change (ie the light is red).  Then we have to wait unti time 2 * change for it to change back again.

In this case 
cycle = (change - 1) mod time + 1

The harder case is where time < change.  This best illustrated with an example.  If we take time = 12 and change = 5

After 1 step (12 seconds) the lights have changed red/green and we are 2 seconds into that green.  After 2 steps (24 seconds) we are 4 seconds into a green light and after 3 steps (36 seconds) we are in a red light and must wait for the light to change (40 seconds).  So the cycle is 3 steps and they take 40 seconds.

Or a different case, change = 2, time = 8.  After 1 step of 8 seconds the lights have already changed red/green twice and we are 0 seconds into the next green.  We will never hit a red.  For this case we can take a cycle of 1 step with a time of 8 seconds.

So how to calculate this generically?

First we need to calculate the number of seconds increment into a green light each step takes us.

incr = time mod (2 * change)

If incr = 0 then we have the second case above - cycle = 1 and cycleTime = time

Otherwise we need to know how many steps we take before a multiple of incr >= change

cycle = ((change - 1) / incr + 1
cycleTime is the next multiple of change > cycle.  Various ways of doing this, but the code below does this as:
cycleTime = cycle * time + change - ((cycle * time) mod change)

Now that we have the cycle length and time, given that it takes x steps to be 1 node away from N (see below)

Time to get to within 1 node of N = (x /cycle) * cycleTime + (x mod cycle) * time

The time to get to N is obtained by just adding time to that value.

Note that we cannot calculate to N directly since cycle time includes waiting at a red light.  If we get to node N just as the light changes we would calculate a time for after the lights change, which would be wrong.

**Second most number of steps**

Since we have established that we just need to calculate each trip to a node as 1 step, and as noted above we only need to determine if the second shortest path is 1 or 2 steps longer than the shortest path we don't have to do anything much cleverer than just calculating the shortest path.

Note that Djkstra's algorithm requires a priority queue because the shortest path to a node might get shorter after you first find a path to it.  In this case all paths cost 1 step, so we can just use a simple fifo queue.

Put node 1 in the queue
set cost of node 1 as 0, all others to a -ve number
Until node N is top of the queue:
	current =   top of the queue (remove)
	For each connected node to current:
		if not already visited:
			set cost to 1 more than current
			add to the back of the queue
			
The cost for node N is the shortest distance.

So how do we modify that to detect a case where there is a second shortest distance of only 1 more than the shortest?

First we maintain a flag for each node (plus1 found).  

Once set, that value is propagated to all children with a cost of 1 greater than cost for this node.  This can happen in two ways.  When processing the neighbours for this node we find a node that is unvisited.  In which case we set the cost, add it to the queue and set the plus1Found flag.  Alternatively we find a node that is visited, but the cost is 1 more than the current cost (ie.  There are two ways to get to this node at equal cost).  In this case the plus1Found flag is an or of the current value with the value for the target node.

But how does the flag get set in the first case?  When processing a node, we look at all the neighbours.  If any neighbour has been visited with an equal cost to us, then both us and they are possible to reach in plus1 steps.  We therefore set the flag for both nodes.

There is also an edge case where this only happens at node N.  To process that case, once we have reached N as the top of the queue, we look at all the neighbours of N.  If any have the same cost as the cost to N, then we can get to N in cost+1.

Put the two parts of the problem together and then we have an efficient solution - although as always you can run it multiple times and get results that vary ridiculously :-) 

```
class Solution {
    /*
    We can work out the time as a separate step.  The important thing is the
    number of nides that we need to visit.
    The second most will always be 1 or 2 nodes longer than the shortest path.
    */
    fun secondMinimum(n: Int, edges: Array<IntArray>, time: Int, change: Int): Int {
        val edgeList = Array(n + 1){mutableListOf<Int>()}
        val foundPlus1 = BooleanArray(n + 1){false}
        val cost = IntArray(n + 1){-1}
        cost[1] = 0
        edges.forEach {
            edgeList[it[0]].add(it[1])
            edgeList[it[1]].add(it[0])
        }
        val stack = ArrayDeque<Int>()
        stack.addLast(1)
        while (stack.first() != n) {
            val current = stack.removeFirst()
            val oldCost = cost[current]
            if (!foundPlus1[current]) {
                for (neighbour in edgeList[current]) {
                    if (cost[neighbour] == oldCost) {
                        foundPlus1[current] = true
                        foundPlus1[neighbour] = true
                    }
                }
            }
            
            for (neighbour in edgeList[current]) {
                if (cost[neighbour] == -1) {
                    cost[neighbour] = oldCost + 1
                    stack.addLast(neighbour)
                    foundPlus1[neighbour] = foundPlus1[current]    
                    
                } else {
                    if (cost[neighbour] == oldCost + 1) {
                        foundPlus1[neighbour] = foundPlus1[neighbour] or foundPlus1[current]
                    }
                }
            }
        }
        if (!foundPlus1[n]) {
            for (neighbour in edgeList[n]) {
                if (cost[neighbour] == cost[n]) {
                    foundPlus1[n] = true
                    break
                }
            }
        }
        val steps: Int = if (foundPlus1[n]) cost[n]  else cost[n] + 1
        val cycle: Int
        val total: Int
        if (time <= change) {
            cycle = ((change - 1) / time) + 1
            total = 2 * change
        } else {
            val incr = time %  (2 * change)
            if (incr == 0) {
                cycle = 1
                total = time
            } else {
                cycle = ((change - 1) / incr) + 1
                total = cycle * time + change - (cycle * time) % change
            }
        }
        val timeToPrev = (steps / cycle) * total + (steps % cycle) * time 
        return timeToPrev + time
    }
}
```