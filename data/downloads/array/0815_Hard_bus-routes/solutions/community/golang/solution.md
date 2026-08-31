# Graph, BFS ||| DETAILED EXPLANATION

**Author:** https_whxyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4279854/](https://leetcode.com/problems/bus-routes/solutions/4279854/)

---

# Intuition
**Let's construct a graph of buses, and solve the problem via BFS**

# Approach
**Let's start with the concept of solving: 
We solve with graphs, but
You can't look at a regular bus stop graph here.** Why?
1) We can't determine the number of buses. We can conditionally colour these vertices, we can do something else, we can store in DFS/BFS those buses that we can potentially ride, but there are a lot of pitfalls that I don't want to describe. **The most important one is** that the top, i.e. the bus stop can be painted in several colours at once. And how do we rationally determine from which colour we drove onwards AKA which bus we drove onwards according to the algorithm...? unclear.
2) Long, very long. 10^5 vertices, and all through DFS is very long

**So let's do this:**
Build a graph of bus routes that will tell us which bus we can change from which bus to which bus. 
Such a graph is quite problematic to build, but it can be built.

**How do we build it?**
All steps, especially 2, can be simplified depending on the language. For example, in Python we can just make an array of sets, and recognise common elements of buses i and j in one function. If the number of common elements >= 1, we can get from bus i to bus j, and vice versa.
1) Let's create an array of map's, to simplify the construction, which will tell us that there is such and such vertex on route i. Banal for all routes and all stops : mpRouters
2) Run along a route/bus i (0..n), along another route/bus j (0..n), and along all stops of bus i - busStation. If busStation is in mpRoutesr[j], buses i and j are connected, we add to the graph

```Go []
    mpRouters := make([]map[int]bool, n)
    for i, rout := range routes {
        mpRouters[i] = make(map[int]bool)
        for _, busStation := range rout {
            mpRouters[i][busStation] = true
        }
    }
    graph := make([][]int, n)
    for i, rout := range routes {
        for j := 0; j < n; j++ {
            if i == j {
                continue
            }
            for _, busStation := range rout {
                _, exists := mpRouters[j][busStation]
                if exists {
                    graph[i] = append(graph[i], j)
                    break
                }
            }
        }
    }
```
**All right, the count's built. What do we do with it?**
We write a BFS on the graph. Why not DFS? We need to find out the minimum number of buses, i.e. transitions from one available stop to another, and DFS is perfect for this purpose
But before we do DFS, we need to prepare.
**Basically, we need to find out if we can find out at the h-th step of BFS if the target node lies somewhere in the buses stack**. For this purpose, we will create targetMp - a special map that will tell us that there is a target stop on such and such bus route. 
To keep such map we will use mpRouters array - we run through all buses - i(0..n), and there is a target in mpRouters[i], then targetMp[i] = true.
```Go []
    targetMp := make(map[int]bool)
    for i, _ := range routes {
        _, exists := mpRouters[i][target]
        if exists {
            targetMp[i] = true
        }
    }
```

**And we also need to create an initial stack - all the buses we can get on from the source stop**. 

```Go []
    use := make(map[int]bool)
    stack := make(map[int]bool)
    for i := 0; i < n; i++ {
        _, exists := mpRouters[i][source]
        if exists {
            stack[i] = true
            use[i] = true
        }
    }
```

**Don't forget about use, so that no buses would get into the stack 2 times.**

**Writing BFS: (all below is pseudo-code)**
while len(stack) != 0 - stack is empty, we have run through all the buses we could run through from the top of sourse
Run through the stack - bus(stack)
Let's find out if a bus from stack is lying in targetMp. If it is, hurray, we can leave BFS.
Add all new buses from graph[bus] to the stack, not forgetting to check the use array.
Replace the stack
counter++

**RETURN COUNTER**

**I want to point out two things:**
1) We need to determine if we actually got to the target bus stop (if there was a single bus in the stack where targetMp[bus] = true), or if we just went through the whole graph. Let's create a variable canGoToTarget, and if we found a bus in DFS where targetMp[bus] = true, then canGoToTarget = true
In case canGoToTarget = false, we return -1.
2) At the very beginning, even before the graph is built, we check if sourse == target. If it is equal - return 0, otherwise it will return one.

# Complexity
- Time complexity:
$$N$$ - number of routes (10^5)
$$M$$ - number of stops (5 * 10^2)

1) building mpRouters: $$O(M)$$
2) building graph: $$O(M)$$ Why?
Yes, we run N * N, but in doing so, for bus i we find out if stop i lies on bus j.
The total number of stops is M - so the asymtotics are M
3) construction of targetMp - N
4) construction of stack - N
5) DFS - N * N 

Total: ~ ($$O(M)$$ + $$O(N^2)$$)

- Space complexity:
I'm too lazy to describe it :)

# Code
```
func numBusesToDestination(routes [][]int, source int, target int) int {
    if source == target {
        return 0
    }
    n := len(routes)
    mpRouters := make([]map[int]bool, n)
    for i, rout := range routes {
        mpRouters[i] = make(map[int]bool)
        for _, busStation := range rout {
            mpRouters[i][busStation] = true
        }
    }
    graph := make([][]int, n)
    for i, rout := range routes {
        for j := 0; j < n; j++ {
            if i == j {
                continue
            }
            for _, busStation := range rout {
                _, exists := mpRouters[j][busStation]
                if exists {
                    graph[i] = append(graph[i], j)
                    break
                }
            }
        }
    }
    targetMp := make(map[int]bool)
    for i, _ := range routes {
        _, exists := mpRouters[i][target]
        if exists {
            targetMp[i] = true
        }
    }
    use := make(map[int]bool)
    stack := make(map[int]bool)
    for i := 0; i < n; i++ {
        _, exists := mpRouters[i][source]
        if exists {
            stack[i] = true
            use[i] = true
        }
    }
    counter := 0
    canGoToTarget := false
    nextStack := make(map[int]bool)
    //fmt.Println(targetMp)
    //fmt.Println(stack)
    //fmt.Println(graph)
    for len(stack) != 0 {
        //fmt.Println(counter, stack, nextStack)
        for bus, _ := range stack {
            _, existTarget := targetMp[bus]
            if existTarget {
                canGoToTarget = true
                nextStack = make(map[int]bool)
                break
            }
            for _, nextBus := range graph[bus] {
                if !use[nextBus] {
                    nextStack[nextBus] = true
                    use[nextBus] = true
                }
            }
        }
        stack = map[int]bool(nextStack)
        //fmt.Println(counter, stack, nextStack)
        nextStack = make(map[int]bool)
        counter++
    }
    if !canGoToTarget {
        return -1
    }
    return counter
}
```