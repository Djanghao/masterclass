# 💯Faster✅💯 Lesser✅Detailed Explaination🎯Sorting🔥Deque🧠Step-by-Step Explaination✅Python🐍Java🍵C+

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 202
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001469/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001469/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
- We have an array deck representing a deck of cards.
- We need to simulate the process of revealing cards in increasing order after a certain shuffling of the deck.
# \uD83E\uDDE0Thinking Behind the Solution:
- Sorting the deck first helps us start with the smallest card.
- Using a deque helps in maintaining the positions (indices) in the result array, ensuring that we place the cards in the correct order for revealing.
- The simulation process mimics the process of revealing the cards from the shuffled deck in the desired order.
# \u2705Approach:
**Sort the Deck:**
- Begin by sorting the deck in ascending order. This will help us to start with the smallest card.

**Simulate the Reveal Process:**

- Create a result array of the same size as deck to store the revealed cards in the desired order.
- Use a deque (double-ended queue) to keep track of the indices of the result array. This deque will help in maintaining the order of the cards during the simulation.

**Simulation Process:**

- Start by placing the smallest card (after sorting) at the beginning of the result array (index 0).
- For each card in the sorted deck:
    - Remove the first index from the deque and assign the current card to this index in the result array.
    - Check if there deque is empty, if not:
        - Move the index to the end of the deque.

**Final Result:**

- After processing all cards, the result array will contain the deck in the required order for revealing the cards in increasing order.

# Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:

Let's use the input `[17, 13, 11, 2, 3, 5, 7]` and go through each step of the simulation to reveal the cards in increasing order.

### Input:
Deck: `[17, 13, 11, 2, 3, 5, 7]`

### Step-by-Step Simulation:
1. **Sort the Deck**:
   - Sorted Deck: `[2, 3, 5, 7, 11, 13, 17]`

2. **Initialize Variables**:
   - `deck`: `[2, 3, 5, 7, 11, 13, 17]`
   - `n` (size of deck): `7`
   - `result`: `[0, 0, 0, 0, 0, 0, 0]` (initialized with zeros)
   - `indices`: `deque([0, 1, 2, 3, 4, 5, 6])`

### Simulation Process:

#### 1st Card (`2`):
- `card`: `2`
- `idx` (popped from `indices`): `0`
- `result` after assigning `2` at `idx`: `[2, 0, 0, 0, 0, 0, 0]`
- `indices` after moving `next index: 1` to the end: `deque([2, 3, 4, 5, 6, 1])`

#### 2nd Card (`3`):
- `card`: `3`
- `idx` (popped from `indices`): `2`
- `result` after assigning `3` at `idx`: `[2, 0, 3, 0, 0, 0, 0]`
- `indices` after moving `next index: 3` to the end: `deque([4, 5, 6, 1, 3])`

#### 3rd Card (`5`):
- `card`: `5`
- `idx` (popped from `indices`): `4`
- `result` after assigning `5` at `idx`: `[2, 0, 3, 0, 5, 0, 0]`
- `indices` after moving `next index: 5` to the end: `deque([6, 1, 3, 5])`

#### 4th Card (`7`):
- `card`: `7`
- `idx` (popped from `indices`): `6`
- `result` after assigning `7` at `idx`: `[2, 0, 3, 0, 5, 0, 7]`
- `indices` after moving `3` to the end: `deque([3, 5, 1])`

#### 5th Card (`11`):
- `card`: `11`
- `idx` (popped from `indices`): `3`
- `result` after assigning `11` at `idx`: `[2, 0, 3, 11, 5, 0, 7]`
- `indices` after moving `4` to the end: `deque([1, 5])`

#### 6th Card (`13`):
- `card`: `13`
- `idx` (popped from `indices`): `1`
- `result` after assigning `13` at `idx`: `[2, 13, 3, 11, 5, 0, 7]`
- `indices` after moving `5` to the end: `deque([5])`

#### 7th Card (`17`):
- `card`: `17`
- `idx` (popped from `indices`): `6`
- `result` after assigning `17` at `idx`: `[2, 13, 3, 11, 5, 17, 7]`
- `indices` after moving `6` to the end: `deque([])`

### Final Result:
The `result` array after simulating the process will be `[2, 13, 3, 11, 5, 17, 7]`, which represents the deck of cards revealed in increasing order.

# Code:
```Python []
class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        # Sort the deck in increasing order
        deck.sort()
        
        n = len(deck)
        result = [0] * n
        indices = deque(range(n))
        
        for card in deck:
            idx = indices.popleft()  # Get the next available index
            result[idx] = card       # Place the card in the result array
            if indices:               # If there are remaining indices in the deque
                indices.append(indices.popleft())  # Move the used index to the end of deque
        
        return result
```
```Java []
import java.util.*;

class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Arrays.sort(deck); // Sort the deck in increasing order
        
        int n = deck.length;
        int[] result = new int[n];
        Deque<Integer> indices = new LinkedList<>();
        
        for (int i = 0; i < n; i++) {
            indices.add(i); // Initialize deque with indices 0, 1, 2, ..., n-1
        }
        
        for (int card : deck) {
            int idx = indices.poll(); // Get the next available index
            result[idx] = card; // Place the card in the result array
            if (!indices.isEmpty()) {
                indices.add(indices.poll()); // Move the used index to the end of deque
            }
        }
        
        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
        sort(deck.begin(), deck.end()); // Sort the deck in increasing order
        
        int n = deck.size();
        vector<int> result(n);
        deque<int> indices;
        
        for (int i = 0; i < n; i++) {
            indices.push_back(i); // Initialize deque with indices 0, 1, 2, ..., n-1
        }
        
        for (int card : deck) {
            int idx = indices.front(); // Get the next available index
            indices.pop_front(); // Remove the index from the front
            result[idx] = card; // Place the card in the result array
            if (!indices.empty()) {
                indices.push_back(indices.front()); // Move the used index to the end of deque
                indices.pop_front(); // Remove the index from the front
            }
        }
        
        return result;
    }
};

```









