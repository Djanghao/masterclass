# Javascript Solution with comments and explanation

**Author:** user0657y
**Votes:** 14
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/342151/](https://leetcode.com/problems/cracking-the-safe/solutions/342151/)

---

To solve the problem we must generate a De Bruijn sequence which is the shortest sequence containing all possible combinations of a given set, for the current problem it would be every combination of length n  containing numbers from 0 to k - 1. The idea is to start with the first full combination as the starting point for our sequence and traverse every node once (a Euler walk) using a depth first traversal and append the last element of adjacent combinations to the sequence. I have included some addition resources below to give more context.

De Bruijn Sequence:
https://www.youtube.com/watch?v=iPLQgXUiU14

Euler Walk:
https://www.youtube.com/watch?v=TNYZZKrjCSk

Additional Resources:
https://www.geeksforgeeks.org/de-bruijn-sequence-set-1/


```
const crackSafe = (n, k) => {
    // If k and n equal 1 the only combination possible is 0.
    if (n === 1 && k === 1) return '0'
  
    // visited will keep track of all visited edges.
    const visited = new Set()
    
    // The De Bruijn Sequence that will be the output of the function.
    const seq = []
    
    // To generate a De Bruijn sequence we must traverse every combination of size n
    // containing the number from 0 to k - 1. We will start with the prefix of the 
    // combination with all 0s. If n equals 3 and k is greater than 1 our prefix would be
    // 00 and the first combination, our starting edge would be 000.
    const prefix = '0'.repeat(n - 1)
    
    // We will perform a depth first traveral until we visit every edge (combination)
    // while adding the last element of a combination to the sequence.
    dfs(prefix, seq, visited, k)
  
    // We append the original prefix to the sequence as the a De Bruijn sequence 
    // ends with the first combination. If we reverse the sequence it would still be 
    // valid and in that case would start with the first combination instead.
    seq.push(prefix)
  
    // Join the array to return the sequence as a string.
    return seq.join('')
}

const dfs = (prefix, seq, visited, k) => {
  for (let i = 0; i < k; i++) {
    // Generate a new combination using all the numbers from 0 to k - 1
    // this will give us all the edges that are adjacent to the previous
    // combination.
    const combination = prefix + i.toString()
    
    // Check if the current combination has been visited we skip it.
    if (visited.has(combination)) continue
    
    // If the current combination hasn't been visited add it to the visited set
    // so we do no revisit it.
    visited.add(combination)
    
    // Create a new prefix using the current combination
    // and continue the depth first traversal.
    dfs(combination.slice(1), seq, visited, k)
    
    // Add the last element of the visited combination to the sequence.
    seq.push(i)
  }
}
