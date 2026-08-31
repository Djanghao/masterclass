# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 5
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/5676170/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/5676170/)

---

```Explanation []
authorslog.com/blog/ZzthSLHX8W
```
# Code

```cpp []
class Solution {
public:
    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {
        vector<long long> arr; // Use long long to handle large numbers
        for (int potion : potions) {
            arr.push_back(ceil(success / (double)potion)); // Ensure double division for accurate results
        }
        sort(arr.begin(), arr.end());

        vector<int> res;
        for (int spell : spells) {
            int l = 0, r = arr.size() - 1, M = 0;
            while (l <= r) {
                int m = l + (r - l) / 2;
                if (arr[m] <= spell) {
                    l = m + 1;
                    M = l;
                } else {
                    r = m - 1;
                }
            }
            res.push_back(M);
        }

        return res;
    }
};

```

```python []
class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        arr = [math.ceil(success / potion) for potion in potions]
        arr.sort()

        res = []
        for spell in spells:
            l, r, M = 0, len(arr) - 1, 0
            while l <= r:
                m = (l + r) // 2
                if arr[m] <= spell:
                    l = m + 1
                    M = l
                else:
                    r = m - 1
            res.append(M)

        return res

```

```java []
class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        List<Long> arr = new ArrayList<>();
        for (int potion : potions) {
            arr.add((long) Math.ceil((double) success / potion)); // Use long for large numbers
        }
        Collections.sort(arr);

        int[] res = new int[spells.length];
        for (int i = 0; i < spells.length; i++) {
            int spell = spells[i];
            int l = 0, r = arr.size() - 1, M = 0;
            while (l <= r) {
                int m = l + (r - l) / 2;
                if (arr.get(m) <= spell) {
                    l = m + 1;
                    M = l;
                } else {
                    r = m - 1;
                }
            }
            res[i] = M;
        }

        return res;
    }
}

```

```javascript []
var successfulPairs = function(spells, potions, success) {
    let arr = [];
    for(let potion of potions) {
        arr.push(Math.ceil(success / potion));
    }
    arr.sort((a,b) => a-b);
    const n = arr.length;
    console.log(arr);

    const res = [];
    for(let spell of spells) {
        let l=0, r=n-1, M=0;
        while(l<=r) {
            let m = Math.floor((l+r)/2);
            if(arr[m] <= spell) {
                l = m+1;
                M = l;
            } else {
                r = m-1;
            }
        }
        res.push(M);
    }  
    return res;
};
```