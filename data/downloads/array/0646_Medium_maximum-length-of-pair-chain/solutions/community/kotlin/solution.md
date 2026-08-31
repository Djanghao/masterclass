# [Kotlin] Beat 100% with simple DP and clean code

**Author:** leetcode89374
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/665401/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/665401/)

---

``` 
fun findLongestChain(pairs: Array<IntArray>): Int {
        
        if (pairs.isEmpty() || pairs.size == 1) return pairs.size

        Arrays.sort(pairs) { a , b ->
            val res = a[0].compareTo(b[0])
            if (res == 0) {
                a[1].compareTo(b[1])
            } else res
        }

        val memo = IntArray(pairs.size) { 1 }
        var largest = 1

        for (i in 1 until pairs.size) {
            for (j in 0 until i) {

                if (pairs[j][1] < pairs[i][0]) {
                    memo[i] = Math.max(memo[i],memo[j] + 1)
                    largest = largest.coerceAtLeast(memo[j])
                }
            }
        }

        return memo[memo.size-1]
    }