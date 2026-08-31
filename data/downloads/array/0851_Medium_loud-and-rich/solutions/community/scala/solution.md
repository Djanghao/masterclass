# Scala BFS. Faster than 100%

**Author:** sobik
**Votes:** 1
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/1692725/](https://leetcode.com/problems/loud-and-rich/solutions/1692725/)

---

```
import scala.annotation.tailrec
import scala.collection.mutable
import scala.collection.mutable.ArrayBuffer

object Solution {

    
   def loudAndRich(richer: Array[Array[Int]], quiet: Array[Int]): Array[Int] = {
   
		val n = quiet.length
		val revGraph = Array.fill[ArrayBuffer[Int]](n)(ArrayBuffer.empty[Int])
		val ans = Array.fill[Int](n)(0)

		def buildGraphs():Unit = {
		  richer foreach(
			r => { revGraph(r(1)) += r(0) }
		  )
		}

		def buildAns(): Unit = {
		  for(i <- 0 until n) {
			buildAnsForI(i)
		  }
		}

		def buildAnsForI(i: Int): Unit = {
		  val r = findRicherThanI(i)
		  if(r.isEmpty) {
			ans(i) = i
		  } else {
			ans(i) = quiet.indexOf(r.map(a => quiet(a)).min)
		  }
		}

		def findRicherThanI(i: Int): mutable.Set[Int] = {
		  val richerThanI = mutable.Set(i)
		  bfs(richerThanI)

		  @tailrec
		  def bfs(r: mutable.Set[Int]): Unit = {
			if(r.isEmpty) {
			  return
			}
			val newRicher = r.flatMap(e => revGraph(e))
			richerThanI.addAll(newRicher)
			bfs(newRicher)
		  }
		  richerThanI
		}

		buildGraphs()
		buildAns()

		ans
  }

}
```