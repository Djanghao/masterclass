# Typescript O(n)

**Author:** Sameer177
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/1928731/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/1928731/)

---

```
function prevPermOpt1(arr: number[]): number[] {
    let n = arr.length;
    let idx = n-2;
    while(idx >= 0) {
        if(arr[idx] > arr[idx+1]) break;
        idx--;
    }
    if(idx < 0) return arr;
    let j = idx+1;
    for(let i = idx+1; i < n; i++) {
        if(arr[i] < arr[idx] && arr[j] < arr[i]) j = i;
    }
    [arr[idx],arr[j]] = [arr[j],arr[idx]];
    return arr;
};