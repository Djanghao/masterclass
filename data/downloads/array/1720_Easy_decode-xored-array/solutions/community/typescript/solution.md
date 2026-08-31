# TypeScript/JavaScript O(n) solution

**Author:** halshar
**Votes:** 2
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/4081266/](https://leetcode.com/problems/decode-xored-array/solutions/4081266/)

---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$(not including the ans array)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function decode(encoded: number[], first: number): number[] {
  const n = encoded.length;
  const ans: number[] = [first];

  // the inverse of xor is xor
  // i.e if a ^ b = c then b ^ c = a
  // where c and a will have same value
  // in the given problem the first element
  // of the array is given, so we'll xor the
  // first element of both the array and then
  // push the result to the ans where it'll be
  // used in the next iterations
  for (let i = 0; i < n; i++) {
    ans.push(encoded[i] ^ ans[i]);
  }

  return ans;
};
```