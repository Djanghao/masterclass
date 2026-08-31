# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4596749/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4596749/)

---

![image.png](./images/0.png)
https://youtu.be/tAjTbHurlUM
#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/478

#### Problem TLDR

Sum of minimums of all array ranges.

#### Intuition

To build an intuition, we must write some examples where numbers will increase and decrease.
Next, write down all the subarrays and see how the result differs when we add another number.
Let `g[i]` be minimums for all subarrays `[i..]`. Result for all subarrays is `f[i] = g[i] + f[i + 1]`.
Now, let's find how `g` can be split into subproblems: 
```
  //   5 2           1
  //   0 1 2 3 4 5 6 7 8 910111213
  // g(5 2 3 5 4 3 2 1 3 2 3 2 1 4) = 5 + g(2 3 5 4 3 2 1 3 2 3 2 1 4)
  //   2           1
  // g(2 3 5 4 3 2 1 3 2 3 2 1 4) = 2 + g(2 2 2 2) + g(2 1 3 2 3 2 1 4)
  //   3       2 1
  // g(3 5 4 3 2 1 3 2 3 2 1 4) = 3 + g(3 3) + g(3 2 1 3 2 3 2 1 4)
  //   5 4 3 2 1
  // g(5 4 3 2 1 3 2 3 2 1 4) = 5 + g(4 3 2 1 3 2 3 2 1 4)
  //   4 3 2 1
  // g(4 3 2 1 3 2 3 2 1 4) = 4 + g(3 2 1 3 2 3 2 1 4)
  //   3 2 1
  // g(3 2 1 3 2 3 2 1 4) = 3 + g(2 1 3 2 3 2 1 4)
  //   2 1
  // g(2 1 3 2 3 2 1 4) = 2 + g(1 3 2 3 2 1 4)
```
Notice the pattern: if next value (right to left) is bigger, we just reuse previous g, but if it is smaller, we need to find closest positions and replace all the numbers to `arr[i]`.
To do this step in O(1) there is a known Increasing Stack technique: put values that bigger and each smaller value will discard all larger numbers.

#### Approach

* use index `size` to store absent value and safely access `g[j]`
* use `fold` to reduce some lines of code

#### Complexity

- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

#### Code

```kotlin []

  fun sumSubarrayMins(arr: IntArray) = with(Stack<Int>()) {
    val g = IntArray(arr.size + 1)
    (arr.lastIndex downTo 0).fold(0) { prev, i ->
      while (isNotEmpty() && arr[peek()] >= arr[i]) pop()
      val j = if (isEmpty()) arr.size else peek()
      g[i] = (j - i) * arr[i] + g[j]
      push(i)
      (prev + g[i]) % 1_000_000_007
    }
  }

```

```rust []

    pub fn sum_subarray_mins(arr: Vec<i32>) -> i32 {
      let (mut s, mut g) = (Vec::new(), vec![0; arr.len() + 1]);
      arr.iter().enumerate().rev().fold(0, |f, (i, &v)| {
        while s.last().map_or(false, |&j| arr[j] >= v) { s.pop(); }
        let j = *s.last().unwrap_or(&arr.len());
        g[i] = (j - i) as i32 * v + g[j];
        s.push(i);
        (f + g[i]) % 1_000_000_007
      })
    }

```