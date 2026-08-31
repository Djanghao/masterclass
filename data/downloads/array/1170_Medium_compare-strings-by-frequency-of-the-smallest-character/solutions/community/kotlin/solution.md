# Frequency function

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/5381094/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/5381094/)

---

# Approach
I simply implemented the function described in the condition to count the frequency of the lexically smallest character. Then I write values for all words from "words" into the intermediate array.
Then in two nested loops I first calculate the value of the function for the word from the query and compare it with all the values in the intermediate array.
# Complexity
![image.png](./images/0.png)
# Code
```
class Solution {
    fun numSmallerByFrequency(queries: Array<String>, words: Array<String>): IntArray {
        fun f(s:String):Int {
            val arr = IntArray(26)
            for (ch in s) {
                arr[ch-'a']++
            }
            for (i in 0 until 26) {
                if (arr[i]>0) return arr[i]
            }
            return 0
        }
        val lenW = words.size
        val lenQ = queries.size
        val rez = IntArray(lenQ)
        val rezW = IntArray(lenW)
        for (i in 0 until lenW) {
            rezW[i]= f(words[i])
        }
        for (i in 0 until lenQ) {
            val couQ = f(queries[i])
            for (R in rezW) {
                if (couQ<R) rez[i]++
            }
        }
        return rez
    }
}
```