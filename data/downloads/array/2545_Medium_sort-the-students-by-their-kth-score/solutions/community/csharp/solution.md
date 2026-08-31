# ✅ C# LINQ SOLUTION | 1 LINER | EASY TO UNDERSTAND ✅

**Author:** MertBalkan
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3981431/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3981431/)

---

# Explaination
* In LINQ, the OrderByDescending method is used to sort the score collection based on the value at index k in each element. 
* The lambda expression s => s[k] specifies how to get the value for comparison. 

* ToArray() is used to convert the sorted sequence into an array.

# Complexity
- Time complexity: $$O(n * log(n)).$$ 

- Space complexity: $$O(n)$$

# Code
```
public class Solution {
    public int[][] SortTheStudents(int[][] score, int k) {
        return score.OrderByDescending(s => s[k]).ToArray();
    }
}
```
![image.png](./images/0.png)

