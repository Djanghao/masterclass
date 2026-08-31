# Kotlin Solution with Math

**Author:** lararicardo386
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/3836661/](https://leetcode.com/problems/split-message-based-on-limit/solutions/3836661/)

---

# Approach
We can solve this problem doing pure math calculations.

1. We first try to split it with at most 9 copies. We know the suffix will be of the form "<1/9>", which will always have 5 chars. This means that we have only (limit -5) chars that we can extract from the original string. Therefore we would need (Message Length / (Limit-5)) Copies. If number of copies is greater than 9 then we know we need to check now with at most 99
2. Now we try to split it with at most 9 copies. We know we will have 9 copies of the following form "<1/99>" whose length is (Limit -6) and then we will have 90 copies of the form "<10/99>" whose length is (Limit-7). To get how many copies we will need we can do quick math.

For other cases we have similar logic

# Code

Code can be simplify but tried to keep it self explained.
```
import kotlin.math.ceil
import kotlin.math.min
class Solution {

    fun splitAtMost9(length: Int, limit: Int):Int{
        if(limit <= 5)  return -1
        val numberOfCopies = ceil(length/(limit - 5).toFloat()).toInt()
        return if(numberOfCopies <= 9)numberOfCopies else -1
    }

    fun splitWithAtMost99(length: Int, limit: Int):Int{
        if(limit <= 7)  return -1
        val restOfStringLength = length - (limit-6)*9
        val numberOfCopies = ceil(restOfStringLength/(limit-7).toFloat()).toInt() + 9
        return if(numberOfCopies <= 99) numberOfCopies else -1
    }

    fun splitWithAtMost999(length: Int, limit: Int):Int{
        if(limit <= 9)  return -1
        var restOfStringLength = length - (limit-7)*9
        restOfStringLength = restOfStringLength - (limit-8)*90

        val numberOfCopies = ceil(restOfStringLength/(limit-9).toFloat()).toInt() + 99
        return if(numberOfCopies <= 999) numberOfCopies else -1
    }

    fun splitWithAtMost9999(length: Int, limit: Int):Int{
        if(limit <= 9)  return -1
        var restOfStringLength = length - (limit-8)*9
        restOfStringLength = restOfStringLength - (limit-9)*90
        restOfStringLength = restOfStringLength - (limit-10)*900

        val numberOfCopies = ceil(restOfStringLength/(limit-11).toFloat()).toInt() + 999
        return if(numberOfCopies <= 9999) numberOfCopies else -1
    }

    fun splitMessage(message: String, limit: Int): Array<String> {
        var copies = splitAtMost9(message.length,limit)
        if(copies == -1){
            copies = splitWithAtMost99(message.length,limit)
        }
        if(copies == -1){
            copies = splitWithAtMost999(message.length,limit)
        }
        if(copies == -1){
            copies = splitWithAtMost9999(message.length,limit)
        }
        if(copies <= 0 ){
            return emptyArray<String>()
        }
        val ans = Array<String>(copies){""}
        var appended = 0
        for(i in 1..copies){
            val toAppendLength = limit - "<$i/$copies>".length
            ans[i-1] = message.substring(appended,min(appended+toAppendLength,message.length)) + "<$i/$copies>"
            appended = appended+toAppendLength
        }

        return ans
        
    }
}
```