# my solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5169624/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5169624/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We split each element in nums to an array then we iterate over it and we select the maximum value and push it to the result array with the same length as the original element and get the sum
# Complexity
- Time complexity: 88ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: 57.14mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function sumOfEncryptedInt(nums: number[]): number {
  let arr = nums.map(e => e.toString().split("").map(c => +c))
  let result = [] 

  for (let i = 0; i < arr.length; i++) {
      let maxValue = Math.max(...arr[i])
      result.push(new Array(arr[i].length).fill(maxValue))
    }
  return result.map(e => +e.join().replace(/,/g, '')).reduce((sum, e) => sum + e, 0)
}
```