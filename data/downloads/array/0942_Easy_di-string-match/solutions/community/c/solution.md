# [C++] Simple 2 Pointers Solution Explained, 100% Time (O(n)), ~70% Space (O(1))

**Author:** Ajna
**Votes:** 16
**Link:** [https://leetcode.com/problems/di-string-match/solutions/773051/](https://leetcode.com/problems/di-string-match/solutions/773051/)

---

The interesting part here is that we are emphatically told that we can return **any** combination we want matching the requirements; and the examples seem to even suggest how to build it.

Basically, given a `[0, 1, ... n - 1, n]` series of values, you can see that you go pretty safe adding the front of that series (ie: the smallest numbers) to our accumulator vector `res` when you have an `'I'` and the back (ie: the largest numbers) when you have a `'D'`.

Even bettter, you don't even need to produce that series of numbers in advance - you just have 2 pointers `i` and `j` to an ideal/imaginary representation of it and you can just pass them, increasing/decreasing them as you go (depending if they are the smallest or largest, respectively).

Finally, the last trick is adding a final element to the string: you might do the math, but you will see that if passed a string of `n` characters, you will need `n + 1` elements in your vector. And the sweet part is that at the end of your loop going through every character, you will find that at the end of it it is always true that `i == j`, so it really does no matter which one you will ultimately push in.

And, finally, we return our perfectly filled container `res` :)

The code:

```cpp
class Solution {
public:
    vector<int> diStringMatch(string s) {
        vector<int> res;
        int i = 0, j = s.size();
        for (char c: s) res.push_back(c == 'I' ? i++ : j--);
        res.push_back(j);
        return res;
    }
};
```