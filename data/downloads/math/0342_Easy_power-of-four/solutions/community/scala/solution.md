# 10 solutions

**Author:** malovig
**Votes:** 2
**Link:** [https://leetcode.com/problems/power-of-four/solutions/3268338/](https://leetcode.com/problems/power-of-four/solutions/3268338/)

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
    def isPowerOfFour(n: Int): Boolean = {
        //1 dummy solution
        var res: BigInt = 1
        val arr = new ArrayBuffer[BigInt]
        for (i<-1 to 50) {
            res = res * 4
            arr.addOne(res)
        }
        (n > 0 ) && (arr.contains(n) || n == 1)

        //1.1 dummy solution without list generation
        val list = List("1","4", "16", "64", "256", "1024", "4096", "16384", "65536", "262144", "1048576", "4194304", "16777216", "67108864", "268435456", "1073741824", "4294967296", "17179869184", "68719476736", "274877906944", "1099511627776", "4398046511104", "17592186044416", "70368744177664", "281474976710656", "1125899906842624", "4503599627370496", "18014398509481984", "72057594037927936", "288230376151711744", "1152921504606846976", "4611686018427387904", "18446744073709551616", "73786976294838206464", "295147905179352825856", "1180591620717411303424", "4722366482869645213696", "18889465931478580854784", "75557863725914323419136", "302231454903657293676544", "1208925819614629174706176", "4835703278458516698824704", "19342813113834066795298816", "77371252455336267181195264", "309485009821345068724781056", "1237940039285380274899124224", "4951760157141521099596496896", "19807040628566084398385987584", "79228162514264337593543950336", "316912650057057350374175801344", "1267650600228229401496703205376")
        list.map(BigInt(_)).contains(n)

        //2 binaryString
        n.toBinaryString.count(_ == '1') == 1 && n.toBinaryString.length%2 == 1

        //3 bitwise manipulation
        BigInt(n).bitCount == 1 && BigInt(n).bitLength%2 == 1

        //4 bitwise manipulation 2
        n > 0 && (n & (n - 1)) == 0 && (n & 0x55555555) != 0

        //4.1 another bitwise 3
        n > 0 && ((n & (n - 1)) == 0) && (n & 0xaaaaaaaa) == 0

        //5 math solution with bitwise check
        n > 0 && ((n & (n - 1)) == 0) && (n-1) % 3==0

        //6 java style parsing with regexp
        Integer.toString(n, 4).matches("10*")

        //7 log solution (is this cheat or not?)
        (math.log(n) / math.log(4)) % 1 == 0

        //8 recursive solution
        n match {
            case 1 => true
            case x if x<=0 || x%4 != 0 => false
            case _ => isPowerOfFour(n/4)
        }
    }
}
```