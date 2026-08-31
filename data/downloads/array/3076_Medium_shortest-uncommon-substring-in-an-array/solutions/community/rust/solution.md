# a few solutions

**Author:** claytonjwong
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851228/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851228/)

---

# Game Plan

Brute-force consider all substrings `ss` starting at index `i` of length `k` for each `j`<sup>th</sup> string `s` of the input array `A` to formulate the answer `ans`.

We greedily "consume" the smallest substring, ie. if the `j`<sup>th</sup> string `s` contains a substring `ss` which is `ok`, then we add it to `good`.  We use `good` in case we need to lexicographically "break ties" between multiple `good` substrings `ss`, ie. `best = sorted(good)[0]`.

# Code

*Kotlin*
```
typealias VS = Array<String>
class Solution {
    fun shortestSubstrings(A: VS): VS {
        var ans = mutableListOf<String>()
        var ok = { j: Int, ss: String -> A.withIndex().all{ (i, s) -> s.indexOf(ss) == -1 || i == j } }
        for (j in 0 until A.size) {
            var (s, good) = Pair(A[j], mutableListOf<String>())
            for (k in 1..s.length) {
                for (i in 0..s.length - k) {
                    var ss = s.substring(i, i + k)
                    if (ok(j, ss))
                        good.add(ss)
                }
                if (0 < good.size)
                    break
            }
            ans.add(if (0 < good.size) good.sorted()[0] else "")
        }
        return ans.toTypedArray()
    }
}
```

*Javascript*
```
let shortestSubstrings = (A, ans = []) => {
    let ok = (j, ss) => A.every((s, i) => s.indexOf(ss) == -1 || i == j);
    for (let j = 0; j < A.length; ++j) {
        let [s, good] = [A[j], []];
        for (let k = 1; k <= s.length; ++k) {
            for (let i = 0; i + k <= s.length; ++i) {
                let ss = s.substring(i, i + k);
                if (ok(j, ss))
                    good.push(ss);
            }
            if (good.length)
                break;
        }
        ans.push(good.length ? good.sort((a, b) => a.localeCompare(b))[0] : '');
    }
    return ans;
};
```

*Python3*
```
class Solution:
    def shortestSubstrings(self, A: List[str]) -> List[str]:
        ans = []
        ok = lambda j, ss: all(s.find(ss) == -1 or i == j for i, s in enumerate(A))
        for j, s in enumerate(A):
            good = []
            for k in range(1, len(s) + 1):
                for i in range(0, len(s) - k + 1):
                    ss = s[i:i + k]
                    if ok(j, ss):
                        good.append(ss)
                if len(good):
                    best = sorted(good)[0]
                    ans.append(best)
                    break
            if not len(good):
                ans.append('')
        return ans
```

*Rust*
```
type VS = Vec<String>;
impl Solution {
    pub fn shortest_substrings(A: VS) -> VS {
        let mut ans = vec![];
        let ok = (|j, ss| A.iter().enumerate().all(|(i, s)| !s.contains(&ss) || i == j));
        for j in 0..A.len() {
            let (s, mut good) = (A[j].clone().chars().collect::<Vec<char>>(), vec![]);
            for k in 1..=s.len() {
                for i in 0..=s.len() - k {
                    let ss = &s[i..i + k].iter().collect::<String>();
                    if ok(j, ss.clone()) {
                        good.push(ss.clone());
                    }
                }
                if 0 < good.len() {
                    break;
                }
            }
            if 0 < good.len() {
                good.sort();
                let best = good[0].clone();
                ans.push(best);
            } else {
                ans.push(String::from(""));
            }
        }
        ans
    }
}
```

*C++*
```
class Solution {
public:
    using VS = vector<string>;
    VS shortestSubstrings(VS& A, VS ans = {}) {
        auto ok = [&](auto j, auto& ss) {
            return all_of(A.begin(), A.end(), [i = -1, &A, j, &ss](auto& s) mutable {
                ++i; return A[i].find(ss) == string::npos || i == j;
            });
        };
        for (auto j{ 0 }; j < A.size(); ++j) {
            auto [s, good] = make_pair(A[j], VS{});
            for (auto k{ 1 }; k <= s.size(); ++k) {
                for (auto i{ 0 }; i + k <= s.size(); ++i) {
                    auto ss = s.substr(i, k);
                    if (ok(j, ss))
                        good.push_back(ss);
                }
                if (!good.empty())
                    break;
            }
            ans.emplace_back(!good.empty() ? *min_element(good.begin(), good.end()) : string{});
        }
        return ans;
    }
};
```