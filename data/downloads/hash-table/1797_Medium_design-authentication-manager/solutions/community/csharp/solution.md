# C# simple solution using Dictionary only

**Author:** Pradeep_2000
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/6068446/](https://leetcode.com/problems/design-authentication-manager/solutions/6068446/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 36 ms, Beats 73.68%

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: Memory 125.26 MB, Beats 55.56%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class AuthenticationManager {

    public Dictionary<string,int> tokens;
    public int expiry=0;

    public AuthenticationManager(int timeToLive) {
        tokens = new Dictionary<string,int>();
        expiry = timeToLive;
    }
    
    public void Generate(string tokenId, int currentTime) {
        tokens.Add(tokenId, expiry+currentTime);
    }
    
    public void Renew(string tokenId, int currentTime) {
        if(tokens.ContainsKey(tokenId)){
            if(tokens[tokenId] > currentTime){
                tokens[tokenId] = expiry + currentTime;
            }
        }
    }
    
    public int CountUnexpiredTokens(int currentTime) {
        int unexptokens=0;
        foreach(var elm in tokens){
            if(elm.Value > currentTime){
                unexptokens++;
            }
        }
        return unexptokens;
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * AuthenticationManager obj = new AuthenticationManager(timeToLive);
 * obj.Generate(tokenId,currentTime);
 * obj.Renew(tokenId,currentTime);
 * int param_3 = obj.CountUnexpiredTokens(currentTime);
 */
```