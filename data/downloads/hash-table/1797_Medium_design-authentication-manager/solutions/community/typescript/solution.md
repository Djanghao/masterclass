# (Beats 100% Runtime) Clean and readable AuthenticationManager

**Author:** wzlr
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/3393592/](https://leetcode.com/problems/design-authentication-manager/solutions/3393592/)

---

# Code
```
type TokenId = string;
type ExpiresAtTime = number;


class AuthenticationManager {
    private tokens = new Map<TokenId, ExpiresAtTime>([]);

    constructor(private readonly timeToLive: number) {}

    private isTokenOnRecord(tokenId: string) {
        return this.tokens.get(tokenId) !== undefined;
    }

    private hasTokenExpired(tokenId: string, currentTime: number): boolean {
        const expiresAtTime = this.tokens.get(tokenId);
        if (!expiresAtTime) throw new Error("Token doesn't exist");
        return expiresAtTime <= currentTime;
    }

    generate(tokenId: string, currentTime: number): void {
        this.tokens.set(tokenId, currentTime + this.timeToLive);
    }

    renew(tokenId: string, currentTime: number): void {
        if (!this.isTokenOnRecord(tokenId)) return;
        if (!this.hasTokenExpired(tokenId, currentTime)) {
            this.generate(tokenId, currentTime);
        }
    }

    countUnexpiredTokens(currentTime: number): number {
        const expiresAtTimes = Array.from(this.tokens.values());
        return expiresAtTimes.reduce((value, expiresAtTime) => expiresAtTime > currentTime ? value + 1 : value, 0);
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
```