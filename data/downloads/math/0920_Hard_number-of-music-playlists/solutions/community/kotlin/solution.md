# Recursive + memo approach kotlin

**Author:** Asaad27
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/3869650/](https://leetcode.com/problems/number-of-music-playlists/solutions/3869650/)

---

# Intuition
create a recursive function that builds all possible playlists. Since a song can only be played again if `k` other songs have been played, We need to track the last position (time the initial song was played) of each song and the current size of the playlist.

# Approach
Recursive approach that considers adding each song to the playlist, maintaining the current size, and the number of unique songs used so far. We also used memoization to store previously computed states defined by the current size and unique songs

# Complexity
- Time complexity:
$$O(\	ext{{goal}} \	imes n)$$

- Space complexity:
$$O(\	ext{{goal}} \	imes n)$$

# Code
here is the first **TLE** code before optimization:

```
class Solution {
    fun numMusicPlaylists(n: Int, goal: Int, k: Int): Int {
        var result = 0

        fun numMusicPlaylists(current: MutableList<Int>, uniqueSongs: HashSet<Int>, lastPos: MutableMap<Int, Int?>) {
            if (current.size == goal) {
                if (uniqueSongs.size == n) {
                    result += 1
                }
                return
            }

            for (num in 1..n) {
                val currentPos = current.size
                if (lastPos[num] != null && currentPos - lastPos[num]!! <= k) {
                        continue
                } // skip songs that cannot be played yet

                val oldPos = lastPos[num]
                lastPos[num] = currentPos
                uniqueSongs.add(num)
                current.add(num)
                
                numMusicPlaylists(current, uniqueSongs, lastPos)

                if (oldPos == null) { /* it means that s the 
first (and only) occurence seen of the song */
                    uniqueSongs.remove(num)
                }
                
                current.removeAt(current.size - 1)
                lastPos[num] = oldPos
            }
        }

        numMusicPlaylists(mutableListOf(), HashSet<Int>(), mutableMapOf())

        return result
    }
}
```

final version after memoization, and removing unecessary lists and hashset
```
class Solution {
    fun numMusicPlaylists(n: Int, goal: Int, k: Int): Int {
        val MOD = 1_000_000_007L
        val memo = Array(goal + 1) { LongArray(n + 1) { -1L } }
        
        fun numMusicPlaylists(currentSize: Int, uniqueSongs: Int, lastPos: IntArray): Long {
            if (currentSize == goal) return if (uniqueSongs == n) 1 else 0
            if (memo[currentSize][uniqueSongs] != -1L) return memo[currentSize][uniqueSongs]

            var count = 0L
            for (num in 0 until n) {
                val currentPos = currentSize
                if (lastPos[num] != -1 && currentPos - lastPos[num] <= k) continue

                val oldPos = lastPos[num]
                lastPos[num] = currentPos

                count = (count + numMusicPlaylists(currentSize + 1, uniqueSongs + if (oldPos == -1) 1 else 0, lastPos)) % MOD
                lastPos[num] = oldPos
            }

            memo[currentSize][uniqueSongs] = count
            return count
        }

        return numMusicPlaylists(0, 0, IntArray(n) { -1 }).toInt()
    }
}

```