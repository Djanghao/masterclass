# [Java/C++/Python] Greedy, Count Pairs

**Author:** lee215
**Votes:** 53
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4708841/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4708841/)

---

# **Intuition**
It is always easier to make shorter string palindrome.
<br>

# **Explanation**
Firstly, we calculate the length of every word
and sort them in ascending order.
This helps us optimize later steps.

Since we can freely rearrange characters,
we only care about the frequency of each character.
We count how many times each character appears,
and divide the count by two to find the number of character in pairs.

Then, we iterate through the sorted word lengths.
and determine how many pairs we require to build a palindrome.
If the length is odd,
we don't need to care about the character in the middle,
because it can be any character.
If we find a word that we cannot construct,
we break the loop,
and return the number of palindromes fullfilled up to now.
<br>

# **Complexity**
Time `O(nlogn)` for sort
Space `O(n)`
<br>

**Java**
```java
    public int maxPalindromesAfterOperations(String[] words) {
        int n = words.length, A[] = new int[n];
        for (int i = 0; i < n; ++i)
            A[i] = words[i].length();
        Arrays.sort(A);
        Map<Character, Integer> count = new HashMap<>();
        for (String w : words)
            for (char c : w.toCharArray())
                count.put(c, count.getOrDefault(c, 0) + 1);

        int pairs = 0;
        for (Map.Entry<Character, Integer> entry : count.entrySet())
            pairs += entry.getValue() / 2;
        for (int i = 0; i < n; i++)
            if ((pairs -= A[i] / 2) < 0)
                return i;
        return n;
    }
```

**C++**
```cpp
    int maxPalindromesAfterOperations(vector<string>& words) {
        vector<int> A;
        for (const string& w : words)
            A.push_back(w.length());
        sort(A.begin(), A.end());

        unordered_map<char, int> count;
        for (auto& w : words)
            for (char c : w)
                count[c]++;
        int pairs = 0, n = A.size();
        for (auto& p : count)
            pairs += p.second / 2;

        for (int i = 0; i < n; ++i)
            if ((pairs -= A[i] / 2) < 0)
                return i;
        return n;
    }
```

**Python**
```py
    def maxPalindromesAfterOperations(self, words: List[str]) -> int:
        count = Counter(c for w in words for c in w)
        A = sorted(map(len, words))
        pairs = sum(v // 2 for v in count.values())
        for i,a in enumerate(A):
            pairs -= a // 2
            if pairs < 0:
                return i
        return len(A)
```
