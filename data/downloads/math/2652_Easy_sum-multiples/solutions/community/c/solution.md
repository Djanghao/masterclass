# C++ || constant time || do all the work at compile time

**Author:** heder
**Votes:** 10
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3446496/](https://leetcode.com/problems/sum-multiples/solutions/3446496/)

---

**TODO(heder): Insert cute cat meme to ask for up-votes. ;)**

# Approach 1: do all the work at compile time
The answer for a give $$n$$ never changes, hence we can precompute the answers at compile time.

```cpp
namespace {
constexpr array<int, 1024> generate_som() {
    array<int, 1024> ans = {};
    int sum = 0;
    for (int i = 1; i < size(ans); ++i) {
        if (!(i % 3) || !(i % 5) || !(i % 7)) sum += i;
        ans[i] = sum;
    }
    return ans;
}

constexpr array<int, 1024> som = generate_som();
}  // namespace

class Solution {
public:
    static int sumOfMultiples(int n) {
        return som[n];
    }
};
```

**Complexity Analysis**
  * Time complexity is $$O(1)$$ as we are just doing a lookup
  * Space complexity is $$O(1)$$, this might be controversial though.

# Approach 2: inclusion / exclusion principle
Another constant time approach is to using the inclusion / exclusion principles, i.e. count all the number divisible by 3 in a range, which can be done in constant time, some for 5 and 7, and add them up. This this case we are over counting though, i.e. we count all the numbers twice that are divisible by 3 and 5, or 3 and 7, or 5 or 7, hence we need to subtract all the numbers divisible by 3 * 5, 3 * 7, and 5 * 7, but in this case we have subracted the numbers that are divisible by 3 * 5 * 7 to often, hence we need to add them again. This is known as inclusion / exclusion principle. There are a few other nice posts that discribe this solution in more detail.

**Pro-Tips**

I always have a header like this in my solutions. This speeds-up I/O:

```cpp
// https://leetcode.com/problems/sum-multiples
// problem: 2652
static int fast_io = []() { std::ios::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr); return 0; }();
```

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
