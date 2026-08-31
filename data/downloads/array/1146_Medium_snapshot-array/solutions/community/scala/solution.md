# Scala, with mutable.TreeMap

**Author:** maizy_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/5254638/](https://leetcode.com/problems/snapshot-array/solutions/5254638/)

---


```
 class SnapshotArray(_length: Int) {
  private var snapshotId = 0
  private val history = Vector.fill(_length)(new scala.collection.mutable.TreeMap[Int, Int]())

  def set(index: Int, `val`: Int): Unit = {
    if (index > _length || index < 0) {
      throw new IndexOutOfBoundsException()
    }
    history(index)(snapshotId) = `val`
  }

  def snap(): Int = {
    snapshotId += 1
    snapshotId - 1
  }

  def get(index: Int, snap_id: Int): Int = {
    if (index > _length || index < 0) {
      throw new IndexOutOfBoundsException()
    }
    history(index).rangeTo(snap_id).lastOption.map(_._2).getOrElse(0)
  }
}
```