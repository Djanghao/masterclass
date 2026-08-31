# Easy /alternative approach

**Author:** nishant-k
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/5695588/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/5695588/)

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
function removeDuplicates(s: string, k: number): string {
  const stack:string[] = [];
  let stackIndex:number = -1;
  for (let i:number = 0; i < s.length; i++) {
    stack.push(s[i]);
    stackIndex++;
    let kTimesDup:boolean = true;
    if (stack.length >= k) {
      for (let j:number = 0; j < k; j++) {
        if(stack[stackIndex] !== stack[stackIndex - j]) {
          kTimesDup = false;
          break;
        }
      }
      if (kTimesDup) {
        for (let j:number = 0; j < k; j++) {
          stack.pop();
          stackIndex--;
        }
      }
    };
  }
  return stack.join("");
};

```