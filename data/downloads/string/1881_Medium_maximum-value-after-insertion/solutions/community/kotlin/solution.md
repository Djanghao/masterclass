# Kotlin solution with StringBuilder

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/4771338/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/4771338/)

---

![Screenshot 2024-03-17 011424.png](./images/0.png)

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun maxValue(n: String, x: Int): String {
        val stringBuilder = StringBuilder(n)
        val isNegative = stringBuilder[0] == '-'
        val startIndex = if(isNegative) 1 else 0
        var insertIndex = n.length

        for(index in startIndex until n.length) {
            val digit = n[index].digitToInt()
            if((isNegative && x < digit)) {
                insertIndex = index
                break
            } else if(!isNegative && x > digit){
                insertIndex = index
                break
            }
        }

        stringBuilder.insert(insertIndex, x.toString())
        return stringBuilder.toString()
    }
}
```