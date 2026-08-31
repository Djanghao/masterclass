# Kotlin | two pointers

**Author:** SamoylenkoDmitry
**Votes:** 6
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/2778713/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/2778713/)

---

Solution [kotlin]
```
    fun reverseVowels(s: String): String {
        val vowels = setOf('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
        var chrs = s.toCharArray()
        var l = 0
        var r = chrs.lastIndex
        while(l < r) {
            while(l<r && chrs[l] !in vowels) l++
            while(l<r && chrs[r] !in vowels) r--
            if (l < r) chrs[l] = chrs[r].also { chrs[r] = chrs[l] }
            r--
            l++
        }
        return String(chrs)
    }
```
Explanation:
Straightforward solution : use two pointers method and scan from the both sides.

Speed: O(N), Memory O(N)

Btw, I post my daily leetcode here https://dmitrysamoylenko.com/2022/10/31/leetcode_daily.html and in the telegram channel https://t.me/leetcode_daily_unstoppable