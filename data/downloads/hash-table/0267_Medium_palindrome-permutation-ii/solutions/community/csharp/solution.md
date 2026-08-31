# C# Dictionary + Backtracking

**Author:** nonox530
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/5324563/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/5324563/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(\\frac{n!}{P(a.freq, a.freq) P(b.freq, b.freq)...} \\frac{n}{2})$$

- Space complexity:
$$O(n)$$


# Code
```
using System.Runtime.CompilerServices;
using System.Text;

public class Solution {
    private List<string> answer = new List<string>();
    private Dictionary<char, int> hashing;
    private List<char> path = new List<char>();
    char? mid; // the 1 extra character. Might be null
    int len; // The expected length of palindrome.firstPart

    public IList<string> GeneratePalindromes(string s) {
        // a.freq = 4, b.freq = 6
        // aabbb   c   bbbaa
        // how many different permutations does aabbb have???  

        if (!CanGeneratePalinDromes(s)) {
            return [];
        }
        this.hashing = GetHalfHashing(s);
        this.mid = GetMidChar(s);
        this.len = s.Length / 2;

        backtracking();
        return answer;
    }

    private void backtracking () {
        if (path.Count == len) {
            string firstPart = new string(path.ToArray());
            string midPart = mid == null ? "" : mid.ToString();
            string lastPart = new string(firstPart.Reverse().ToArray());
            answer.Add(firstPart + midPart + lastPart);
            return;
        }

        foreach (var kv in hashing) {
            if (kv.Value == 0) continue;
            // select kv.key as the new character
            path.Add(kv.Key);
            hashing[kv.Key] --;
            backtracking();
            hashing[kv.Key] ++;
            path.RemoveAt(path.Count - 1);
        }
    }

    private bool CanGeneratePalinDromes(string s) {
        Dictionary<char, int> freq = new Dictionary<char, int>();
        foreach (char c in s) {
            freq[c] = freq.GetValueOrDefault(c) + 1;
        }

        int oddCount = 0;
        foreach (KeyValuePair<char, int> pair in freq) {
            if (pair.Value % 2 == 1) {
                oddCount ++;
                if (oddCount >= 2) return false;
            }
        }
        return true;
    }

    private Dictionary<char, int> GetHalfHashing(string s) {
        Dictionary<char, int> freq = new Dictionary<char, int>();
        StringBuilder sb = new StringBuilder();
        foreach (char c in s) {
            freq[c] = freq.GetValueOrDefault(c) + 1;
        }

        foreach (KeyValuePair<char, int> pair in freq) {
            if (pair.Value % 2 == 1) {
                freq[pair.Key] --;
                if (freq[pair.Key] == 0) {
                    freq.Remove(pair.Key);
                } else {
                    freq[pair.Key] /= 2;
                }
            } else {
                freq[pair.Key] /= 2;
            }
        }
        return freq;
    }

    private char? GetMidChar(string s) {
        Dictionary<char, int> freq = new Dictionary<char, int>();
        StringBuilder sb = new StringBuilder();
        foreach (char c in s) {
            freq[c] = freq.GetValueOrDefault(c) + 1;
        }

        foreach (KeyValuePair<char, int> pair in freq) {
            if (pair.Value % 2 == 1) {
                return pair.Key;
            }
        }
        return null;
    }
}
```