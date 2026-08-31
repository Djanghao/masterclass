# ✅🔥EASY and FAST solution🔥✅||O(nlogn) TIME - O(n) SPACE||🚀

**Author:** UchihaKim
**Votes:** 1
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/3368620/](https://leetcode.com/problems/mice-and-cheese/solutions/3368620/)

---


# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
var miceAndCheese = function(reward1, reward2, k) {
    let arr=[];
    for(let i=0;i<reward1.length;i++){
        let x=reward1[i]-reward2[i];
        arr.push([x,i]);
    }
    arr.sort((a,b)=>b[0]-a[0]);
    let res=0;
    for(let i=0;i<reward1.length;i++){
        if(i<k) res+=reward1[arr[i][1]];
        else res+=reward2[arr[i][1]];    
    }
    return res;
    
};
```