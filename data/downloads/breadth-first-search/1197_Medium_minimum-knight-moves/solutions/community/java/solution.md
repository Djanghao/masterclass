# How To Approach This in an Interview

**Author:** ciote
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/2096373/](https://leetcode.com/problems/minimum-knight-moves/solutions/2096373/)

---

### Intuition:
There are lots of great solutions on the discussion board as well as the premium solutions demonstrating different ways to solve the problem. In this post, I will go through the best way to tackle this question in an interview. Hope it helps!

When you're first presented this question, you probably realised that the solution would probably involve some kind of traversal algorithm. Great, this is a good start. Many 2D grid traversal algorithms exist but you should first try and see whether breadth-first search (BFS) or depth-first search (DFS) would work. Chances are, there's probably a way to solve this question using either algorithm, but there's likely a more efficient choice between the two. 

> Interview tip: If the question requires finding the shortest path or the minimum number of steps in a graph or grid, choose BFS.

### Why BFS?
In a 2D grid, BFS can ALWAYS find the shortest path as long as at least one valid path exists. This is because BFS works by processing all nodes at the current level before processing the next level. In other words, we're working level-by-level. In this question, consider each level to be 1 knight move. What this means is that if you've landed on the target square, we can just return the current level (i.e. the number of moves so far) and that's guaranteed to be the shortest path since it's the first time we've seen our target. 

### Ask Clarifying Questions
Before continuing to code, it's extremely important to make sure you're aware of all the details of this question. In particular, ask:
* What is the range of x and y / can x or y be negative?
* How large is the chessboard?
* Is it strictly square or rectangular?

In Leetcode, you're given all these details but in an interview, you likely won't be. So it's extremely important to ask these clarifying questions as they result in significant alterations to our code. 
> Interview tip: If the interviewer says the board is infinite, first ask if it's okay to code a solution assuming there are max bounds to the board size and then later mention how you would change this for an infinite / really large board size.
___

### A Template for BFS:
In BFS, we use a queue to process each step whereas in DFS, we use a stack. To find the shortest path, we need to process the entire level before moving to the next one (often called level-order traversal). To do this, we empty all values in the queue in the current level and add all their neighbours to fill in the next level. With the below template, we replace "cell" with whatever we're dealing with (e.g. coordinates, graph nodes, etc...).
```java
// create a queue and add the starting point to it.
// create a data structure "visited" to keep track of visited cells
//
// int minSteps
// while (queue is not empty):
//     levelSize = queue.size
//     
//     for (0 -> levelSize):
//          currentCell = top of the queue
//          if (currentCell == target): return minSteps
//
//          for (nextCell: neighbouringCells):
//               if (nextCell is out of bounds or we've visited nextCell): skip
//               mark nextCell as visited
//               add nextCell to queue
//
// return minSteps
```

### Accommodate the Template for This Question
The above template fortunately applies to pretty much all BFS level-order questions. However, you'll probably have to accommodate some changes to the template to suit the given problem statement. The first thing to do is identify what's different / what needs changing. In this question, we need to:
1) Find out how to store our coordinates.
2) Pick a data structure to keep track of visited coordinates. 
3) Find out how to get our neighbouring coordinates.

For the first point, we need to keep track of both x and y. In a lot of grid questions, we can enumerate these values into a single integer. But for this question, storing them in an integer array of size 2 is sufficient.

For the second point, both a set and a 2D boolean array have support for our chosen types. As mentioned in the premium solution, Java hash sets are slow so we'll use a boolean array since we have the option to.

For the third point, our neighbours could be up to eight different coordinates. Each coordinate is some offset of 1 and 2 away from the current coordinate. Keeping this in mind, we can simply use a direction array (or an offset array) to store the values of all possible offsets. Then, we simply loop through our direction array and add each offset to our current coordinates.

Awesome, now we're ready to code!

### Evaluating Trade-offs and Optimisations
Chances are, the regular BFS / level-order traversal method is sufficient for an interview (at least for coding). 

> Interview tip: If you really want to go above and beyond, it's important to recognise alternative ways of approaching the problem as well as their trade-offs. 

A good place to start is to recognise inefficiencies in our current approach. The main one is that regular BFS is quite slow for really large boards. 
* Option 1: Use bi-directional BFS. 
* Option 2: Use A*.

I recommend familiarising yourself with both of the above approaches. One of the premium solutions discusses bi-directional BFS in-depth and some posts on the discussion board talk about the A* algorithm. 

There is an extremely small chance you'll actually be asked to code up either one of these in an interview. What's important here isn't necessarily knowing how to code them up but simply knowing how they work, why they're optimisations and understanding their trade-offs. If you understand them well enough, simply bringing them up in an interview will put you miles ahead of your competition. 


___
### Code:
Thanks for reading this far! If you found this helpful or if you think others will find this helpful, please do chuck this post an upvote :)
If you have any questions, suggestions or improvements, feel free to let me know. 
```java
class Solution {
    private final int[][] dirs = {{2,1}, {1,2}, {-2,1}, {2,-1}, {1,-2}, {-1,2}, {-2,-1}, {-1,-2}};
    private final int M = 300;
    
    public int minKnightMoves(int x, int y) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{0,0});
        boolean[][] visited = new boolean[2*M+1][2*M+1];
        
        int minSteps = 0;
        while (!q.isEmpty()) {
            int levelSize = q.size();
            for (int i=0; i<levelSize; i++) {
                int[] currCoords = q.poll();
                int xi = currCoords[0], yi = currCoords[1];
                if (xi == x && yi == y) return minSteps;
                for (int[] d: dirs) {
                    int dx = xi + d[0], dy = yi + d[1];
                    if (dx < -M || dy < -M || dx > M || dy > M || visited[dx+M][dy+M]) continue;
					visited[dx+M][dy+M] = true;
					q.add(new int[]{dx, dy});
                }
            }
            minSteps++;
        }
        
        return minSteps;
    }
}
```
**Time Complexity:** `O(max(|x|,|y|)^2)` which is the approximate circular area from 0,0 to |x|, |y| (since we traverse all directions around 0,0).
**Space Complexity:** `O(max(|x|,|y|)^2)` since we're storing these points in a queue.