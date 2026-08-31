# [C++] 12ms (Fastest to Date) Bit-based Solution with Combinatorics Explained, 100% Time, ~90% Space

**Author:** Ajna
**Votes:** 13
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/790271/](https://leetcode.com/problems/iterator-for-combination/solutions/790271/)

---

Basic idea: computing all the possible combinations by brute force is ridicolously expensive.

Instead, I can make it work just as fine, if not better, if I have an array of booleans in order to map what is going to be the next combination, initialising it with the first `combinationLength` values as `true` and the rest to `false`, then at each iteration, after I generate my string, I will update it shifting the first available `true` that can be shifted to the right by one position and aligning all the other `true`s at its right to be just after it (and will do so with a neat call to sort!).

This is the core of my solution, all wrapped in `advanceCombs` that starts checking from the leftmost all the available bits (and always just the first `s.size` ones) and builds its way until it finds a match.

To give this bit of logic an example, immagine you have the string `"abcde"` and need to generate combinations of `3` unique characters: your array will be like this (remember in every case we only need to consider the first `s.size()` characters, so the values after the fifth in parentheses are still there, but they jusst won't be used for this specific case - a string of length `5`):

```cpp
1 1 1 0 0 (0 0 0 0 0 0 0 0 0 0) => abc
1 1 0 1 0 (0 0 0 0 0 0 0 0 0 0) => abd
1 1 0 0 1 (0 0 0 0 0 0 0 0 0 0) => abe
1 0 1 1 0 (0 0 0 0 0 0 0 0 0 0) => acd
1 0 1 0 1 (0 0 0 0 0 0 0 0 0 0) => ace
1 0 0 1 1 (0 0 0 0 0 0 0 0 0 0) => ade
0 1 1 1 0 (0 0 0 0 0 0 0 0 0 0) => bcd
0 1 1 0 1 (0 0 0 0 0 0 0 0 0 0) => bce
0 1 0 1 1 (0 0 0 0 0 0 0 0 0 0) => bde
0 0 1 1 1 (0 0 0 0 0 0 0 0 0 0) => cde
```

If not such a value is any longer possible, as it is the case we just update `hasMoreCombs` to be `false`.

My code:

```cpp
class CombinationIterator {
public:
    string s;
    bool combs[15];
    int k;
    bool hasMoreCombs = true;
    void advanceCombs() {
        //move the first availabile and rightmost 1 left one step, sort from there
        for (int i = s.size() - 1; i; i--) {
            if (!combs[i] && combs[i - 1]) {
                swap(combs[i], combs[i - 1]);
                sort(begin(combs) + i + 1, begin(combs) + s.size(), greater<>());
                return;
            }
        }
        hasMoreCombs = false;
    }
    
    CombinationIterator(string &characters, int combinationLength) {
        s = characters;
        k = combinationLength;
        // initialising combs for our very first string
        for (int i = 0; i < 15; i++) combs[i] = i <  k;
    }
    
    string next() {
        // generating the current next string
        string res;
        for (int i = 0; i < s.size(); i++) if (combs[i]) res.push_back(s[i]);
        // preparing the next combinations
        advanceCombs();
        return res;
    }
    
    bool hasNext() {
        // most complex bit of logic ever here :D
        return hasMoreCombs;
    }
};
```

Version of `advanceCombs` without sorting - as you might have guessed the performance improvement is not massive, but something is still there:

```cpp
    void advanceCombs() {
        // keeping track of how many true/1s we have seen so far
        int onesSeen = 0;
        //move the first availabile and rightmost 1 left one step, sort from there
        for (int i = s.size() - 1; i; i--) {
            onesSeen += combs[i];
            if (!combs[i] && combs[i - 1]) {
                swap(combs[i], combs[i - 1]);
				// moving all the previous 1s to the right of the swapped one
                for (int j = i + 1; j < s.size(); j++) combs[j] = onesSeen-- > 0;
                return;
            }
        }
        hasMoreCombs = false;
    }
```

Edit: okay, bragging time - it looks like actually my latest change made me code the fastest ever submitted:

![image](./images/0.png)

Also courtesy of this extra bit taken from [MrGhasita's solution](https://leetcode.com/problems/iterator-for-combination/discuss/789110/) (thanks mate, you are legend!):

```cpp
static auto speedup = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return nullptr;
}();
```