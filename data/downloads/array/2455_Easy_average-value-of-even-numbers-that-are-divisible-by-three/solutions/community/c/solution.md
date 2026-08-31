# C++ || 2 different approaches || clean code

**Author:** heder
**Votes:** 5
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2759497/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2759497/)

---

### Approach 1: scan and count (3ms)

This is straight forward.

```cpp
    static int averageValue(const vector<int>& nums) {
        int sum = 0;
        int count = 0;
        for (int num : nums) {
            if (num % 2 == 0 && num % 3 == 0) {
                sum += num;
                ++count;
            }
        }
        return count ? sum / count : 0;
    }
```

We could simplify the condition ```if (num % 2 == 0 && num % 3 == 0)``` to ```if (num % 6 == 0)```.

**Complexity Analysis**
  * Time complexity: $$O(n)$$ we need to look at all the numbers in ```nums```
  * Space complexity: $$O(1)$$

### Approach 2: partition the input

If we are willing to modify the input vector ```nums``` we could also parition the input and do something like:

```cpp
    static int averageValue(vector<int>& nums) {
        auto it = partition(begin(nums), end(nums), [](int num) { return num % 6 == 0; });
        return it == begin(nums) ? 0 : reduce(begin(nums), it) / distance(begin(nums), it);
    }
```

Instead of ```std::reduce``` we could use ```std::accumulate```, but integer addition is associative and commutative so we can use ```std::reduce``` here.

**Complexity Analysis**
We are potentialy doing more work, but the overall complexity remains the same as with the first approach.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
