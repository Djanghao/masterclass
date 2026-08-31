# O(n) | TypeScript | JavaScipt

**Author:** sameeneeti
**Votes:** 4
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/4085194/](https://leetcode.com/problems/shuffle-string/solutions/4085194/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- The loop iterates through each character of the input string.
- For each character, it finds the corresponding index from the indices array.
- It then assigns the character from the input string to the corresponding position in the ans array based on the index.
- The characters in the ans array are joined to form the restored string.
- The restored string is then returned.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function restoreString(s: string, indices: number[]): string {
const n = s.length
const ans:string[] = []

for(let i=0; i<n; i++){
  
  const idx = indices[i] // Get the index from the indices array
  ans[idx]= s[i] // Assign the character from the input string at the corresponding index in the ans array
}

const str = ans.join('') // Join the characters in the ans array to form the restored string
return str
};
```