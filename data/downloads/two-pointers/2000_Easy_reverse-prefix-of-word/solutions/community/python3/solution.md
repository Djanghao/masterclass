# 💯Faster✅💯 Lesser✅Detailed Explaination🎯Simple Approach🧠Step-by-Step Explanation✅Python🐍Java🍵C+

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 55
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5093599/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5093599/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
Given a string `word` and a character `ch`, reverse the segment of `word` up to and including the first occurrence of `ch`. If the character `ch` does not exist in the string, return the original string.

### \uD83D\uDCE5Input:
- A string `word` consisting of lowercase English letters (1 <= word.length <= 100).
- A character `ch` (1 <= ch <= 256).
### \uD83D\uDCE4Output:
- Return the string after reversing the segment of `word` up to and including the first occurrence of `ch`. If `ch` is not present in `word`, return the original string.

<!-- # \uD83E\uDDE0Thinking Behind the Solution:
1. **Understanding the Problem**: When I encountered the problem, it was clear that I needed to find the sum of distances from each node to all other nodes in the tree. This indicated that traversing the tree and gathering information about distances would be crucial.

2. **Properties of Trees**: I recognized that in a tree, there exists only one path between any two nodes. This simplified the problem compared to a general graph.

3. **DFS for Tree Traversal**: Given the nature of the problem and the structure of a tree, DFS felt like a natural choice for tree traversal. It allowed me to explore the tree deeply before backtracking, visiting each node exactly once.

4. **Counting Nodes and Distances**: During my DFS traversal, I decided to keep track of two important pieces of information:
   - `count[node]`: The number of nodes in the subtree rooted at `node`.
   - `res[node]`: The sum of distances of all nodes in the subtree rooted at `node`.

5. **DFS to Calculate Counts and Distances**: By recursively traversing the tree using DFS, I calculated `count[node]` and `res[node]` for each node. Starting from the root and moving downwards, I updated these values as I progressed.

6. **Second DFS for Adjustments**: After the first DFS, I needed to adjust the `res` values to account for distances from each node to all other nodes. This adjustment was done in a second DFS traversal, where I updated the `res` values based on the counts calculated earlier.

7. **Handling Parent-Child Relationships**: During DFS, it was crucial to avoid revisiting the parent node. I ensured this by checking if the current child node was not equal to the parent node.

8. **Returning the Result**: Once both DFS traversals were complete, I had the required `res` values, representing the sum of distances for each node. I returned this as the final result. -->
# \u2705Approach:
1. **Iterate Through the String:**
   - Start by iterating through the given string `word` character by character until you find the target character `ch`.
   - If the character `ch` is not found, return the original string `word`.

2. **Reverse the Prefix:**
   - Once the target character `ch` is found, reverse the substring from the beginning of the string up to and including the index of `ch`.
   - You can use slicing or other methods available in the programming language to reverse the substring.

3. **Concatenate the Reversed Prefix with the Remaining String:**
   - After reversing the prefix, concatenate it with the remaining part of the string after the index of `ch`.
   - This can be done using string concatenation or string joining methods depending on the programming language.

4. **Return the Modified String:**
   - Finally, return the modified string after reversing the prefix up to the first occurrence of the target character `ch`.


<!-- # Time Complexity:
- Constructing the graph: O(n), where n is the number of nodes.
- Performing DFS traversals: O(n), as each node is visited exactly once.
- Overall time complexity: O(n).

### Space Complexity:
- Space required for the graph representation: O(n).
- Space required for the `count` and `res` arrays: O(n).
- Overall space complexity: O(n). -->

<!-- # Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:

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
The `result` array after simulating the process will be `[2, 13, 3, 11, 5, 17, 7]`, which represents the deck of cards revealed in increasing order. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        j = word.find(ch)
        if j != -1:
            return word[:j+1][::-1] + word[j+1:]
        return word
```
```Java []
class Solution {
    public String reversePrefix(String word, char ch) {
        int j = word.indexOf(ch);
        if (j != -1) {
            return new StringBuilder(word.substring(0, j + 1)).reverse().toString() + word.substring(j + 1);
        }
        return word;
    }
}

```
```C++ []
class Solution {
public:
    string reversePrefix(string word, char ch) {
        int j = word.find(ch);
        if (j != -1) {
            reverse(word.begin(), word.begin() + j + 1);
        }
        return word;
    }
};

```
# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA