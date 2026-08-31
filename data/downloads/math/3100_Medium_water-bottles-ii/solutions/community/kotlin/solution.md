# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/5081509/](https://leetcode.com/problems/water-bottles-ii/solutions/5081509/)

---

# Game Plan

While we have one or more `full` bottles (or while we can exchange our `empty` bottles for a `full` bottle, ie. `empty >= need`), greedily `drink` all of the `full` bottles, transforming each `full` bottle into an `empty` bottle, then greedily exchange `empty` bottles while the quantity of `empty` bottles is greater-than-or-equal-to the quantity of bottles we `need` to exchange.


# Code

*Kotlin*
```java
class Solution {
    fun maxBottlesDrunk(full_: Int, need_: Int): Int {
        var (drink, empty) = Pair(0, 0)
        var (full, need) = Pair(full_, need_)
        while (0 < full || empty >= need) {
            drink += full
            empty += full
            full = 0
            while (empty >= need) {
                empty -= need
                ++full
                ++need
            }
        }
        return drink
    }
}
```

*Javascript*
```javascript
let maxBottlesDrunk = (full, need, drink = 0, empty = 0) => {
    while (full || empty >= need) {
        drink += full,
        empty += full,
        full = 0;
        while (empty >= need)
            empty -= need,
            ++full,
            ++need;
    }
    return drink;
};
```

*Python3*
```python
class Solution:
    def maxBottlesDrunk(self, full: int, need: int, drink = 0, empty = 0) -> int:
        while full or empty >= need:
            drink += full
            empty += full
            full = 0
            while empty >= need:
                empty -= need
                full += 1
                need += 1
        return drink
```

*Rust*
```
impl Solution {
    pub fn max_bottles_drunk(mut full: i32, mut need: i32) -> i32 {
        let (mut drink, mut empty) = (0, 0);
        while 0 < full || empty >= need {
            drink += full;
            empty += full;
            full = 0;
            while empty >= need {
                empty -= need;
                full += 1;
                need += 1;
            }
        }
        drink
    }
}
```

*C++*
```cpp
class Solution {
public:
    int maxBottlesDrunk(int full, int need, int drink = 0, int empty = 0) {
        while (full || empty >= need) {
            drink += full,
            empty += full,
            full = 0;
            while (empty >= need)
                empty -= need,
                ++full,
                ++need;
        }
        return drink;
    }
};
```