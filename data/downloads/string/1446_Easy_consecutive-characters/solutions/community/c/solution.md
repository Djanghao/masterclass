# [C++] 2 Pointers Optimised Solution Discussed and Explained, 100% Time, 100% Space

**Author:** Ajna
**Votes:** 17
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/921755/](https://leetcode.com/problems/consecutive-characters/solutions/921755/)

---

This problem is basically asking us to find the longest substring with a given condition - all the characters being the same.

And while there are countless substring problems and even more so approaches you might use to solve them, this one is particularly suited for a straightforward approach using 2 pointers - one that will be "stuck" at the first new character we encounter, the other one advancing from there as long as we find chars with the same value.

To solve this problem, Iet's start as usual declaring a few variables, all `int`s:
* `res`, to store the value of the maximum length found so far; you might initialise it to `1`, since the specs clearly state we will have at least one char, but I preferred to keep things more "flexible" and proper setting it to `0`;
* `i` and `j` are our pointers and we start with `i == 0`;
* `len` is the length of the initial string;
* `curr` is the tricky one - it will store the value of the currently checked character (treated as an interger,  but we really do not care); you might have avoided it and always used `s[i]` in its stead, but I preferred to avoid accessing it by indexing and found that it makes our code a big cleaner (try to always keep an interviewer behind the back of your mind - a good thought to keep both your guard and discipline up!). I will initialise it to the value of `s[0]`.

We will then proceed with an external loop going on as long as `i < len`. Inside it, we will:
* set `j` to point to the next successive character, at `i + 1`;
* increase the value of `j` as long as it does not go overflowing (`j < len`) and as long as it is pointing to characters with the same value of the character `i` points (`curr == s[j]`);
* update `res` with this new interval's length, if greater than the currently stored value (`max(res, j - i)`);
* set both `curr` and `i` for the next loop, respectively with the value of the next new character to parse (`s[j]`) and its pointer (`j`).

Some thoughts of my approach: I know some people would rather increment a counter variable as long as `curr == s[j]`, but that is IMHO not the best approach, since you would do one extra operation (although it is a cheap incrementation of an integer) at each step: in extreme cases, that approach would do, say, 500 increment operations if you had a string made only of 500 `'a'` versus our approach that would just computer `j - i` at the end - that is 499 more operations for you!

Now, while it might seem trivial with the string length limit for this specific problem, in my book every unnecessary operation tha does not carry any value at all (even it is was just readability), just gets cut out and stays on the floor, that is why I opted to proceed as I did.

Once done, we return `res` :)

The code:

```cpp
class Solution {
public:
    int maxPower(string s) {
        // support variables
        int res = 0, i = 0, j, len = s.size(), curr = s[0];
        while (i < len) {
            // updating j
            j = i + 1;
            // moving j to the first value of s[j] != curr
            while (j < len && curr == s[j]) j++;
            // updating res
            res = max(res, j - i);
            // setting curr and i for the next loop
            curr = s[j];
            i = j;
        }
        return res;
    }
};
```