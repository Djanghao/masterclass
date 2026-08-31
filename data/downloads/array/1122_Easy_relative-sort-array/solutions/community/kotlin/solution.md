# Intuitive | Counting Sort | Beats 100% | 0ms | C++ | Java | Python | Kotlin | JavaScript

**Author:** Don007
**Votes:** 3
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5293626/](https://leetcode.com/problems/relative-sort-array/solutions/5293626/)

---

# Intuition and Approach
## Apply Counting Sort
- Count All Occurances of Each Unique Element Present in **a** into Another Array **f**.
- Now First Consider All Elements in Order of their Presence in **b** and add them into Another Array **ans** and set occurance value of that Element as 0 in **f**.
- Now Add All Elements which are present in **f** but their occurance has not become 0 from the previous operation.

# Complexity
- Time complexity: $$O(n + m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& a,vector<int>& b) {
        vector<int> tot(1001);
        for ( auto i : a ) tot[i]++;
        vector<int> ans;
        for ( auto i : b ) {
            if ( tot[i] ) {
                while ( tot[i]--> 0 ) ans.emplace_back(i);
            }
        }
        for ( int i = 0 ; i < 1001 ; i++ ) {
            if ( tot[i] ) {
                while (tot[i]--> 0 ) ans.emplace_back(i);
            }
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int[] relativeSortArray(int[] a, int[] b) {
        int[] f = new int[1001];
        for ( int i = 0 ; i < a.length ; i++ ) f[a[i]]++;
        int[] ans = new int[a.length];
        int j = 0;
        for ( int i = 0 ; i < b.length ; i++ ) {
            while ( f[b[i]]--> 0 ) ans[j++] = b[i];
        }
        for ( int i = 0 ; i < 1001 ; i++ ) {
            while ( f[i]--> 0 ) ans[j++] = i;
        }
        return ans;
    }
}
```
```Python []
class Solution:
    def relativeSortArray(self, a: List[int], b: List[int]) -> List[int]:
        f = [0]*1001
        for item in a:
            f[item] += 1
        ans = []
        for i in b:
            while ( f[i] > 0 ):
                f[i] -= 1
                ans.append(i)
        for i in range(1001):
            while f[i] > 0:
                ans.append(i)
                f[i] -= 1
        return ans
```
```Kotlin []
class Solution {
    fun relativeSortArray(a: IntArray, b: IntArray): IntArray {
        var f = Array<Int>(1001){0};
        var ans = IntArray(a.size);
        for ( item in a ) f[item]++;
        var j:Int = 0;
        for ( item in b ) {
            while ( f[item]--> 0 ) {
                ans[j++] = item;
            }
        }
        for ( item in 0..1000 ) {
            while ( f[item]--> 0 ) {
                ans[j++] = item;
            }
        }
        return ans;
    }
}
```
```JavaScript/TypeScript []
var relativeSortArray = function(a, b) {
    let ans = [];
    let f = [];
    for ( let i = 0 ; i < 1001 ; i++ ) f.push(0);
    for ( let i = 0 ; i < a.length ; i++ ) f[a[i]]++;
    for ( let i = 0 ; i < b.length ; i++ ) {
        while ( f[b[i]]--> 0 ) {
            ans.push(b[i]);
        }
    }
    for ( let i = 0 ; i < 1001 ; i++ ) {
        while ( f[i]--> 0 ) {
            ans.push(i);
        }
    }
    return ans;
};
```