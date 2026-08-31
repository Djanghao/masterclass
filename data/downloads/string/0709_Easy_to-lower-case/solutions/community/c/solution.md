# [C++] Using bit-manipulation

**Author:** mhelvens
**Votes:** 32
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/348186/](https://leetcode.com/problems/to-lower-case/solutions/348186/)

---

This probably isn't the nicest solution, because `std::tolower` exists, which is much more robust and readable.

But it's kind of a fun ASCII table factoid that upper-case and lower-case letters differ only by a single bit.

```C++
string& toLowerCase(string& str) {
  for (char& c : str)
    c |= 0b00100000;
  return str;
}
```