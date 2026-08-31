# ✅ 24ms | Beats 100% | Swift optimised

**Author:** vasil_erema
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5949028/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/5949028/)

---

# Intuition
We need to be greedy. Heroes will only fight(compared) with monster if weaker heroes could not defeat it. If we sort both monster and heroes we can go through both list simulatneously and collec the coins of weaker monsters in threasury. So stronger heroes will get coins for monsters defeted by weaker heroes + monster they defet themselves.

# Approach
### First prepare data
If we sort heroes or monster we would loose access to original order which is needed to reproduce the answer and pick correct coins for each monster. So copy only indices and sort them which would use require $$O(n + m)$$ space and $$O(n * logn + m * logm)$$ time.

### Then compare power and fulfill result
Iterate starting from smallest level of heroes and monsters.
- If the monster has higher level than the hero
    - bring the next hero
    - the current hero gets treasures from all weaker monsters
- If the hero has higher level
    - bring the next monster
    - the current monster puts its coins in the treasury
- If there are more heroes left and no more stronger monsters
    - each of these heroes gets max coins

In this step we go through $$O(n + m)$$ steps, and $$O(1)$$ memory is taken.

# Complexity
- Time complexity: $$O(n * logn + m * logm)$$
- Space complexity: $$O(n + m)$$

# Code
```swift []
class Solution {
    func maximumCoins(_ heroes: [Int], _ monsters: [Int], _ coins: [Int]) -> [Int] {
        // heroesIndices.sorted by level
        let hIndicesSorted = heroes.indices.sorted(by: { heroes[$0] < heroes[$1] })
        // monsterIndexes.sorted by level
        let mIndicesSorted = monsters.indices.sorted(by: { monsters[$0] < monsters[$1] })
        // go through 2 list together and keep the previous coins
        var hii = 0, mii = 0, treasure = 0
        var result = Array(repeating: 0, count: heroes.count)
        while hii < hIndicesSorted.count, mii < mIndicesSorted.count {
            let hi = hIndicesSorted[hii] // hero index can be used for result too
            let hero = heroes[hi]
            let mi = mIndicesSorted[mii] // monster index can be used for coins too
            let monster = monsters[mi]
            if hero >= monster {
                // hero defets the monster and waits for bigger level
                treasure += coins[mi]
                // next monster has bigger level
                mii += 1
            } else {
                // hero fail to defet monster and takes coins only form previous monsters
                result[hi] = treasure
                // next hero has bigger level
                hii += 1
            }
        }
        // if mii < mIndicesSorted.count these monster won't be defeted
        while hii < hIndicesSorted.count {
            // these heroes are more powerfull than any monster and get max coins
            result[hIndicesSorted[hii]] = treasure
            hii += 1
        }
        return result
    }
}

```