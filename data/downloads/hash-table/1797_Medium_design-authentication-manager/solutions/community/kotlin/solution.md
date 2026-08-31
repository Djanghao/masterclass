# Binary search based on timing for counting

**Author:** pegasus_1
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/5178600/](https://leetcode.com/problems/design-authentication-manager/solutions/5178600/)

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
class AuthenticationManager(var timeToLive: Int) {

    var map = mutableMapOf<String, Token>()
    var list = mutableListOf<Token>()

    class Token(var startTime: Int,var endTime: Int)

    fun generate(tokenId: String, currentTime: Int) {
       val token = Token(currentTime, currentTime + timeToLive) 
       map[tokenId] = token
       list.add(token)
    }

    fun renew(tokenId: String, currentTime: Int) {
        if(map.containsKey(tokenId)) {
            val token = map[tokenId]!!
            if(currentTime < token.endTime) {
                list.remove(token)
                token.startTime = currentTime
                token.endTime = currentTime + timeToLive
                map[tokenId] = token
                list.add(token)
            }
        }
    }

    fun countUnexpiredTokens(currentTime: Int): Int {
       var idx1 = binarySearch(currentTime) 
       var idx2 = binarySearchHigh(currentTime - timeToLive)
       return idx1 - idx2-1;
    }

    fun binarySearch(currentTime: Int): Int {
        var l = 0
        var r = list.size-1
        while(l <= r) {
            var mid = l + (r-l)/2
            var token = list[mid]
            if(token.startTime == currentTime) return mid
            if(token.startTime < currentTime) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return l 
    }

    fun binarySearchHigh(currentTime: Int): Int {
        var l = 0
        var r = list.size-1
        while(l <= r) {
            var mid = l + (r-l)/2
            var token = list[mid]
            if(token.startTime == currentTime) return mid
            if(token.startTime < currentTime) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return r
    }

}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
```