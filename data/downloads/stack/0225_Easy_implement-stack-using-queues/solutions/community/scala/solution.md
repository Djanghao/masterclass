# Scala | Simple | Single Queue

**Author:** soumensaha
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/2010131/](https://leetcode.com/problems/implement-stack-using-queues/solutions/2010131/)

---

```
class MyStack {
  val q = scala.collection.mutable.Queue.empty[Int]

  def push(x: Int): Unit = {
    q.enqueue(x)
    (0 until q.size - 1).foreach(_ => q.enqueue(q.dequeue()))
  }

  def pop(): Int = q.dequeue()

  def top(): Int = q.front

  def empty(): Boolean = q.isEmpty

}
```