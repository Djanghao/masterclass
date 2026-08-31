# Kotlin - using sequences!

**Author:** jamesdiffley28
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-and-say/solutions/835293/](https://leetcode.com/problems/count-and-say/solutions/835293/)

---

Kotlin sequences really showing their beauty on this task :)
We just need to give the sequence:
* a place to begin - the string "1"
* a rule to generate the next element, given the previous one

For our successor function (`::next`), given an input string `s`, we can loop over `s`, counting up until the character changes, then adding the `count` and current character to our result `res`, repeating until we reach the end of the string. We then simply return `res`. Job done!
```
    fun countAndSay(n: Int): String {
        // our function to generate the next term of the sequence
        fun next(s: String): String {

            var res = ""
            var count: Int
            var i = 0
            while (i<s.length) {
                count = 1
                while (i+1<s.length && s[i]==s[i+1]) {
                    i++
                    count++
                }
                res += "$count${s[i++]}"
            }
            return res
        }
        // create the sequence, starting with "1", return the nth element
        return generateSequence("1", ::next).take(n).last()
        
    }