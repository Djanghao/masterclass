# Priority Queue || Sorting

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5910092/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5910092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: -> O(m+n)log(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m+n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun maximumCoins(heroes: IntArray, monsters: IntArray, coins: IntArray): LongArray {
        val pq = PriorityQueue<Pair<Int,Int>>(compareBy<Pair<Int,Int>>{it.first})
        monsters.forEachIndexed{i,v->
            pq.add(Pair(v,i))
        }
        var ans = LongArray(heroes.size){0}
        val hero = arrayListOf<Pair<Int,Int>>()
        heroes.forEachIndexed{i,v->
            hero.add(Pair(v,i))
        }
        hero.sortWith(compareBy{it.first})
        var curr = 0L
        hero.forEach{p ->        
            while(pq.isNotEmpty() && pq.peek().first <= p.first){
                curr = curr+coins[pq.poll().second]
            }
           ans[p.second] = curr
        }
        return ans
    }
}
```