# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 4
**Link:** [https://leetcode.com/problems/rotate-image/solutions/1990884/](https://leetcode.com/problems/rotate-image/solutions/1990884/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
class Solution {
    public void rotate(int[][] M) {
        int n = M.length, depth = n / 2;
        for (int i = 0; i < depth; i++) {
            int len = n - 2 * i - 1, opp = n - 1 - i;
            for (int j = 0; j < len; j++) {
                int temp = M[i][i+j];
                M[i][i+j] = M[opp-j][i];
                M[opp-j][i] = M[opp][opp-j];
                M[opp][opp-j] = M[i+j][opp];
                M[i+j][opp] = temp;
            }
        }
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    void rotate(vector<vector<int>>& M) {
        int n = M.size(), depth = n / 2;
        for (int i = 0; i < depth; i++) {
            int len = n - 2 * i - 1, opp = n - 1 - i;
            for (int j = 0; j < len; j++) {
                int temp = M[i][i+j];
                M[i][i+j] = M[opp-j][i];
                M[opp-j][i] = M[opp][opp-j];
                M[opp][opp-j] = M[i+j][opp];
                M[i+j][opp] = temp;
            }
        }
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def rotate(self, M: List[List[int]]) -> None:
        n = len(M)
        depth = n // 2
        for i in range(depth):
            rlen, opp = n - 2 * i - 1, n - 1 - i
            for j in range(rlen):
                temp = M[i][i+j]
                M[i][i+j] = M[opp-j][i]
                M[opp-j][i] = M[opp][opp-j]
                M[opp][opp-j] = M[i+j][opp]
                M[i+j][opp] = temp
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var rotate = function(M) {
    let n = M.length, depth = ~~(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = M[i][i+j]
            M[i][i+j] = M[opp-j][i]
            M[opp-j][i] = M[opp][opp-j]
            M[opp][opp-j] = M[i+j][opp]
            M[i+j][opp] = temp
        }
    }
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
fun rotate(matrix: Array): Unit {
var vik=Array(matrix.size){IntArray(matrix.size)}
for(i in 0..matrix.size-1)
{
var x=matrix.size-1
for(j in 0..matrix.size-1)
{
vik[i][j]=matrix[x][i]
x--
}
}
for(i in 0..matrix.size-1)
{

        for(j in 0..matrix.size-1)
        {
            matrix[i][j]=vik[i][j]
        }
    }
    
}
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func rotate(_ matrix: inout [[Int]]) {
        let times = matrix.count / 2

		for i in 0..<times {
			for j in 0..<matrix.count - i * 2 - 1 {
				let i1 = i
				let i2 = i + j
				let i3 = matrix.count - i - 1
				let i4 = matrix.count - i - 1 - j
				let j1 = i + j
				let j2 = matrix.count - i - 1
				let j3 = matrix.count - i - 1 - j
				let j4 = i
				let n1 = matrix[i1][j1]
				let n2 = matrix[i2][j2]
				let n3 = matrix[i3][j3]
				let n4 = matrix[i4][j4]
				matrix[i1][j1] = n4
				matrix[i2][j2] = n1
				matrix[i3][j3] = n2
				matrix[i4][j4] = n3
			}	
		}
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***