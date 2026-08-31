# Easy JavaScript solution

**Author:** navyatjacob
**Votes:** 2
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4681185/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4681185/)

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
```
/**
 * @param {string} s
 * @return {string}
 */

var makeSmallestPalindrome = function(s) {
    let count=0;
    let arr=s.split('')
    let i=0,len=arr.length-1
    let reversed=arr.slice().reverse()
    while(i<=len && arr!=reversed){
        if(arr[i]==arr[len]){}
        else if(arr[i].charCodeAt(0)>arr[len].charCodeAt(0)){
            arr[i]=arr[len]
            count++
        }
        else if(arr[i].charCodeAt(0)<arr[len].charCodeAt(0)){
            arr[len]=arr[i]
            count++
        }i++;len--; }
    return arr.join('')};
```