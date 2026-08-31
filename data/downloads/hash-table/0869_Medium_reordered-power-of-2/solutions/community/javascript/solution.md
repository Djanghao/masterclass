# JS, Python, Java, C++ | Easy, Short Solution w/ Explanation

**Author:** sgallivan
**Votes:** 58
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/1120106/](https://leetcode.com/problems/reordered-power-of-2/solutions/1120106/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The easiest way to check if two things are shuffled versions of each other, which is what this problem is asking us to do, is to sort them both and the compare the result.

In that sense, the easiest solution here is to do exactly that: we can convert **N** to an array of its digits, sort it, then compare that result to the result of the same process on each power of **2**.

Since the constraint upon **N** is **10e9**, we only need to check powers in the range **[0,29]**.

To make things easier to compare, we can always **join()** the resulting digit arrays into strings before comparison.

There are ways to very slightly improve the run time and memory here, but with an operation this small, it's honestly not very necessary.

---

#### ***Implementation:***

Python can directly compare the lists and Java can directly compare the char arrays without needing to join them into strings. C++ can sort the strings in-place without needing to convert to an array.

---

#### ***Javascript Code:***

The best result for the code below is **72ms / 38.8MB** (beats 100% / 44).
```javascript
var reorderedPowerOf2 = function(N) {
    let res = N.toString().split("").sort().join("")
    for (let i = 0; i < 30; i++)
        if ((1 << i).toString().split("").sort().join("") === res) return true
    return false
};
```

---

#### ***Python Code:***

The best result for the code below is **24ms / 14.1MB** (beats 98% / 76%).
```python
class Solution:
    def reorderedPowerOf2(self, N: int) -> bool:
        res = sorted([int(x) for x in str(N)])
        for i in range(30):
            if sorted([int(x) for x in str(1 << i)]) == res: return True
        return False
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 35.8MB** (beats 97% / 88%).
```java
class Solution {
    public boolean reorderedPowerOf2(int N) {
        char[] res1 = String.valueOf(N).toCharArray();
        Arrays.sort(res1);
        for (int i = 0; i < 30; i++) {
            char[] res2 = String.valueOf(1 << i).toCharArray();
            Arrays.sort(res2);
            if (Arrays.equals(res1, res2)) return true;
        }
        return false;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 5.8MB** (beats 100% / 99%).
```c++
class Solution {
public:
    bool reorderedPowerOf2(int N) {
        string res1 = to_string(N);
        sort(res1.begin(), res1.end());
        for (int i = 0; i < 30; i++) {
            string res2 = to_string(1 << i);
            sort(res2.begin(), res2.end());
            if (res1 == res2) return true;
        }
        return false;
    }
};
```