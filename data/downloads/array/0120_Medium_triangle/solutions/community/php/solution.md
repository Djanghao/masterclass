# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 23
**Link:** [https://leetcode.com/problems/triangle/solutions/2040229/](https://leetcode.com/problems/triangle/solutions/2040229/)

---

**As a professional with a passion for problem-solving and collaboration, I am always looking to expand my network of like-minded individuals on LinkedIn. By connecting with me, we can work together to tackle complex challenges, share ideas, and grow both professionally and personally.**

**Whether you're an expert in your field or just starting out, I welcome connections from all backgrounds and experiences. By building a diverse and collaborative network, we can leverage our unique perspectives and skill sets to push the boundaries of what's possible.**

**So, if you're interested in connecting and exploring the potential for future collaborations, please don't hesitate to reach out. Let's start a conversation and see where it takes us!**

---

https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/

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
public int minimumTotal(List<List<Integer>> triangle) {
    int[] A = new int[triangle.size()+1];
    for(int i=triangle.size()-1;i>=0;i--){
        for(int j=0;j<triangle.get(i).size();j++){
            A[j] = Math.min(A[j],A[j+1])+triangle.get(i).get(j);
        }
    }
    return A[0];
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
   int minTotalUtil(vector<vector<int>>& triangle, int h, int j) {
        
       if(h == triangle.size()) {
             return 0;
        }  
        
        return triangle[h][j]+min(minTotalUtil(triangle, h+1, j),minTotalUtil(triangle, h+1, j+1));
    }
    int minimumTotal(vector<vector<int>>& triangle) {
         
          return minTotalUtil(triangle, 0, 0);
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
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        if not triangle:
            return 
        res = triangle[-1]
        for i in range(len(triangle)-2, -1, -1):
            for j in range(len(triangle[i])):
                res[j] = min(res[j], res[j+1]) + triangle[i][j]
        return res[0]
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
function minimumTotal(triangle: number[][]): number {
    if (triangle.length === 1) return triangle[0][0];
    
    let height = triangle.length - 2;
    
    for (let level: number = height; level >= 0; level--) {
        for (let col: number = 0; col < triangle[level].length; col++) {
            triangle[level][col] += Math.min(triangle[level + 1][col], triangle[level + 1][col + 1]);
        }
    }
    
    return triangle[0][0];
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
	fun minimumTotal(triangle: List<MutableList<Int>>): Int {
		val row = triangle.size
		for (idx in row-1 downTo 0) {
			val size = triangle[idx].size
			for (col in 0 until size-1) {
				val num1 = triangle[idx][col]
				val num2 = if (col+1<size) triangle[idx][col+1] else MAX_VALUE
				triangle[idx-1][col] += min(num1, num2)
			}
			if (size == 2) break
		}
		return triangle[0][0]
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
    func minimumTotal(_ triangle: [[Int]]) -> Int {
        let len = triangle.count
        guard len >= 1 && len <= 200 else { return 0 }
        var last = triangle.last!
        for i in stride(from: len - 2, through: 0, by: -1) {
            for j in 0...i { last[j] = min(last[j], last[j+1]) + triangle[i][j] }
        }
        return last[0]
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***