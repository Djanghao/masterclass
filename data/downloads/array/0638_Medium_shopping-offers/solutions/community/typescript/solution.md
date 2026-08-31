# TypeScript, DFS using memoization(with comments)

**Author:** horrible_leetcoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/5744256/](https://leetcode.com/problems/shopping-offers/solutions/5744256/)

---


# Code
```typescript []
function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
    const n = price.length;
    
    // Helper function to calculate total price without special offers
    const getTotalPrice = (needs: number[]) => {
        return needs.reduce((acc, curr, idx) => acc + curr * price[idx], 0);
    };

    // Memoization map: stores results for states that have already been computed
    const memo = new Map<string, number>();

    // DFS function to explore each offer recursively
    function dfs(needs: number[]): number {
        // Convert the current state of needs to a string (to use as a memo key)
        const key = needs.toString();
        
        // Check if this state has already been computed
        if (memo.has(key)) {
            return memo.get(key)!;
        }

        // Base case: calculate the cost without using any offers
        let minCost = getTotalPrice(needs);

        // Try using each special offer
        for (let offer of special) {
            // Check if the offer is valid (i.e., can be applied based on current needs)
            const newNeeds = [...needs];
            let isValid = true;

            for (let i = 0; i < n; i++) {
                if (newNeeds[i] < offer[i]) {
                    isValid = false;
                    break;
                }
                newNeeds[i] -= offer[i];
            }

            // If the offer is valid, explore the new state
            if (isValid) {
                minCost = Math.min(minCost, offer[n] + dfs(newNeeds));
            }
        }

        // Store the result for the current state of `needs` in the memo
        memo.set(key, minCost);
        return minCost;
    }

    // Start the DFS from the initial state
    return dfs(needs);
}

```