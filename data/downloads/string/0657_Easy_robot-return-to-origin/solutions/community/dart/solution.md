# Easy Solution for Dart beginners

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/6077401/](https://leetcode.com/problems/robot-return-to-origin/solutions/6077401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  O(n)

- Space complexity: O(1)

# Code
```dart []
class Solution {
  bool judgeCircle(String moves) {

    int hor =0;
    int ver = 0;

    for(int i = 0 ; i<moves.length;i++){
        if(moves[i] == "R"){
            hor++;
        }else if(moves[i] == "L"){
            hor--;
        }
        else if(moves[i] == "U"){
            ver++;
        }
        else if(moves[i] == "D"){
            ver--;
        }
    }
    if(hor == 0 && ver == 0){
        return true;
    }
    else{
        return false;
    }
  }
}
```