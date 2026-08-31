# 🟢🔴🟢 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5656195/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5656195/)

---

# Intuition
The problem asks for calculating the minimum number of operations needed to move all the balls to each box. The operation count for each box is determined by the sum of the distances from all other boxes containing balls to this box.

# Approach
1. **Initialization**:
   - Create an empty list `answer` to store the result.

2. **Nested Loop**:
   - For each box `i`, initialize a counter `count` to 0.
   - Iterate over all other boxes `j`. 
   - If box `j` contains a ball (`boxes[j] == "1"`), add the absolute difference `|i-j|` to `count`.
   - Append `count` to `answer`.

3. **Return**:
   - Return the `answer` list which contains the minimum operations for each box.

# Example Walkthrough
Let's go through an example to understand the process:

### Example:
- **Input**:
  - `boxes = "110"`

### Steps:
1. **Initialization**:
   - `answer = []`

2. **Calculate for each box**:

   - **Box 0**:
     - `count = 0`
     - Compare with box 1: `count += |0-1| = 1`
     - Compare with box 2: No operation needed as it has no ball.
     - Result for box 0: `answer = [1]`
   
   - **Box 1**:
     - `count = 0`
     - Compare with box 0: `count += |1-0| = 1`
     - Compare with box 2: No operation needed as it has no ball.
     - Result for box 1: `answer = [1, 1]`
   
   - **Box 2**:
     - `count = 0`
     - Compare with box 0: `count += |2-0| = 2`
     - Compare with box 1: `count += |2-1| = 1`
     - Result for box 2: `answer = [1, 1, 3]`

### Final Output:
- The final output list `answer` is `[1, 1, 3]`.

# Complexity
- **Time complexity**: $$O(n^2)$$
  - Where `n` is the length of `boxes`. We have a nested loop iterating through the boxes.

- **Space complexity**: $$O(n)$$
  - The space used to store the `answer` list.

# Code
```dart
class Solution {
  List<int> minOperations(String boxes) {
    List<int> answer = [];
    for(int i = 0; i < boxes.length; i++){
        int count = 0;
        for(int j = 0; j < boxes.length; j++){
            if(i != j && boxes[j] == "1") count += (i-j).abs();
        }
        answer.add(count);
    }
    return answer;
  }
}
