# Kotlin Solution: O(n) time and O(1) space {Easy to read code}

**Author:** m77o
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3769095/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3769095/)

---

# Intuition
Consider every letter having a value, 1 if vowel 0 if not. In this way you can consider having an array of cumulative sums of a window of k letters and then you just need to keep the max value. 

# Approach
for `"leetcode"` we have `len=8`, `k=3` so the cummulative vector will be of size `s.length-k+1=8-3+1=6`  

so you will have something like:

```
"lee" : c[0] = 2
"eet" : c[1] = c[0] - val(0) + val(3) -> 2 - 0 + 0 = 2
"etc" : c[2] = c[1] - val(1) + val(4) -> 2 - 1 + 0 = 1
"tco" : c[3] = c[2] - val(2) + val(5) -> 1 - 1 + 1 = 1
"cod" : c[4] = c[3] - val(3) + val(6) -> 1 - 0 + 0 = 1
"ode" : c[5] = c[4] - val(4) + val(7) -> 1 - 0 + 1 = 2
```

then you need to get the max.

You can notice that you can get the value of the next comulative value removing the value of the first item of the previos comulative value and adding the value of the last.

Note that the cumulative vector is just a concept, you don't really need to keep it in memory since the exercise ask you about the max not all of the values. 

so it can be simplified to the 

```
value = value - valueOf(s[i - k]) + valueOf(s[i])
maxValue = Math.max(value, maxValue)
```

And you keep updating the max overtime 

# Complexity
- Time complexity:
O(n) where n is the size of the input string, this is because we iterate over the string input only once

- Space complexity:
O(1) where n is the size of the input string, no extra space is required the max can be stored in a variable

# Code
```
class Solution {
    fun maxVowels(s: String, k: Int): Int {
        var value = 0
        for(i in 0 until k){
            value += valueOf(s[i])
        }
        var maxValue = value
        for(i in k until s.length){
            value = value - valueOf(s[i - k]) + valueOf(s[i])
            maxValue = Math.max(value, maxValue)
        }
        return maxValue
    }

    inline fun valueOf(c: Char): Int{
        return if(isVowel(c)) 1 else 0
    }

    inline fun isVowel(c: Char): Boolean {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
    }
}
```