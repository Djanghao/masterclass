# Easy solution using Set data structure

**Author:** gyanendra2058
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-object-from-two-arrays/solutions/4532205/](https://leetcode.com/problems/create-object-from-two-arrays/solutions/4532205/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlog(n)). Set insertion has O(log(n)), retrival has O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function createObject(keysArr: JSONValue[], valuesArr: JSONValue[]): Record<string, JSONValue> {
    const set = new Set<string>();
    const obj = {}
    keysArr.forEach((key, index) => {
        if (!set.has(String(key))) {
            obj[String(key)] = valuesArr[index];
            set.add(String(key))
        }
    })
    return obj
};
```