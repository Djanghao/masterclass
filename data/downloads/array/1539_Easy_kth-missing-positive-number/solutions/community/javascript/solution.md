# [Javascript] 4 Methods: Set, Array, Bucket & Binary Search

**Author:** Lynn19950915
**Votes:** 19
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/2113768/](https://leetcode.com/problems/kth-missing-positive-number/solutions/2113768/)

---

**Set**: check if `set.has(i)`, O(n).
```
var findKthPositive = function(arr, k) {
    let i=1, set=new Set(arr);
    while(k>0){
        if(!set.has(i) && --k==0){return i};
        i++;
    }
};
```

**Array**: Since array is **sorted**, we can use a pointer`ind`to track, O(n).
```
var findKthPositive = function(arr, k) {
    let i=1, ind=0;
    while(k>0){
        if(ind<arr.length && arr[ind]==i){ind++}
        else if(--k==0){return i};
        i++;
    }
};
```

**Bucket**: 10^3 is small enough, O(2000).
> Note: `arr`.length & `k` both can up to 1000, so the size of bucket should be **2000**.

```
var findKthPositive = function(arr, k) {
    let bucket=new Array(2000).fill(0)
    for(let i=0; i<arr.length; i++){
        bucket[arr[i]-1]++;
    }
    for(let j=0; j<2000; j++){
        if(bucket[j]==0 && --k==0){return j+1};
    }
};
```

**Binary Search**: `arr[ind]`-`ind+1`= **# of missing numbers**, O(logn).
```
arr[i]   1 4 5 7 11
i+1      1 2 3 4 5  // if no number's missing, arr[i] should be i+1.
missing  0 2 2 3 6
```

```
var findKthPositive = function(arr, k) {
    let l=0, r=arr.length;
    while(l<r){
        let mid=l+Math.floor((r-l)/2);
        if(arr[mid]-mid-1<k){l=mid+1}
		else{r=mid};
    }
    return k+l;  // arr[l-1]+k-(arr[l-1]-(l-1)-1)
};
```

Thanks for your reading and **up-voting** :)

**\u2B50 Check [HERE](https://github.com/Lynn19950915/LeetCode_King) for my full Leetcode Notes ~**


