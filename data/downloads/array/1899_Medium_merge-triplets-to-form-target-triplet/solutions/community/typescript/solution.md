# TypeScript: 12 lines, Straightforward

**Author:** dostapenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/5758076/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/5758076/)

---

Just check that all the target digits are present in given triplets, and ensure the remaining 2 numbers in prefiltered triplets don't exceed target values  

```ts
function mergeTriplets(triplets: number[][], target: number[]): boolean {
  const firstTargetDigitIdx = triplets.findIndex(
    (t) => t[0] === target[0] && t[1] <= target[1] && t[2] <= target[2]
  );
  const secondTargetDigitIdx = triplets.findIndex(
    (t) => t[1] === target[1] && t[0] <= target[0] && t[2] <= target[2]
  );
  const thirdTargetDigitIdx = triplets.findIndex(
    (t) => t[2] === target[2] && t[0] <= target[0] && t[1] <= target[1]
  );
  return ![firstTargetDigitIdx, secondTargetDigitIdx, thirdTargetDigitIdx].includes(-1);
}
````