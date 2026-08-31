# Easy Scala Two Pointer Solution .

**Author:** HARSHIDAS_21
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/5247315/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/5247315/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def reverseVowels(s: String): String = {
        val isVowel=Set('a','e','i','o','u').flatMap(i=>   Set(i,i.toUpper))
        var start=0
        var end=s.length-1
        val str=s.toArray

        while   (start<end)
        {
            if   (!isVowel(str(start)))   start = start+1
            else if   (!isVowel(str(end)))   end = end-1

            else 
            {
                val hlpr=str(start)
                str(start)=str(end)
                str(end)=hlpr
                start=start+1
                end=end-1
            }
        }
        str.mkString
    }
}
```