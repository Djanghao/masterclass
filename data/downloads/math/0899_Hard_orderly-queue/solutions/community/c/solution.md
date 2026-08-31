# C++ || sliding window or sort || fast (0ms)

**Author:** heder
**Votes:** 41
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2782761/](https://leetcode.com/problems/orderly-queue/solutions/2782761/)

---

# Approach 1: sliding window or sort

Depending on the value of ```k``` we take two different approaches, see inline comments.

```cpp
    static string orderlyQueue(string s, int k) {
        if (k == 1) {
            string ans = s;
            // Append |s| to itself and look for the smallest string
            // that has the same lenght as |s|.
            s += s;
            for (int i = 1; i < size(ans); ++i)
                ans = min(ans, s.substr(i, size(ans)));

            return ans;
        }
        
        // With k > 1 we can reorder |s| how we want, so sorting it
        // will yield the lexicographically smallest one.
        sort(begin(s), end(s));
        return s;
    }
```

To avoid copying the string around for $$k = 1 $$ we use a ```string_view```. For $$k > 1$$ we could use bucket sort, will maybe add this later.

```cpp
    static string orderlyQueue(string s, int k) {
        if (k == 1) {
            // TODO(heder): Use Booth Algorithm instead, see
            // https://en.wikipedia.org/wiki/Lexicographically_minimal_string_rotation

            // Make sure the string doesn't get relocated when doubling
            // below, to ensure the string_view is not invalidated.
            s.reserve(size(s) * 2);
            string_view ans{s};
            // Append |s| to itself and look for the smallest string
            // that has the same lenght as |s|.
            s += s;
            string_view sv{s};
            for (int i = 1; i < size(ans); ++i)
                ans = min(ans, sv.substr(i, size(ans)));

            return string{ans};
        }
        
        // With k > 1 we can reorder |s| how we want, so sorting it
        // will yield the lexicographically smallest one.
        // TODO(heder): Use bucket sort.
        sort(begin(s), end(s));
        return s;
    }
```

Turns out there is soc. [Booth Algorithm](https://en.wikipedia.org/wiki/Lexicographically_minimal_string_rotation) to efficiently compute the solution for the case of $$k = 1$$. Time permitting, I'll add that too.


**Complexity Analysis**
  * Time Complexity: For $$k = 1$$ it's $$O(n^2)$$ as we are comparing each substring to the best so far, and for $$k > 1$$ its $$O(n \\log n)$$ because we are sorting.
  * Space Complexity: For $$k = 1$$ it's $$O(n)$$ for the ```ans``` and as we are doubling the string, and for $$k > 1$$ its $$O(1)$$ as we are sorting the input inplace and returning it.


_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
