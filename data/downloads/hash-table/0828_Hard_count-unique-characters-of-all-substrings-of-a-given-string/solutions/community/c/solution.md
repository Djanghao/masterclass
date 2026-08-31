# [Java/C++/Python] One pass O(N)

**Author:** lee215
**Votes:** 1163
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/128952/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/128952/)

---

# **Foreword**
Quite similar to the question in [2262. Total Appeal of A String](https://leetcode.com/problems/total-appeal-of-a-string/discuss/1996390/), 
which I think slightly simpler than this question.
I also suggest you practicing that first.
I have the similar intuition and approach for both questions.
<br>

# **Intuition**
Let's think about how a character can be found as a unique character.

Think about string `"XAXAXXAX"` and focus on making the second `"A"` a unique character.
We can take `"XA(XAXX)AX"` and between `"()"` is our substring.
We can see here, to make the second "A" counted as a uniq character, we need to:
1. insert `"("` somewhere between the first and second `A`
2. insert `")"` somewhere between the second and third `A`

For step 1 we have `"A(XA"` and `"AX(A"`, 2 possibility.
For step 2 we have `"A)XXA"`, `"AX)XA"` and `"AXX)A"`, 3 possibilities.

So there are in total `2 * 3 = 6` ways to make the second `A` a unique character in a substring.
In other words, there are only 6 substring, in which this `A` contribute 1 point as unique string.


**Instead of** counting all unique characters and struggling with all possible substrings,
we can count for every char in S, how many ways to be found as a unique char.
We count and sum, and it will be out answer.
<br>

# **Explanation**
1. `index[26][2]` record last two occurrence index for every upper characters.
2. Initialise all values in `index` to `-1`.
3. Loop on string S, for every character `c`, update its last two occurrence index to `index[c]`.
4. Count when loop. For example, if "A" appears twice at index 3, 6, 9 seperately, we need to count:
    * For the first "A": (6-3) * (3-(-1))"
    * For the second "A": (9-6) * (6-3)"
    * For the third "A": (N-9) * (9-6)"
<br>

# **Complexity**
One pass, time complexity `O(N)`.
Space complexity `O(1)`.
<br>

**C++:**
```cpp
    int uniqueLetterString(string S) {
        int index[26][2], res = 0, N = S.length(), mod = pow(10, 9) + 7;
        memset(index, -1, sizeof(int) * 52);
        for (int i = 0; i < N; ++i) {
            int c = S[i] - 'A';
            res = (res + (i - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
            index[c][0] = index[c][1];
            index[c][1] = i;
        }
        for (int c = 0; c < 26; ++c)
            res = (res + (N - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
        return res;
    }

```

**Java:**
```java
    public int uniqueLetterString(String S) {
        int[][] index = new int[26][2];
        for (int i = 0; i < 26; ++i) Arrays.fill(index[i], -1);
        int res = 0, N = S.length(), mod = (int)Math.pow(10, 9) + 7;
        for (int i = 0; i < N; ++i) {
            int c = S.charAt(i) - 'A';
            res = (res + (i - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
            index[c] = new int[] {index[c][1], i};
        }
        for (int c = 0; c < 26; ++c)
            res = (res + (N - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
        return res;
    }

```

**Python:**
```py
    def uniqueLetterString(self, S):
        index = {c: [-1, -1] for c in ascii_uppercase}
        res = 0
        for i, c in enumerate(S):
            k, j = index[c]
            res += (i - j) * (j - k)
            index[c] = [j, i]
        for c in index:
            k, j = index[c]
            res += (len(S) - j) * (j - k)
        return res % (10**9 + 7)
```

