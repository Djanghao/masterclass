# Clean Union Find solution

**Author:** panevskii
**Votes:** 1
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/3403873/](https://leetcode.com/problems/accounts-merge/solutions/3403873/)

---

# Code
```
class UnionFind {
    constructor(private map: Map<string, string> = new Map()) {}
    find(x: string): string {
        if (!this.map.has(x)) {
            this.map.set(x, x);
            return x;
        } 

        const parent = this.map.get(x)
        if (parent !== x) {
            this.map.set(x, this.find(parent))
        }

        return this.map.get(x);
    }

       union(u: string, v: string): void {
        this.map.set(this.find(u), this.find(v));   
    }
}

function accountsMerge(accounts: string[][]): string[][] {
    const uf = new UnionFind();

    const emailToName: Map<string, string> = new Map();
    const emailSet = new Set<string>();
    for (const [name, ...emails] of accounts) {
        for (const email of emails) {
            emailSet.add(email);
            emailToName.set(email, name);
            uf.union(emails[0], email);
        }
    }

    const emailGrpoups: Map<string, string[]> = new Map();
    for (const email of emailSet) {
        const rootEmail = uf.find(email)

        if (!emailGrpoups.has(rootEmail)) {
            emailGrpoups.set(rootEmail, [email])
        } else {
            emailGrpoups.get(rootEmail).push(email);
        }
    }

    const result: string[][]  = [];
    for (const [key, emails] of emailGrpoups) {
        emails.sort();
        result.push([emailToName.get(emails[0]), ...emails]);
    }

    return result;
}
```