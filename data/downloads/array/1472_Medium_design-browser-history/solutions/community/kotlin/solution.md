# Kotlin

**Author:** kotlinc
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3309365/](https://leetcode.com/problems/design-browser-history/solutions/3309365/)

---

Thank you for upvoting.

```
class BrowserHistory(homepage: String) {

  private val chain = mutableListOf<String>(homepage)
  private var idx = 0

  fun visit(url: String) {
    while (idx != chain.size - 1)
      chain.removeAt(chain.size - 1)
    chain.add(url)
    idx++
  }

  fun back(steps: Int): String {
    idx = maxOf(idx - steps, 0)
    return chain[idx]
  }

  fun forward(steps: Int): String {
    idx = minOf(chain.size - 1, idx + steps)
    return chain[idx]
  }

}

```