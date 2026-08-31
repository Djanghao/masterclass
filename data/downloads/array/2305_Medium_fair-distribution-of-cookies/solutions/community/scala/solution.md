# Simple and compact solution using backtracking with some explanation, beats 100%

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3704063/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3704063/)

---

# Approach
We prepare an array of the same size as the number of children (k) in which we will keep the distribution. 

After this we backtrack to have all the possible combination of cookies amongs the children. 
When we have all the cookies distributed we check the max "unfairness" and save that if it's better than our current result.

# Code
```
object Solution {
    
    import java.util.concurrent.atomic.AtomicInteger

      def distributeCookies(cookies: Array[Int], k: Int): Int = {

    val holder = new AtomicInteger(Integer.MAX_VALUE)
    var dist = Array.ofDim[Int](k)

    distributeCookiesBacktracking(0, cookies, k, dist, holder)

    holder.get()
  }

  private def distributeCookiesBacktracking(cookieIndex: Int, cookies: Array[Int], k: Int, dist: Array[Int], holder: AtomicInteger): Unit = {

    //we have reached the end of the cookies
    if (cookieIndex >= cookies.length) {

      val maxUnfair = dist.max

      if (holder.get() > maxUnfair) {
        holder.set(maxUnfair)
      }

      return
    }

    //here we cycle all the children and pass (and then retrieve) the current cookie to each of them
    for (i <- 0 until k) {

      dist(i) += cookies(cookieIndex)
      distributeCookiesBacktracking(cookieIndex + 1, cookies, k, dist, holder)
      dist(i) -= cookies(cookieIndex)
    }
  }
}
```