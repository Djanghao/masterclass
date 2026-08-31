# [Javascript] Optimal Hungarian Algorithm in O(m*m*n)

**Author:** George_Chrysochoou
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1361588/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1361588/)

---

**Intuition**:

This may strike one as a bipartite graph problem, where the nodes of the left part are the students and the nodes of the right part are the mentors. Each node on the left is connected with every node on the right, with a cost equal to the count of the same answers for the student and each mentor respectively. Essentially we want to make an assignment such that the total cost is maximized. This is known as the assignment problem, and the fastest way of solving such a problem is the Kuhn Munkres algorithm, better known as the Hungarian algorithm. There are a ton of resources online for studying the Hungarian algorithm but I am not going to delve into its theory here, as it's quite lengthy. 

In any way, the assignment problem can be solved with easier ( yet less optimal complexity-wise) algorithms like Ford Fulkerson, and Hopcroft Karp.

**Process**

I first create an adjacency list between the students and the mentors, where A[i][j]= - (the count of the same answers of student i and mentor j).
The assignment problem is used to minimize the total cost, so in order to maximize it I need the edges to be negative.
I then execute the Hungarian algorithm and return the negative result. 
```
let HunFast=(GRAPH)=>{
    let a=[...Array(GRAPH.length)].map((d,i)=>[...GRAPH[i]])
    let A=(len)=>[...Array(len)].map(d=>0)
    a.unshift(A(a[0].length))
    for(let i=0;i< a.length;i++)
        a[i].unshift(0)
    let n=a.length-1,m=a[0].length-1,u=A(n+1), v=A(m+1), p=A(m+1), way=A(m+1);
    for (let i=1; i<=n; i++) {
        p[0] = i;
        var j0 = 0,minv=A(m+1).map(d=>Infinity),used=A(m+1).map(d=>false)
        do {
            used[j0] = true;
            var i0 = p[j0] ,  delta = Infinity,  j1;
            for (let j=1; j<=m;j++)
                if (!used[j]) {
                    let cur = a[i0][j]-u[i0]-v[j];
                    if (cur < minv[j])
                        minv[j] = cur,  way[j] = j0;
                    if (minv[j] < delta)
                        delta = minv[j],  j1 = j;
                }
            for (let j=0; j<=m;j++)
                if (used[j])
                    u[p[j]] += delta,  v[j] -= delta;
                else
                    minv[j] -= delta;
            j0 = j1;
        } while (p[j0] != 0);
        do {
            let j1 = way[j0];
            p[j0] = p[j1],j0 = j1
        } while (j0);
    }
    return -v[0]
}
var maxCompatibilitySum = function(S, M) {
    let m=S.length, A=[...Array(m)].map(d=>[...Array(m)])
    for(let i=0;i<m;i++ )
        for(let j=0;j<m;j++)
            A[i][j]=-S[i].reduce((a,c,k)=> a+ Number(c===M[j][k]),0)
    return -HunFast(A)
};

```