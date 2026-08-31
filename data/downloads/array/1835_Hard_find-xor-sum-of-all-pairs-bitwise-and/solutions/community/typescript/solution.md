# Find XOR Sum of All Pairs Bitwise AND

**Author:** Doox911
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/3380142/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/3380142/)

---

# Code
```
// function getXORSum(arr1: number[], arr2: number[]): number {
//   let sum = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       sum ^= arr1[i] & arr2[j]
//     }
//   }

//   return sum;
// };

function getXORSum(arr1: number[], arr2: number[]): number {
  let s1 = 0;
  let s2 = 0;

  let len = arr1.length > arr2.length ? arr1.length : arr2.length

  while(len) {
    if (arr1[len - 1]) {
      s1 ^= arr1[len - 1] 
    }
    
    if (arr2[len - 1]) {
      s2 ^= arr2[len - 1] 
    }

    len--
  }
  
  return s1 & s2;
};
```