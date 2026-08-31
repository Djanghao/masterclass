# C# Solution for Hand of Straights Problem

**Author:** Aman_Raj_Sinha
**Votes:** 7
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5266500/](https://leetcode.com/problems/hand-of-straights/solutions/5266500/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The main intuition behind this solution is to leverage sorting and frequency counting to efficiently determine if consecutive groups of cards can be formed. By sorting the cards, we can easily check for consecutive sequences, and using a dictionary to count card frequencies allows us to manage and decrement the card counts as we form groups.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initial Check: Verify if the total number of cards is divisible by groupSize. If not, return false since it is impossible to form the required groups.
2.	Sort the Array: Sorting the hand array helps in easily checking for consecutive sequences.
3.	Count Frequencies: Use a Dictionary<int, int> to store the frequency of each card.
4.	Form Groups:
	\u2022	Iterate through the sorted hand array.
	\u2022	For each card, attempt to form a group starting from that card and spanning groupSize consecutive cards.
	\u2022	If any card needed to form a group is not available in the required quantity, return false.
	\u2022	Decrement the count of each card used in forming the group. If a card\u2019s count drops to zero, it effectively gets ignored in subsequent iterations.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Sorting: Sorting the array takes O(nlog n), where n is the number of cards.
\u2022	Counting Frequencies: Populating the dictionary takes O(n) time.
\u2022	Forming Groups: Each card is processed once, and for each card, we might perform groupSize operations, leading to O(n.groupSize) operations in total. Since groupSize is a constant factor in the context of the problem, this can be approximated to O(n).

Overall, the dominant term is the sorting step, so the time complexity is O(nlog n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space required for the dictionary to store card frequencies is O(n), where n is the number of distinct card values.
\u2022	Additional space is used for the sorted array, but since it is an in-place sort, this does not add to the space complexity.

The space complexity is O(n).

# Code
```
public class Solution {
    public bool IsNStraightHand(int[] hand, int groupSize) {
        // Check if the total number of cards is divisible by groupSize
        if (hand.Length % groupSize != 0) {
            return false;
        }

        // Sort the hand array
        Array.Sort(hand);

        // Dictionary to count frequencies of each card value
        Dictionary<int, int> cardCount = new Dictionary<int, int>();
        foreach (int card in hand) {
            if (cardCount.ContainsKey(card)) {
                cardCount[card]++;
            } else {
                cardCount[card] = 1;
            }
        }

        // Iterate through the sorted hand
        foreach (int card in hand) {
            if (cardCount[card] == 0) {
                continue; // This card has already been used in a group
            }

            // Try to form a group starting from 'card' to 'card + groupSize - 1'
            for (int i = 0; i < groupSize; i++) {
                int currentCard = card + i;
                if (!cardCount.ContainsKey(currentCard) || cardCount[currentCard] == 0) {
                    return false; // Group cannot be formed
                }
                // Decrease the count of the current card
                cardCount[currentCard]--;
            }
        }

        // All cards have been successfully grouped
        return true;
    }
}
```