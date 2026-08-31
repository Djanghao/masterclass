# [C++] No-Built-in Solution Explained, 100% Time, ~20% Space

**Author:** Ajna
**Votes:** 25
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/983241/](https://leetcode.com/problems/next-greater-element-iii/solutions/983241/)

---

This is a problem that left me intrigued years ago, so much I even decided to build [a rather successful kata out of it](https://www.codewars.com/kata/55983863da40caa2c900004e/).

What we need to learn here, IMHO, it is not to go too deep into algorithms and pre-learnt concepts but to ask ourselves how we would solve it as humans.

The trick is to proceed reading digits from the right, until you find a digit which is decreasing: that is where you should act, replacing it with the first previous digit greater than that and then sorting the remaining ones.

Let's help ourselves with an example: `12443322`.

The leftmost `2` is the first digit, reading from right, that is not in increasing order, so we replace it with the first previous digit immediately greater than it and then sort all the previously seen digits:

```cpp
13443222 // after the swap
13222344 // after the sorting - hey, that is our solution!
```

We do so since that is how you get a lexicographic order of `x` different elements: once all elements up to `y` are sorted in increasing order (reading from the right), that is our last possible permutation with `y` elements, so we need to use more elements to get new permutations. When `x == y`, it means all our elements are already set in the last lexicographic permutation and there is no further option for us to explore, so in this problem we have to return `-1`.

Let's check the code to do so; first of all we will declare a support variable, `digits`, to store the digits as we go and conveniently pushed in reversed order (ie: the rightmost digit of the original input `n` will also be the first element in `digits`) and so on.

Once we have reduced `n` to `0` (ie: no more digits to extract from it), we can then start looping from the first element of `digits` and look. for the first element which is followed by a greater one.

If we find it:
* we set `j = 0` and use this second pointer to find the first element `> digits [i]`;
* we swap `digits[j]` and `digits[i]`;
* we sort all the elements up to `i` in increasing order (which would become decreasing once we reform the number);
* reassemble the new `n` with a process specular to how we extra the digits;
* while we do so, we also look for potential overflows, when our current value is already `> INT_MAX / 10` and we still have digits to parse, in which case we return `-1`;
* otherwise, we return `n`.

If we exit the loop without any such match, then we know our elements are already sorted in the highest possible lexicographic permutation as discussed above, so we can safely return `-1`.

The code:

```cpp
class Solution {
public:
    int nextGreaterElement(long n) {
        // support variables
        vector<int> digits;
        // extracting digits
        while (n) {
            digits.push_back(n % 10);
            n /= 10;
        }
        // from right of the original number, looking for the first not decreasing occurrence
        for (int i = 1, j, len = digits.size(), lmt = INT_MAX / 10; i < len; i++) {
            if (digits[i - 1] > digits[i]) {
                // if found, we look for the first number so far > digits[i]...
                j = 0;
                while (digits[j] <= digits[i]) j++;
                // ...then we swap numbers...
                swap(digits[j], digits[i]);
                // ...sort all the elements up to here...
                sort(begin(digits), begin(digits) + i, greater<int>());
                // ... recompose n
                while (digits.size()) {
                    n = n * 10 + digits.back();
                    digits.pop_back();
                    // edge cases: exceeding 32 bits
                    if (n >= lmt && digits.size()) return -1;
                }
                return n;
            }
        }
        return -1;
    }
};
```