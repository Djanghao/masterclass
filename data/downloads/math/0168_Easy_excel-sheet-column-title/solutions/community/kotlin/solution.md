# The worst solution Java, Kotlin 👀👀

**Author:** drVains
**Votes:** 5
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/4689069/](https://leetcode.com/problems/excel-sheet-column-title/solutions/4689069/)

---

# Intuition
1) Eat before solving the algorithm.. this may take a long time

# Complexity
Time complexity:
You expected the solution to be relatively simple and not time-consuming. However, attempts to account for all nuances led to a significant increase in time for revisions and debugging.

# Feelings
One and a half hours of meticulous work and detailed analysis led to mixed feelings. On one hand, it was intriguing to unravel such a complex puzzle; on the other hand, there was perplexity and a feeling of diminished self-esteem.


``` kotlin []
class Solution {
    fun convertToTitle(columnNumber: Int): String {
        val alf = ('A'..'Z').joinToString("")
        val div = columnNumber / 26.toDouble()
        if (div <= 1) {
            return alf[columnNumber-1].toString()
        } 

        val newLaterIndex = columnNumber - div.toInt() * 26
        if (newLaterIndex == 0) {
            return convertToTitle(div.toInt() - 1) + alf[25]
        }
        return convertToTitle(div.toInt()) + alf[newLaterIndex-1]
    }
}
```
``` java []
public class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder title = new StringBuilder();
        while (columnNumber > 0) {
            columnNumber--; // Adjust for zero-based indexing
            int remainder = columnNumber % 26;
            char letter = (char) ('A' + remainder);
            title.insert(0, letter); // Prepend the character
            columnNumber /= 26;
        }
        return title.toString();
    }
}
```