# C++ Union Find Cyclic Groups

**Author:** Student2091
**Votes:** 7
**Link:** [https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2921436/](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2921436/)

---

# Intuition
My first intuition was that we know what elements that we must swap, and those elements form a group, and there are a lot of those groups for a given setting (`A[0] = 0 or A[n - 1] = 0`).
# Approach
1. Copy a union find by size template

2. Get all the elements into their own group.
3. If their own group has only 1 element (correct position), then skip it
4. Else if their own group has 0 in it, then it will take `group size - 1` swaps
5. Else if their own group doesn't have 0 in it, we need `1` swap to add 0 into their group (empty space), add 1 to the group size, then we need `group size - 1`.
# Complexity
- Time complexity: $O(N)$

- Space complexity: $O(N)$

# Code
```
class Solution {
public:
class UF{
public:
    vector<int> parent, size;
    int _n;
    UF (int n) : parent(n), size(n, 1), _n{n}{
        iota(parent.begin(), parent.end(), 0);
    }

    int leader(int x){
        return x == parent[x]? x : parent[x] = leader(parent[x]);
    }

    void unite(int x, int y){
        x = leader(x);
        y = leader(y);
        if (x == y){
            return;
        }
        if (size[y] > size[x]){
            swap(x, y);
        }
        size[x] += size[y];
        parent[y] = x;
    }

    int score(){
        int ans = 0;
        for (int i = 0; i < _n; ++i){
            if (parent[i] == i && size[i] > 1){
                if (leader(0) != i){ // cond 3
                    ++size[i];
                    ++ans;
                }
                ans += size[i] - 1;
            }
        }
        return ans;
    }
};

    int sortArray(vector<int>& nums) {
        int a = 0;
        int b = 0;
        int n = nums.size();
        UF uf0(n);
        UF uf1(n);

        for (int i = 0; i < n; ++i){
            uf0.unite(nums[i], nums[nums[i]]);
        }
        for (int i = 0; i < n; ++i){
            uf1.unite(nums[i], nums[(nums[i] - 1 + n) % n]);
        }

        return min(uf0.score(), uf1.score());
    }
};
```