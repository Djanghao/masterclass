# Really liked this problem

**Author:** mrkarimoff
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5826661/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5826661/)

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
```typescript []
function digitSum(s: string, k: number): string {
  // make sure s string has more digits than size of k
  if (s.length <= k) return s;

  // 1. Divide s into consecutive groups of size k
  //    and put them into sGroups array
  const sGroups: string[] = [];
  for (let i = 0; i < s.length; i += k) {
    sGroups.push(s.slice(i, k + i));
  }

  // 2. Replace each group of s with a string
  //    representing the sum of all its digits
  //    by using eval function, and merge them together
  const calculatedSGroups = sGroups.map((group) => {
    const groupWithPlus = group.split("").join("+");
    return eval(groupWithPlus);
  });
  const result = calculatedSGroups.join("");

  // If the length of the resulted string is greater than k,
  // repeat from start by calling the function recursively.
  if (result.length > k) {
    return digitSum(result, k);
  }
  // otherwise return the result
  return result;
}
```