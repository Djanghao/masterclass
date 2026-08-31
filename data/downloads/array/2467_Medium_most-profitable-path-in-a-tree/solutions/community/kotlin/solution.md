# DFS solution with kotlin

**Author:** ssj0936
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/4445632/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/4445632/)

---

# Approach
Description says that it is a $$tree$$ with $$n$$ node and $$n-1$$ edges then which means there is only one path from Bob to 0. 

And there will be multiple paths from Alice to leafs but we dont known which path is the most profitable path after interaction with Bob. Therefore, all we can do is finding all these Alice paths out and simulate the process.

I prefer $$DFS$$ for finding path for both Alice or Bob, however, there is a little different for the process.

In Bob's case, return immediately when Bob reaching node 0. 
In Alice's case, walk through whole graph is a must.

After finding out all the paths, Simulating the process and calculating the maximum profit is not a big problem.

Whole proble can be divided into 3 main part:
1. finding out the only Bob path.
2. finding out all Alice paths.
3. iterating each Alice's path and interacting with Bob's path then calculation max profit.

# Complexity
- Time complexity:
lets says $$m$$ is number of leaf on tree
makeing connecting table : $$O(n)$$
finding path for Bob : $$O(n)$$
finding paths for Alice : $$O(n)$$
simulating process :$$O(n*m)$$
so it will be $$O(m*n)$$

- Space complexity:
connecting table : $$O(n)$$
visited recording for DFS: $$O(n)$$
so it will be $$O(n)$$

# Code
```
class Solution {
    fun mostProfitablePath(edges: Array<IntArray>, bob: Int, amount: IntArray): Int {
        //pre process
        val n = edges.size+1
        val graph = Array(n){mutableListOf<Int>()}.apply{
            edges.forEach{edge->
                this[edge[0]].add(edge[1])
                this[edge[1]].add(edge[0])
            }
        }

        //part1: Bob first
        val visitedB = BooleanArray(n)
        val resultB = LinkedList<Int>()
        fun dfsB(node:Int):Boolean{
            visitedB[node] = true
            resultB.push(node)

            if(node == 0)
                return true

            graph[node].forEach{nextNode->
                if(!visitedB[nextNode]){
                    if(dfsB(nextNode))
                        return true
                }
            }

            resultB.pop()
            visitedB[node] = false
            return false
        }

        dfsB(bob)
        val pathB = resultB.toList().reversed()
        val pathBLength = pathB.size

        //part2: Alice part
        val pathAs = mutableListOf<List<Int>>()
        val visitedA = BooleanArray(n)
        val resultA = LinkedList<Int>()
        fun dfsA(node:Int){
            visitedA[node] = true
            resultA.push(node)
            if(graph[node].size == 1 && node != 0){
                pathAs.add(resultA.toList().reversed())
            }else{
                graph[node].forEach{nextNode->
                    if(!visitedA[nextNode])
                        dfsA(nextNode)
                }
            }
            resultA.pop()
            visitedA[node] = false
        }
        dfsA(0)

        //part3
        var maxProfit = Int.MIN_VALUE
        for(pathA in pathAs){
            var profit = 0
            val visitedB = hashSetOf<Int>()
            for((i,node) in pathA.withIndex()){
                if(visitedB.contains(node)){}
                else if(i<pathBLength && node == pathB[i]){
                    profit += amount[node]/2
                }else{
                    profit += amount[node]
                }

                if(i<pathBLength)
                    visitedB.add(pathB[i])
            }
            maxProfit = maxOf(maxProfit, profit)
        }

        return maxProfit
    }
}

```