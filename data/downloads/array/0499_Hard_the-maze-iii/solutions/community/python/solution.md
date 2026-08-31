# Python [Dijkstra] - Faster than 99%

**Author:** leeik
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/1115517/](https://leetcode.com/problems/the-maze-iii/solutions/1115517/)

---

```
class Solution:
    def findShortestWay(self, maze: List[List[int]], ball: List[int], hole: List[int]) -> str:
        from heapq import heappush, heappop
        star_row, start_col = ball
        heap = [(0, star_row, start_col, '')] # steps, row, col, string (direction)
        visited_nodes = set()

        while heap:
            current_distance, current_row, current_col, current_string = heappop(heap)
            
            if (current_row, current_col) not in visited_nodes:
                
                visited_nodes.add((current_row, current_col)) 

                if [current_row, current_col] == hole:
                    return current_string
                
                for row_diff, col_diff, direction in [(1, 0, 'd'), (-1, 0, 'u'), (0, 1, 'r'), (0, -1, 'l')]:

                    row = current_row
                    col = current_col
                    count = 0

                    while 0 <= row + row_diff <= len(maze) - 1 and 0 <= col + col_diff <= len(maze[0]) - 1 and maze[row + row_diff][col + col_diff] == 0:
                        row += row_diff
                        col += col_diff
                        count += 1

                        if [row, col] == hole:
                            break

                    if (row, col) not in visited_nodes:
                        heappush(heap, (current_distance + count, row, col, current_string + direction))  

        return 'impossible'
```