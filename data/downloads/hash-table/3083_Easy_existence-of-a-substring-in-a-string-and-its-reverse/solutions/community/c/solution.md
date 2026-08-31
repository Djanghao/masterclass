# C++ || using a bit set as a poor man's hash set || fast (100%)

**Author:** heder
**Votes:** 10
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4889730/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4889730/)

---

# Approach 1: bitset
This approach is packing two adjacent characters of the input into 10bits. In the first pass we keep track of which left to right pairs we see, and in the second pass we check if the right to left pairs have been seen before.

```cpp
    bool isSubstringPresent(const string& s) {
        bitset<1024> seen;
        for (int i = 0; i < ssize(s) - 1; ++i)
            seen[((s[i] & 0x1f) << 5) | (s[i + 1] & 0x1f)] = true;
        for (int i = 0; i < ssize(s) - 1; ++i)
            if (seen[((s[i + 1] & 0x1f) << 5) | (s[i] & 0x1f)]) return true;
        return false;            
    }
```

**Complexity Analysis**
Let $$n$$ be length of the input, then the

* Time complexity is $$O(n)$$ as we just scan the input twice, and the

* Space comlexity is $$O(1)$$ as we have a fixed size bitset, that doesn't grow with the input.

## Variant 1: single pass
As @RedaKerouicha pointed out this can also be done in a single pass. This also makes the code nicer. For the rationale: It doesn't matter if we see the "forward" or "backward" version of a pair first. If there is one we will see it with a single pass.

```cpp
    static bool isSubstringPresent(const string& s) {
        bitset<1024> seen;
        for (int i = 0; i < ssize(s) - 1; ++i) {
            const char l = s[i] & 0x1f;
            const char r = s[i + 1] & 0x1f;
            seen[l << 5 | r] = true;
            if (seen[l | r << 5]) return true;
        }
        return false;            
    }
```

**Complexity Analysis**
Basically the same, the time complexity doesn't change as we still need to take one pass over the data.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
