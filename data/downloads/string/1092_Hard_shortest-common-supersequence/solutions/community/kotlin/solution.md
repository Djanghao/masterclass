# kotlin

**Author:** lpz04
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/3191694/](https://leetcode.com/problems/shortest-common-supersequence/solutions/3191694/)

---

# Intuition
Return the shortest string from both strings
Wait a minute and read the problem statement again.

can I remove common elements from both strings?

here is the hint!
`str1` = `"abac"`, `str2` = `"cab"`
what is common in these 2 strings? `ab` correct?
now remove `ab` from one of the string

`cab` --> `c` or `abac` --> `ac`
with this approch combine both strings will result in expected output`cabac`

I hope you got the context.

# Approach
Challenge here is how to find the common elements in both the string?

I followed `top down approch` to find the common elements in matrix.

here is one example reference.

|0|0|c|a|b|
|-|-|-|-|-|
0|0|0|0|0|
a|0|0|1|1|
b|0|0|1|2|
a|0|0|1|2|
c|0|1|1|2|

table will record the number of common elements on both strings.

chekc the last row and last column.

With this table I can trace back to find the common elements. 

while back tracing collect the data.
(4,3) > (3,3) > (2,3) > (1,2)
  c   >   a   >   b   >   a

if any of elements that are not added to list add them using loop.

Finally, reverse the string. 

tada!

# Complexity
- Time complexity: $$O(m.n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(m.n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun shortestCommonSupersequence(str1: String, str2: String): String {
        val dp = Array(str1.length+1){IntArray(str2.length+1)}
        // table to identify the common elements in both strings
        for (i in 1 .. str1.length){
            for (j in 1 .. str2.length){
                dp[i][j] = if (str1[i-1] == str2[j-1]) {
                    dp[i-1][j-1]+1
                } else {
                    maxOf(dp[i-1][j], dp[i][j-1])
                }
            }
        }
        var i: Int = str1.length
        var j: Int = str2.length
        val s = StringBuffer()
        // back tracing the table to collect the common string elements
        while (i > 0 && j > 0) {
            if (str1[i - 1] == str2[j - 1]) {
                s.append(str1[i - 1])
                i--
                j--
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                s.append(str1[i - 1])
                i--
            } else {
                s.append(str2[j - 1])
                j--
            }
        }
        // collecting remaining elements
        while (i > 0) {
            s.append(str1[i - 1])
            i--
        }
        while (j > 0) {
            s.append(str2[j - 1])
            j--
        }
        return s.reverse().toString()
    }
}
```