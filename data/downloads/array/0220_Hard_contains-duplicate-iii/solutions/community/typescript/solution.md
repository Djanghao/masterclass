# Javascript Solution | Two Approaches | BF | Sliding Window

**Author:** pmistry_
**Votes:** 2
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/2567804/](https://leetcode.com/problems/contains-duplicate-iii/solutions/2567804/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

**1) Brute Force Approach**

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
   for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])<=t && (Math.abs(i-j)<=k)){
                return true;
            }
        }
   }
    return false;
};
```


**2) Sliding Window Approach**

```
let containsNearbyAlmostDuplicate = (A, K, T, m = {}, abs = Math.abs) => {
    let N = A.length;
    if (N < 2)
        return false;
    let bucket = x => T ? Math.floor(x / T) : Math.floor(x / (T + 1));  // \u2B50\uFE0F +1 to avoid division by 0 when T == 0
    let ok = (i, j) => m[j] != undefined && abs(m[j] - A[i]) <= T;
    for (let i = 0; i < N; ++i) {
		// 1. check each j-th bucket for case 1 || case 2 || case 3
        let j = bucket(A[i]);
        if (ok(i, j - 1) || ok(i, j) || ok(i, j + 1))  // (\uD83D\uDC48 adjacent bucket to-the-left || \uD83C\uDFAF same bucket || adjacent bucket to-the-right \uD83D\uDC49)
            return true;
        // 2. slide window \uD83D\uDC49
        m[j] = A[i];                     // \u2705 add current value A[i] onto the window by mapping A[i] to the j-th bucket
        if (0 <= i - K) {
            let end = bucket(A[i - K]);  // \uD83D\uDEAB remove end value A[i - K] from window by removing mapping A[i - K] to end-th bucket which "fell off the end" of window of size K
            delete m[end];
        }  
    }
    return false;
};
```

Please refer below link for detail explanation:
https://leet-codes.blogspot.com/2022/09/219-contains-duplicate-ii.html
https://leet-codes.blogspot.com/2022/09/220-contains-duplicate-iii.html