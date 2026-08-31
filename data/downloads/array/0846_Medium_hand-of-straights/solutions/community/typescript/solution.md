# Greedy and hash map

**Author:** SanketSawant18
**Votes:** 3
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5266720/](https://leetcode.com/problems/hand-of-straights/solutions/5266720/)

---

# Approach
greedy and hash map 

# Complexity
- Time complexity: O(mlogn)

- Space complexity: O(n)

# Explanation
1. **Immediate Disqualification:**

- Check if the total number of cards is divisible by groupSize. If not, it's impossible to form the required groups, so return false.
2. **Counting Card Frequencies:**

- Use a TreeMap to store the count of each card. TreeMap automatically sorts the keys (card values), making it easier to process them in order.
3. **Forming Groups:**

- Use a while loop to process the cards in ascending order of their values.
- In each iteration, attempt to form a group starting with the smallest card available (firstCard).
- For each card in the group (from firstCard to firstCard + groupSize - 1), check if it exists in the TreeMap.
- If a card is missing, return false.
- Decrease the count of each card used to form the group. If a card's count drops to zero, remove it from the TreeMap.
4. **Completion:**

- If all cards can be grouped as required, return true.

---

```java []
import java.util.Map;
import java.util.TreeMap;

class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        if (hand.length % groupSize != 0) {
            return false;
        }
        
        TreeMap<Integer, Integer> cardCount = new TreeMap<>();
        for (int card : hand) {
            cardCount.put(card, cardCount.getOrDefault(card, 0) + 1);
        }
        
        while (!cardCount.isEmpty()) {
            int firstCard = cardCount.firstKey();
            for (int i = 0; i < groupSize; i++) {
                int card = firstCard + i;
                if (!cardCount.containsKey(card)) {
                    return false;
                }
                int count = cardCount.get(card);
                if (count == 1) {
                    cardCount.remove(card);
                } else {
                    cardCount.put(card, count - 1);
                }
            }
        }
        
        return true;
    }
}

```
```python3 []
from collections import Counter
import heapq

class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        
        card_count = Counter(hand)
        min_heap = list(card_count.keys())
        heapq.heapify(min_heap)
        
        while min_heap:
            first_card = min_heap[0]
            for i in range(first_card, first_card + groupSize):
                if card_count[i] == 0:
                    return False
                card_count[i] -= 1
                if card_count[i] == 0:
                    if i != min_heap[0]:
                        return False
                    heapq.heappop(min_heap)
        
        return True

```
```c++ []
#include <vector>
#include <map>

using namespace std;

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
        
        while (!cardCount.empty()) {
            int firstCard = cardCount.begin()->first;
            for (int i = 0; i < groupSize; i++) {
                int card = firstCard + i;
                if (cardCount.find(card) == cardCount.end()) {
                    return false;
                }
                if (--cardCount[card] == 0) {
                    cardCount.erase(card);
                }
            }
        }
        
        return true;
    }
};

```
```Typescript []
function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) {
        return false;
    }
    
    const cardCount = new Map<number, number>();
    for (const card of hand) {
        cardCount.set(card, (cardCount.get(card) || 0) + 1);
    }
    
    const sortedCards = Array.from(cardCount.keys()).sort((a, b) => a - b);
    
    for (const card of sortedCards) {
        const count = cardCount.get(card)!;
        if (count > 0) {
            for (let i = 0; i < groupSize; i++) {
                const nextCard = card + i;
                const nextCardCount = cardCount.get(nextCard);
                if (nextCardCount === undefined || nextCardCount < count) {
                    return false;
                }
                cardCount.set(nextCard, nextCardCount - count);
            }
        }
    }
    
    return true;
}

```
