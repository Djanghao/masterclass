# Java | Easy Problem Once Intuition is Clear | Detailed Explanation | O(n) | Multiple Languages

**Author:** sourasb
**Votes:** 23
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3471015/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3471015/)

---

### \u2705\u2705\uD83D\uDD1D\uD83D\uDD1DPlease Upvote if you find this helpful. \uD83D\uDD1D\uD83D\uDD1D\u2705\u2705

# Intuition & Approach

A beautiful string is defined as:
1. It shouldn't have any palindrome of `length>=2`
2. All the characters in the string should be in the range `['a' to 'a' + k - 1]`

Also, we know for any palindrome string:
1. If the palindrome is of even length, then the middle two characters are the same.
2. If the palindrome is of odd length, then the immediate left and immediate right character of the middle character are the same.

The initial input string is also a beautiful string.

So, starting from the last character in the string, say `s[i]`, if we keep incrementing `s[i]` till character `'a' + k - 1`, and after each increment, we need to check if `s[i] != s[i-1]` and `s[i] != s[i-2]`. This will ensure the newly formed string by incrementing the ith character is not a palindrome. i.e. it is a beautiful string. And we stop there.

Here, we are only incrementing and not decrementing because we need to find the lexicographically smallest string greater than the input string.

And if `s[i]` reaches `'a' + k - 1` but we are unable to find any beautiful string then decrement `i` and try to construct a beautiful string with a new `i` value. And the same process continues until we find a beautiful string or `i<0`.

Now, if `i<0`, then no lexicographically smallest string greater than the input string exists, so we return `" "`.

As you might have noticed for every index `i`, `s[i]` is incremented till `'a' + k - 1` and if no beautiful string is found we move to `i-1` and repeat the same process. So, for every `i `value that doesn't form a beautiful string, `s[i]` is maxed out, i.e. `s[i]` is set to `'a' + k - 1`. But since we need to find the lexicographically smallest string of length `n`, which is larger than the input string, we need to adjust all the characters in the range `[i+1 to n-1]` to form the lexicographically smallest string greater than the input string.

So, for every character in the range `[i+1 to n]` we need to replace it with the smallest character such that it doesn't form a palindrome. Since three consecutive characters can't be the same, for every character if its previous two characters are greater than `'c'`, then the character can be replaced with `'a'`. Otherwise, if its previous two characters are either `'a' or 'b' or 'c'`,  we can replace the character with the smallest character among `(a,b,c)` after removing the two previous characters from `(a,b,c)`.

Here we are taking only `(a,b,c)` because `3` consecutive characters must be different. And if we subtract the previous two chars from the set `(a,b,c)` and take its minimum, we get the smallest character such that it doesn't form a palindrome.


# Code
``` java []
class Solution {
    public String smallestBeautifulString(String s, int k) {
        char[] ch = s.toCharArray();
        int i = ch.length - 1;
        while (i >= 0) {
            ch[i]++;
            if (ch[i] - 'a' == k) {
                i--;
            } else if ((i - 1 < 0 || ch[i - 1] != ch[i]) && (i - 2 < 0 || ch[i - 2] != ch[i])) {
                break;
            }
        }
        if (i < 0) return "";
        for (int j = i + 1; j < ch.length; j++) {
            SortedSet<Character> set = new TreeSet<>(Arrays.asList('a', 'b', 'c'));
            if (j - 2 >= 0) set.remove(ch[j - 2]);
            if (j - 1 >= 0) set.remove(ch[j - 1]);
            ch[j] = set.first();
        }
        return new String(ch);
    }
}
```
``` cpp []
class Solution {
public:
    string smallestBeautifulString(string s, int k) {
        array<char, 3> alphabet = { 'a', 'b', 'c' };
        string result = s;
        int i = s.length() - 1;
        
        while (i >= 0) {
            result[i]++;
            if (result[i] - 'a' == k) {
                i--;
            } else if ((i - 1 < 0 || result[i - 1] != result[i]) && (i - 2 < 0 || result[i - 2] != result[i])) {
                break;
            }
        }
        
        if (i < 0) {
            return "";
        }
        
        for (int j = i + 1; j < result.length(); j++) {
            set<char> alphabet_set(alphabet.begin(), alphabet.end());
            if (j - 2 >= 0) {
                alphabet_set.erase(result[j - 2]);
            }
            if (j - 1 >= 0) {
                alphabet_set.erase(result[j - 1]);
            }
            result[j] = *alphabet_set.begin();
        }
        
        return result;
    }
};
```
``` javascript []
var smallestBeautifulString = function(s, k) {
    let ch = s.split('');
    let i = ch.length - 1;
    while (i >= 0) {
        ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 1);
        if (ch[i].charCodeAt(0) - 'a'.charCodeAt(0) === k) {
            i--;
        } else if ((i - 1 < 0 || ch[i - 1] !== ch[i]) && (i - 2 < 0 || ch[i - 2] !== ch[i])) {
            break;
        }
    }
    if (i < 0) {
        return '';
    }
    for (let j = i + 1; j < ch.length; j++) {
        let set = new Set(['a', 'b', 'c']);
        if (j - 2 >= 0 && set.has(ch[j - 2])) {
            set.delete(ch[j - 2]);
        }
        if (j - 1 >= 0 && set.has(ch[j - 1])) {
            set.delete(ch[j - 1]);
        }
        ch[j] = Array.from(set)[0];
    }
    return ch.join('');
};
```