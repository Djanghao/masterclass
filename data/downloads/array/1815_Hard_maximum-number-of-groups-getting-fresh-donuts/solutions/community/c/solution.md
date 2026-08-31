# From O(n!) to O(2^n) to O((n/b)^b * b)

**Author:** 6cdh
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/1168243/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/1168243/)

---

My code is slow (200ms+, 30%) and compilcated, just works.

Firstly, I wrote a `O(n!)` brute force solution:

```c++
class Solution {
   public:
    int maxHappyGroups(int b, vector<int>& groups) {
        for (auto& g : groups) {
            g %= b;
        }

        const auto n = groups.size();
        vector p(n, 0);
        iota(p.begin(), p.end(), 0);

        int max_cnt = 0;
        do {
            int acc = 0;
            int cnt = 0;
            for (auto i : p) {
                if (acc % b == 0) {
                    acc = 0;
                    ++cnt;
                }
                acc += groups[i];
            }
            max_cnt = max(max_cnt, cnt);
        } while (next_permutation(p.begin(), p.end()));

        return max_cnt;
    }
};
```

Then use dynamic programming to optimize the brute force. `O(2^n)`.

Let function `MHG(S)` denote the max happy groups of set `S`, and function `sum(S)` is the sum of elements in `S`. We have this relation:

```
for element p in groups
	if (sum(S - p) % b == 0)
		MHG(S) = MHG(S - p) + 1
		sum(S) = groups[p]
	else
		MHG(S) = MHG(S - p)
		sum(S) = sum(S - p) + groups[p]
```

I use `pair<int, int>` to denote two functions and `vector<pair<int, int>> dp` to cache.
For example, `dp[i].first` is `MHG(i)`, `dp[i].second` is `sum(i)`.

```c++
class Solution {
   public:
    using pii = pair<int, int>;
    int maxHappyGroups(int b, vector<int>& groups) {
        for (auto& g : groups) {
            g %= b;
        }

        const auto n = groups.size();

        vector<pii> dp(1 << n);

        for (int i = 1; i != (1 << n); ++i) {
            for (int j = 0; j != n; ++j) {
                if ((i & (1 << j)) == 0) {
                    continue;
                }

                const auto s = i ^ (1 << j);
                pii p;
                if (dp[s].second % b == 0) {
                    p.first = dp[s].first + 1;
                    p.second = groups[j];
                } else {
                    p.first = dp[s].first;
                    p.second = dp[s].second + groups[j];
                }

                dp[i] = max(dp[i], p);
            }
        }

        return dp.back().first;
    }
};
```

It's still get TLE. To optimize it, notice that we can compress `groups` into `frequencies`.

For `groups = {1,3,2,5,2,2,1,6}` and `b = 4`, we mod each element by `b`, then get `{1,3,2,1,2,2,1,2}`.

For the dp solution above, we use binary to denote a set:

```
set s = {1,  3,  2,  1,  2,  2,  1,  2}
representation b = {b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]}
```

So `b = 01100001` means set `{3,2,2}`. In new solution, we convert `groups` to `frequencies`. So we have

```
{
0: 0,
1: 3,
2: 4,
3: 1
}
```

We can't use binary to denote this set. Instead, we use a weird base. For example,

```
decimal | new base | set
0 | 0000 | {}
1 | 0010 | {1}
2 | 0020 | {1, 1}
3 | 0030 | {1, 1, 1}
4 | 0100 | {2}
5 | 0110 | {2, 1}
6 | 0120 | {2, 1, 1}
7 | 0130 | {2, 1, 1, 1}
8 | 0200 | {2, 2}
...
39 | 1430 | {3, 2, 2, 2, 2, 1, 1, 1}
```

So that new representation have `b` digits, each digit has a different base.

Finally, my top-down solution:

```c++
class Solution {
   public:
    using pii = pair<int, int>;
    int maxHappyGroups(int b, vector<int>& groups) {
        vector freq(b, 0);
        for (auto g : groups) {
            ++freq[g % b];
        }

        vector<int> base; // base of each digit
        int possibilities = 1;
        for (auto f : freq) {
            base.push_back(possibilities);
            possibilities *= f + 1;
        }

        vector<pii> dp(possibilities, {-1, 0});
        dp[0] = {0, 0};

        auto r = f(possibilities - 1, freq, dp, base);
        return r.first;
    }

	// `id` is the digital encoding as stated above. It is used for indexing `dp`.
	// `freq` is the exact set that `id` represents.
    pii f(int id, vector<int>& freq, vector<pii>& dp, const vector<int>& base) {
        if (dp[id].first != -1) {
            return dp[id];
        }

        const auto b = freq.size();

        pii ma = {0, 0};
        for (int i = 0; i != b; ++i) {
            if (freq[i] == 0) {
                continue;
            }

            --freq[i];
            auto sub = f(id - base[i], freq, dp, base);
            ++freq[i];
            pii p;
            if (sub.second % b == 0) {
                p.first = sub.first + 1;
                p.second = i;
            } else {
                p.first = sub.first;
                p.second = sub.second + i;
            }

            ma = max(ma, p);
        }

        return dp[id] = ma;
    }
};
```

Bottom-up solution:

```c++
class Solution {
   public:
    using pii = pair<int, int>;
    int maxHappyGroups(int b, vector<int>& groups) {
        vector freq(b, 0);
        for (auto g : groups) {
            ++freq[g % b];
        }

        vector<int> base;
        int possibilities = 1;
        for (auto f : freq) {
            base.push_back(possibilities);
            possibilities *= f + 1;
        }

        vector<pii> dp(possibilities);
        vector encoding(b, 0);

        for (int i = 1; i != possibilities; ++i) {
            inc(encoding, freq);
            for (int j = 0; j != b; ++j) {
                if (freq[j] == 0 || encoding[j] == 0) {
                    continue;
                }

                const auto sub = dp[i - base[j]];
                pii p;
                if (sub.second % b == 0) {
                    p.first = sub.first + 1;
                    p.second = j;
                } else {
                    p.first = sub.first;
                    p.second = sub.second + j;
                }

                dp[i] = max(dp[i], p);
            }
        }

        return dp.back().first;
    }

	// Increase the new encoding by 1
    void inc(vector<int>& encoding, const vector<int>& freq) {
        ++encoding[0];
        for (int i = 0; encoding[i] > freq[i]; ++i) {
            encoding[i] -= freq[i] + 1;
            ++encoding[i + 1];
        }
    }
};
```

Time complexity: `O((n / b) ^ b * b)`.
Space: `O((n/b) ^ b)`.

Why `(n / b) ^ b`? To maximize `possibilities`, the elements of `groups` mod `b` should be the same (or as same as possible). That is `(n / b) ^ b`.

Please let me know if any incorrect or unclear.