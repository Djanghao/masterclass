# [C++, Java, Python] Intuitive Thinking Process | Greedy | Sort

**Author:** shivamaggarwal513
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4708767/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4708767/)

---

# Intuition

For two words in array (may be same), we can swap any two characters between them. So, we are allowed to rearrange literally **any** character of **any** word **anywhere** we want. This is quite a big relaxation they are giving us.

There is only one thing that we can not change. It is the length of each word that will always remain same because we are not allowed to delete or insert anything.

For example, in `words = ["abbb","ba","aa"]`, lengths of words will always remain `[4, 2, 2]` respectively. Other than that, any position of any character can be anything, given we can do the operation any number of times (we are not asked to achieve this in minimum number of operations).

But, given that much relaxation, what is stopping us to make every word palindrome?

Suppose a case where every character (26 in total) has an even frequency, cumulative in all words. Here, every word can be made palindrome in some steps. Since every character has even frequency, they can be arranged in pairs at positions equi-distant from start and end of any word.

Problem starts when some characters have an odd frequency. We can make pairs in same way but 1 occurence will be left which will not have a partner. **This one occurence can only be used as a middle element in words of odd length.** There is no other way to consume it if we want a palindrome.

Let's define two variables

```
oddLength : number of words with odd lengths
            (ranges from [0, n] inclusive)
oddFreq   : number of characters with odd frequency
            (cumulative in all words)
            (ranges from [0, 26] inclusive)
```

If we have `oddFreq <= oddLength`, means we have enough words of odd lengths to accommodate 1 left out character at their middle index, then they can be still made palindrome.

But if we have `oddFreq > oddLength`, means we don't have enough words of odd lengths to accommodate all left out characters at their middle index, some characters will still be left to place. Note that here we have placed as many characters at middle index of odd length words as possible. Hence, there is no middle index in any word which is empty now, and we are left with `oddFreq - oddLength` characters.

In whichever word these left-out characters will go, that word will never be able to become a palindrome (because they are not in middle).

Hence, in order to maximize the number of palindromes, we want to minimize the number of words where these left-out characters will go. This can be done by placing as many as possible in one word. So we try to first take the largest word available.

If the largest word can accommodate all left-out characters, then we will return `n - 1`. Otherwise, we will go to second largest word for the remaining left-out characters, and so on.

# Code
```C++ []
class Solution {
public:
    int maxPalindromesAfterOperations(vector<string>& words) {
        int n = words.size(), oddLength = 0, result = n;
        vector<int> lengths, freq(26);
        for (string& word: words) {
            lengths.push_back(word.size());
            oddLength += lengths.back() & 1;
            for (char ch: word) {
                freq[ch - 'a']++;
            }
        }
        int oddFreq = count_if(freq.begin(), freq.end(), [](int x) { return x & 1; });
        int remaining = max(0, oddFreq - oddLength);
        sort(lengths.begin(), lengths.end(), greater<int>());
        for (int i = 0; i < n && remaining > 0; i++) {
            remaining -= lengths[i] - (lengths[i] & 1);
            result--;
        }
        return result;
    }
};
```
```Java []
class Solution {
    public int maxPalindromesAfterOperations(String[] words) {
        int n = words.length, oddLength = 0, oddFreq = 0, result = n;
        List<Integer> lengths = new ArrayList<>(n);
        int[] freq = new int[26];
        for (int i = 0; i < n; i++) {
            lengths.add(words[i].length());
            oddLength += lengths.get(i) & 1;
            for (char ch : words[i].toCharArray()) {
                freq[ch - 'a']++;
            }
        }
        for (int f: freq) {
            oddFreq += f & 1;
        }
        int remaining = Math.max(0, oddFreq - oddLength);
        Collections.sort(lengths, Collections.reverseOrder());
        for (int i = 0; i < n && remaining > 0; i++) {
            remaining -= lengths.get(i) - (lengths.get(i) & 1);
            result--;
        }
        return result;
    }
}
```
```Python []
class Solution:
    def maxPalindromesAfterOperations(self, words: List[str]) -> int:
        n, oddLength, result = len(words), 0, len(words)
        lengths, freq = [], [0] * 26
        for word in words:
            lengths.append(len(word))
            oddLength += lengths[-1] & 1
            for ch in word:
                freq[ord(ch) - ord('a')] += 1
        oddFreq = len(list(filter(lambda x: x & 1, freq)))
        remaining = max(0, oddFreq - oddLength)
        lengths.sort(reverse=True)
        for i in range(n):
            if remaining <= 0:
                break
            remaining -= lengths[i] - (lengths[i] & 1)
            result -= 1
        return result
```

###### **QnA**

**Why subtract one in case of odd length words (**`remaining -= lengths[i] - `**`(lengths[i] & 1)`)?**

It is to denote that middle index of every odd length word is used by some characters out of total `oddFreq` characters that could not find their pair. So now `oddFreq - oddLength` characters are remaining. Middle indices can not be used for these remaining ones, so I am subtracting them.

# Complexity
- Time complexity: $$O(n \\log n)$$
- Space complexity: $$O(n)$$