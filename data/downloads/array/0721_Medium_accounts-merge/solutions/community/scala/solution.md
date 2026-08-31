# 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/5797002/](https://leetcode.com/problems/accounts-merge/solutions/5797002/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
NKlogNK
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
NK
# Code
```scala []
import scala.collection.mutable
object Solution {
  def accountsMerge(accounts: List[List[String]]): List[List[String]] = {
    val n = accounts.length
    val rank = Array.fill(n)(1)
    val root = (0 until n).map(i => i).toArray

    def find(x: Int): Int = {
      if (x == root(x)) x
      else find(root(x))
    }

    def union(a: Int, b: Int) = {
      val root1 = find(a)
      val root2 = find(b)
      if (root1 != root2) {
        if (rank(root1) > rank(root2)) root(root2) = root1
        else if (rank(root2) > rank(root1)) root(root1) = root2
        else {
          rank(root1) = rank(root1) + 1
          root(root2) = root1
        }
      }
    }

    val emailAndAccountIdxMap: mutable.Map[String, Int] = mutable.Map.empty
    accounts.zipWithIndex.foreach { case (emails, accIdx) =>
      emails.tail.foreach { email =>
        if (emailAndAccountIdxMap.contains(email)) union(accIdx, emailAndAccountIdxMap(email))
        else emailAndAccountIdxMap.put(email, accIdx)
      }
    }


    val result = emailAndAccountIdxMap.toList.map { case (email, accountIdx) =>
      val rootNode = find(accountIdx)
      (rootNode, email)
    }
    result.groupBy(_._1).map(x => accounts(x._1).head +: x._2.map(_._2).sorted).toList
  }
}
```