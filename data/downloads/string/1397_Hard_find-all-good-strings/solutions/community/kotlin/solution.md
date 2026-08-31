# kotlin dp+kmp O(n*E) time and storage, both iterative and recursive

**Author:** gurumewell
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/1992373/](https://leetcode.com/problems/find-all-good-strings/solutions/1992373/)

---

```
class Solution_iterative {
    fun findGoodStrings(n: Int, s1: String, s2: String, evil: String): Int {
        val base = 1_000_000_000 + 7
        val E = evil.length
        val dp = Array(n+1) { IntArray(E+1) { 0 } }

        /**
         * kmpArray: kmp pattern prefix array for evil: [i] is max length of prefix equals to suffix
         * of substring evil.slice(0 .. i)
         */
        val kmpArray = IntArray(E+1) { 0 } // 1-indexed
        var q = 0
        for (i in 2 .. E) {
            while (q > 0 && evil[i-1] != evil[q]) { // evil is 0-indexed
                q = kmpArray[q]
            }
            if (evil[i-1] == evil[q]) {
                q++
            }
            kmpArray[i] = q
        }

        fun containEvil(s: String): Boolean { // this is the classic KMP matcher
            var res = false
            var q = 0
            for (i in 0 .. s.length-1) {
                while (q > 0 && s[i] != evil[q]) {
                    q = kmpArray[q]
                }
                if (s[i] == evil[q]) q++
                if (q >= E) return true
            }
            return res
        }

        fun getJ(j: Int, c: Char): Int {
            /**
             * Given the prev string's suffix matches j-prefix evil, what is the largest match if adding char c to
             * the end of the prev string. That is, it returns the max match of the suffix of string prev+c with evil.
             * We don't need to know prev just j is enough.
             */
            var res = j
            while (res > 0 && c != evil[res]) {
                res = kmpArray[res]
            }
            if (c == evil[res]) {
                res++
            }
            return res
        }

        fun precalcDP() {
            /**
             * dp[m][j] = number of strings of length m which does not have evil.substring(j) at the beginning and
             *  does not contain evil as substring
             */
            for (m in 0 .. n) {
                for (j in 0 .. E-1) {
                    dp[m][j] = if (m == 0) {
                        1
                    } else {
                        var res = 0
                        for (c in 'a' .. 'z') {
                            val newJ = getJ(j, c)
                            res = (res + dp[m-1][newJ]) % base
                        }
                        res
                    }
                }
            }
        }

        precalcDP()

        fun goodStrings(upperBound: String): Int {
            var jPath = 0
            var res = 0
            var pathTerminated = false
            for (i in 0 .. n-1) {
                if (i > 0) {
                    jPath = getJ(jPath, upperBound[i-1])
                }

                if (jPath >= E) pathTerminated = true
                if (pathTerminated) {
                    //println("i: $i; pathTerminated: $pathTerminated")
                    break
                }
                for (c in 'a' .. upperBound[i]-1) { // exclude upper bound
                    val j = getJ(jPath, c)
                    val m = n - i
                    res = (res + dp[m-1][j]) % base
                }
            }
            if (!pathTerminated) { // reached here because we traversed all string upperBound
                jPath = getJ(jPath, upperBound[n-1])
                if (jPath < E) {
                    res = (res + 1) % base
                }
            }
            return res
        }

        val res1 = goodStrings(s1)
        val s1ContainsEvil = containEvil(s1)
        val res2 = goodStrings(s2)
        //println("res1: $res1; res2: $res2; s1ContainsEvil: $s1ContainsEvil")
        var res = (base + res2 - res1 + if (s1ContainsEvil) 0 else 1) % base // need to add base to avoid negative res

        return res
    }
}

class Solution_recursive {
    fun findGoodStrings(n: Int, s1: String, s2: String, evil: String): Int {
        val base = 1_000_000_000 + 7
        val E = evil.length
        val dp = Array(n+1) { IntArray(E) { -1 } }

        /**
         * kmpArray: kmp pattern prefix array for evil: [i] is max length of prefix equals to suffix
         * of substring evil.slice(0 .. i)
         */
        val kmpArray = IntArray(E+1) { 0 } // 1-indexed
        var q = 0
        for (i in 2 .. E) {
            while (q > 0 && evil[i-1] != evil[q]) { // evil is 0-indexed
                q = kmpArray[q]
            }
            if (evil[i-1] == evil[q]) {
                q++
            }
            kmpArray[i] = q
        }

        fun containEvil(s: String): Boolean { // this is the classic KMP matcher
            var res = false
            var q = 0
            for (i in 0 .. s.length-1) {
                while (q > 0 && s[i] != evil[q]) {
                    q = kmpArray[q]
                }
                if (s[i] == evil[q]) q++
                if (q >= E) return true
            }
            return res
        }

        fun getJ(j: Int, c: Char): Int {
            /**
             * Given the prev string's suffix matches j-prefix evil, what is the largest match if adding char c to
             * the end of the prev string. That is, it returns the max match of the suffix of string prev+c with evil.
             * We don't need to know prev just j is enough.
             */
            var res = j
            while (res > 0 && c != evil[res]) {
                res = kmpArray[res]
            }
            if (c == evil[res]) {
                res++
            }
            return res
        }

        fun recurse(m: Int, j: Int): Int {
            /**
             * return number of strings of length m which cannot have evil.substring(j) at the beginning and
             *  cannot contain evil as substring
             * Note: this fun does not depend on s1 or s2 so it can be used to precalc dp if so desired.
             * x no need Note: if we want an iteractive algo to calc dp, for each m, we sort newJ(c), c in 'a' .. 'z'
             */
            if (j >= E) return 0
            if (m <= 0) return 1
            if (dp[m][j] != -1) return dp[m][j]

            //// first letter
            var res = 0
            for (c in 'a' .. 'z') {
                val newJ = getJ(j, c)
                res = (res + recurse(m-1, newJ)) % base
            }
            dp[m][j] = res
            return dp[m][j]
        }

        fun goodStrings(upperBound: String): Int {
            var jPath = 0
            var res = 0
            var pathTerminated = false
            for (i in 0 .. n-1) {
                if (i > 0) {
                    jPath = getJ(jPath, upperBound[i-1])
                }

                if (jPath >= E) pathTerminated = true
                if (pathTerminated) {
                    //println("i: $i; pathTerminated: $pathTerminated")
                    break
                }

                for (c in 'a' .. upperBound[i]-1) { // exclude upper bound
                    val j = getJ(jPath, c)
                    val m = n - i
                    res = (res + recurse(m-1, j)) % base
                }
            }
            if (!pathTerminated) { // reached here because we traversed all string upperBound
                jPath = getJ(jPath, upperBound[n-1])
                if (jPath < E) {
                    res = (res + 1) % base
                }
            }
            return res
        }

        val res1 = goodStrings(s1)
        val s1ContainsEvil = containEvil(s1)
        val res2 = goodStrings(s2)
        //println("res1: $res1; res2: $res2; s1ContainsEvil: $s1ContainsEvil")
        var res = (base + res2 - res1 + if (s1ContainsEvil) 0 else 1) % base // need to add base to avoid negative res

        return res
    }
}