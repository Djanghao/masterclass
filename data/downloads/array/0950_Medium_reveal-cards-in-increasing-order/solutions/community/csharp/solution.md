# C# Solution for Reveal Cards In Increasing Order Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5003244/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5003244/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to use a queue to keep track of the indices of the result array. By simulating the card revealing process, we assign cards to the corresponding indices in the result array while ensuring that the order is maintained.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sort the input deck array to ensure the cards are in increasing order.
2.	Create a queue containing the indices of the result array.
3.	Iterate through the sorted deck array, dequeue an index from the queue, and assign the current card to that index in the result array.
4.	If there are still cards remaining in the deck, enqueue the next index to simulate moving cards to the bottom of the deck.
5.	Finally, return the resulting array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(NlogN) due to the sorting step, where N is the number of cards in the deck. The iteration through the deck array and the operations on the queue take linear time, so they don\u2019t contribute significantly to the overall complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(N), where N is the number of cards in the deck. This is due to the extra space used by the queue and the resulting array.

# Code
```
public class Solution {
    public int[] DeckRevealedIncreasing(int[] deck) {
        Array.Sort(deck);
        Queue<int> indexQueue = new Queue<int>(Enumerable.Range(0, deck.Length));
        int[] result = new int[deck.Length];
        
        foreach (int card in deck) {
            result[indexQueue.Dequeue()] = card;
            if (indexQueue.Count > 0) {
                indexQueue.Enqueue(indexQueue.Dequeue());
            }
        }
        
        return result;
    }
}
```