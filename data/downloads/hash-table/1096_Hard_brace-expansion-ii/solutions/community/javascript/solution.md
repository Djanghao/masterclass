# Recursive expansion (best time + memory)

**Author:** jyrki
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/4020396/](https://leetcode.com/problems/brace-expansion-ii/solutions/4020396/)

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
/**
 * @param {string} expression
 * @return {string[]}
 */
function braceExpansionII(expression) {
  expression = `{${expression}}`;
  const maxIndex = expression.length - 1;
  let cursor = 0;
  function expand() {
    const result = [];
    let segment = [];
    let pending = '';
    for (; cursor < maxIndex; cursor++) {
      const char = expression[cursor];
      if (char === '{') {
        if (pending) {
          segment = combine(segment, [pending]);
          pending = '';
        }
        cursor++;
        segment = combine(segment, expand());
      } else if (char === '}') {
        break;
      } else if (char === ',') {
        if (pending) {
          segment = combine(segment, [pending]);
          pending = '';
        }
        if (segment.length) {
          result.push(...segment);
          segment.length = 0;
        }
      } else {
        pending += char;
      }
    }
    if (pending) {
      segment = combine(segment, [pending]);
    }
    if (segment.length) {
      result.push(...segment);
      segment.length = 0;
    }
    return result;
  }
  return expand().sort();
}

function combine(aArr, bArr) {
  let combined;
  if (!aArr.length) {
    combined = new Set(bArr);
  } else if (!bArr.length) {
    combined = new Set(aArr);
  } else {
    combined = new Set();
    for (const a of aArr) {
      for (const b of bArr) {
        combined.add(a + b);
      }
    }
  }
  return Array.from(combined);
}

```