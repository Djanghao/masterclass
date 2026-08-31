# NO Split

**Author:** sav20011962
**Votes:** 3
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/5878849/](https://leetcode.com/problems/sentence-similarity-iii/solutions/5878849/)

---

# Approach
NO Split
I mark the ends(beginnings) of words, too.
# Complexity
![image.png](./images/0.png)
# Code
```kotlin

class Solution {
    fun areSentencesSimilar(sentence1: String, sentence2: String): Boolean {
        val len1 = sentence1.length
        val len2 = sentence2.length
        if (len1==len2) 
        return if (sentence1!=sentence2) false else true
        var left = 0
        var right_min = minOf(len1,len2)-1
        val s_min = if (len1<len2) sentence1 else sentence2
        val s_max = if (len1>len2) sentence1 else sentence2
        var delta = s_max.length-s_min.length
        var i = 0
        var j = right_min
        while (left<=right_min && s_min[left]==s_max[left]) {
            if ((s_min[left]==' ' && s_max[left]==' ') ||  
                (s_min[left]==s_max[left] && left==right_min && s_max[left+1]==' ')) i=left+1
            left++
        }
        while (right_min>=0 && s_min[right_min]==s_max[right_min+delta]) {
            if ((s_min[right_min]==' ' && s_max[right_min+delta]==' ') ||  
                (s_min[right_min]==s_max[right_min+delta] && right_min==0 && s_max[right_min+delta-1]==' ')) j=right_min-1
            right_min--
        }
        return if(i>j) true else false
    }
}
```