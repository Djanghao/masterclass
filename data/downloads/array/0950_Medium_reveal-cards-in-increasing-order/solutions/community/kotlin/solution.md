# Output Reversing Approach✅ | 99.63%🔥| DRY Run 🎯| Simple (8 lines) to understand💯Explained | Array

**Author:** Prathamesh18X
**Votes:** 4
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001761/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001761/)

---


# Intuition
simple and straightforward, We are essentially reversing the process of revealing the cards to obtain the desired output. 

Initially, the deck is sorted in `descending` order . Then, we reverse `b -> a` the steps to reconstruct the original output, its very very very simple , short , effective\uD83D\uDCA1 appproch\uD83D\uDCAF

Dont forget to upvote\u2B06\uFE0F ....!!!!!\uD83E\uDD72

# Code \uD83C\uDFAF
```javascript []
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=>b-a)
    var result = []
    for(let card of deck){
        if(result.length){
            result.unshift(result.pop())
            }
        result.unshift(card)
        }
    return result
};
```
```cpp []
class Solution {
public:
    vector<int> deckRevealedIncreasing(std::vector<int>& deck) {
        sort(deck.begin(), deck.end(), std::greater<int>());
        vector<int> result;
        for (int card : deck) {
            if (!result.empty()) {
                result.insert(result.begin(), result.back());
                result.pop_back();
            }
            result.insert(result.begin(), card);
        }
        return result;
    }
};
```
```java []
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Arrays.sort(deck);
        LinkedList<Integer> result = new LinkedList<>();
        for (int i = deck.length - 1; i >= 0; i--) {
            if (!result.isEmpty()) {
                result.addFirst(result.removeLast());
            }
            result.addFirst(deck[i]);
        }
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}
```
```python []
class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort(reverse=True)
        result = deque()
        for card in deck:
            if result:
                result.appendleft(result.pop())
            result.appendleft(card)
        return list(result)
```

```kotlin []
class Solution {
    fun deckRevealedIncreasing(deck: IntArray): IntArray {
        deck.sortDescending()
        val result = mutableListOf<Int>()
        for (card in deck) {
            if (result.isNotEmpty()) {
                result.add(0, result.removeAt(result.size - 1))
            }
            result.add(0, card)
        }
        return result.toIntArray()
    }
}

```
```ruby []
class Solution
  def deck_revealed_increasing(deck)
    deck.sort!.reverse!
    result = []
    deck.each do |card|
      unless result.empty?
        result.unshift(result.pop)
      end
      result.unshift(card)
    end
    result
  end
end
```


# Approach \u2600\uFE0F
1. **Sort the deck in descending order**: This step sorts the deck in descending order, ensuring that the largest cards are revealed first.
    
2. **Iterate through the sorted deck**:
    
    -   For each card in the sorted deck:
     -   If the `result` array is not empty, move the last card in the `result` array to the front.
      -   Add the current card to the front of the `result` array.
3. **Return the final `result` array**: Once all cards have been processed, return the final `result` array, which represents the ordering of cards that would reveal them in increasing order.

# DRY Run \uD83D\uDD25


| Iteration | `deck` (after sorting) | `result` | Operation                    |
|-----------|-------------------------|----------|------------------------------|
| Initial   | [17, 13, 11, 7, 5, 3, 2]| []       |                              |
| 1         | [17, 13, 11, 7, 5, 3, 2]| [17]     | Add 17 to the result         |
| 2         | [13, 11, 7, 5, 3, 2]    | [13, 17] | Remove the top card 17, move it to the end, and add 13 to the front |
| 3         | [11, 7, 5, 3, 2]        | [11, 17, 13] | Add 11 to the front remove 13 to back       |
| 4         | [7, 5, 3, 2]            | [7, 13, 11, 17] | Remove the top card 11, move it to the back, and add 7 to the front |
| 5         | [5, 3, 2]                | [5, 17, 7, 13, 11] | Add 5 to the front        |
| 6         | [3, 2]                    | [3, 11, 5, 17, 7, 13] | Remove the top card, move it to the front, and add 3 to the front |
| 7         | [2]                      | [2, 13, 3, 11, 5, 17, 7] | Add 2 to the front        |

The final result is `[2, 13, 3, 11, 5, 17, 7]`.

# Complexity
- Time complexity :`O(n.logn)`

- Space complexity :`O(n)`

