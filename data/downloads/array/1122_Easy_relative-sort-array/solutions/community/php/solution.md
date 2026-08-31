# [Built Sort VS Counting Sort + Tutorial] Relative Sort Array

**Author:** never_get_piped
**Votes:** 28
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5292311/](https://leetcode.com/problems/relative-sort-array/solutions/5292311/)

---

**Topic** :  Sort

Another **Counting Sort** problem !
This problem can be solved by utilizing **Language Built Sort** and **Counting Sort**, as seen in yesterday's daily challenge.

Please check [Height Checker](https://leetcode.com/problems/height-checker/discuss/5287146/built-sort-vs-counting-sort-height-checker) for another challange and detail explanation.
___



## Language Built Sort
This is straightforward by utilizing the language's built-in array sorting method, most of which are implemented using **quick-sort**. However, depending on the input, they may sometimes switch to **merge sort**. 

We can sort `arr1` by applying a custom comparator that compares elements based on their relative order in `arr2`. We may utilize a hashmap to map each element in `arr2` to its rank. The custom comparator first checks if both elements being compared are in `arr2`, and if so, compares their ranks. If only one element is in `arr2`, it ensures that it comes before the other. Finally, if neither element is in `arr2`, the comparator maintains their relative order. This approach provides an efficient and concise solution for sorting `arr1` according to the specified relative order.

**Note**: For elements that do not appear in `arr2`, we can assign them an order equal to `arr2.size()`, which is greater than any element that appears in `arr2`.

**C++**:
```
class Solution {
public:
    int rank(unordered_map<int, int>& mp, int a) {
        return mp.count(a) ? mp[a] : mp.size();
    }
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        unordered_map<int, int> mp;
        for(int i = 0; i < arr2.size(); i++) {
            mp[arr2[i]] = i;
        }
        sort(arr1.begin(), arr1.end(), [&](int a, int b) {
            return rank(mp, a) == rank(mp, b) ? a < b : rank(mp, a) < rank(mp, b);
        });
        return arr1;
    }
};
```

**Java:**
```
class Solution {
    private int rank(HashMap<Integer, Integer> map, int a) {
        return map.containsKey(a) ? map.get(a) : map.size();
    }
    
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr2.length; i++) {
            map.put(arr2[i], i);
        }

        List<Integer> arr1List = Arrays.stream(arr1).boxed().collect(Collectors.toList());
        arr1List.sort(new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                int rankA = rank(map, a);
                int rankB = rank(map, b);
                return rankA == rankB ? a.compareTo(b) : Integer.compare(rankA, rankB);
            }
        });
        
        return arr1List.stream().mapToInt(Integer::intValue).toArray();
    }
}
```

**Python:**
```
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        def rank(mp, a):
            return mp.get(a, len(mp))
    
        mp = {num: i for i, num in enumerate(arr2)}
        arr1.sort(key=lambda x: (rank(mp, x), x))
        return arr1
```

**Go:**
```
func rank(mp map[int]int, a int) int {
	if val, ok := mp[a]; ok {
		return val
	}
	return len(mp)
}

func relativeSortArray(arr1 []int, arr2 []int) []int {
    mp := make(map[int]int)
	for i, num := range arr2 {
		mp[num] = i
	}

	sort.Slice(arr1, func(i, j int) bool {
		rankA := rank(mp, arr1[i])
		rankB := rank(mp, arr1[j])
		if rankA == rankB {
			return arr1[i] < arr1[j]
		}
		return rankA < rankB
	})

	return arr1
}
```

**PHP:**
```
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer[]
     */
    public function rank($mp, $a) {
        return isset($mp[$a]) ? $mp[$a] : count($mp);
    }
    
    function relativeSortArray($arr1, $arr2) {
        $mp = [];
        foreach ($arr2 as $i => $num) {
            $mp[$num] = $i;
        }

        usort($arr1, function($a, $b) use ($mp) {
            $rankA = $this->rank($mp, $a);
            $rankB = $this->rank($mp, $b);
            if ($rankA == $rankB) {
                return $a - $b;
            }
            return $rankA - $rankB;
        });

        return $arr1;
    }
}
```

**JS:**
```
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    function rank(mp, a) {
        return mp.hasOwnProperty(a) ? mp[a] : Object.keys(mp).length;
    }
    const mp = {};
    arr2.forEach((num, i) => {
        mp[num] = i;
    });

    arr1.sort((a, b) => {
        const rankA = rank(mp, a);
        const rankB = rank(mp, b);
        if (rankA === rankB) {
            return a - b;
        }
        return rankA - rankB;
    });

    return arr1;
};
```
**Complexity**:
* Time Complexity : `O(nlogn)`
* Space Complexity : `O(n)`
___
## Counting Sort
Counting sort is an integer sorting algorithm used in computer science to collect objects according to keys that are small positive integers. It works by determining the positions of each key value in the output sequence by counting the number of objects with distinct key values and applying prefix sum to those counts. (Google Search![image](./images/0.png)

Counting sort offers a more efficient time complexity of **O(max(n, m))**, but its space requirement is determined by the range of input values, which, in this problem, are less than 100. Therefore, we can comfortably utilize counting sort.

In our code, we allocate a counting array with a size of 1001 to fit the input range. We iterate over `arr2` from the first index to the last. For` 0 <= i < arr2.length`, we append `arr2[i]` to our answer `count[arr2[i]]` times. `count[arr2[i]]` should reduce to `0` at the same time.

After completing this step, there might be elements that are not present in `arr2`. We then append them in ascending order by running counting sort one more time.

**C++**:
```
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        vector<int> count(1001);
        for(int i = 0; i < arr1.size(); i++) {
            count[arr1[i]]++;
        }
        
        vector<int> ans;
        for(int i = 0; i < arr2.size(); i++) {
            while(count[arr2[i]]--) {
                ans.push_back(arr2[i]);
            }
        }
        
        for(int i = 0; i < count.size(); i++) {
            while(count[i]-- > 0) ans.push_back(i);
        }
        return ans;
    }
};
```

**Java:**
```
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        int[] count = new int[1001];
        int[] ans = new int[arr1.length];
        int ansIndex = 0;
        for(int i = 0; i < arr1.length; i++) {
            count[arr1[i]]++;
        }
        
        for(int i = 0; i < arr2.length; i++) {
            while(count[arr2[i]]-- > 0) {
                ans[ansIndex++] = arr2[i];
            }
        }
        
        for(int i = 0; i < count.length; i++) {
            while(count[i]-- > 0) {
                ans[ansIndex++] = i;
            }
        }
        
        return ans;
    }
}
```

**Python:**
```
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        count = [0] * 1001
        ans = []
        for x in arr1:
            count[x] += 1
        
        for x in arr2:
            while count[x] > 0:
                count[x] -= 1
                ans.append(x)
                
        for i in range(len(count)):
            while count[i] > 0:
                ans.append(i)
                count[i] -= 1
        
        return ans
```

**Go:**
```
func relativeSortArray(arr1 []int, arr2 []int) []int {
    count := make([]int, 1001)
    for _, num := range arr1 {
        count[num]++
    }

    var ans []int
    for _, num := range arr2 {
        for count[num] > 0 {
            ans = append(ans, num)
            count[num]--
        }
    }

    for i := 0; i < len(count); i++ {
        for count[i] > 0 {
            ans = append(ans, i)
            count[i]--
        }
    }
    return ans
}
```

**PHP:**
```
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer[]
     */
    function relativeSortArray($arr1, $arr2) {
        $count = array_fill(0, 1001, 0);
        foreach ($arr1 as $num) {
            $count[$num]++;
        }

        $ans = [];
        foreach ($arr2 as $num) {
            while ($count[$num] > 0) {
                $ans[] = $num;
                $count[$num]--;
            }
        }

        for ($i = 0; $i < count($count); $i++) {
            while ($count[$i] > 0) {
                $ans[] = $i;
                $count[$i]--;
            }
        }
        return $ans;
    }
}
```

**JS:**
```
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const count = Array(1001).fill(0);
    arr1.forEach(num => {
        count[num]++;
    });

    const ans = [];
    arr2.forEach(num => {
        while (count[num] > 0) {
            ans.push(num);
            count[num]--;
        }
    });

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            ans.push(i);
            count[i]--;
        }
    }
    return ans;
};
```
**Complexity**:
* Time Complexity : `O(max(n, arr1[i]))`
* Space Complexity : `O(max(arr1[i]))`
