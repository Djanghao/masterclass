# Hashmap + Sort + Binary Search + Recursion JS

**Author:** geeni_10
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886247/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886247/)

---


# Code
```
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const map = new Map()
    
    for (const char of word) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    
    let vals = [...map.values()]
    vals.sort((a, b) => a - b)
    
    const traverse = (index) => {
        if (index >= vals.length) return 0
        
        let tmp = 0
        const startIndex = binarySearch(vals, vals[index] + k + 1)
        for (let i = startIndex; i < vals.length; i++) {
            if (vals[i] - vals[index] <= k) continue
            tmp += (vals[i] - vals[index] - k)
        }
        
        return Math.min(tmp, vals[index] + traverse(index + 1))
    }
    
    return traverse(0)
};


let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```