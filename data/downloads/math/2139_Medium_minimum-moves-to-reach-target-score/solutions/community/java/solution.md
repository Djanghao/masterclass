# [Java/C++/Python] Reduce target to 1

**Author:** lee215
**Votes:** 54
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1693327/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1693327/)

---

# **Intuition**
We should use double action as late as possible, as many as possible.
Do this process reversely: Reduce target to 1.
We try to use the HALF action as soon as possbile..
<br>

# **Explanation**
If we still "half" action, we do it.
If it's odd, we decrese it by 1 and make it half, which takes two actions.
If it's even, we make it half, which takes one action.

If no more "half" action, we decrement continuously to 1, which takes `target - 1` actions.
<br>

# **Complexity**
Time `O(logn)`
Space `O(1)`
<br>

**Java**
```java
    public int minMoves(int target, int k) {
        int res = 0;
        while (target > 1 && k > 0) {   
            res += 1 + target % 2;
            k--;
            target >>= 1;
        }
        return target - 1 + res;
    }
```

**C++**
```cpp
    int minMoves(int target, int k) {
        int res = 0;
        while (target > 1 && k > 0) {   
            res += 1 + target % 2;
            k--;
            target >>= 1;
        }
        return target - 1 + res;
    }
```

**Python**
```py
    def minMoves(self, target, k):
        res = 0
        while target > 1 and k > 0:
            res += 1 + target % 2
            k -= 1
            target >>= 1
        return target - 1 + res
```
