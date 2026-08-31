# Scala Solution | BFS + Buffer + One Quadrant | Video Explanation

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/761224/](https://leetcode.com/problems/minimum-knight-moves/solutions/761224/)

---

1. Use BFS
2. As Knight move is symmetric across all  4 quadrant, So focus only 1 quadrant, could be any
3. As knight's move is 2 and half, keep the buffer of 2, because that half step could be taken in one quadrant and rest of 2 in neighbour's
4. Use Absolute values for x and y

```
def minKnightMoves(x: Int, y: Int): Int = {
        val dir = List((2,1), (1,2), (2, -1), (-1, 2), (1, -2), (-2, 1), (-1, -2), (-2, -1))
        
        val absX = Math.abs(x)
        val absY = Math.abs(y)
        
        val queue: Queue[(Int, Int)] = new Queue
        queue.enqueue((0,0))
        var count = 0
        var set: HashSet[String] = new HashSet
        
        
        while(queue.nonEmpty) {
            val positionInSingleHop = queue.length
            for(s <- 1 to positionInSingleHop) {
                val currentPos = queue.dequeue

                if(currentPos._1 == absX && currentPos._2 == absY)
                    return count
                else 
                    for(d <- dir) {
                        val newX = currentPos._1 + d._1
                        val newY = currentPos._2 + d._2
                        if(!set.contains(newX+"-"+newY) && newX >= -2 && newY >= -2) {
                            set += (newX+"-"+newY)
                            queue.enqueue((newX, newY))
                        }
                    }
            }
            count += 1
        }
        count
    }
```

https://www.youtube.com/watch?v=Iw_Ok8174Jo



