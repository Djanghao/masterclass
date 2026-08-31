# JavaScript | with no built-in tools

**Author:** Zhe1ka
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/2570920/](https://leetcode.com/problems/reverse-string-ii/solutions/2570920/)

---

```
function reverseStr(s: string, k: number): string {
    const arr = s.split('');
    
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = i + k - 1;
        
        while (left < right) {
            if (arr[right] === undefined) {
                right--;
                continue;
            }
            
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    
    return arr.join('');
};