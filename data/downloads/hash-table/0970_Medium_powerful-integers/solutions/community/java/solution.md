# JS, Python, Java, C++ | Simple Iterative Set Solution w/ Explanation

**Author:** sgallivan
**Votes:** 18
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/1183595/](https://leetcode.com/problems/powerful-integers/solutions/1183595/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem is a pretty straightforward one. Since we need to return all powerful integers and not just a count of them, there aren't many shortcuts we can take; we'll have to actually come up with the solution iteratively with nested loops.

First, we can use a **set** structure (**ans**) to prevent duplicate answers. Then we can have our nested loops increment the power of the **x** and **y** values while adding the appropriate results to our set.

One somewhat tricky situation occurs when one or more of the values is a **1**, as that power will continue to be **1** forever, regardless of the exponent. To deal with that, we can force each nested loop to **break** after the first iteration if its original value was a **1**.

Once we've iterated over all possible combinations, we can convert **ans** to an array and **return** it.

---

#### ***Implementation:***

There are only minor differences in the code of each language.

---

#### ***Javascript Code:***
```javascript
var powerfulIntegers = function(x, y, bound) {
    let ans = new Set()
    for (let xi = 1; xi < bound; xi *= x) {
        for (let yj = 1; xi + yj <= bound; yj *= y) {
            ans.add(xi + yj)
            if (y === 1) break
        }
        if (x === 1) break
    }
    return Array.from(ans)
}
```

---

#### ***Python Code:***
```python
class Solution:
    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:
        ans, xi = set(), 1
        while xi < bound:
            yj = 1
            while xi + yj <= bound:
                ans.add(xi + yj)
                if y == 1: break
                yj *= y
            if x == 1: break
            xi *= x
        return list(ans)
```

---

#### ***Java Code:***
```java
class Solution {
    public List<Integer> powerfulIntegers(int x, int y, int bound) {
        Set<Integer> ans = new HashSet<>();
        for (int xi = 1; xi < bound; xi *= x) {
            for (int yj = 1; xi + yj <= bound; yj *= y) {
                ans.add(xi + yj);
                if (y == 1) break;
            }
            if (x == 1) break;
        }
        return new ArrayList<Integer>(ans);
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    vector<int> powerfulIntegers(int x, int y, int bound) {
        unordered_set<int> ans;
        for (int xi = 1; xi < bound; xi *= x) {
            for (int yj = 1; xi + yj <= bound; yj *= y) {
                ans.insert(xi + yj);
                if (y == 1) break;
            }
            if (x == 1) break;
        }
        return vector<int>(ans.begin(), ans.end());
    }
};
```