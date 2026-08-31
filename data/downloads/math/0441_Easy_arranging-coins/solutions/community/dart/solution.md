# SUPER EASY 💪, EK DUM LALLU 😂, BEATS ONLY 14% ✨, FOR BEGINNERS 😊

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/5502364/](https://leetcode.com/problems/arranging-coins/solutions/5502364/)

---

# Intuition
The problem is to find how many complete rows of coins can be formed given `n` coins. This is equivalent to finding the largest `k` such that the sum of the first `k` natural numbers is less than or equal to `n`.

# Approach
1. Use a loop to iteratively calculate the sum of the first `i` natural numbers.
2. Keep adding `i` to a running total `sum`.
3. Check if the total sum exceeds `n`. If it does, return `i - 1` since `i` would have created an incomplete row.
4. If the sum equals `n`, return `i` as the exact number of complete rows.

# Complexity
- **Time complexity**: $$O(\\sqrt{n})$$. The loop runs until the sum of the first `i` natural numbers exceeds `n`. This sum grows quadratically, hence the loop runs approximately `\u221An` times.
- **Space complexity**: $$O(1)$$. The space used is constant as we only store a few integer values.

# Code
```java
class Solution {
  int arrangeCoins(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
      sum += i;
      if (sum > n) {
        return i - 1;
      } else if (sum == n) {
        return i;
      }
    }
    return 0;
  }
}
```

DART
# Code

```dart
class Solution {
  int arrangeCoins(int n) {
    int sum = 0;
    for(int i = 1 ; i <= n ; i ++){
sum += i;
if(sum > n){
    return i -1;
} else if(sum == n){
    return i;
}

    }
    return 0;
  }
}
```

![image.png](./images/0.png)



