# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 3
**Link:** [https://leetcode.com/problems/mini-parser/solutions/5772721/](https://leetcode.com/problems/mini-parser/solutions/5772721/)

---

```Explanation []
authorslog.com/blog/aw46KFc7BX
```
# Code

```cpp []
// Assuming the NestedInteger class is defined like this:
// class NestedInteger {
// public:
//     NestedInteger() {};                     // Initializes an empty list
//     NestedInteger(int value) {};            // Initializes a single integer
//     bool isInteger() const;                 // Returns true if this NestedInteger holds a single integer
//     int getInteger() const;                 // Returns the single integer that this NestedInteger holds
//     void setInteger(int value);             // Set this NestedInteger to hold a single integer
//     void add(const NestedInteger &ni);      // Adds a NestedInteger element to this NestedInteger
//     const std::vector<NestedInteger> &getList() const; // Returns the nested list
// };

class Solution {
public:
    NestedInteger deserialize(const std::string &s) {
        std::istringstream iss(s);
        return parse(iss);
    }

private:
    NestedInteger parse(std::istringstream &iss) {
        if (iss.peek() == '[') {
            iss.get(); // Skip '['
            NestedInteger ni;
            while (iss.peek() != ']') {
                ni.add(parse(iss));
                if (iss.peek() == ',') {
                    iss.get(); // Skip ','
                }
            }
            iss.get(); // Skip ']'
            return ni;
        } else {
            int num;
            iss >> num;
            return NestedInteger(num);
        }
    }
};
```

```python []
# Assuming NestedInteger class is already defined with the following methods:
# - NestedInteger() initializes an empty nested list.
# - NestedInteger(int value) initializes a single integer.
# - void add(NestedInteger ni) adds a NestedInteger element to this NestedInteger.
# - bool isInteger() returns true if this NestedInteger holds a single integer.
# - int getInteger() returns the single integer that this NestedInteger holds, if it holds a single integer.
# - List[NestedInteger] getList() returns the nested list that this NestedInteger holds, if it holds a nested list.

class Solution:
    def deserialize(self, s: str) -> NestedInteger:
        a = json.loads(s)
        return self.dfs(a)

    def dfs(self, input) -> NestedInteger:
        if isinstance(input, int):
            return NestedInteger(input)
        l = NestedInteger()
        for e in input:
            l.add(self.dfs(e))
        return l
```

```java []
// Assuming NestedInteger class is already defined with the following methods:
// - NestedInteger() initializes an empty nested list.
// - NestedInteger(int value) initializes a single integer.
// - void add(NestedInteger ni) adds a NestedInteger element to this NestedInteger.
// - boolean isInteger() returns true if this NestedInteger holds a single integer.
// - Integer getInteger() returns the single integer that this NestedInteger holds, if it holds a single integer.
// - List<NestedInteger> getList() returns the nested list that this NestedInteger holds, if it holds a nested list.

public class Solution {
    public NestedInteger deserialize(String s) {
        Object parsed = parse(s);
        return dfs(parsed);
    }

    private Object parse(String s) {
        if (s.charAt(0) == '[') {
            List<Object> list = new ArrayList<>();
            int start = 1, depth = 0;
            for (int i = 1; i < s.length(); i++) {
                if (s.charAt(i) == '[') depth++;
                else if (s.charAt(i) == ']') depth--;
                else if (s.charAt(i) == ',' && depth == 0) {
                    list.add(parse(s.substring(start, i)));
                    start = i + 1;
                }
            }
            if (start < s.length() - 1) list.add(parse(s.substring(start, s.length() - 1)));
            return list;
        } else {
            return Integer.parseInt(s);
        }
    }

    private NestedInteger dfs(Object input) {
        if (input instanceof Integer) {
            return new NestedInteger((int) input);
        }
        NestedInteger ni = new NestedInteger();
        for (Object obj : (List<Object>) input) {
            ni.add(dfs(obj));
        }
        return ni;
    }
}
```

```javascript []
/**
 * @param {string} s
 * @return {NestedInteger}
 */
const deserialize = (s) => {
    let a = JSON.parse(s);
    return dfs(a);
};

const dfs = (input) => {
    if (Number.isInteger(input)) return new NestedInteger(input); // if (!Array.isArray(input)) return new NestedInteger(input); also works
    let l = new NestedInteger();
    for (const e of input) l.add(dfs(e));
    return l;
};
```