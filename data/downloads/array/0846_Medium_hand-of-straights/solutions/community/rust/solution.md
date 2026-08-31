# a few solutions

**Author:** claytonjwong
**Votes:** 1
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/135634/](https://leetcode.com/problems/hand-of-straights/solutions/135634/)

---

# Game Plan

Greedily consume values from a counter `cnt` of values in the array `A`, ie. iteratively take each minimum value `start` and make a "run" of target `T` size based upon an `offset = 0..T-1` inclusive.

# Code

*Kotlin*
```
class Solution {
    fun isNStraightHand(A: IntArray, T: Int): Boolean {
        var cnt = mutableMapOf<Int, Int>()
        for (x in A)
            cnt[x] = 1 + (cnt[x] ?: 0)
        while (0 < cnt.size) {
            var start = cnt.keys.min()
            for (offset in 0..T-1) {
                var x = start + offset
                if (!cnt.contains(x))
                    return false
                cnt[x] = cnt[x]!! - 1
                if (cnt[x]!! == 0)
                    cnt.remove(x)
            }
        }
        return true
    }
}
```

*Javascript*
```
let isNStraightHand = (A, T, cnt = new Map()) => {
    for (let x of A)
        cnt.set(x, 1 + (cnt.get(x) || 0));
    while (cnt.size) {
        let start = Math.min(...cnt.keys());
        for (let offset = 0; offset < T; ++offset) {
            let i = start + offset;
            if (!(cnt.get(i) || 0)) {
                return false;
            }
            cnt.set(i, cnt.get(i) - 1);
            if (!cnt.get(i))
                cnt.delete(i);
        }
    }
    return true;
};
```

*Python3*
```
class Solution:
    def isNStraightHand(self, A: List[int], T: int) -> bool:
        cnt = Counter(A)
        while len(cnt):
            start = min(cnt.keys())
            for offset in range(T):
                x = start + offset
                if 1 <= cnt[x]:
                    cnt[x] -= 1
                    if not cnt[x]:
                        del cnt[x]
                else:
                    return False
        return True
```

*Rust*
```
// TODO: implement me!
use std::collections::HashMap;
impl Solution {
    pub fn is_n_straight_hand(A: Vec<i32>, T: i32) -> bool {
        let mut cnt = HashMap::new();
        for x in A {
            *cnt.entry(x.clone()).or_insert(0) += 1;
        }
        while 0 < cnt.len() {
            let start = cnt.keys().min().unwrap();
            for offset in 0..T {
                let x = start + offset;
                if !cnt.contains_key(&x) {
                    return false;
                }
                *cnt.entry(x).or_insert(0) -= 1;
                if *cnt.entry(x).or_insert(0) == 0 {
                    cnt.remove(&x);
                }
            }
        }
        true
    }
}

// Line 15: Char 18: error: cannot borrow `cnt` as mutable because it is also borrowed as immutable (solution.rs)
//    |
// 9 |             let start = cnt.keys().min().unwrap();
//    |                         --- immutable borrow occurs here
// 10 |             for offset in 0..T {
// 11 |                 let x = start + offset;
//    |                         ----- immutable borrow later used here
// ...
// 15 |                 *cnt.entry(x).or_insert(0) -= 1;
//    |                  ^^^^^^^^^^^^ mutable borrow occurs here
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using Counter = unordered_map<int, int>;
    bool isNStraightHand(VI& A, int T, Counter cnt = {}) {
        for (auto x: A)
            ++cnt[x];
        while (cnt.size()) {
            auto start = 1234567890;
            for (auto [key, _]: cnt)
                start = min(start, key);
            for (auto offset{ 0 }; offset < T; ++offset) {
                auto x = start + offset;
                if (!cnt[x])
                    return false;
                if (!--cnt[x])
                    cnt.erase(x);
            }
        }
        return true;
    }
};
```