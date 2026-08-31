# a few solutions

**Author:** claytonjwong
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/987305/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/987305/)

---

# Game Plan

There are 2 use cases when we get "stuck":

1. all student preferences are `1` but the next available sandwich is `0`
2. all student preferences are `0` but the next available sandwich is `1`

Thus, we can use a map `m` to count the student preferences of `0` and `1`, perform a linear scan for each next available sandwich (which is greedily "consumed"), and decrement the corresponding student preference count.  What's leftover is the remaining count of student preferences.

# Code

*Kotlin*
```
class Solution {
    fun countStudents(students: IntArray, sandwiches: IntArray): Int {
        var m = mutableMapOf<Int, Int>()
        for (x in students)
            m[x] = 1 + (m[x] ?: 0)
        for (x in sandwiches) {
            if (m[x] ?: 0 == 0)
                break
            m[x] = -1 + m[x]!!
        }
        return m.values.sum()
    }
}
```

*Javascript*
```
let countStudents = (students, sandwiches, m = new Map()) => {
    for (let x of students)
        m.set(x, 1 + (m.get(x) || 0));
    for (let x of sandwiches) {
        if (!m.get(x))
            break;
        m.set(x, -1 + (m.get(x) || 0));
    }
    return _.sum([...m.values()]);
};
```

*Python3*
```
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        m = Counter(students)
        for x in sandwiches:
            if not m[x]:
                break
            m[x] -= 1
        return sum(m.values())
```

*Rust*
```
type VI = Vec<i32>;
use std::collections::HashMap;
impl Solution {
    pub fn count_students(students: VI, sandwiches: VI) -> i32 {
        let mut m = HashMap::new();
        for x in students {
            *m.entry(x).or_insert(0) += 1;
        }
        for x in sandwiches {
            if *m.entry(x).or_insert(0) == 0 {
                break;
            }
            *m.entry(x).or_insert(0) -= 1;
        }
        m.values().sum()
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using Map = unordered_map<int, int>;
    int countStudents(VI& students, VI& sandwiches, Map m = {}) {
        for (auto x: students)
            ++m[x];
        for (auto x: sandwiches) {
            if (!m[x])
                break;
            --m[x];
        }
        return m[0] + m[1];
    }
};
```