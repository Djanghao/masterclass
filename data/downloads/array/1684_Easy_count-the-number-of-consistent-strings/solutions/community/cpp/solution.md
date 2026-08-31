# [C++] Linear Fastest Solution, 100% Time, 100% Space

**Author:** Ajna
**Votes:** 120
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/970028/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/970028/)

---

Nice first problem of the day, to solve it we just need a couple of variables:
* `res`, our result variable, that we set equal to the length of `words` - ie: we assume initially all the words are valid (bear with me!);
* `alpha`, an array of 26 booean characters, initially all set to `false` and that we will populate flagging to `true` the cell matching the characters in `allowed`, normalised to be in the `0 - 25` range by subtracting `'a'`.

So, for exampe if you had `allowed == "bef"`, you would have `alpha` as:

```cpp
0 1 0 0 1 1 0 0 0 0... // all the other values are 0
a b c d e f g h j k... // matching character values added for ease of reading
```

Then we loop throught each `word` in `words`, and then through each character `c` in each `word` and as soon as we find a non matching character (`!alpha[c - 'a']`), we decrease `res` (one less valid word) and `break`.

Finally, we can return `res` :)

The code:

```cpp
class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        // support variable
        int res = words.size();
        bool alpha[26] = {};
        // populating alpha
        for (char c: allowed) alpha[c - 'a'] = true;
        // parsing all the words to see if each character is in alpha
        for (string word: words) {
            // in case we find an unallowed character, we decrease res and break
            for (char c: word) if (!alpha[c - 'a']) {
                res--;
                break;
            }
        }
        return res;
    }
};
```

Alternative version burning a few more bytes (not really those many with booleans) to avoid having to compute `c - 'a'` too many times, which went surprisingly much faster:

```cpp
class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        // support variable
        int res = words.size();
        bool alpha[123] = {};
        // populating alpha
        for (char c: allowed) alpha[c] = true;
        // parsing all the words to see if each character is in alpha
        for (string word: words) {
            // in case we find an unallowed character, we decrease res and break
            for (char c: word) if (!alpha[c]) {
                res--;
                break;
            }
        }
        return res;
    }
};
```

![image](./images/0.png)
