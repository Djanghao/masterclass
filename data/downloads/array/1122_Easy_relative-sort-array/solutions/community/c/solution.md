# Sort with custom comparator vs Counting sort||array instead of hashmap||0ms beats 100%

**Author:** anwendeng
**Votes:** 28
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5292318/](https://leetcode.com/problems/relative-sort-array/solutions/5292318/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1st approach uses sorting with a custom comparator which is concise

Later try other approach. 2nd approach uses counting sot.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Use the array `a2i ` to define the function `x` to its index in `arr2`; if x is not in `arr2`, set `a2i[x]=n2`.
2. The comparator is given by a lambda function
```
[&](int x, int y){
    if (a2i[x]==a2i[y]) return x<y;
    return a2i[x]<a2i[y];
};
```
3. Sort arr1 according to this comparator & return the answer
4. The 2nd approach using counting sort is much more subtle which is presented in the 2nd part of this post.
# Why the array can define the Order?
It is quite crucial that arr2 has all unique  elements; so a2i can be defined  as the  inverse mapping  of arr2, i.e. a2i[arr[i]]=i. For x not in arr2, it is defined a2i[x]=n2.

When x,y both in arr2, its ordering is by a2[x]< a2i[y]. When x,y both not in arr2, just confirm  x<y. when x in arr2 y not in arr2,it is clear x<y. All these cases can be defined in the custom comparator.

C++ std::sort can sort the elements in container according to the defining comparator.
Suppose arr1=[28,6,22,8,44,17] arr2=[22,28,8,6] 17<44 wrt this ordering, because a2i[17]=a2i[44]=4 & 17<44. Other elements are in arr2.

One has
```
28->a2i[x]=1
6 ->a2i[x]=3
22->a2i[x]=0
8 ->a2i[x]=2
44->a2i[x]=4 
17->a2i[x]=4
=> sorted=[22,28,8,6,17,44]
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n1\\log(n1)+n2+M)$$
counting sort: $O(n1+n2+M)$ where $M=max(arr1)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n2)$$
counting sort: $O(n1+n2)$
# Code using custom comparator||C++ 0ms beats 100%
```C++ []
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        int n1=arr1.size(), n2=arr2.size();
        int a2i[1001];

        // Initialize a2i with n2 (indicating elements not in arr2)
        fill(a2i, end(a2i), n2);
        for(int i=0; i<n2; i++)
            a2i[arr2[i]]=i;// a2i is an array & the map: x=arr2[i]->i

        sort(arr1.begin(), arr1.end(), [&](int x, int y){
            // ordered by {a2i[x], x}
            if (a2i[x]==a2i[y]) return x<y;
            return a2i[x]<a2i[y];
        });
        return arr1;
    }
};



auto init = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 'c';
}();
```
```Python []
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        n2 = len(arr2)
        a2i=[n2]*1001

        for i, x in enumerate(arr2):
            a2i[x]=i
        
        arr1.sort(key=lambda x: (a2i[x], x))

        return arr1
        
        
```
# Approach Using Counting Sort
1. Use the same ordering in the 1st approach implicitly
2. Uses 2 containers `bucket & freqN2`; `bucket` is dealing with the elements in `arr2` with info pair `(x, freq)`; `freqN2` is dealing with the elements not in `arr2`.
3. Process `arr1` to fill `bucket` and freqN2` by using a loop
4. Place elements from `bucket` according to the order in `arr2` by using a loop
5. Place elements not in `arr2` sorted in ascending order.

# Counting sort||C, C++ 0ms beats 100%
```C++ []
class Solution {
public:
    using info = pair<int, int>; // (x, freq)
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        const int n1 = arr1.size(), n2 = arr2.size();
        int a2i[1001];

        // Initialize a2i with n2 (indicating elements not in arr2)
        fill(a2i, end(a2i), n2);
        for (int i = 0; i < n2; i++) 
            a2i[arr2[i]] = i;

        // Counting sort uses 2 containers bucket & freqN2
        info bucket[1001];
        int freqN2[1001] = {0};
        fill(bucket, end(bucket), info(-1, 0)); // fill  with pair {-1, 0}
        
        // Process arr1 to fill bucket and freqN2
        for (int x : arr1) {
            int i = a2i[x];
            if (i == n2) 
                freqN2[x]++;
             else {
                bucket[i].first = x;
                bucket[i].second++;
            }
        }

        int cnt = 0;
        // Place elements from bucket according to the order in arr2
        for (short i = 0; i < n2; i++) {
            auto& [x, f] = bucket[i];
            if (f == 0) continue;
            fill(arr1.begin()+cnt, arr1.begin()+cnt+f, x);
            cnt+=f;
        }

        // Place elements not in arr2 sorted in ascending order
        for (int x = 0; x <= 1000; x++) {
            int f = freqN2[x];
            if (f == 0) continue;
            fill(arr1.begin()+cnt, arr1.begin()+cnt+f, x);
            cnt+=f;
        }

        return arr1;
    }
};




auto init = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 'c';
}();
```
```C []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#pragma GCC optimize("O3", "unroll-loops")
int* relativeSortArray(int* arr1, int n1, int* arr2, int n2, int* returnSize) 
{
    // Mapping from element value to its index in arr2
    int a2i[1001];
    memset(a2i, -1, sizeof(a2i)); // Initialize with -1

    // Fill the map for elements in arr2
    for (register int i = 0; i < n2; i++) 
        a2i[arr2[i]] = i;

    // Arrays to count occurrences of elements
    int bucket[1001] = {0}, freqN2[1001] = {0};

    // Count occurrences of each element in arr1
    for (register int i = 0; i < n1; i++) {
        int x = arr1[i], idx = a2i[x];
        if (idx == -1) freqN2[x]++;
        else bucket[x]++;
    }

    int cnt = 0;

    // Place elements of arr2 in arr1 in order
    for (register int i = 0; i < n2; i++) {
        int x = arr2[i], f= bucket[x];
        if (f == 0) continue;
        for (register int j = 0; j < f; j++)
            arr1[cnt++] = x;
    }

    // Place remaining elements not in arr2 in ascending order
    for (register int i = 0; i < 1001; i++) {
        int f = freqN2[i];
        if (f == 0) continue;
        for (register int j = 0; j < f; j++)
            arr1[cnt++] = i;
    }

    *returnSize = n1;
    return arr1;
}

```
