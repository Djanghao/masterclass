# Best Solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/6077485/](https://leetcode.com/problems/furthest-point-from-origin/solutions/6077485/)

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
```dart []
class Solution {
  int furthestDistanceFromOrigin(String moves) {
    int left = 0;
    int right = 0;
    int underScore = 0;
    for(int i = 0;i<moves.length;i++){
        if(moves[i] == "L"){
            left++;
        }
        else if(moves[i] == "R"){
            right++;
        }
        else if(moves[i] =="_"){
            underScore++;
        }
    }
    int furthest = (left - right).abs() + underScore;
    return furthest;
  }
}
```