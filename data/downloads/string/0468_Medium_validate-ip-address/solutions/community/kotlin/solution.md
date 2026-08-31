# Simple kotlin solution

**Author:** peter3579e
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/4972513/](https://leetcode.com/problems/validate-ip-address/solutions/4972513/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N) N is every char in the queryIP
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    /*
        ip4 -> only digital and 3 dots
            0 - 255
            not leading zero -> 192.168.1.0 vaild
        
        ip6 ->  only 7 :
                1 <= xi.length <= 4
                contains digit and alpha
                a to f or A to F
            
    */
    fun validIPAddress(queryIP: String): String {

        if(queryIP.count { c: Char -> c == '.' } == 3) {
            if(checkIPV4(queryIP)) return "IPv4"
        } else if (queryIP.count { c: Char -> c == ':' } == 7)  {
            if(checkIPV6(queryIP)) return "IPv6"
        }


        return "Neither"
    }

    private fun checkIPV4(s: String): Boolean {
        val sList = s.split(".")
        for(string in sList) {
            if(string.isEmpty()) return false
            if(string[0] == '0' && string.length > 1) return false
            var tempNum = 0
            for(char in string) {
                if(!(char.isDigit())) return false
                tempNum = tempNum*10 + char.digitToInt()
            }
            if(!(tempNum in 0..255)) return false
        }
        return true
    }

    private fun checkIPV6(s: String): Boolean {
        val sList = s.split(":")
        for(string in sList) {
            if(string.length > 4 || string.length < 1) return false
            for(char in string) {
                if(!(char.isDigit()) && !(char.isLowerCase() || char.isUpperCase())) return false
                if(char.isLowerCase() && !(char - 'a' in 'a' - 'a'..'f' - 'a') ) return false
                if(char.isUpperCase() && !(char - 'A' in 'A' - 'A'..'F' - 'A')) return false
            }
        }
        return true
    }
}
```