# EASY MYASS SPARK F ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 20
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858211/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858211/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to first know the total order of the elements to even begin giving ranks to them 
so we need to sort them 
but the final answer depeneds onthe original order of the input so we cannot modify the original we will duplicate the input aray
then we will simply give rank one by one increasing the rank every time by one
# Approach
<!-- Describe your approach to solving the problem. -->
we will create duplicate array
we will sort it 
we wil use hashmap for faster lookup times 
we will start the ranking from the smallest with rank 1 and go on increasing the rank by one 
finally we will return the array with the values from the stored hashmap according to the input array order 
thats it 
# Complexity
- Time complexity:O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven-l8x1pr.jpg](./images/0.jpeg)

# Code
```javascript []
var arrayRankTransform = function(arr) {
    let dup=[...arr]
    dup.sort((a,b)=>a-b)
    let mp = new Map()
    mp.set(dup[0],1)
    for(let i=1;i<dup.length;i++){
        if(dup[i]>dup[i-1])mp.set(dup[i],mp.get(dup[i-1])+1)
        else mp.set(dup[i],mp.get(dup[i-1]))
    }
    let res=[]
    for(let x of arr){
        res.push(mp.get(x))
    }
    return res
};
```
```python []
def array_rank_transform(arr):
    dup = sorted(arr)
    mp = {dup[0]: 1}
    for i in range(1, len(dup)):
        if dup[i] > dup[i - 1]:
            mp[dup[i]] = mp[dup[i - 1]] + 1
        else:
            mp[dup[i]] = mp[dup[i - 1]]
    
    return [mp[x] for x in arr]

```
```java []
import java.util.*;

public class Solution {
    public int[] arrayRankTransform(int[] arr) {
        int[] dup = Arrays.copyOf(arr, arr.length);
        Arrays.sort(dup);
        Map<Integer, Integer> mp = new HashMap<>();
        mp.put(dup[0], 1);
        for (int i = 1; i < dup.length; i++) {
            if (dup[i] > dup[i - 1]) {
                mp.put(dup[i], mp.get(dup[i - 1]) + 1);
            } else {
                mp.put(dup[i], mp.get(dup[i - 1]));
            }
        }
        int[] res = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            res[i] = mp.get(arr[i]);
        }
        return res;
    }
}

```
```c []
#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int* arrayRankTransform(int* arr, int arrSize, int* returnSize) {
    int* dup = (int*)malloc(arrSize * sizeof(int));
    for (int i = 0; i < arrSize; i++) {
        dup[i] = arr[i];
    }
    
    qsort(dup, arrSize, sizeof(int), compare);
    
    int* ranks = (int*)malloc(arrSize * sizeof(int));
    int rank = 1;
    ranks[0] = rank;
    
    for (int i = 1; i < arrSize; i++) {
        if (dup[i] > dup[i - 1]) {
            rank++;
        }
        ranks[i] = rank;
    }
    
    int* result = (int*)malloc(arrSize * sizeof(int));
    for (int i = 0; i < arrSize; i++) {
        for (int j = 0; j < arrSize; j++) {
            if (arr[i] == dup[j]) {
                result[i] = ranks[j];
                break;
            }
        }
    }

    free(dup);
    free(ranks);
    *returnSize = arrSize;
    return result;
}
```
```c++ []
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

vector<int> arrayRankTransform(vector<int>& arr) {
    vector<int> dup = arr;
    sort(dup.begin(), dup.end());
    map<int, int> mp;
    
    mp[dup[0]] = 1;
    for (int i = 1; i < dup.size(); i++) {
        if (dup[i] > dup[i - 1]) {
            mp[dup[i]] = mp[dup[i - 1]] + 1;
        } else {
            mp[dup[i]] = mp[dup[i - 1]];
        }
    }
    
    vector<int> res;
    for (int x : arr) {
        res.push_back(mp[x]);
    }
    
    return res;
}

int main() {
    vector<int> arr = {40, 10, 20, 30};
    vector<int> result = arrayRankTransform(arr);
    for (int x : result) {
        cout << x << " ";
    }
    return 0;
}

```