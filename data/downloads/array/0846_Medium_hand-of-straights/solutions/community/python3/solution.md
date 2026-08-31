# 💯Faster✅💯Less Mem✅🧠Detailed Approach🎯Using Sorting and Greedy Strategy🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 62
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5266441/](https://leetcode.com/problems/hand-of-straights/solutions/5266441/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
The "Hand of Straights" problem involves determining whether a given list of integers (`hand`) can be divided into groups of a specified size (`groupSize`) where each group contains consecutive numbers. If it's possible to rearrange the hand into such groups, return `True`; otherwise, return `False`.

## \uD83D\uDCE5Input
1. `hand`: A list of integers representing the cards. Each integer in the list is a card value.
2. `groupSize`: An integer representing the size of each group of consecutive cards.


## \uD83D\uDCE4Output
- `True` if the `hand` can be rearranged into groups of consecutive cards of size `groupSize`.
- `False` if it is not possible to rearrange the `hand` into such groups.

# \uD83E\uDDE0Thinking Behind the Solution:
1. **Check Group Size Compatibility**:
   - First, we check if the number of cards can be evenly divided by the group size (`groupSize`). If not, it's impossible to form the required groups, so we return `False` immediately.

2. **Count the Occurrences**:
   - We count how many times each card appears in the hand. This helps us know exactly how many of each card we have.

3. **Sort the Cards**:
   - We sort the unique card values in ascending order. Sorting helps us easily find and form consecutive groups starting from the smallest card.

4. **Form Consecutive Groups**:
   - For each unique card (starting from the smallest), we try to form a group of consecutive cards. 
   - If the current card (let's call it `key`) appears in the hand, it means we need to form a group starting from this card. We check if there are enough cards to form a full group of `groupSize` starting from `key`.
   - For example, if `groupSize` is 3 and `key` is 2, we need the cards 2, 3, and 4 to form a valid group.

5. **Reduce the Count**:
   - For each card in the group, we reduce its count.

6. **Check for Insufficient Cards**:
   - If at any point, a card needed to complete a group is not available in the required quantity, we return `False`.

7. **Success**:
   - If we successfully form all required groups, we return `True`.

# Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:

**Input:**
```python
hand = [1,2,3,6,2,3,4,7,8]
groupSize = 3
```

**Steps:**

1. **Check Group Size Compatibility**:
   - `len(hand) % groupSize == 0`, so proceed (9 cards, group size 3).

2. **Count the Occurrences**:
   - Count: `{1: 1, 2: 2, 3: 2, 4: 1, 6: 1, 7: 1, 8: 1}`

3. **Sort the Cards**:
   - Sorted unique cards: `[1, 2, 3, 4, 6, 7, 8]`

4. **Form Consecutive Groups**:
   - Start with `1`: Form group `[1, 2, 3]` (reduce counts: 1 from each).
   - Now counts: `{1: 0, 2: 1, 3: 1, 4: 1, 6: 1, 7: 1, 8: 1}`
   - Next smallest card is `2`: Form group `[2, 3, 4]` (reduce counts: 1 from each).
   - Now counts: `{1: 0, 2: 0, 3: 0, 4: 0, 6: 1, 7: 1, 8: 1}`
   - Next smallest card is `6`: Form group `[6, 7, 8]` (reduce counts: 1 from each).
   - Now counts: `{1: 0, 2: 0, 3: 0, 4: 0, 6: 0, 7: 0, 8: 0}`

5. **Success**:
   - All cards are used up successfully in consecutive groups of size 3. Return `True`.


# \u2705Approach:

1. **Check if Grouping is Possible**:
   - Ensure the total number of cards can be evenly divided by `groupSize`. If not, return `False`.

2. **Count the Occurrences of Each Card**:
   - Use a dictionary to count how many times each card appears in the hand.

3. **Sort the Unique Card Values**:
   - Sort the keys (unique card values) of the dictionary in ascending order. This helps in forming consecutive groups starting from the smallest card.

4. **Form Consecutive Groups**:
   - For each card in the sorted list, if it appears in the dictionary, try to form a group starting from that card.
   - Check if there are enough consecutive cards to form a complete group. If any card needed for the group is not available in the required quantity, return `False`.
   - Decrease the count of each card used to form the group.

5. **Return True if All Groups are Formed Successfully**:
   - If all cards are used up in forming valid groups, return `True`.


# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        # Step 1: Check if grouping is possible
        if len(hand) % groupSize != 0:
            return False
        
        # Step 2: Count the occurrences of each card
        count = Counter(hand)
        
        # Step 3: Sort the unique card values
        sorted_keys = sorted(count.keys())
        
        # Step 4: Form consecutive groups
        for key in sorted_keys:
            if count[key] > 0:  # If this card is still available
                start_count = count[key]
                # Check and form a group starting from `key`
                for i in range(key, key + groupSize):
                    if count[i] < start_count:
                        return False
                    count[i] -= start_count
        
        # Step 5: Return True if all groups are formed successfully
        return True

```
```Java []
public class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        // Step 1: Check if grouping is possible
        if (hand.length % groupSize != 0) {
            return false;
        }

        // Step 2: Count the occurrences of each card
        Map<Integer, Integer> count = new HashMap<>();
        for (int card : hand) {
            count.put(card, count.getOrDefault(card, 0) + 1);
        }

        // Step 3: Sort the unique card values
        int[] sortedKeys = new int[count.size()];
        int index = 0;
        for (int key : count.keySet()) {
            sortedKeys[index++] = key;
        }
        Arrays.sort(sortedKeys);

        // Step 4: Form consecutive groups
        for (int key : sortedKeys) {
            if (count.get(key) > 0) {  // If this card is still available
                int startCount = count.get(key);
                // Check and form a group starting from `key`
                for (int i = key; i < key + groupSize; i++) {
                    if (count.getOrDefault(i, 0) < startCount) {
                        return false;
                    }
                    count.put(i, count.get(i) - startCount);
                }
            }
        }

        // Step 5: Return true if all groups are formed successfully
        return true;
    }
}

```
```C++ []
class Solution {
public:
    bool isNStraightHand(std::vector<int>& hand, int groupSize) {
        // Step 1: Check if grouping is possible
        if (hand.size() % groupSize != 0) {
            return false;
        }

        // Step 2: Count the occurrences of each card
        std::unordered_map<int, int> count;
        for (int card : hand) {
            count[card]++;
        }

        // Step 3: Sort the unique card values
        std::vector<int> sortedKeys;
        for (auto& pair : count) {
            sortedKeys.push_back(pair.first);
        }
        std::sort(sortedKeys.begin(), sortedKeys.end());

        // Step 4: Form consecutive groups
        for (int key : sortedKeys) {
            if (count[key] > 0) {  // If this card is still available
                int startCount = count[key];
                // Check and form a group starting from `key`
                for (int i = key; i < key + groupSize; i++) {
                    if (count[i] < startCount) {
                        return false;
                    }
                    count[i] -= startCount;
                }
            }
        }

        // Step 5: Return true if all groups are formed successfully
        return true;
    }
};
```

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA