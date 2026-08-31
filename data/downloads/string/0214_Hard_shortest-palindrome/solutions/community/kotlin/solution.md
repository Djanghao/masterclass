# Kotlin. Beats 100% (171 ms). Rabin Karp approach (rolling hash).

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/5811734/](https://leetcode.com/problems/shortest-palindrome/solutions/5811734/)

---

![image.png](./images/0.png)

# Code
```kotlin []
class Solution {
    fun shortestPalindrome(s: String): String {
        return s.substring(getPalindromeMax(s) + 1, s.length).reversed() + s
    }

    fun getPalindromeMax(s: String): Int {
        var power = 1
        var hash = 0
        var reverseHash = 0

        var max = -1
        for (i in 0 until s.length) {
            hash += power * (s[i] - '`')
            reverseHash = reverseHash * 31 + (s[i] - '`')
            if (reverseHash == hash) max = i
            power *= 31
        }
        return max
    }
}
```

# Approach

The first time I saw the Rabin-Karp algorithm for checking palindromes, it seemed like black magic to me. How can it work so efficiently?

In fact, there is no big difficulty in calculating the forward and reverse hash, if you analyze the approach using the example of ordinary numbers with a decimal number system.

Let's say we have the number 151. We need to check if it is a "palindrome". We can use 3 numbers for the calculation: "h", "rh" and "mult":

```
val s = "151"

var h = 0
var rh = 0
var mult = 1

for (c in s) {
    val digit = (c - '0')
    h = h + mult * digit
    mult *= 10
    rh = rh * 10 + digit
    println("h: $h")
    println("rh: $rh")
    println("mult: $mult")
}
```

```
h = 1
rh = 1
mult = 10 

h = 51
rh = 15
mult = 100

h = 151
rh = 151
mult = 1000
```

```
h == rh -> "151" is a palindrome
```

Lets repeat the same for the number 154:

```
val s = "154"

var h = 0
var rh = 0
var mult = 1

for (c in s) {
    val digit = (c - '0')
    h = h + mult * digit
    mult *= 10
    rh = rh * 10 + digit
    println("h: $h")
    println("rh: $rh")
    println("mult: $mult")
}
```

```
h: 1
rh: 1
mult: 10

h: 51
rh: 15
mult: 100

h: 451
rh: 154
mult: 1000
```

```
h != rh -> "154"
```

The number "154" is not a palindrome.

We can use the same technique to calculate the forward and reverse hash of strings.

As a multiplier, we need a prime number that will be greater than the number of characters in the alphabet. This can be either 29 or 31. I use 31.

It is worth noting that string comparison via hashes is performed with the assumption of the possibility of a collision, the probability of which increases with the number of strings compared. Therefore, the sliding hash method is used for a quick preliminary assessment before a full comparison of strings. But, fortunately, for the test cases of this task it was enough to limit ourselves to only comparing hashes.

The Rabin-Karp approach is often used by leetcoder "sav20011962" (https://leetcode.com/u/sav20011962/). You can look at his solutions, some of which are quite interesting:

https://leetcode.com/problems/palindrome-linked-list/solutions/4908740/one-pass-rabin-carp/

https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/4769119/rabin-karp-dp/

https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4750778/hashmap-rabin-karp/