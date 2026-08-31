# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 26
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/2040184/](https://leetcode.com/problems/pascals-triangle/solutions/2040184/)

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
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<List<Integer>>(numRows);
        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>(i+1);
            while (row.size() <= i) row.add(1);
            int mid = i >> 1;
            for (int j = 1; j <= mid; j++) {
                int val = ans.get(i-1).get(j-1) + ans.get(i-1).get(j);
                row.set(j, val);
                row.set(row.size()-j-1, val);
            }
            ans.add(row);
        }
        return ans;
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
vector<vector<int>> generate(int numRows) {
	vector<vector<int>> ret;
	for (int i = 0; i < numRows; i++) {
		vector<int> row(i + 1, 1);
		for (int j = 1; j < i; j++) {
			row[j] = ret[i - 1][j] + ret[i - 1][j - 1];
		}
		ret.push_back(row);
	}
	return ret;
}
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        ans = [None] * numRows
        for i in range(numRows):
            row, mid = [1] * (i + 1), (i >> 1) + 1
            for j in range(1, mid):
                val = ans[i-1][j-1] + ans[i-1][j]
                row[j], row[len(row)-j-1] = val, val
            ans[i] = row
        return ans
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var generate = function(numRows) {
    let ans = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        let row = new Uint32Array(i+1).fill(1),
            mid = i >> 1
        for (let j = 1; j <= mid; j++) {
            let val = ans[i-1][j-1] + ans[i-1][j]
            row[j] = val, row[row.length-j-1] = val
        }
        ans[i] = row
    }
    return ans
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
  fun generate(numRows: Int): List<List<Int>> {
    val rows = mutableListOf<List<Int>>()
    
    val pascaleLineMap = mutableMapOf<Int, List<Int>>()
    for (lineNumber in 1..numRows) {
      rows.add(pascaleLine(lineNumber, pascaleLineMap))
    }
    
    return rows
  }
  
  private fun pascaleLine(
    lineNumber: Int,
    pascaleLineMap: MutableMap<Int, List<Int>>
  ): List<Int> {
    if (lineNumber == 1) return listOf(1)
    if (lineNumber == 2) return listOf(1, 1)
    
    if (pascaleLineMap.containsKey(lineNumber)) return pascaleLineMap[lineNumber]!!
    
    val row = mutableListOf<Int>()
    row.add(1)
    
    val previous = pascaleLine(lineNumber - 1, pascaleLineMap)
    for (i in 1 until lineNumber - 1) {
      row.add(previous[i - 1] + previous[i])
    }
    
    row.add(1)
    
    return row
      .also { pascaleLineMap[lineNumber] = it }
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
    func generate(_ numRows: Int) -> [[Int]] {        
       var matrix = Array(repeating: Array(repeating: 0, count: numRows), count: numRows)
       for i in 0..<numRows {
           matrix[i][0] = 1
           for j in 1..<numRows where i > 0 {
               matrix[i][j] = matrix[i-1][j] + matrix[i-1][j-1]
          }          
       }        
       return matrix.compactMap{ $0.filter { $0 > 0 }}
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***