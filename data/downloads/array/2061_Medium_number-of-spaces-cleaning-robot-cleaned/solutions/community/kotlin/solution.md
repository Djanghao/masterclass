# Kotlin, Array simulation traversing O(m*n)

**Author:** Axzra
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5181094/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5181094/)

---

Using a directions object here would be cleaner, I agree
```
class Solution {
    fun numberOfCleanRooms(room: Array<IntArray>): Int {
        val rows = room.size; val cols = room[0].size
        var ans = 0
        var i = 0; var j = 0;

        val visited = Array(rows) {
            Array(cols) { HashSet<Int>() }
        }

        // right = 1, down = 2, left = 3, up = 4
        while(i >= 0 && j >= 0 && i < rows && j < cols && (room[i][j] == 0 || room[i][j] == 2)) {
            // traverse right
            while(j < cols && i < rows && i >= 0 && j >= 0) {
                if(room[i][j] == 2 && visited[i][j].contains(1)) return ans
                if(room[i][j] == 0) ans += 1
                visited[i][j].add(1)
                if(room[i][j] == 1) break
                room[i][j] = 2
                j += 1
            }
            
            j -= 1
            i += 1

            // traverse down
            while(i < rows && j  < cols && i >= 0 && j >= 0) {
                if(room[i][j] == 2 && visited[i][j].contains(2)) return ans
                if(room[i][j] == 0) {
                    ans += 1
                }
                visited[i][j].add(2)
                if(room[i][j] == 1) break
                room[i][j] = 2
                i += 1
            }

            i -= 1
            j -= 1

            // traverse left
            while(j >= 0 && i >= 0 && i < rows && j < cols) {
                if(room[i][j] == 2 && visited[i][j].contains(3)) return ans
                if(room[i][j] == 0) {
                    ans += 1
                }
                visited[i][j].add(3)
                if(room[i][j] == 1) break
                room[i][j] = 2
                j -= 1 
            }
            j += 1
            i -= 1


            // traverse up
            while(i >= 0 && j >= 0 && i < rows && j < cols) {
                if(room[i][j] == 2 && visited[i][j].contains(4)) return ans
                if(room[i][j] == 0) {
                    ans += 1
                }
                visited[i][j].add(4)
                if(room[i][j] == 1) break
                room[i][j] = 2
                i -= 1 
            }
            j += 1
            i += 1
        }

        return ans
    }
}
```