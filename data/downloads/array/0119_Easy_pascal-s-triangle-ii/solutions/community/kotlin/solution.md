# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 15
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/2040210/](https://leetcode.com/problems/pascals-triangle-ii/solutions/2040210/)

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
public List<Integer> getRow(int rowIndex) {
    List<Integer> res = new ArrayList<Integer>();
    for(int i = 0;i<rowIndex+1;i++) {
    		res.add(1);
    		for(int j=i-1;j>0;j--) {
    			res.set(j, res.get(j-1)+res.get(j));
    		}
    }
    return res;
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
vector<int> getRow(int rowIndex) {
	vector<int> ret { 1 }, cur { 1 };
	for (int i = 1; i <= rowIndex; i++) {
		ret.push_back(1);
		for (int j = 1; j < i; j++) {
			ret[j] = cur[j] + cur[j - 1];
		}
		cur = ret;
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
    def getRow(self, rowIndex: int) -> List[int]:
        res=[]
        for i in range(rowIndex+1):
            res.append([])
            for j in range(i+1):
                if j == 0 or j == i:
                    res[i].append(1)
                else:
                    res[i].append(res[i - 1][j - 1] + res[i - 1][j])
        return res[rowIndex]
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var getRow = function(rowIndex) {
    return findRow([1], rowIndex);
};

const findRow = (arr, depth) => {
    if (arr.length - 1 === depth) return arr;
    
    const newArr = new Array(arr.length + 1);
    for (let i = 0; i < newArr.length; i++) {
        const l = arr[i - 1] || 0;
        const r = arr[i] || 0;
        newArr[i] = l + r;
    }
    
    return findRow(newArr, depth);
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
    fun getRow(rowIndex: Int): List<Int> {
        var initial = listOf<Int>(1)
        if (rowIndex == 0) return initial
        for (i in 0..rowIndex) {
            val current = mutableListOf<Int>(1)
            for (j in 1 until i) {
                current.add(initial[j] + initial[j-1])
            }
            current.add(1)
            initial = current
        }
        return initial
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
    // - Complexity:
    //   - time: O(k), where k is the rowIndex.
    //   - space: O(k), where k is the rowIndex.
    
    func getRow(_ rowIndex: Int) -> [Int] {
        var row = Array(repeating: 0, count: rowIndex + 1)
		row[0] = 1
		var index = 0
		
        while index <= rowIndex {
			for i in 0...index / 2 {
				let a = i > 0 ? row[i - 1] : 0
				let b = row[i]
				row[index - i] = a + b
			}
			
            for i in 0...index / 2 {
				row[i] = row[index - i]
			}
			
            index += 1
		}
        
		return row
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***