# Execution beats 100%, Memory beats 100%, Clean code

**Author:** webguru77777
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3756245/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/3756245/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

- Track the count of zeros at odd index, zeros at even index, ones at odd index and ones at even index respectively
- The total number of flip operations would be the following:
```
min(
  |zerosAtOdd| + |onesAtEven|, // if the final result starts with zero
  |zerosAtEven| + |onesAtOdd|, // if the result starts with one
)
```
- For each shift, we track the above four counts:
  - For shifted number
    - If `n` is odd, its "index oddity" does not change
    - Otherwise, "index oddity" changes
  - For the rest elements, their "index oddity" are swapped, in other words, elements previously located at odd indices will be located at even indices, and vice versa

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

O(1)

# Code
```
function minFlips(s: string): number {
  const memo = [
    [0, 0],
    [0, 0],
  ];

  for (let i = 0; i < s.length; i++) {
    memo[s.charAt(i)][i & 1]++;
  }
  let ans = Math.min(memo[0][0] + memo[1][1], memo[0][1] + memo[1][0]);
  const isEvenLength = (s.length & 1) === 0;
  for (let i = 0; i < s.length; i++) {
    swap(memo[0], 0, 1);
    swap(memo[1], 0, 1);

    if (!isEvenLength) {
      memo[s.charAt(i)][1]--;
      memo[s.charAt(i)][0]++;
    }
    ans = Math.min(
      ans,
      Math.min(memo[0][0] + memo[1][1], memo[0][1] + memo[1][0])
    );
  }
  return ans;
}

function swap(arr: number[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

```