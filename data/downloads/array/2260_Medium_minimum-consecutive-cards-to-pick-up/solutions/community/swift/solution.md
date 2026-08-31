# Swift O(n) time O(n) space using a Hashmap

**Author:** colin6575
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4615559/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4615559/)

---

# Intuition
Use a hashmap to keep track the last time you saw each card.
When a duplicate is found, calculate the subArray length and update the answer

# Complexity
- Time complexity:
O(n) time as we iterate through the cards once

- Space complexity:
O(n) as in the worst case where all cards are unique, we must store them all within the hashmap

# Code
```
class Solution {
  func minimumCardPickup(_ cards: [Int]) -> Int {
    // For each card we draw, we want to keep track of the latest card that was picked up
    var latestCardOccurence = [Int : Int]()
    var solution = -1
    
    for (index, card) in cards.enumerated() {
      if latestCardOccurence[card] == nil {
        latestCardOccurence[card] = index
      } else {
        // When we get a match, we calculate how many cards needed to be picked up
        let subArray = (index - latestCardOccurence[card]!) + 1
        if solution == -1 {
          solution = subArray
        } else {
          solution = min(solution, subArray)
        }
        // Updated the previous index with the current one as the next repeat may need
        // less consecutive cards
        latestCardOccurence[card] = index
      }
    }
    return solution
  }
}
```