# Maximum digit approach

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/3078399/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/3078399/)

---

# Intuition
Examples
E.g. 32 = 
11 +
11 +
10 


243 =
111 +
111 +
011 +
010

It is seen that the number of summands is equal to the number of maximum digit.

# Approach
Find the maximum digit

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$
# Code
```
(define/contract (min-partitions n)
  (-> string? exact-integer?)
 (foldr max 0 (map string->number (map string 
  (string->list n)))))
```