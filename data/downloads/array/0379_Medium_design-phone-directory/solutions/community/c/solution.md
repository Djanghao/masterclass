# C++, O(1) time, O(N) space, O(1) initialization

**Author:** dccxi
**Votes:** 14
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/350903/](https://leetcode.com/problems/design-phone-directory/solutions/350903/)

---

Inspired by and optimized based on https://leetcode.com/problems/design-phone-directory/discuss/122908

Reduced the initialization process from O(N) to O(1) by adding slots only when needed.

```c++
class PhoneDirectory {
    vector<int> next;
    int maxNumbers, pos;
public:
    /** Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory. */
    PhoneDirectory(int maxNumbers) : maxNumbers(maxNumbers) {
        next.push_back(1);
        pos = 0;
    }

    /** Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available. */
    int get() {
        if (pos == next.size()) next.push_back(pos + 1);
        if (next.size() > maxNumbers) {
            next.pop_back();
            return -1;
        }
        int ret = pos;
        pos = next[pos];
        next[ret] = -1;
        return ret;
    }

    /** Check if a number is available or not. */
    bool check(int number) {
        return number < maxNumbers && (number >= next.size() || next[number] != -1);
    }

    /** Recycle or release a number. */
    void release(int number) {
        if (number < next.size() && next[number] == -1) {
            next[number] = pos;
            pos = number;
        }
    }
};
```