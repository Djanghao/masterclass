# (ONE TreeMap) & (TWO TreeMap) & (Sorting + binary search)

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/5331062/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/5331062/)

---

# Approach
First I accumulate in TreeMap keys - strength, values - number of players(coaches) with this strength.
Then in the first variant I just loop through the players and look in TreeMap of coaches of the nearest stronger one. 
In the second variant I go through the TreeMap of players and gradually select coaches from the lowest possible strength until I "attach" all players with this strength.
If I can't find a coach - exit.

Translated with DeepL.com (free version)
# Code
***ONE TreeMap***
![image.png](./images/0.png)
```
class Solution {
    fun matchPlayersAndTrainers(players: IntArray, trainers: IntArray): Int {
        var rez = 0
        val map_t = TreeMap<Int, Int>()
        for (T in trainers) {
            map_t[T] = map_t[T]?.plus(1) ?: 1
        }
        for (P in players) {
            val T = map_t.ceilingEntry(P)
            if (T!=null) {
                rez++
                if (T.value>1) {
                    map_t.put(T.key, T.value-1)
                }
                else map_t.remove(T.key)
            }
        }
        return rez
    }
}
```
***TWO TreeMap***
![image.png](./images/1.png)
```
class Solution {
    fun matchPlayersAndTrainers(players: IntArray, trainers: IntArray): Int {
        var rez = 0
        val map_t = TreeMap<Int, Int>()
        val map_p = TreeMap<Int, Int>()
        for (T in trainers) {
            map_t[T] = map_t[T]?.plus(1) ?: 1
        }
        for (P in players) {
            map_p[P] = map_p[P]?.plus(1) ?: 1
        }
        for (P in map_p) {
            var cou = P.value
            while (cou>0) {
                val T = map_t.ceilingEntry(P.key)
                if (T!=null) {
                    rez +=minOf(T.value,cou)
                    if (T.value>cou) {
                        map_t.put(T.key, T.value-cou)
                    }
                    else map_t.remove(T.key)
                    cou-=T.value
                }
                else break
            }
            if (cou>0) break
        }
        return rez
    }
}
```
***Sorting + binary search***
![image.png](./images/2.png)
```
class Solution {
    fun matchPlayersAndTrainers(players: IntArray, trainers: IntArray): Int {
        var rez = 0
        players.sort()
        // println("players=${players.toList()}")
        trainers.sort()
        // println("trainers=${trainers.toList()}")
        var pos = 0
        fun search(k: Int, target: Int): Int {
            if (k>=0 && k<trainers.size && trainers[k] == target) return k
            var left = k
            var right = trainers.size - 1
            while (right >= left) {
                val mid = left + (right - left) / 2
                if (trainers[mid] == target ||
                    (mid==pos && trainers[mid] > target)) {
                    return mid
                }  else if (mid<trainers.size - 1 && trainers[mid] < target && trainers[mid+1] > target) {
                    return mid+1
                }
                else if (trainers[mid] > target) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
                return -1
        }
        for (P in players) {
            val new_pos = search(pos,P)
            // println("!new_pos=$new_pos")
            if (new_pos>=0) {
                rez++
                pos=new_pos+1
            }
            else break
        }
        return rez
    }
}
```