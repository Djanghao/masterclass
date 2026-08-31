# a few solutions

**Author:** claytonjwong
**Votes:** 3
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/686410/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/686410/)

---

# Game Plan

## \uD83D\uDCB0  Greedy Drop K Least Frequent via \uD83D\uDDFA  Map
    
Use a map `m` to track the frequency of each value `x` in the input array `A`.  Then sort `A` by ascending frequency, so the numbers at the beginning occur less frequently and the numbers at the end occur more frequently.  Greedily drop the first `K` least frequent `x` and return the cardinality of the remaining set.

---

**Contest 193 Screenshare:** https://www.youtube.com/watch?v=jZ2Ea3KMAP8&feature=youtu.be

---

*Kotlin*
```
class Solution {
    fun findLeastNumOfUniqueInts(A: IntArray, K: Int): Int {
        var m = mutableMapOf<Int, Int>()
        A.forEach { x -> m[x] = if (m.contains(x)) m[x]!! + 1 else 1 }
        return A.sortedWith(Comparator{ a: Int, b: Int -> if (m[a] == m[b]) a - b else m[a]!! - m[b]!! })
                .slice(K..A.lastIndex).distinct().size
    }
}
```

*Javascript*
```
let findLeastNumOfUniqueInts = (A, K, m = new Map()) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    A.sort((a, b) => m.get(a) == m.get(b) ? a - b : m.get(a) - m.get(b));
    return new Set(A.slice(K)).size
};
```

*Python3*
```
class Solution:
    def findLeastNumOfUniqueInts(self, A: List[int], K: int) -> int:
        m = Counter(A)
        A.sort(key = cmp_to_key(lambda a, b: a - b if m[a] == m[b] else m[a] - m[b]))
        return len(set(A[K:]))
```

*Rust*
```
use std::collections::{ HashMap, HashSet };
type VI = Vec<i32>;
type Map = HashMap<i32, i32>;
type Set = HashSet<i32>;
impl Solution {
    pub fn find_least_num_of_unique_ints(mut A: VI, K: i32) -> i32 {
        let m = A.clone().into_iter().fold(HashMap::new(), |mut m, x| { *m.entry(x).or_insert(0) += 1; m });
        A.sort_by(|a, b| if m.get(&a).unwrap() == m.get(&b).unwrap() { a.cmp(&b) } else { m.get(&a).unwrap().cmp(m.get(&b).unwrap()) });
        A[K as usize..].to_vec().into_iter().collect::<Set>().len() as i32
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using Map = unordered_map<int, int>;
    using Set = unordered_set<int>;
    int findLeastNumOfUniqueInts(VI& A, int K, Map m = {}) {
        for (auto x: A) ++m[x];
        sort(A.begin(), A.end(), [&](auto a, auto b) { return m[a] == m[b] ? a < b : m[a] < m[b]; });
        return Set{ A.begin() + K, A.end() }.size();
    }
};
```