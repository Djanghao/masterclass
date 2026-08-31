# ✅💯Easy-Beginner|| C++✅ || Python ✅|| JS✅ || C✅ || Java✅||🚀

**Author:** Sharma_290
**Votes:** 38
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5266171/](https://leetcode.com/problems/hand-of-straights/solutions/5266171/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When first approaching this problem, the idea is to check if we can rearrange the cards in such a way that we form groups of consecutive cards of a specific size. We need to ensure that every card can be part of a group of the specified size and that no cards are left ungrouped.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Check for Valid Group Size**: The total number of cards must be divisible by the group size to possibly form the required groups. If not, return `False`.
2. **Count Card Frequencies**: Use a dictionary or `Counter` from the `collections` module to count how many times each card appears.
3. **Sort the Card Values**: Sort the unique card values. This helps in sequentially forming groups starting from the smallest card value.
4. **Form Groups**: Iterate through the sorted card values and try to form groups starting from each card:
   - For each card value, if it has not been fully used in previous groups, attempt to form a group of consecutive cards starting from that value.
   - For each card in the required group, check if there are enough cards to form the group. If not, return `False`.
   - Decrement the count of each card in the group as they are used.
5. **Return Result**: If all groups can be successfully formed, return `True`.


# Code
```C++ []
class Solution {
public:
    bool isNStraightHand(vector<int>& hand, int groupSize) {
        
        if (hand.size() % groupSize != 0) {
        return false;
    }

    map<int, int> cardCount;
    for (int card : hand) {
        cardCount[card]++;
    }

    for (auto it = cardCount.begin(); it != cardCount.end(); ++it) {
        if (it->second > 0) {
            int count = it->second;
            for (int i = 0; i < groupSize; ++i) {
                if (cardCount[it->first + i] < count) {
                    return false;
                }
                cardCount[it->first + i] -= count;
            }
        }
    }

    return true;
    }
};
```
```python []

class Solution(object):
    def isNStraightHand(self, hand, groupSize):
        """
        :type hand: List[int]
        :type groupSize: int
        :rtype: bool
        """
        if len(hand) % groupSize != 0:
            return False

        card_count = Counter(hand)
        sorted_cards = sorted(card_count.keys())

        for card in sorted_cards:
            if card_count[card] > 0:
                count = card_count[card]
                for i in range(groupSize):
                    if card_count[card + i] < count:
                        return False
                    card_count[card + i] -= count

        return True
```
```JavaScript []
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    let cardCount = new Map();
    for (let card of hand) {
        cardCount.set(card, (cardCount.get(card) || 0) + 1);
    }

    let sortedCards = Array.from(cardCount.keys()).sort((a, b) => a - b);

    for (let card of sortedCards) {
        let count = cardCount.get(card);
        if (count > 0) {
            for (let i = 0; i < groupSize; ++i) {
                if ((cardCount.get(card + i) || 0) < count) {
                    return false;
                }
                cardCount.set(card + i, cardCount.get(card + i) - count);
            }
        }
    }

    return true;
};
```
```Java []
class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        if (hand.length % groupSize != 0) {
            return false;
        }

        Map<Integer, Integer> cardCount = new TreeMap<>();
        for (int card : hand) {
            cardCount.put(card, cardCount.getOrDefault(card, 0) + 1);
        }

        for (int card : cardCount.keySet()) {
            int count = cardCount.get(card);
            if (count > 0) {
                for (int i = 0; i < groupSize; ++i) {
                    if (cardCount.getOrDefault(card + i, 0) < count) {
                        return false;
                    }
                    cardCount.put(card + i, cardCount.get(card + i) - count);
                }
            }
        }

        return true;
    }
}
```
```c []
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}
bool isNStraightHand(int* hand, int handSize, int groupSize) {
    if (handSize % groupSize != 0) {
        return 0;
    }

    int cardCount[10001] = {0};
    for (int i = 0; i < handSize; ++i) {
        cardCount[hand[i]]++;
    }

    qsort(hand, handSize, sizeof(int), compare);

    for (int i = 0; i < handSize; ++i) {
        if (cardCount[hand[i]] > 0) {
            for (int j = 0; j < groupSize; ++j) {
                if (cardCount[hand[i] + j] <= 0) {
                    return 0;
                }
                cardCount[hand[i] + j]--;
            }
        }
    }

    return 1;
}
```
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![leetCodeUpvote.png](./images/0.png)


