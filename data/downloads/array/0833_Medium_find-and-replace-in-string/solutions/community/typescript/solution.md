# Typescript Dict

**Author:** Oneia
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/4230838/](https://leetcode.com/problems/find-and-replace-in-string/solutions/4230838/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
    const map_source = new  Map();

    for (let i = 0; i < indices.length; i++) {
        const arr = map_source.get(indices[i]) ?? [];
        arr.push([sources[i], targets[i]])
        map_source.set(indices[i], arr);
    }

    let res = '';
    let i = 0;
    while (i < s.length) {
        if (map_source.has(i)) {
            let found_match = false;
            map_source.get(i).sort((a,b) =>  b[0].length - a[0].length)
            for (const examples of map_source.get(i)) {
                const [source, target] = examples;
                const check_str = s.substring(i, i + source.length);
                if (check_str === source) {
                    res += target;
                    i += source.length;
                    found_match = true;
                    break;
                }
            }
            if (!found_match) {
                res += s[i];
                i++;
            }
        } else {
            res += s[i];
            i++;
        }
    }

    return res;
};
```