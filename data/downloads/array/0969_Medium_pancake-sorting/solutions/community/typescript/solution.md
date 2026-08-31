# Easy TS solution

**Author:** abhinavleadsquared
**Votes:** 0
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/5795271/](https://leetcode.com/problems/pancake-sorting/solutions/5795271/)

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
```typescript []
const findMax = (arr: number[]):number =>{
    let max=-1;
    let index=0;
    arr.forEach((element,i)=> {
        if(element > max){
            max=element;
            index=i;
        }
    });
    return index+1;
}

const reverseArr = (arr:number[]):number[]=> arr.reverse();


function pancakeSort(arr: number[]): number[] {
      let isSorted = true;
    for(let i=1;i<arr.length;i++){
        if(arr[i] < arr[i-1]) isSorted = false;
    }
    if(isSorted) return [];

    let res=[];
    let myArr = [...arr];
    let constrant=myArr.length;
    while(constrant>1){
        let k = findMax(myArr.slice(0,constrant));
        if (k !== constrant) {
            if (k > 1) {
                res.push(k);  
                myArr = [...reverseArr(myArr.slice(0, k)), ...myArr.slice(k)];
            }
            res.push(constrant);
            myArr = [...reverseArr(myArr.slice(0, constrant)), ...myArr.slice(constrant)];
        }
        constrant--
    }
    return res;
};
```