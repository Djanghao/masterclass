# JavaScript faster than 100%

**Author:** donovanodom
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-transformation/solutions/2580902/](https://leetcode.com/problems/array-transformation/solutions/2580902/)

---

```
const transformArray = function(arr) {
    let set = true
    while(set){
        let dif = 0
        const ans = Array(arr.length - 1).fill(0)
        for(i = 0; i < arr.length; i++){
            if(i == 0 || i == arr.length - 1){
                ans[i] = arr[i]
            }else if(arr[i] < arr[i-1] && arr[i] < arr[i+1]){
                ans[i] = arr[i] + 1
                dif++
            }else if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
                ans[i] = arr[i] - 1
                dif++
            }else{
                ans[i] = arr[i]
            }
        }
        arr = ans
        if(!dif) set = false
    }
    return arr
}