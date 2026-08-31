# 🔥 2 Liner with detailed explaination Beats 100% | Default sort function | Python, C++, Java, JS, TS

**Author:** itsyeshu
**Votes:** 5
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5294065/](https://leetcode.com/problems/relative-sort-array/solutions/5294065/)

---

# Intuition
As we need to sort `arr1` according to the relative positions of `arr2`, and if a num from `arr1` is not found in `arr2` we need to add them to the end in ascending order at the end of array.
We are supposed to return that array.

By looking at the question, we need to know the index of every number in `arr2`, so that can be maintained in an *map / dict*.

Now about sorting `arr1`, we can do so by passing a custom comparator function to built-in sort function, which will do 2 things:
1. If that number in `arr1` is found in `arr2` return the index using our *map / dict*.
2. Now if not found, we need to sort them in ascending order and add at the end in ascending order.
    So to append the result at the end, return an index which is more that `len(arr2)` or as per constraint $arr2.length <= 1000$ we can use $1001$.
    So, return *1001 + current number*.

> **Built-in sort functions with Custom comparator:**
> Custom comparator's return value is used by built-in sort function to sort arrays into an ascending value.

# Approach
1. Generate a map `map` to easily access the index of any value in `arr2`.
2. Return the sorted `arr1` according to the built-in sort function passed with our custom comparator algorithm.

# Complexity
- $N$: `arr1.length`
- $M$: `arr2.length`
- Time complexity: $O(NlogN + M)$
    - Creating a `map` takes $O(M)$ time.
    - Sorting `arr1` takes $O(NlogN)$ time.

- Space complexity: $O(M + logN)$
    - We are using a `map` with $O(M)$ space.
    - Also many built-in sort functions use $O(logN)$ space, because of their recusive nature.


![image.png](./images/0.png){:style="width:500px"}

# Code
``` Python []
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        map = {x : i for i, x in enumerate(arr2)}
        return sorted(arr1, key=lambda x: map[x] if x in map else 1001 + x)
```
``` C++ []
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        unordered_map<int, int> map;
        for (int i = 0; i < arr2.size(); i++) {
            map[arr2[i]] = i; 
        }

        sort(arr1.begin(), arr1.end(), [&map](int a, int b) {
            return (map.count(a) ? map[a] : 1001 + a) < (map.count(b) ? map[b] : 1001 + b);
        });

        return arr1;
    }
};
```

``` JavaScript []
var relativeSortArray = function(arr1, arr2) {
    const map = Object.fromEntries(Array.from(arr2, (val, i) => [val, i]))
    return arr1.sort((a, b) => (map[a] ?? 1001 + a) - (map[b] ?? 1001 + b))
};
```

``` Typescript []
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map:Record<number, number> = Object.fromEntries(Array.from(arr2, (val, i) => [val, i]))
    return arr1.sort((a:number, b:number) => (map[a] ?? 1001 + a) - (map[b] ?? 1001 + b))
};
```

## Java code

Java code is bit difficult as primitive `int[]` `arr1` doesnot have a built-in sort function. We first need to convert `arr1` to an `Array[Integer]` then apply `.sort()` method and convert it back to an `int[]`.

``` Java []
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr2.length; i++) {
            map.put(arr2[i], i);
        }

        return IntStream.of(arr1).boxed().sorted((a, b) -> {
            return (map.getOrDefault(a, 1001 + a)) - (map.getOrDefault(b, 1001 + b));
        }).mapToInt(Integer::intValue).toArray();
    }
}
```