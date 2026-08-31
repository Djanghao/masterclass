# Java Solutions with Detailed Comments and Explanations (Backtracking, Prepending)

**Author:** junhaowanggg
**Votes:** 19
**Link:** [https://leetcode.com/problems/gray-code/solutions/400651/](https://leetcode.com/problems/gray-code/solutions/400651/)

---

Reference: [LeetCode](https://leetcode.com/problems/gray-code/) <span class="gray">EPI 15.11</span>
Difficulty: <span class="orange">Medium</span>

## Problem

> The gray code is a binary numeral system where two successive values **differ in only one bit**.

Given a non-negative integer `n` representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with `0`.

**Example:** 

```java
Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1

Input: 0
Output: [0]

Input: 1
Output: [0, 1]
```


## Analysis

### Backtracking

Instead of enumerating all possible permutations, which takes `O(2^{n * 2^n})`, we construct the gray code by a step-by-step approach.

First, we design a function that checks if two numbers `n1` and `n2` differ only in one bit.

- `n1 == n2`: `xor == 0`, returns false.
- Differ in more than one bit: `(xor & (xor - 1)) != 0`, returns false.
- Differ in one bit: `(xor & (xor - 1)) == 0`, returns true.

**Note:** `num & (num - 1)` can remove the rightmost one-bit of `num`.

```java
private boolean isValid(int n1, int n2) {
  int xor = n1 ^ n2;
  return xor != 0 && (xor & (xor - 1)) == 0;
}
```

Consider we have a number `0110`. How many differ-in-one numbers can we have for `0110`? The answer is `[1110, 0010, 0100, 0111]`. We can write it out right away because we just need to do XOR operation for each bit. In other words, we XOR `0110` with `[1000, 0100, 0010, 0001]`.

Based on this idea, we can take the latest generated number in the result list, and try out all differ-in-one possibilities. In order to know if the new candidate is qualified, we use a hash set to store all previously constructed numbers.

If the candidate is not in the hash set, we add it to the hash set and also append it to the result list. Then we construct the next number based on the number we've just added.

At last, when we have `2^n` numbers in the result list, we need to check if the first and the last elements are compatible via `isValid(n1, n2)`. If yes, everything is done; if no, backtrack and construct a new possible number, and try again.

**Note:** `2^i` can be computed by `1 << i`.


```java
public List<Integer> grayCode(int n) {
  List<Integer> result = new ArrayList<>(Arrays.asList(0));
  Set<Integer> history = new HashSet<>();
  generateGrayCode(n, history, result);
  return result;
}

private boolean generateGrayCode(int n, Set<Integer> history, List<Integer> result) {
  // base case
  if (result.size() == (1 << n)) {
    // check the first element and the last element
    return isValid(result.get(0), result.get(result.size() - 1));
  }
  for (int i = 0; i < n; ++i) {
    int prevCode = result.get(result.size() - 1);
    int candCode = prevCode ^ (1 << i);
    if (!history.contains(candCode)) {
      history.add(candCode);
      result.add(candCode);
      boolean found = generateGrayCode(n, history, result);
      if (found) return true;
      history.remove(candCode);
      result.remove(result.size() - 1);
    }
  }
  return false;
}
```

**Time:** `O(2^N)` <span class="purple">I don't know how to get it~</span>
**Space:** `O(2^N)`



### Prepending 0 and 1

The idea is simple. Based on the `result` in `n = k`, we add $0$ before each element to get the first half; we add $1$ before each element of `result` and **reverse** the list to get the second half. Then concatenate them to get the result for `n = k + 1`. **See the example below to understand it!**.

Consider how we generate gray codes from `n = 0` to `n = 3`.

```java
n = 0, we have [0].

n = 1, we previously have [0] and then construct [0, 1].

Just add 1 (actually add 1, which is 1 << n = 1)

n = 2, we previously have [0, 1] and construct [00, 01, 11, 10].

By adding 0 before each element, we get [00, 01] (actually do nothing in the code)
By adding 1 before each element, we get [10, 11] (actually add 10, which is 1 << n = 10)
Reverse [10, 11] to get [11, 10]
Combine [00, 01] and [11, 10], we have [00, 01, 11, 10].

n = 3, we previously have [00, 01, 11, 10].

Add 0:   [000, 001, 011, 010]
Add 1:   [110, 111, 101, 100] (reversed) (actually add 100, which is 1 << n = 1 << 3 = 100)
Combine: [000, 001, 011, 010, 110, 111, 101, 100]
```

**Note:** Consider the corner cases when `n = 0` and `n = 1`, and then decide `i` should start from $0$.

```java
public List<Integer> grayCode(int n) {
  List<Integer> result = new ArrayList<>(Arrays.asList(0));
  for (int i = 0; i < n; ++i) {
    List<Integer> res1 = result;
    List<Integer> res2 = new ArrayList<>(res1);
    Collections.reverse(res2);
    // prepend "1"
    int prependVal = (1 << i);
    for (int j = 0; j < res2.size(); ++j) {
      res2.set(j, res2.get(j) + prependVal);
    }
    res1.addAll(res2);
  }
  return result;
}
```

**Time:** `O(2^N)`
- `n = 0` (`[0]`), prepending "1" takes `1` operation (**allocating extra space takes `1` operation and reversing takes $1$ operation, but they are proportional to number of prepending operations**).
- `n = 1` (`[0, 1]`), prepending "1" takes `2` operations.
- `n = 2` (`[00, 01, 11, 10]`), prepending "1" takes `4` operations.
- `n = 3` (`[000, 001, 011, 010, 110, 111, 101, 100]`), prepending "1" takes `8` operations.
- `n = k`, prepending "1" takes `2^k` operations.
- In total, `T(N) = 1 + 2 + 4 + 8 + ... + 2^N = 2^N`.

**Space:** `O(2^N)`

**Without allocating extra space (In-Place):**

```java
public List<Integer> grayCode(int n) {
  List<Integer> result = new ArrayList<>(Arrays.asList(0));
  for (int i = 0; i < n; ++i) {
    int prependVal = (1 << i);
    int oldSize = result.size();
    for (int j = oldSize - 1; j >= 0; --j) {
      result.add(result.get(j) + prependVal);
    }
  }
  return result;
}
```

Same complexity.
