# C++ || one-liner w/ std::accumulate and std::bit_xor || fast (44ms, 100%?)

**Author:** heder
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015989/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015989/)

---

# Approach 1: std::accumulate
There are some other post that do a great job explaining why the result is just the XOR of all values.

```cpp
    static int xorBeauty(const vector<int>& nums) {
        return accumulate(begin(nums), end(nums), 0, bit_xor{});
    }
```

We could replace ```std::accumulate``` with ```std::reduce```, which would be particular intesting of we could use parallel execution, unfortunatly LC does't seem to support the necessary headers at this point.

**Complexity Analysis**
Let $$n$$ be the size of the input vector then the
  * Time complexity is $$O(n)$$ and the
  * Space complexity is $$O(1)$$

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
