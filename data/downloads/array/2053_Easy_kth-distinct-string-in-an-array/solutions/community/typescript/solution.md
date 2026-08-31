# Kth Distinct String in an Array

**Author:** pritamleecode
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5593717/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5593717/)

---

# Intuition
- Count frequency of each string
- Identify distinct strings
- Return k-th distinct string

# Approach
- Create a **Map** to count number of occurrences of a string
- Add strings to the distinct array whos count is 1. Iterate through Map keys.
- If k is greater than distinct array return ''
- Else return (k - 1) th string from the distinct array  

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(n)

# Code
```
function kthDistinct(arr: string[], k: number): string {
    const dMap = new Map();
    for (let i = 0; i < arr?.length; i++){
        if(dMap.get(arr[i])){
            dMap.set(arr[i],dMap.get(arr[i]) + 1)
        }else{
            dMap.set(arr[i],1)
        }
    }
    const distinctEle = [];
    // for(let str of arr){
    for(let str of Array.from(dMap.keys())){
        if(dMap.get(str) === 1){
            distinctEle.push(str)
        }
    }
    return (distinctEle?.length < k) ? '' : distinctEle[k-1]
};
```