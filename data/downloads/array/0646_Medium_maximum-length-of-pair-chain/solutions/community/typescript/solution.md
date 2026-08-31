# 100% Beats : Simple For Loop Approch

**Author:** gajeraravi42
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3962988/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3962988/)

---

# Approach
- First we gonna sort pair by last number of pair.
- Then will use for loop to compare last number of first pair and first number of second pair if condition true then will increment counter by 1 and in next iteration our first pair will be current indexed pair.

# Complexity
- Time complexity := O(n)

- Space complexity := O(n)

# Code
```
function findLongestChain(pairs: number[][]): number {
let  sortedPairs = pairs.sort((x, y) => x[1] - y[1]);

 let longestPair = 1;
 let tempNumber = sortedPairs[0]

 for(let i = 1; i< sortedPairs.length; i++){
   if(tempNumber[1] < sortedPairs[i][0]){
     longestPair++;
     tempNumber = sortedPairs[i]
   }
 }

 return longestPair
};
```