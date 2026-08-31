# beats 100% runtime and memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/6015580/](https://leetcode.com/problems/operations-on-tree/solutions/6015580/)

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
  class LockingTree(_parent: Array[Int]) {

    val parentMap = _parent.indices.map { idx =>
      (idx, _parent(idx))
    }.toMap

    // println(s"parents map $parentMap")
    val childrenMap = _parent.zipWithIndex.groupBy(_._1).map(x => (x._1, x._2.map(_._2)))

    // println(s"childrenMap ${childrenMap.map(x=> (x._1, x._2.mkString(",")))}")
    val locked: mutable.Map[Int, Int] = mutable.Map.empty

    def lock(num: Int, user: Int): Boolean = {
      if (locked.contains(num)) false
      else {
        locked.put(num, user)
        true
      }
    }

    def unlock(num: Int, user: Int): Boolean = {
      if (locked.contains(num) && locked(num) == user) {
        locked.remove(num)
        true
      } else false
    }

    def upgrade(num: Int, user: Int): Boolean = {
      if (locked.contains(num)) false
      else {
        if (anyChildLocked(num) && noParentLocked(num)) {
          unlockAllChildren(num)
          locked.put(num, user)
          true
        } else false
      }
    }

    private def anyChildLocked(num: Int): Boolean = {
      if (childrenMap.contains(num)) {
        if (childrenMap(num).exists(locked.contains)) true else childrenMap(num).exists(anyChildLocked)
      } else false
    }

    private def noParentLocked(num: Int): Boolean = {
      if (parentMap.contains(num) && parentMap(num) != -1) {
        if (locked.contains(parentMap(num))) false else noParentLocked(parentMap(num))
      } else true
    }

    private def unlockAllChildren(num: Int): Unit = {
      childrenMap.get(num).foreach { children =>
        children.foreach { child =>
          locked.remove(child)
          unlockAllChildren(child)
        }
      }
    }
  }

/**
 * Your LockingTree object will be instantiated and called as such:
 * val obj = new LockingTree(parent)
 * val param_1 = obj.lock(num,user)
 * val param_2 = obj.unlock(num,user)
 * val param_3 = obj.upgrade(num,user)
 */
```