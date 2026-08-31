# C++ || 2 different approaches || hash set / append, sort, unique || fast || clean code

**Author:** heder
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2711390/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2711390/)

---

For both approach I have used to following code to reverse the number:

```cpp
    static int reverse(int num) {
        int ans = 0;
        while (num) {
            int d = num % 10;
            num /= 10;
            ans *= 10;
            ans += d;
        }
        return ans;
    }
```

I have also tried to go via ```std::to_number```, ```std::reverse```, and ```std:stoi```, but that seems at least 50% slower.

### Approach 1: hash set (590ms)

```cpp
    static int countDistinctIntegers(const vector<int>& nums) {
        unordered_set<int> seen;
        for (int num : nums) {
            seen.insert(num);
            seen.insert(reverse(num));
        }
        return size(seen);
    }
```

A more compact variant of the above code could look like the following. It has the same runtime characteristics though.

```cpp
    static int countDistinctIntegers(const vector<int>& nums) {
        unordered_set<int> seen(begin(nums), end(nums));
        for (int num : nums) seen.insert(reverse(num));
        return size(seen);
    }
```

**Complexity Analysis**
  * Time complexity: $$O(n)$$
  * Space complexity: $$O(n)$$

### Approach 2: append, sort, unique (160ms, 100%)

```cpp
    static int countDistinctIntegers(vector<int>& nums) {
        const int n = size(nums);
        nums.reserve(2 * n);
        for (int i = 0; i < n; ++i) nums.push_back(reverse(nums[i]));
        sort(begin(nums), end(nums));
        return distance(begin(nums), unique(begin(nums), end(nums)));
    }
```

**Complexity Analysis**
  * Time complexity: $$O(n \\log n)$$ even if the asymptotic runtime complexity is worse than approach 1 the actual runtime is better. 
  * Space complexity: $$O(n)$$

_As always: Feedback, questions, and comments are welcome. Leaving an upvote sparks  joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
