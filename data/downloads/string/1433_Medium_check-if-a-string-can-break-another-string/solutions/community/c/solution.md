# O(n) clean with explanation

**Author:** alaska_blues
**Votes:** 34
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/1085537/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/1085537/)

---

First piece of intuition comes from the problem statement - we are asked to find the answer over all possible permutions of both strings. Very often when we are asked find/do something related to all permutations of a string the solution involves counting the number of occurrences of each character. So this is the first thing we do: compute the character frequency maps of both strings. 

Now lets say `s1 = "abe"` and `s2 = "acd"`, so the frequencies are: 
```
	 a b c d e ...
s1:  1 1 0 0 1
s2:  1 0 1 1 0
```

How do we check whether `s1` breaks `s2`? *Well, it would make sense for the largest character in* `s1` - `e` - *to "cover" the largest character* in `s2` - `d`. After this pair of characters, the largest one in `s1` is `b` and the largest one in `s2` is `c` - and `b < c`! Meaning that `s1` cannot break `s2`.

Now run the same logic on a more complex example:
```
	 a b c d e ...
s1:  1 1 0 0 5
s2:  1 0 2 4 0
```
The first 4 `e`s cover the 4 `d`s, the remaining `e` covers one of the `c`s, but after that the largest remaining character in `s1` is smaller that the respective character in `s2`, therefore there is no way `s1` breaks `s2`.
The way we can translate this logic to code can be seen in the `canBreak()` function below: we iterate from z to a and keep track of how many characters from `s1` we have seen minus how many chars from `s2` we've seen. If at any point the difference is less than 0, `s1` cannot break `s2`.

The code:
```
  bool checkIfCanBreak(string s1, string s2) {
    auto freq1 = charFreq(s1);
    auto freq2 = charFreq(s2);
    return canBreak(freq1, freq2) || canBreak(freq2, freq1);
  }
  
  vector<int> charFreq(const string& s) {
    vector<int> freq(26);
    for (char c : s)
      freq[c - 'a']++;
    return freq;
  }
  
  bool canBreak(const vector<int>& strong, const vector<int>& weak) {
    int diff = 0;
    for (int i = 25; i >= 0; --i) {
      diff += strong[i] - weak[i];
      if (diff < 0)
        return false;
    }
    return true;
  }
  ```