# Kotlin Sequence + Regex

**Author:** liujiahua123123
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/2092402/](https://leetcode.com/problems/apply-discount-to-prices/solutions/2092402/)

---

```
fun discountPrices(sentence: String, discount: Int): String {
        val regex = Regex("^\\\\$[0-9]{1,10}$")
        val discountPercentage = (100.0 - discount)/100.0

        return sentence.splitToSequence(" ").joinToString(separator = " ") { word ->
            regex.replace(word) {
                "$" + String.format("%.2f", (it.value.trim().removePrefix("$").toDouble() * discountPercentage))
            }
        }
    }
```