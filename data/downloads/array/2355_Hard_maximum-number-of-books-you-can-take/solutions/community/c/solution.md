# Monostack and Sequence Sum

**Author:** votrubac
**Votes:** 34
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/2345939/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/2345939/)

---

If the number of books is increasing, we can take all books.

We build a monotonically increasing stack `ms`, tracking the current (`cur`) sum of books.

If the next shelf has less books, we pop all shelves with a larger number of books (decreasing `cur` accordingly). We store shelf indexes in the monostack, so that we can figure out how many shelves we popped.

> It's hard to see it at first, but we need to pop a shelf `j` if the number of books there is larger than `b[i] - (i - j)`. For the `[3,5,4]` example, we need to remove both `5` and `3` when inserting `4`, and the valid take would be `2, 3, 4`.

Having the number of books on the last shelf, and number of popped shelves, we can compute the number of books we can take using the sequence sum formula (`ssum`). 

> Say we popped 2 shelves, and the next shelf has 4 books. That means we can take 2, 3 and 4 books from the last three shelves (note that shelves we popped have enough books).

Finally, we add the current shelf to the stack, and add the sequence sum to `cur`.

We track and return the maximum value of `cur` among all takes.

**C++**
```cpp
long long ssum(long long l, int cnt) {
    return (l * (l + 1) - (l > cnt ? (l - cnt) * (l - cnt + 1) : 0)) / 2;
}
long long maximumBooks(vector<int>& b) {
    vector<int> ms;
    long long cur = 0, res = 0;
    for (int i = 0; i < b.size(); ++i) {
        while (!ms.empty() && b[i] - b[ms.back()] < i - ms.back()) {
            int j = ms.back(); ms.pop_back();
            cur -= ssum(b[j], ms.empty() ? j + 1: j - ms.back());
        }
        cur += ssum(b[i], ms.empty() ? i + 1 : i - ms.back());
        ms.push_back(i);
        res = max(cur, res);
    }
    return res;
}
```