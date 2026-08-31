# track all change

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/5266143/](https://leetcode.com/problems/valid-palindrome-iv/solutions/5266143/)

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
function makePalindrome(s: string): boolean {
    let diff = []
    let [l, r] = [0, s.length -1]
    let count = 0
    while(l < r){
        if (s[l] != s[r]){
            if( diff.length == 0){
                diff.push([s[l], s[r]])
            }else {
                let tempLength = diff.length

                diff = diff.filter(arr => !(arr[0] == s[r] && arr[1] == s[l]))
                if (diff.length == tempLength){
                    diff.push([s[l], s[r]])
                } else {
                    count ++
                }
                if ((count + diff.length) > 2){
                    return false
                }
            }
        }
        l ++ 
        r --
    }
    
    return true
};
```