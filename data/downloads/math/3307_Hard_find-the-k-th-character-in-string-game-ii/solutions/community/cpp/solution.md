# Mutations

**Author:** votrubac
**Votes:** 30
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846605/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846605/)

---

We need to find how many times the character `a` mutated to get to the position `k`.

We first determine the index `op` of the final operation: `log2(k)`. The size of the word would be `2 ^ (log2(k) + 1)`.
Now, we divide the word by half until only one character remains (`a`). If `k` is in the right half of the word:
- we increase the number of mutations if `operations[op]` is `1`.
- we subtract the half size of the word from `k` to move it to the "parent" character.

Finally, we apply `mutations` to `a` to get the result.

**C++**
```cpp
char kthCharacter(long long k, vector<int>& operations) {
    int mutations = 0;
    for (int op = log2(k); op >= 0; --op)
        if (k > 1LL << op) {
            k-= 1LL << op;
            mutations += operations[op];
        }
    return 'a' + mutations % 26;
}
```