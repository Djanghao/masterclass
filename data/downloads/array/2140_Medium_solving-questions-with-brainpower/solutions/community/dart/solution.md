# Easy To Understand Dart

**Author:** AndreLock
**Votes:** 0
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514491/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514491/)

---

# Intuition
Move from right to left each time evaluating what the maximum value that could be derived from answering a question given previously computed information.


# Complexity
- Time complexity:
O(n)

# Code
```
class Solution {
int mostPoints(List<List<int>> questions) {
        int max = 0;
        List<int> current_val = [];
        for(int i = 0 ; i < questions.length ; ++i){
            current_val.add(0);
        }
        for(int i = questions.length - 1; i >= 0; --i){
            if(current_val.length > questions[i][1] + i + 1){
                int new_val = questions[i][0] + current_val[questions[i][1] + i + 1];
                if(new_val > max){
                    max = new_val;
                    current_val[i] = max;
                }
                else{
                    current_val[i] = current_val[i + 1];
                }
            }
            else{
                if(questions[i][0] > max){
                    max = questions[i][0];
                }
                current_val[i] = max;
            }
        }
        return max;
    }

}
```