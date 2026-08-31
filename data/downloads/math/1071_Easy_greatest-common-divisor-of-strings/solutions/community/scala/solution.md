# Cool scala/java solution

**Author:** MrPrecrastinatr
**Votes:** 1
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/4161186/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/4161186/)

---

# Code
```
//Java
class Solution {
    private int gcdOfInts(int a, int b) {
        return b == 0 ? a : gcdOfInts(b, a % b);
    }
    public String gcdOfStrings(String str1, String str2) {
        // logic if str1 + str2 == str2 +str1, they have a gcd, else ""
        // gcd formula:
        // if(b == 0) a else gcd(b, a % b); // shorter cooler
        // ORRRR
        // if(a == b) return a;
        // else if (a > b) return gcdOfInts(a-b, b);
        // else return gcdOfInts(a, b - a);
        
        if((str1 + str2).equals(str2 + str1)) { // have a gcd
            return str1.substring(0, gcdOfInts(str1.length(), str2.length()));
        }
        else return "";
    }
}
```

```
//Scala
object Solution {
    def gcd(a: Int,b: Int): Int = {
       if(b ==0) a else gcd(b, a%b)
    }

    def gcdOfStrings(str1: String, str2: String): String = {
        if (str1 ++ str2 == str2 ++ str1)
            return str1.substring(0, gcd(str1.length, str2.length))
        else return "";
    }
}
```