# Dart Solution

**Author:** SinanJifry
**Votes:** 2
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/4803606/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/4803606/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> deckRevealedIncreasing(List<int> deck) {
    deck.sort((a, b) => b - a); // Sorting the deck in descending order
    var queue = [deck[0]]; // Create a new list with the first element of the sorted deck
    
    for (var i = 1; i < deck.length; i++) {
      queue.insert(0, queue.removeLast()); // Rotate the queue to the left
      queue.insert(0, deck[i]); // Add the next card from the sorted deck to the front of the queue
    }

    return queue;
  }
}

```