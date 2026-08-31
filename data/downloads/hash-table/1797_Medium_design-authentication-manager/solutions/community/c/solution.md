# ✅Short & Easy w/ Explanation | Clean code with Comments

**Author:** archit91
**Votes:** 15
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/1118899/](https://leetcode.com/problems/design-authentication-manager/solutions/1118899/)

---

```
class AuthenticationManager {
public:
	// used for mapping tokenId with generation time
    unordered_map<string, int >mp;
    int ttl;
    AuthenticationManager(int timeToLive) : ttl(timeToLive){}
    	
    void generate(string tokenId, int currentTime) {
		// store tokenId mapped with time of generation
        mp[tokenId] = currentTime;
    }
    
    void renew(string tokenId, int currentTime) {
		// tokenId must be already created and time since generation should be less than TTL
        if(mp.count(tokenId) && currentTime - mp[tokenId] < ttl)
            mp[tokenId] = currentTime; // renew if condition is satisfied
    }
    
    int countUnexpiredTokens(int currentTime) {
        int cnt = 0;
        for(auto& token:mp)
			// count all tokens which time since generation less than TTL
            if(currentTime - token.second < ttl) cnt++;
        return cnt;
    }
};
```

**Time Complexity** : **`O(1)`** for generation and renewal and **`O(N)`** for counting unexpired tokens, where `N` is the total number of generated tokens.

**Space Complexity** : **`O(N)`**


----------
----------