# JavaScript Union Find

**Author:** anna_F
**Votes:** 2
**Link:** [https://leetcode.com/problems/process-restricted-friend-requests/solutions/1941231/](https://leetcode.com/problems/process-restricted-friend-requests/solutions/1941231/)

---

This solution uses a boilerplate for DSU that can be reused for other problems. Approach is based on other solutions posted on the discussion section. Please let me know if you have improvements or comments on time complexity.

**Friend request function:**
	1. Add nodes 0 to n - 1 to DSU instance
	2. For each friend request [f1, f2], check each restriction pair [e1, e2]. 
	3. Perform find on each of the four persons (f1, f2, e1, e2). 
	4. If unionFind(f1) = unionFind(e1) and unionFind(f2) = unionFind(e2) OR viceversa, request is not valid.

**Time complexity** 
I believe is O(N + MK). Step 1 takes O(N) where N is number of friends. Steps 2 - 4 take O(MK) where M are number of requests and K are number of restrictions.
DSU finds and unions take an amortized time of O(1) because we are using path compression and union by rank.


```
/*
DSU Class Template
*/
class DSU {
    constructor() {
        this.parents = new Map();
        this.rank = new Map();
    }
    
    add(x) {
        this.parents.set(x, x);
        this.rank.set(x, 0);
    }
    
    find(x) {
        const parent = this.parents.get(x);
        if (parent === x) return x;
        const setParent = this.find(parent);
        this.parents.set(x, setParent);
        return setParent;
    }
    
    union(x, y) {
        const xParent = this.find(x), yParent = this.find(y);
        const xRank = this.rank.get(xParent), yRank = this.rank.get(yParent);
        if (xParent === yParent) return;
        if (xRank > yRank) {
            this.parents.set(yParent, xParent);
        } else if (yRank > xRank) {
            this.parents.set(xParent, yParent);
        } else {
            this.parents.set(xParent, yParent);
            this.rank.set(yParent, yRank + 1);
        }   
    }
}

/*
Friend Requests
*/
var friendRequests = function(n, restrictions, requests) {
    const dsu = new DSU(), result = [];
    for (let i = 0; i < n; i++) dsu.add(i);
    
    for (let [friend1, friend2] of requests) {
        const parent1 = dsu.find(friend1), parent2 = dsu.find(friend2);
        let friendshipPossible = true;
        for (let [enemy1, enemy2] of restrictions) {
            const enemyParent1 = dsu.find(enemy1), enemyParent2 = dsu.find(enemy2);
            const condition1 = (enemyParent1 === parent1 && enemyParent2 === parent2);
            const condition2 = (enemyParent1 === parent2 && enemyParent2 === parent1);
            if (condition1 || condition2) {
                friendshipPossible = false;
                break;
            }
        }
        if (friendshipPossible) dsu.union(friend1, friend2);
        result.push(friendshipPossible);
    }
    return result;
};
```