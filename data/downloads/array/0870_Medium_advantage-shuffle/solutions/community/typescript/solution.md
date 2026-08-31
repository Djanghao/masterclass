# Typescript O(nlogn) Simpler

**Author:** Sameer177
**Votes:** 0
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/1930076/](https://leetcode.com/problems/advantage-shuffle/solutions/1930076/)

---

```
function advantageCount(nums1: number[], nums2: number[]): number[] {
    let newNums2 = [];
    nums2.forEach((n,i) => newNums2.push([n,i]));
    newNums2.sort((a,b) => a[0]-b[0]);
    nums1.sort((a,b) => a-b);
    let n = newNums2.length;
    let [j,i] = [0,0];
    let res = new Array(n).fill(-1);
    let stack = [];
    while(j < n && i < n) {
        let [num1,num2] = [nums1[i],newNums2[j][0]];
        if(num1 > num2) {
            res[newNums2[j][1]] = num1;
            j++;
        } else {
            stack.push(num1);
        }
        i++;
    }
    res.forEach((n,i) => {
        if(n < 0) res[i] = stack.pop();
    })
    return res;
};