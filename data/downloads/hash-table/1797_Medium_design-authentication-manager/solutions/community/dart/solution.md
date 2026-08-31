# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/4124853/](https://leetcode.com/problems/design-authentication-manager/solutions/4124853/)

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
class AuthenticationManager {
    Map m = {};
    var ttl = 0;
    AuthenticationManager(int timeToLive) {
        ttl = timeToLive;
    }
    
    void generate(String tokenId, int currentTime) {
        m[tokenId] = currentTime;
    }
    
    void renew(String tokenId, int currentTime) {
        final diff = currentTime - ttl;
        if (m.containsKey(tokenId) && m[tokenId] > diff) {
            m[tokenId] = currentTime;
        }
    }
    
    int countUnexpiredTokens(int currentTime) {
        var c = 0;   
        final diff = currentTime - ttl;    
        for (var key in m.keys.toList()) {                  
            if (m[key] > diff) {
                c += 1;
            }
        }

        return c;
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * AuthenticationManager obj = AuthenticationManager(timeToLive);
 * obj.generate(tokenId,currentTime);
 * obj.renew(tokenId,currentTime);
 * int param3 = obj.countUnexpiredTokens(currentTime);
 */
```