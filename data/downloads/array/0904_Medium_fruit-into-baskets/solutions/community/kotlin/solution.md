# Kotlin Production Ready Solutoin

**Author:** cold_hand
**Votes:** 3
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/1430031/](https://leetcode.com/problems/fruit-into-baskets/solutions/1430031/)

---

Having a understandable variable name is a good start to make your code production ready.

It's also helpful to leverage IDE suggestion to use the kotlin the way it supposed to be used (e.g. `fruites.indices` in for loop)

```
fun totalFruit(fruits: IntArray): Int {
    val frequencyMap: MutableMap<Int, Int> = mutableMapOf()

    var total = 0
    var start = 0

    for (end in fruits.indices) {
        frequencyMap[fruits[end]] = frequencyMap.getOrDefault(fruits[end], 0) + 1
        while (frequencyMap.size > 2) {
            frequencyMap[fruits[start]] = frequencyMap[fruits[start]]!! - 1
            if (frequencyMap[fruits[start]] == 0) {
                frequencyMap.remove(fruits[start])
            }
            start++
        }
        total = max(total, end - start + 1)
    }

    return total
}
```