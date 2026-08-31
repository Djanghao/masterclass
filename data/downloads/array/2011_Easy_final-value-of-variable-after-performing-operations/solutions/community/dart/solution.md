# Dart Easy answer

**Author:** aka__sh__k__
**Votes:** 2
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/4559761/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/4559761/)

---

# Intuition
Beats
43.59%
of users with Dart

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    int finalValueAfterOperations(List<String> operations) {
    int count=0;
    for(int i=0;i<operations.length;i++){
        if(operations[i]=="X++"||operations[i]=="++X"){
            count++;
        }else if(operations[i]=="X--"||operations[i]=="--X"){
            count--;
        }
    }return count;
    }
}

```