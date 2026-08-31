# O(n)

**Author:** votrubac
**Votes:** 60
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3870361/](https://leetcode.com/problems/faulty-keyboard/solutions/3870361/)

---

A quadratic solution is easy, but we can do better.

## Simplified Version
We use two strings to capture the original and reversed sequence.

When we see `i`, we swap original and reversed.

**C++**
```cpp
string finalString(const string &s) {
    string a, b;
    for (char ch : s)
        if (ch == 'i')
            swap(a, b);
        else
            a += ch;
    return string(rbegin(b), rend(b)) + a;
}
```

## Deque
We change `flip` every time we see `'i'`, and push characters either to the front or back of a deque.

In the end, we construct the final string with or without the flip.

**C++**
```cpp
string finalString(const string &s) {
    deque<char> dq;
    bool flip = false;
    for (auto ch: s)
        if (ch == 'i')
            flip = !flip;
        else
            dq.insert(flip ? begin(dq) : end(dq), ch);
    return flip ? string(rbegin(dq), rend(dq)) : string(begin(dq), end(dq));
}
```