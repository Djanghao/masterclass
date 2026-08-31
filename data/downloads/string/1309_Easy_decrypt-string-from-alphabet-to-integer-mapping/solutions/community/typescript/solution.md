# 100% Faster JavaScript Solution, Time complexity: O(n), Space complexity: O(1)

**Author:** astiksarathe
**Votes:** 8
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/2776986/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/2776986/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function freqAlphabets(s: string): string {
    let ans = ""
    for(let i = s.length - 1; i>=0; i--){
        let code = s.charAt(i)
        if(code === "#"){
            code = s.charAt(i - 2) + s.charAt(i - 1) 
            i-=2
        }
        const num = parseInt(code);
        const val = String.fromCharCode(num + 96)
        ans = val + ans;

    }
    return ans

};
```