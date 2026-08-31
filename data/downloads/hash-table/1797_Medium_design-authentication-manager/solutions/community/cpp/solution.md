# [C++] Clean Code, Single Map Solution Explained

**Author:** Ajna
**Votes:** 8
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/1118956/](https://leetcode.com/problems/design-authentication-manager/solutions/1118956/)

---

The problem is pretty straightforward, so the real challenge is just to get things working as efficiently, scalably and cleanly as possible.

I gave it a shot by first of all defining to class variables:
* `ttl` will store the supplied `timeToLive`;
* `tokens` is a `unordered_map` with the `{tokenId => expiryTime}` logic.

Our constructor will just set `ttl` - nothing more, nothing less.

`generate` is also pretty straightforward, adding a new key => value mapping to `tokens`, with the value (the expiry time) set to be `currentTime + ttl`.

`renew` starts to we a slightly more complex logic: we will first of all try to find if we have already a mapping for that specific `tokenId` and, only if we have it and its expiry time was below `currentTime`, update it to be `currentTime + ttl`.

Finally `countUnexpiredTokens` will trivially iterate through all the current elements of `tokens` and increase the counter `res` for each one that is not expired yet, right before returning `res` itself.

The code:

```cpp
class AuthenticationManager {
    int ttl;
    unordered_map<string, int> tokens;
public:
    AuthenticationManager(int timeToLive) {
        ttl = timeToLive;
    }
    
    void generate(string tokenId, int currentTime) {
        tokens[tokenId] = currentTime + ttl;
    }
    
    void renew(string tokenId, int currentTime) {
        auto tokenIt = tokens.find(tokenId);
        if (tokenIt != end(tokens) && tokenIt->second > currentTime) {
            tokenIt->second = currentTime + ttl;
        }
    }
    
    int countUnexpiredTokens(int currentTime) {
        int res = 0;
        for (auto token: tokens) {
            if (token.second > currentTime) res++;
        }
        return res;
    }
};
```

I tried to get marginally better performance by removing expired tokens, so to reduce the elements we are going to loop through when counting, with little to no gains:

```cpp
    void renew(string tokenId, int currentTime) {
        auto tokenIt = tokens.find(tokenId);
        if (tokenIt != end(tokens)) {
            // updating if still valid
            if (tokenIt->second > currentTime) tokenIt->second = currentTime + ttl;
            // erasing if expired
            else tokens.erase(tokenIt);
        }
    }
```