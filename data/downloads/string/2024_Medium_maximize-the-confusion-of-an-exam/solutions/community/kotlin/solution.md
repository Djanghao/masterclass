# kotlin || sliding window O(n)

**Author:** rafiwilder4203
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/2005645/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/2005645/)

---

```
class Solution {
    fun maxConsecutiveAnswers(answerKey: String, k: Int): Int {
        val map = hashMapOf<Char, Int>()
        var max = 0
        var i = 0
        var res = 0
        for (j in answerKey.indices) {
            map[answerKey[j]] = map.getOrDefault(answerKey[j], 0) + 1
            max = max.coerceAtLeast(map[answerKey[j]]!!)
            if(j-i+1-max>k){
                map[answerKey[i]] =map[answerKey[i]]!!-1
                i++
            }
            res = res.coerceAtLeast(j-i+1)
        }
        return res
    }
}
```