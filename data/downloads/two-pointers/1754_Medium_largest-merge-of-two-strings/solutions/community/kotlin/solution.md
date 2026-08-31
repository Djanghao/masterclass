# CharArray + analysis

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5915874/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5915874/)

---

# Approach
CharArray + analysis
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun largestMerge(word1: String, word2: String): String {
        val len1 = word1.length
        val len2 = word2.length
        var rez = CharArray(len1+len2)
        var pos1 = 0
        var pos2 = 0
        while (pos1<len1 || pos2<len2) {
            when {
                pos1==len1 -> rez[pos1+pos2] = word2[pos2++]
                pos2==len2 -> rez[pos1+pos2] = word1[pos1++]
                word1[pos1]<word2[pos2] -> rez[pos1+pos2] = word2[pos2++]
                word1[pos1]>word2[pos2] -> rez[pos1+pos2] = word1[pos1++]
                else -> { // word1[pos1]==word2[pos2]
                    when {
                        pos1 == len1-1 && pos2 == len2-1 -> {
                            rez[pos1+pos2] = word1[pos1++]
                            rez[pos1+pos2] = word2[pos2++]
                            break
                        }
                        pos1 == len1-1 -> rez[pos1+pos2] = word2[pos2++]
                        pos2 == len2-1 -> rez[pos1+pos2] = word1[pos1++]
                        word2[pos2+1]>word1[pos1+1] -> rez[pos1+pos2] = word2[pos2++]
                        word2[pos2+1]<word1[pos1+1] -> rez[pos1+pos2] = word1[pos1++]
                        else -> { // word1[pos1]==word2[pos2] && 
word1[pos1+1]==word2[pos2+1]
//There's an optimization option here - 
//when you're going through the same substrings, 
//you can work through them at once. 
//In this version, I just find 
//which of the identical substrings 
//has a preferred continuation.
                            var i = 1
                            while (pos1+i<len1 && pos2+i<len2 && word1[pos1+i]==word2[pos2+i]) i++
                            if (pos1+i==len1 && pos2+i==len2) rez[pos1+pos2] = word1[pos1++]
                            else if (pos1+i==len1) rez[pos1+pos2] = word2[pos2++]
                            else if (pos2+i==len2) rez[pos1+pos2] = word1[pos1++]
                            else if (word1[pos1+i]>word2[pos2+i]) rez[pos1+pos2] = word1[pos1++]
                            else if (word1[pos1+i]<word2[pos2+i]) rez[pos1+pos2] = word2[pos2++]
                        }
                    }
                }
            }
        }
        return rez.concatToString()
    }
}
```