# JavaScript Clean & Optimal W/ Video Explanation

**Author:** manicardifr
**Votes:** 4
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1010352/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1010352/)

---

**Disclaimer**
This is not a video explaining how fenwick trees work.
This is just my experience with this hard problem, hopefully it will help you to understand it.
If you truly want to understand how fenwick trees work, then you're going to have to watch another in-depth video on the topic.

If you want a easier solution, take a look at square root decomposition instead of using a fenwick tree.
```
const createSortedArray = A => {
    let res = 0;
    let c = new Array(100001).fill(0);
    
    for(let i = 0; i< A.length; i++){
        res += Math.min(get(A[i]-1), i - get(A[i]));
        res %= 1000000007;
        update(A[i]);
    }
    return res;

    function update(x){
        for(; x < 100001; x += x & -x)
            c[x]++;
    }
    
    function get(x){
        let res = 0;
        
        for(;x >0; x-= x & -x)
                res += c[x];
        
        return res;
    }
}

```

<iframe width="560" height="315" src="https://www.youtube.com/embed/iJ2dQpEarbM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
