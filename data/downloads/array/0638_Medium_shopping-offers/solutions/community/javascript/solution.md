# TypeScript - DP Top-Down approach + Memoization

**Author:** tea_for_two
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/5729358/](https://leetcode.com/problems/shopping-offers/solutions/5729358/)

---

# Intuition
This is similar to the [LC-70.Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description) problem where:
- The number of stairs is the `needs`
- The possible steps is the `specials`

# Approach
Top-Down approach.
At each step, we can either pay the full price or apply a special, when possible.

# Complexity
- Time complexity: O(|Specials| * |Needs| * MAX(Needs))
   - The worst case is when specials have 1 item only. 
   - Thus, at each step, we reduce the needs only by 1 item.

- Space complexity: O(MAX(Needs) * |Needs|)

# Code
```typescript []
function shoppingOffers(price: number[], specials: number[][], needs: number[]): number {
    return topDown(price, specials, needs, new Map<number, number>())
}

function topDown(price: number[], specials: number[][], needs: number[], memo: Map<number, number>): number {
    const mask = getMask(needs)

    if (!mask) return 0
    else if (memo.has(mask)) return memo.get(mask)

    let lowestPrice = applyFullPrice(price, needs)

    for(const s of specials) {
        if (!canIApplySpecial(s, needs)) continue

        const remainingNeeds = applySpecial(s, needs)
        const invoice = s.at(-1) + topDown(price, specials, remainingNeeds, memo)

        lowestPrice = Math.min(lowestPrice, invoice)
    }

    memo.set(mask, lowestPrice)

    return lowestPrice
}

function getMask(needs: number[]): number {
    return needs.reduce((m, val) => m * ((val === 10) ? 100 : 10) + val, 0)
}

function applyFullPrice(price: number[], needs: number[]): number {
    let fullPrice = 0
    for(let i = 0; i < needs.length; i++) fullPrice += needs[i] * price[i]
    return fullPrice
}

function canIApplySpecial(special: number[], needs: number[]): boolean {
    for(let i = 0; i < needs.length; i++) if (special[i] > needs[i]) return false
    return true
}

function applySpecial(special: number[], needs: number[]): number[] {
    let remainingNeeds = []
    for(let i = 0; i < needs.length; i++) remainingNeeds.push(needs[i]-special[i])
    return remainingNeeds
}
```