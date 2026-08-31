# Easy Approach

**Author:** adhilfouzi
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/4679147/](https://leetcode.com/problems/number-of-common-factors/solutions/4679147/)

---

# Intuition
- The intuition behind this solution is to find all the common factors of two given integers and return the count of those common factors.

# Approach
- We iterate through all numbers from 1 to the maximum of the two given integers. For each number, if it is a common factor of both integers, we add it to a list. Finally, we return the length of the list, which represents the count of common factors.

# Complexity
- Time complexity: O(min(a, b))
  The time complexity is determined by the number of iterations in the for loop, which is bounded by the minimum of the two given integers, a and b.
  
- Space complexity: O(min(a, b))
 The space complexity is also determined by the size of the list storing the common factors, which is bounded by the minimum of the two given integers, a and b.


# Code
```
class Solution {
  int commonFactors(int a, int b) {
    List<int> store =[];
    int bon=a>b?a:b;
    for(int i=1; i<=bon;i++){
        if(a%i==0&&b%i==0){
            store.add(i);
        }
    }
    return store.length;
  }
}
```