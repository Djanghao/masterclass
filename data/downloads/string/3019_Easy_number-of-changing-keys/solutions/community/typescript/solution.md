# Beginner-friendly solution.

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/5795043/](https://leetcode.com/problems/number-of-changing-keys/solutions/5795043/)

---

# Intuition
The problem is about counting how many times the user has changed keys while typing a string s. A change of key happens when two consecutive letters are different. However, uppercase and lowercase versions of the same letter are considered the same key due to the modifier rule (shift or caps lock doesn't count as a key change).

# Approach
1. First, we convert the entire string s to lowercase. This makes it easy to compare the letters while ignoring case differences.
2. Then, we split the string into an array of individual characters.
3. We iterate through the array, comparing consecutive characters.
4. Each time two consecutive characters are different, we count it as a key change.

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function countKeyChanges(s: string): number {

    const arr:string[] = s.toLowerCase().split('')
    let count : number = 0;
    
    for(let i=0; i<arr.length-1; i++){
        
        if(arr[i] !== arr[i+1]) count++;
    }

    return count;
    
};
```