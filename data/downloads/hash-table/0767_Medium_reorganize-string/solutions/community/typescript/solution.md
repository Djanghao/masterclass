# 🚀 no count, no sort || O(n) time || O(1) space || Two Pointers

**Author:** xkatianx
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorganize-string/solutions/5721328/](https://leetcode.com/problems/reorganize-string/solutions/5721328/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Scan the sting from left to right until we find repetition, and then find an alternative at the right to replace it. 

# Approach
<!-- Describe your approach to solving the problem. -->
But the intuition will not work for cases like `ababccc`.
So we have to loop the whole string again to find alteratives.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
void swap (char* a, char* b) {
    *a ^= *b;
    *b ^= *a;
    *a ^= *b;
}

void reverse (char* left, char* right) {
    while (left < right) swap(left++, right--);
}

char* foo(char* s) {
  char* left = s + 1;
  char* right = s + 2;
  while (*left != '\\0') {
    if (*left == *(left - 1)) {
      while (*right == *left) right++;
      if (*right == '\\0') break;
      swap(left, right);
    }
    if (right < ++left) right++;
  }
  return left;
}

char* reorganizeString(char* s) {
    int n = strlen(s);
    char* end = foo(s);
    if (*end == '\\0') return s;
    reverse(s, end - 1);
    reverse(end, s + n - 1);
    reverse(s, s + n - 1);
    char* end2 = foo(s);
    if (*end2 == '\\0') return s;
    return s + n;
}

```
```typescript []
function reorganizeString(s: string): string {
  const str = Array.from(s);
  const i = foo(str);

  const str2 = str.splice(i);
  str2.push(...str);
  const i2 = foo(str2);

  return i2 === s.length ? str2.join("") : "";
}

function foo(arr: string[]) {
  let left = 1;
  let right = 2;
  while (left < arr.length) {
    if (arr[left] === arr[left - 1]) {
      while (arr[right] === arr[left]) right++;
      if (right >= arr.length) break;
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    left++;
    if (right < left) right++;
  }
  return left;
}

```