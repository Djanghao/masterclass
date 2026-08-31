# Kotlin JVM 1.6?

**Author:** spearkkk
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/1059985/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/1059985/)

---

I tried to solve this one, but there is compile error
`error: calls to static methods in Java interfaces are prohibited in JVM target 1.6. Recompile with '-jvm-target 1.8'`

Could I set JVM version as 1.8, not 1.6?

My code follows:
```kotlin
map.entries.stream().sorted(Comparator.comparingInt { entry -> entry.key })
                .map { entry -> entry.value.toList() }
                .collect(Collectors.toList())
```