# Dart simple

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/6080030/](https://leetcode.com/problems/sum-multiples/solutions/6080030/)

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
  int sumOfMultiples(int n) {
    int sum=0;
    for(int i=1;i<=n;i++){
        if(i%3==0){
            sum+=i;
        }
        else if(i%5==0){
            sum+=i;
        }
        else if(i%7==0){
            sum+=i;
        }
    }
    return sum;
  }
}
```