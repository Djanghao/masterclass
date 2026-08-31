# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/5416556/](https://leetcode.com/problems/throne-inheritance/solutions/5416556/)

---

```
class ThroneInheritance(val kingName: String) {
    val m = HashMap<String, MutableList<String>>()
    val set = HashSet<String>()
    fun birth(par: String, ch: String) {
        m[par] = m[par].apply { this?.add(ch) } ?: mutableListOf(ch)
    }

    fun death(name: String) = set.add(name)
    fun getInheritanceOrder() = mutableListOf<String>().apply {
        val stack = Stack<String>().apply { add(kingName) }
        while (stack.isNotEmpty()) {
            val pop = stack.pop()
            if (pop !in set) add(pop)
            m[pop]?.reversed()?.forEach { stack.push(it) }
        }
    }
}
```