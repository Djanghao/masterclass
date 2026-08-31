# [Built Sort + Counting Sort Tutorial] Height Checker

**Author:** never_get_piped
**Votes:** 18
**Link:** [https://leetcode.com/problems/height-checker/solutions/5287146/](https://leetcode.com/problems/height-checker/solutions/5287146/)

---

**Topic** :  Sort

The solution to the problem is straightforward: we simply count the number of positions where the sorted array differs from the original array.
This post presents two version of sorting method: **Language Built Sort** and **Counting Sort**.

## Language Built Sort
This is straightforward by utilizing the language's built-in array sorting method, most of which are implemented using **quick-sort**. However, depending on the input, they may sometimes switch to **merge sort**.

**C++**:
```
class Solution {
public:
    int heightChecker(vector<int>& heights) {
        int ans = 0;
        vector<int> sorted(heights.begin(), heights.end());
        sort(sorted.begin(), sorted.end());
        for(int i = 0; i < heights.size(); i++) {
            ans += (sorted[i] != heights[i]);
        }
        return ans;
    }
};
```

**Java:**
```
class Solution {
    public int heightChecker(int[] heights) {
        int[] sorted = Arrays.copyOf(heights, heights.length);
        Arrays.sort(sorted);
        int ans = 0;
        for(int i = 0; i < heights.length; i++) {
            if(heights[i] != sorted[i]) {
                ans++;
            }
        }
        return ans;
    }
}
```

**Python:**
```
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        sortH = [x for x in heights]
        sortH.sort()
        ans = 0
        for i in range(len(heights)):
            if sortH[i] != heights[i]:
                ans += 1
        return ans
```

**Go:**
```
func heightChecker(heights []int) int {
    ans := 0
	sorted := make([]int, len(heights))
	copy(sorted, heights)
	sort.Ints(sorted)
	for i := 0; i < len(heights); i++ {
		if sorted[i] != heights[i] {
			ans++
		}
	}
	return ans
}
```

**PHP:**
```
class Solution {

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function heightChecker($heights) {
        $ans = 0;
        $sorted = $heights;
        sort($sorted); 
        $n = count($heights);
        for ($i = 0; $i < $n; $i++) {
            if ($sorted[$i] !== $heights[$i]) { 
                $ans++;
            }
        }
        return $ans;
    }
}
```

**JS:**
```
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let ans = 0;
    const sorted = heights.slice().sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (sorted[i] !== heights[i]) {
            ans++;
        }
    }
    return ans;
};
```
**Complexity**:
* Time Complexity : `O(nlogn)`
* Space Complexity : `O(n)`
___
## Counting Sort
Counting sort is an integer sorting algorithm used in computer science to collect objects according to keys that are small positive integers. It works by determining the positions of each key value in the output sequence by counting the number of objects with distinct key values and applying prefix sum to those counts. (Google Search![image](./images/0.png)

Counting sort offers a more efficient time complexity of **O(n)**, but its space requirement is determined by the range of input values, which, in this problem, are less than 100. Therefore, we can comfortably utilize counting sort.

In our code, we allocate a counting array with a size of 101 to fit the input range. If `count[i] > 0` for `0 <= i < 101` and `i` is the smallest integer such that `count[i] > 0`, then `i` represents the current smallest element of the original array. 

We check if it matches the current running height element, and after this element is used, we decrement `count[i]` by one.

**C++**:
```
class Solution {
public:
    int heightChecker(vector<int>& heights) {
        vector<int> count(101);
        for(int i = 0; i < heights.size(); i++) {
            count[heights[i]]++;
        }
        
        int ans = 0, j = 0;
        for(int i = 0; i < heights.size(); i++) {
            while(j < count.size() && !count[j]) {
                j++;
            }
            ans += (heights[i] != j);
            count[j]--;
        }
        return ans;
    }
};
```

**Java:**
```
class Solution {
    public int heightChecker(int[] heights) {
        int[] count = new int[101];
        for (int height : heights) {
            count[height]++;
        }

        int ans = 0;
        int j = 0;
        for (int i = 0; i < heights.length; i++) {
            while (j < count.length && count[j] == 0) {
                j++;
            }
            if (heights[i] != j) {
                ans++;
            }
            count[j]--;
        }
        return ans;
    }
}
```

**Python:**
```
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        count = [0] * 101
        for height in heights:
            count[height] += 1
        
        ans, j = 0, 0
        for i in range(len(heights)):
            while j < len(count) and count[j] == 0:
                j += 1
            if heights[i] != j:
                ans += 1
            count[j] -= 1
        return ans
```

**Go:**
```
func heightChecker(heights []int) int {
    count := make([]int, 101)
	for _, height := range heights {
		count[height]++
	}

	ans := 0
	j := 0
	for i := 0; i < len(heights); i++ {
		for j < len(count) && count[j] == 0 {
			j++
		}
		if heights[i] != j {
			ans++
		}
		count[j]--
	}
	return ans
}
```

**PHP:**
```
class Solution {

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function heightChecker($heights) {
        $count = array_fill(0, 101, 0);
        foreach ($heights as $height) {
            $count[$height]++;
        }
        
        $ans = 0;
        $j = 0;
        foreach ($heights as $height) {
            while ($j < count($count) && $count[$j] == 0) {
                $j++;
            }
            if ($height != $j) {
                $ans++;
            }
            $count[$j]--;
        }
        return $ans;
    }
}
```

**JS:**
```
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = Array(101).fill(0);
    heights.forEach(height => {
        count[height]++;
    });
        
    let ans = 0;
    let j = 0;
    heights.forEach(height => {
        while (j < count.length && count[j] === 0) {
            j++;
        }
        if (height !== j) {
            ans++;
        }
        count[j]--;
    });
    return ans;
};
```
**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(max(heights[i]))`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**
