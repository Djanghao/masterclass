# [scala] BFS | Easy to understand code | Beats 100%

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/5997511/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/5997511/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.collection.mutable

case class gene(curr: String, count: Int)
object Solution {
    def minMutation(startGene: String, endGene: String, bank: Array[String]): Int = {
        val queue = mutable.Queue[gene]()
        val visited = mutable.Set[String]()
        queue.enqueue(gene(startGene, 0))

        while(!queue.isEmpty){
            val present = queue.dequeue
            val presentGene = present.curr
            if(presentGene == endGene) return present.count
            else {
                for(i <- presentGene.indices){
                    val (pre, post) = presentGene.splitAt(i)
                    val muts = List(pre+"A"+post.tail,
                                pre+"C"+post.tail,
                                pre+"G"+post.tail,
                                pre+"T"+post.tail)
                    for(j <- muts){
                        val newMut = j.mkString("")
                        if(bank.contains(newMut) && !visited.contains(newMut)) {
                            queue.enqueue(gene(newMut, present.count+1))
                            visited.add(newMut)
                        }
                    }
                }
            }
        }
        -1
    }
}
```