# Dart solution with explanation

**Author:** endeavor36
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3733483/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3733483/)

---

# Intuition
Since we want a consecutive subarray, this problem can be solved by sliding window technique.

# Approach
We will calcualte the window size for both the cases. First, where we replace every 'F' `k` times and second, where we replace every 'T' `k` times.

To do this, we will create a variable `windowSize` to keep track of the window size. We will also create a varible `flip` to keep track of how many answers we have switched. And we will start our window from left side and reducing it's size when `flip` becomes greater than `k`; meaning that we cannot flip anymore unless we remove already flipped answer which we can do by moving `left` forward.

# Steps

1. Let's start by calling `flipAnswer` function to flip 'F'.
2. We initialize `left`, `windowSize` and `flip` to 0.
3. We create a for loop which is the right end of our window.
4. We increase the window size everytime we find anything other than 'F'. In this case, 'T'.
5. If we find 'F', we increase the `flip` by 1.
6. Then we run the loop until `flip` becomes less than `k`. Because we can only flip k times.
7. If `flip` becomes greater than `k`, we check the character at `left`. If it is equal to 'F', then we reduce `flip` by 1, because we are removing already flipped character so we get extra flip for our current window. Then we increment `left` by 1 to decrease the window size.
8. Similarly swap 'T'.
9. Return maximum of both cases.

We keep track of the max `windowSize` and return it.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
  int maxConsecutiveAnswers(String answerKey, int k) {
    int windowSize = 0;

    // swapping F
    windowSize = flipAnswer(answerKey, k, 0, 0, 0, 'F');

    // swapping T
    windowSize = flipAnswer(answerKey, k, 0, 0, windowSize, 'T');

    return windowSize;
  }

  int flipAnswer(String answerKey, int k, int flip, int left, int windowSize,
      String char) {
    int n = answerKey.length;
    for (int i = 0; i < n; i++) {
      if (answerKey[i] == char) {
        flip++;
      }

      // reducing window size from left side
      while (flip > k) {
        if (answerKey[left] == char) {
          flip--;
        }
        left++;
      }

      // keeping track of max window size
      windowSize = max(windowSize, i - left + 1);
    }
    return windowSize;
  }
}

```