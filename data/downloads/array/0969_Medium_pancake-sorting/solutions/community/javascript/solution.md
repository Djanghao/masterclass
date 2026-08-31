# JavaScript, explanation.

**Author:** Netant007
**Votes:** 3
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/817960/](https://leetcode.com/problems/pancake-sorting/solutions/817960/)

---

Main Idea is to find position of max value and reverse array up to max value including, max value is first. Then reverse whole array, max value is last. Get next lower number and do same.
[3,2,4,1] max value is length of array = 4;
index of 4 is 2 (position 3). 3 is first value in result array arr[3];
Reverse up to including 4, [4,2,3,1], now 4 is first. 
We need to bring 4 to the end and leave 4 alone; 
Reverse whole array  [1,3,2,4].  arr[3,4]
Next number will be 3. Same again [3,1,2,4], [2,1,3,4].  arr[3,4,2,3]
Next 2. [1,2,3,4].   arr [3,4,2,3,2]

```
var pancakeSort = function(a, len, arr=[], max=a.length) {
    while(max>1){
        flip(a.indexOf(max));
        max--;  
    }
    function flip(indx){
        if(indx){
            for(let q=0; q<indx/2; q++){
                [[a[q], a[indx-q]] = [a[indx-q], a[q]]];
            };
            arr.push(indx+1);
        }
        len=max-1;
        for(let q=0; q<len/2; q++){
            [[a[q], a[len-q]] = [a[len-q], a[q]]];
        };
        arr.push(max);
    }
    return arr;
};
```