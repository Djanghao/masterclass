# Simple | Brute Force | Counting Sort | Beats 100% | 0ms | C++ | Java | Python | Kotlin | JavaScript

**Author:** Don007
**Votes:** 3
**Link:** [https://leetcode.com/problems/height-checker/solutions/5287896/](https://leetcode.com/problems/height-checker/solutions/5287896/)

---

# Method - 1 \uD83E\uDD14\uD83E\uDD14
## Brute Force Using Another Array \uD83D\uDE2F
- Copy All Elements into Another Array
- Sort the Complete Array and Compare it with Original Array
- Simply Count Answer

## Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```C++ []
class Solution {
public:
    int heightChecker(vector<int>& heights) {
        vector<int> mx(heights);
        sort(mx.begin(),mx.end());
        int ans = 0, n = heights.size();
        for ( int i = 0 ; i < n ; i++ ) {
            if ( heights[i] != mx[i] ) ans++;
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int heightChecker(int[] heights) {
        int[] a = heights.clone();
        Arrays.sort(a);
        int ans = 0;
        for ( int i = 0 ; i < heights.length ; i++ ) {
            if ( a[i] != heights[i] ) ans++;
        }
        return ans;
    }
}
```
```Python []
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        a = heights.copy()
        a.sort()
        ans = 0
        for i in range(len(a)):
            if ( a[i] != heights[i] ):
                ans += 1
        return ans
```
```JavaScript []
var heightChecker = function(heights) {
    let mx = structuredClone(heights);
    mx = mx.toSorted((a,b)=>(a - b));
    let ans = 0, n = heights.length;
    for ( let i = 0 ; i < n ; i++ ) {
        if ( heights[i] != mx[i] ) ans++;
    }
    return ans;
};
```
```Kotlin []
class Solution {
    fun heightChecker(heights: IntArray): Int {
        var a: IntArray = heights.sortedArray();
        var ans = 0;
        for ( i in 0..<heights.size ) {
            if ( heights[i] != a[i] ) {
                ans++;
            }
        }
        return ans;
    }
}
```

# Method - 2 \uD83E\uDD14\uD83E\uDD14

# Counting Sort 2 Pointers Method \uD83D\uDE2F\uD83D\uDE0A
- Store All the Elements of the Array in another Array of Size 101
- Now, We will Iterate Over the Array and Check Whether All the Elements are Equating the Count of Total Number of Elements Present in the Original Array.
- Compute Answer Using Above Process

## Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$

## Code
```C++ []
class Solution {
public:
    int heightChecker(vector<int>& heights) {
        vector<int> tot(102,0);
        for ( int i : heights ) tot[i]++;
        int ans = 0, curr = 1;
        for ( int i = 0 ; i < heights.size() ; i++ ) {
            while ( tot[curr] == 0 ) curr++;
            if ( heights[i] != curr ) {
                ans += 1;
            }
            tot[curr]--;
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int heightChecker(int[] heights) {
        int[] tot = new int[102];
        for ( int i = 0 ; i < heights.length ; i++ ) tot[heights[i]]++;
        int ans = 0, curr = 1;
        for ( int i = 0 ; i < heights.length ; i++ ) {
            while ( tot[curr] == 0 ) curr++;
            if ( heights[i] != curr ) {
                ans++;
            }
            tot[curr]--;
        }
        return ans;
    }
}
```
```Python []
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        tot = [0 for _ in range(102) ]
        for item in heights:
            tot[item] += 1
        ans, curr = 0, 1
        for i in range(len(heights)):
            while ( tot[curr] == 0 ): curr += 1
            if ( heights[i] != curr ):
                ans += 1
            tot[curr] -= 1
        return ans
```
```JavaScript []
var heightChecker = function(heights) {
    let tot = [];
    for ( let i = 0 ; i < 102 ; i++ ) tot.push(0);
    for ( let i = 0 ; i < heights.length ; i++ ) tot[heights[i]]++;
    let ans = 0, curr = 1;
    for ( let i = 0 ; i < heights.length ; i++ ) {
        while ( tot[curr] == 0 ) curr++;
        if ( heights[i] != curr ) {
            ans += 1;
        }
        tot[curr]--;
    }
    return ans;
};
```

# Please Upvote if You Liked or Understood the Solution \uD83D\uDC4D

# Thanks for Reading \uD83D\uDE0A\uD83D\uDE0A\uD83C\uDF89\uD83C\uDF89\uD83D\uDC4F