# 🍉✅Simple & Short😊|| Java, C++, Python, Javascript, PHP, C, C#, Typescript🔥

**Author:** dharmikgohil
**Votes:** 2
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858720/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858720/)

---

# Intuition
- We have a list of numbers.
- We want to assign each number a rank based on its size.
- The smallest number gets the lowest rank, and the largest gets the highest.

# Approach
1. **Copy the Array**: First, copy the original array to preserve its order, since sorting will modify it.
2. **Sort the Array**: Sort the copied array in ascending order.
3. **Assign Ranks**: Use a HashMap to map each unique value in the sorted array to its rank. If a value has already been assigned a rank, skip it.
4. **Construct the Result**: For each element in the original array, use the HashMap to get its corresponding rank and store it in the result array.
5. **Return the Result**: Finally, return the array of ranks.

# Complexity
- **Time complexity**: 
  - Sorting the array takes $$O(n \\log n)$$.
  - Iterating over the array to assign ranks and to build the result takes $$O(n)$$.
  - So the overall time complexity is $$O(n \\log n)$$.
  
- **Space complexity**:
  - We use extra space for the `tempArr`, `result`, and the HashMap, all of which have a size proportional to the input array, so the space complexity is $$O(n)$$.

# Code
```Java []
class Solution {
    public int[] arrayRankTransform(int[] arr) {
        int n = arr.length;

        // first let's save copy of arr into tempArr
        int[] tempArr = new int[n];
        int tempArrIndex = 0;
        for(int num : arr){
            tempArr[tempArrIndex++] = num;
        }
        // now sort orifinal array and save index in hashmap
        Arrays.sort(arr);
        HashMap<Integer, Integer> map = new HashMap<>();
        int index = 1;
        for(int num : arr){
             if (!map.containsKey(num)) {
                map.put(num, index++);
            }
        }
        index = 0;
        // retriving indexes from the map according
        int[] result = new int[n];
        for(int num : tempArr){
            result[index++] = map.get(num);
        }
        return result;
    }
}
```
```c++ []
class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        int n = arr.size();

        // Create a copy of the original array
        vector<int> tempArr(arr);

        // Sort the original array
        sort(arr.begin(), arr.end());

        // Create a map to store ranks
        unordered_map<int, int> map;
        int index = 1;
        for (int num : arr) {
            if (map.find(num) == map.end()) {
                map[num] = index++;
            }
        }

        // Replace elements in the copied array with their rank
        vector<int> result(n);
        for (int i = 0; i < n; i++) {
            result[i] = map[tempArr[i]];
        }

        return result;
    }
};

```
```python []
class Solution:
    def arrayRankTransform(self, arr):
        # Create a copy of the original array
        tempArr = arr[:]

        # Sort the original array
        arr.sort()

        # Create a dictionary to store ranks
        map = {}
        index = 1
        for num in arr:
            if num not in map:
                map[num] = index
                index += 1

        # Replace elements in the copied array with their rank
        result = [map[num] for num in tempArr]
        return result

```
```Javascript []
var arrayRankTransform = function(arr) {
    const n = arr.length;

    // Create a copy of the original array
    const tempArr = [...arr];

    // Sort the original array
    arr.sort((a, b) => a - b);

    // Create a map to store ranks
    const map = new Map();
    let index = 1;
    for (let num of arr) {
        if (!map.has(num)) {
            map.set(num, index++);
        }
    }

    // Replace elements in the copied array with their rank
    const result = tempArr.map(num => map.get(num));
    return result;
};

```
```PHP []
class Solution {
    function arrayRankTransform($arr) {
        $n = count($arr);

        // Create a copy of the original array
        $tempArr = $arr;

        // Sort the original array
        sort($arr);

        // Create an associative array (hashmap) to store ranks
        $map = [];
        $index = 1;
        foreach ($arr as $num) {
            if (!array_key_exists($num, $map)) {
                $map[$num] = $index++;
            }
        }

        // Replace elements in the copied array with their rank
        $result = [];
        foreach ($tempArr as $num) {
            $result[] = $map[$num];
        }

        return $result;
    }
}

```
```C []
#include <stdio.h>
#include <stdlib.h>

// Helper function for comparison
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

void arrayRankTransform(int *arr, int n, int *result) {
    int *tempArr = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        tempArr[i] = arr[i];
    }

    qsort(arr, n, sizeof(int), compare);

    int *map = (int *)malloc(n * sizeof(int));
    int rank = 1;
    for (int i = 0; i < n; i++) {
        if (i == 0 || arr[i] != arr[i - 1]) {
            map[i] = rank++;
        }
    }

    for (int i = 0; i < n; i++) {
        result[i] = map[arr[i]];
    }

    free(tempArr);
    free(map);
}

int main() {
    int arr[] = {40, 10, 20, 30};
    int n = sizeof(arr) / sizeof(arr[0]);
    int result[n];

    arrayRankTransform(arr, n, result);

    for (int i = 0; i < n; i++) {
        printf("%d ", result[i]);
    }

    return 0;
}

```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public int[] ArrayRankTransform(int[] arr) {
        int n = arr.Length;

        // Create a copy of the original array
        int[] tempArr = new int[n];
        Array.Copy(arr, tempArr, n);

        // Sort the original array
        Array.Sort(arr);

        // Create a dictionary to store ranks
        Dictionary<int, int> map = new Dictionary<int, int>();
        int index = 1;
        foreach (int num in arr) {
            if (!map.ContainsKey(num)) {
                map[num] = index++;
            }
        }

        // Replace elements in the copied array with their rank
        int[] result = new int[n];
        for (int i = 0; i < n; i++) {
            result[i] = map[tempArr[i]];
        }

        return result;
    }
}
'
```
```Typescript []
function arrayRankTransform(arr: number[]): number[] {
    const n = arr.length;

    // Create a copy of the original array
    const tempArr = [...arr];

    // Sort the original array
    arr.sort((a, b) => a - b);

    // Create a map to store ranks
    const map = new Map<number, number>();
    let index = 1;
    for (const num of arr) {
        if (!map.has(num)) {
            map.set(num, index++);
        }
    }

    // Replace elements in the copied array with their rank
    const result = tempArr.map(num => map.get(num) as number);
    return result;
}

```

![HOPE YOU GOT IT (1).png](./images/0.png)

