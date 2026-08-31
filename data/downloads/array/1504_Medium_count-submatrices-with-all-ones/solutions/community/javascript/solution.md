# JavaScript Solution

**Author:** Seriously_Ridhi
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/720170/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/720170/)

---

```
var numSubmat = function(mat) {
    function findPrefix(p, arr, n, m) { 
        for (var i = 0; i < n; i++){ 
            for (var j = m - 1; j >= 0; j--) { 
                if (!arr[i][j]) 
                    continue; 
                if (j != m - 1) 
                    p[i][j] += p[i][j + 1]; 
                p[i][j] += arr[i][j] == true ? 1 : 0; 
            } 
        } 
    } 
    var n = mat.length;
    var m = mat[0].length;
    
    var p = new Array(n);
    for(var i=0;i<n;i++){
        p[i] = new Array(m).fill(0);
    }
    findPrefix(p, mat, mat.length, mat[0].length);
    var ans = 0; 
    for (var j = 0; j < m; j++){ 
        var i = n - 1;
        var q = []; 
        var to_sum = 0;
        while (i >= 0){ 
            var c = 0;
            while (q.length != 0 && q[q.length-1][0] > p[i][j]){ 
                to_sum -= (q[q.length-1][1] + 1) * (q[q.length-1][0] - p[i][j]);
                c += q[q.length-1][1] + 1; 
                q.pop(); 
            }
            to_sum += p[i][j];
            ans += to_sum;
            q.push([p[i][j], c]);
            i--; 
        } 
    } 
    return ans;
};
```