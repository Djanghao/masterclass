# Easy Kotlin approach

**Author:** user9872ly
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/4574398/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/4574398/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The initial approach I used was to use the formular directly.
However it was producing correct results for the initial cases the later ones were failing.
The possible reason was the large size of the data which was surpassing the max size.


# Approach
<!-- Describe your approach to solving the problem. -->
In my current approach I have broken down the equation so that we can compute various parts of it and save in some memory.

Let us describe it below:

- Considering Val(s[i])*p^i as one part we can write the equation as:
(S0 + S1 + S2 + S3 ....) Mod m
- Which can be written as : ( S0 Mod m + S1 Mod m + S2 Mod m ...) Mod m
- Thus: S(i) Mod m = (Val S[i] * p ^ i) Mod m
- Which can also be written as:  (Val S[i] Mod m * p^i Mod m) Mod m
- P^i Mod m - will always be same for index i thus we can pre calculate and keep it in an array. (Logic inspired by a solution here)
- P^i Mod m - Can also reuse the value of P^(i-1)Mod m, 
since P^i Mod m = (P * P^i-1)Mod m = (P Mod m * P^i-1 Mod m) Mod m
- P^i-1 Mod m - Is the value we calculated for the last index.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O (n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O (n)

# Code
```
class Solution {
    private val powModList = mutableListOf<Long>(1)

    fun subStrHash(s: String, power: Int, modulo: Int, k: Int, hashValue: Int): String {
        val arr = s.toCharArray()
        val hd = hashValue.toDouble()
        for(i in 1 until arr.size)
            powModList.add((powModList.last()* power%modulo)%modulo)
        //println(powModList.joinToString())

        for(i in 0 .. arr.size-k){
            val hash = getHash(arr, i, i+k-1, power.toDouble(), modulo.toDouble())
            //println(hash)
            if(hash==hd)
                return arr.copyOfRange(i,i+k).joinToString("")
        }
        return ""
    }

    private fun getHash(arr:CharArray, si:Int, ei:Int, p:Double, modulo: Double):Double{
        var sum = 0.0
        var j = 0
        for(i in si..ei) {
            sum += (valOf(arr[i])%modulo * powModList[j])// .also { println(it) }
            j++
        }
        sum %= modulo
        //println("Sum = $sum")
        return sum
    }

    private fun valOf(c:Char):Int = c.code-'a'.code+1
}
```