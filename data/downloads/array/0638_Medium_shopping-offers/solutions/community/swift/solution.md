# Currently the only (thus fastest) Swift solution using DFS and Memoization [AI assisted]

**Author:** lucasvandongen
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/5134902/](https://leetcode.com/problems/shopping-offers/solutions/5134902/)

---

# Intuition
I knew that this solution would require me to do do all permutations over both the single items and special offers at every step. I guessed that it could be possible the Medium level question might not need memoization to solve the problem in time.

If it would I could add that later without too much hassle.

So DFS or or DFS+memo

# Approach
There are a few sub-problems and I went over them one by one:

- The most efficient (and only) solution when buying single items first. This can easily be validated against the first two test cases by counting manually.
- Adding the combos into the mix, finding the most optimal solution evaluating both of them
- Adding memoization

I got stuck on an edge case somewhere near the end (45 out 50 or something). By that time I spent already too much time on it and accepted defeat.

ChatGPT generated a solution for me that was smaller and more efficient, but took the exact same approach. I never figured out what the one edge cases was that tripped me up.

# Complexity

- Time complexity:
$$O(m \	imes n \	imes d^n)$$

- Space complexity:
$$O(d^n + \	ext{sum(needs)})$$



# Code
```
class Solution {
    func shoppingOffers(_ price: [Int], _ special: [[Int]], _ needs: [Int]) -> Int {
        var memo = [String: Int]()
        
        func dfs(_ currentNeeds: [Int]) -> Int {
            let key = currentNeeds.map { String($0) }.joined(separator: ",")
            if let cached = memo[key] {
                return cached
            }
            if currentNeeds.allSatisfy({ $0 == 0 }) {
                return 0
            }
            
            // Calculate the cost by buying items without any special offers
            var cost = zip(currentNeeds, price).reduce(0) { (result, pair) in
                result + pair.0 * pair.1
            }
            
            // Try every special offer and choose the one with the minimum cost
            specialLoop: for offer in special {
                var newNeeds = currentNeeds
                for i in 0..<price.count {
                    if newNeeds[i] < offer[i] {
                        continue specialLoop
                    }
                    newNeeds[i] -= offer[i]
                }
                cost = min(cost, offer.last! + dfs(newNeeds))
            }
            
            memo[key] = cost
            return cost
        }
        
        return dfs(needs)
    }
}
```