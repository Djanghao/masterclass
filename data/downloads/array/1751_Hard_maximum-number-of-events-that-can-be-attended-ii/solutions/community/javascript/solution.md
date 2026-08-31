# [Javascript] DP+ Smart processing O( N*(K+logN) )

**Author:** George_Chrysochoou
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/1052467/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/1052467/)

---

This is a dp problem that requires smart processing of states. 
Let us first start with the naive approach.

Each interval is a tuple [**start,end,val**]
if we first sort by **ascending start**, we can consider a state as :
```
dp[k][i]=The maximum value I can achieve if the k-th choice is the i-th interval
```
There is only one way to compute this, and it is to consider all **previous states** 
```
dp[k-1][j], where j corresponds to another interval [start2,end2] AND end2<start
```
We can only use intervals that end before the current interval we re processing. 

So what we can do, is consider all possible intervals that end before my current one
```
	for(k=1;k<=K;k++)
		for(let i=0;i<n;i++)
			for(let j=0;j<n;j++)
				if( end[j] < start[i])
					dp[k][i]=Math.max(dp[k][i], dp[k-1][j]+val[i])
```
this will however, most likely **TLE**

What we can notice instead, is that we process tuples in a very specific way.
* The current items (i-loop) processes items with ascending starts, but the j loop essentially wants only items with **ascending ends**, that are smaller than start[i].
* Not only that, but each dp[k][i] picks **ONLY ONE** item out of the previous row, and that is the MAXIMUM dp[k-1][j] such that end[j]<start[i].

Now let us say that we have to calculate **dp[k][i]**, and **dp[k][i+1]**.
Now assume that dp[k][i] picked j1 as the maximum dp[k-1][j]. 
It follows, that whatever dp[k][i+1] picks out of the previous row as its optimal arg, **it has to be >=dp[k-1][j1]**
Why? Because we are already processing elements in ascending start, so start[i+1]>=start[i]
So dp[k][i+1] can pick any j that dp[k][i] can pick, plus maybe some more indices .
Therefore 
```
dp[k][i+1]= Math.max(
						dp[k][i+1],
						dp[k-1][j1]+val[i+1], //the optimal choice for dp[k][i]
						dp[k-1][j2]+val[i+1], // such that  end[j1]<end[j2]<start[i+1]
					)
```
Hmm, so if we process the items in ascending ends, we should be able to achieve linear complexity. 
How?
Say we had sorted the elements in ascending ends. let's name that array Z
You see from the above formula, **that each dp[k][i] processes up to some index of Z**. And it never goes back.
So for each i, we can keep processing elements until the last invariant holds, and that is  end[j1]<start[i+1]
By "processing elements" we mean that we find the maximum dp[k-1][j2] that we can. 

Here comes the main question that we need to ask ourselves. 
**How can I, even though I m processing dp[k] elements in ascending starts, calculate dp[k][i] from elements that are in ascending ends?**

We keep track of the index the element **used to have when it was in ascending start**, and keep reprocessing Z.
Each element of Z corresponds to some end, that end is ascending. But I need to know the index the current element had when it was originally sorted in ascending starts, because that's what dp[k-1] holds.

```
var maxValue = function(A, K) {
    A.sort((a,b)=>a[0]===b[0]?a[1]-b[1]:a[0]-b[0])
    A=A.map(([s,e,val],i)=>[s,e,val,i])
    let n=A.length,
		dp=[...Array(K+1)].map(d=>[...Array(n+1)].map(d=>0)),
		Z=[...A].sort((a,b)=>a[1]-b[1])
    for(let k=1;k<=K;k++ ){
        let indexOfZ=0,optimalPrevious=0
        for(let i=1;i<=n;i++){
            let [start,end,val,idx]=A[i-1]
            while(indexOfZ<n&& Z[indexOfZ][1]<start ){
                let originalIdx=Z[indexOfZ][3] //take the original index it used to have
                if(dp[k-1][originalIdx+1]>optimalPrevious)
                    optimalPrevious=dp[k-1][originalIdx+1]
                indexOfZ++
            }
            dp[k][i]=Math.max(val+optimalPrevious,dp[k][i]) //main dp computation
        }
    }
    return Math.max(...dp[K])
};
```
Time complexity is **O(n\\*k)**, because **we process Z only once**.
