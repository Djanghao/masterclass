# Scala 2 stacks, 21 lines

**Author:** romanovsky
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/2239724/](https://leetcode.com/problems/design-browser-history/solutions/2239724/)

---

```
class BrowserHistory(_homepage: String) {
  import scala.collection.mutable.Stack
  val homepage = _homepage
  val historyBack = Stack.empty[String]
  val historyForward = Stack.empty[String]
  var current = _homepage
  
  def visit(url: String): Unit = {
    historyBack.append(current)
    historyForward.removeAll()
    current = url
  }
  
  def back(steps: Int): String = (1 to steps).map { _ =>
      historyBack.removeLastOption().flatMap { x => historyForward.prepend(current); current = x; Some(x) }
    }.flatten.lastOption.getOrElse(current)

  def forward(steps: Int): String = (1 to steps).map { _ =>
      historyForward.removeHeadOption().flatMap { x => historyBack.append(current); current = x; Some(x) }
    }.flatten.lastOption.getOrElse(current)
}
```