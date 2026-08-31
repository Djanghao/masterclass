# ✅ JS with explanation

**Author:** TejveerSingh_13
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4721871/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4721871/)

---

**Intuition:**
The problem requires determining the count of subarrays in the given nums array that match the provided pattern. We aim to convert the nums array into a string format based on the pattern elements (-1, 0, 1) and utilize the Knuth-Morris-Pratt (KMP) algorithm to efficiently find the matching subarrays.

**Approach:**
1. Transform the nums array into a new array newNums, where each element represents the difference between consecutive elements according to the pattern.
2. Apply the KMP algorithm to newNums and the pattern array to count the matching subarrays.
	* For this, implement the Knuth-Morris-Pratt algorithm, which utilizes the concept of the longest prefix that is also a suffix (LPS) to efficiently find occurrences of the pattern within newNums.
	* Initialize two pointers i and j to iterate through newNums and pattern, respectively.
	* Compare elements at indices i and j, moving both pointers accordingly.
	* Increment the count when a match is found.
3. Return the count as the result.

**Complexity Analysis:**
**Time Complexity:** The time complexity of constructing the newNums array is O(n), and applying the KMP algorithm takes O(n) time. Hence, the overall time complexity is O(n).
**Space Complexity:** The space complexity is O(m), where m is the size of the pattern array, due to the additional space used for the LPS array.

**JavaScript Code:**
```javascript
var countMatchingSubarrays = function(nums, pattern) {
    let n = nums.length
    let newNums = new Array(n-1).fill(0)
    for(let i=0; i<n-1;i++){
        if(nums[i+1] > nums[i]) newNums[i] = 1
        else if(nums[i+1] == nums[i]) newNums[i] = 0
        else newNums[i] = -1
    }
    // console.log(newNums)
    return KMP(newNums, pattern)
    
};

function findLPS(pattern) {
  if (pattern == "") return 0;
  let lps = new Array(pattern.length).fill(0);
  let prevLps = 0,
    i = 1;
  while (i < pattern.length) {
    if (pattern[i] == pattern[prevLps]) {
      lps[i] = prevLps + 1;
      prevLps += 1;
      i += 1;
    } else if (prevLps == 0) {
      lps[i] = 0;
      i += 1;
    } else {
      prevLps = lps[prevLps - 1];
    }
  }
  return lps
}

function KMP(str, pattern){
    let lps = findLPS(pattern)
    let i=0, j=0, count = 0

    while(i<str.length){
        if(str[i] == pattern[j]){
            i++
            j++
        }else{
            if(j==0){
                i++
            }else {
                j = lps[j-1]
            }
        }
        if(j == pattern.length){
            //depending on what to do next change code here
            count++
            j= lps[j-1]
        }
    }
    return count
}
```

**Comments and optimizations are welcome!**