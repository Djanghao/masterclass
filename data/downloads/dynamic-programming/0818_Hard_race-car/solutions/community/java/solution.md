# Super Easy To Understand BFS JAVA Solution

**Author:** isaiahn
**Votes:** 26
**Link:** [https://leetcode.com/problems/race-car/solutions/2722348/](https://leetcode.com/problems/race-car/solutions/2722348/)

---

The DP Solutions are fast, but make my brain hurt. Code readability makes it easier to understand and maintain, even if new developers join a project.
Here is a BFS solution adapted from the python version from this YT video:
https://www.youtube.com/watch?v=DBJPWJr5zZ4

```
class Solution {
   List<Integer[]> queue = new ArrayList<Integer[]>(); 
   HashSet<Integer[]> visited = new HashSet<Integer[]>(); 
   int moves, position, speed = 0;
    public int racecar(int target) {
          queue.add(new Integer[]{0,0,1}); // #moves, position, speed
          
          while(queue.size() > 0) {
              moves = queue.get(0)[0];
              position = queue.get(0)[1];
              speed = queue.get(0)[2];
              queue.remove(0);
              
              if (position == target) {
                  return moves;
              } else if (visited.contains(new Integer[]{position, speed})) {
                  continue;
              }
              else {
              visited.add(new Integer[]{position, speed});
                  queue.add(new Integer[]{moves+1,position+speed,speed*2 });
                  if ((position+speed > target && speed > 0) || (position+speed < target && speed < 0)) {
					  queue.add(new Integer[]{moves+1,position, speed > 0? -1: 1 });
                  }
              }
          }
        return moves;
    }
}
```