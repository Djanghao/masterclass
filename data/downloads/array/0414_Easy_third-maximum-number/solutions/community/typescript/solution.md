# 2 Simple O(n) Solutions

**Author:** eddyhdzg
**Votes:** 10
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/1423354/](https://leetcode.com/problems/third-maximum-number/solutions/1423354/)

---

```
// Swap
// O(1) space
var thirdMax = function (nums) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;

  for (const num of nums) {
    if (num === first || num === second || num === third) continue;

    if (num > first) {
      [third, second, first] = [second, first, num];
    } else if (num > second) {
      [third, second] = [second, num];
    } else if (num > third) {
      third = num;
    }
  }

  return third === Number.MIN_SAFE_INTEGER ? first : third;
};
```

```
// Javascript Set
// O(n) space
var thirdMax = function (nums) {
  const set = new Set(nums);
  const first = Math.max(...set);
  if (set.size < 3) return first;
  set.delete(first);
  const second = Math.max(...set);
  set.delete(second);
  return Math.max(...set);
};
```


More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
