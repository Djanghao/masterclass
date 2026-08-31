# DFS/Tree-DP in C++, Java & Python

**Author:** cpcs
**Votes:** 37
**Link:** [https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4082775/](https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4082775/)

---

# Intuition
Linear sieve to get all the prime numbers that are no larger than n.
Then do a tree DP (or simply consider it as DFS) to calculate the result.

# Approach
Use linear sieve to get all prime numbers, other sieve algorithms that have higher time complexity are also acceptable.

In DFS/Tree DP, return 2 values:
(1) The number of paths from root "goes down" that has no prime numbers, say A.
(2) The number of paths from root "pass down" that has only one prime numbers, say B.


  
If root is a prime number then:
root_A = 0
root_B = sigma(A) via all childeren of root.

If root is not a prime number then:
root_A = sigma(A) via all childeren of root.
root_B = sigma(B) via all childeren of root.

Before updating root_A and root_B for each child
we add root_A * B + root_B * A to our final answer. That's the number of paths "pass through" and has only one prime number. 

Here "pass through" means the paths between the root's 2 descendants.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
    long long mul(long long x, long long y) {
        return x * y;
    }
    
    pair<int, int> dfs(int x, int f, const vector<vector<int>> &con, const vector<bool> &prime, long long &r) {
        pair<int, int> v = {!prime[x], prime[x]};
        for (int y : con[x]) {
            if (y == f) continue;
            const auto& p = dfs(y, x, con, prime, r);
            r += mul(p.first, v.second) + mul(p.second, v.first);
            if (prime[x]) {
                v.second += p.first;
            } else {
                v.first += p.first;
                v.second += p.second;
            }
            
        }
        return v;
    }
    
public:
    long long countPaths(int n, vector<vector<int>>& edges) {
        vector<bool> prime(n + 1, true);
        prime[1] = false;
        vector<int> all;
        for (int i = 2; i <= n; ++i) {
            if (prime[i]) {
                all.push_back(i);
            }
            for (int x : all) {
                const int temp = i * x;
                if (temp > n) {
                    break;
                }
                prime[temp] = false;
                if (i % x == 0) {
                    break;
                }        
            }
        }
        vector<vector<int>> con(n + 1);
        for (const auto& e : edges) {
            con[e[0]].push_back(e[1]);
            con[e[1]].push_back(e[0]);
        }
        long long r = 0;
        dfs(1, 0, con, prime, r);
        return r;
        
    }
};
```

Java
```
class Solution {
    public long countPaths(int n, int[][] edges) {
        List<Boolean> prime = new ArrayList<>(n + 1);
        for (int i = 0; i <= n; ++i) {
            prime.add(true);
        }
        prime.set(1, false);
        
        List<Integer> all = new ArrayList<>();
        for (int i = 2; i <= n; ++i) {
            if (prime.get(i)) {
                all.add(i);
            }
            for (int x : all) {
                int temp = i * x;
                if (temp > n) {
                    break;
                }
                prime.set(temp, false);
                if (i % x == 0) {
                    break;
                }
            }
        }
        
        List<List<Integer>> con = new ArrayList<>(n + 1);
        for (int i = 0; i <= n; ++i) {
            con.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            con.get(e[0]).add(e[1]);
            con.get(e[1]).add(e[0]);
        }
        
        long[] r = {0};
        dfs(1, 0, con, prime, r);
        return r[0];
    }
    
    private long mul(long x, long y) {
        return x * y;
    }
    
    private class Pair {
        int first;
        int second;
        
        Pair(int first, int second) {
            this.first = first;
            this.second = second;
        }
    }
    
    private Pair dfs(int x, int f, List<List<Integer>> con, List<Boolean> prime, long[] r) {
        Pair v = new Pair(!prime.get(x) ? 1 : 0, prime.get(x) ? 1 : 0);
        for (int y : con.get(x)) {
            if (y == f) continue;
            Pair p = dfs(y, x, con, prime, r);
            r[0] += mul(p.first, v.second) + mul(p.second, v.first);
            if (prime.get(x)) {
                v.second += p.first;
            } else {
                v.first += p.first;
                v.second += p.second;
            }
        }
        return v;
    }
}
```
Python
```
class Solution:
    def countPaths(self, n: int, edges: List[List[int]]) -> int:
        def mul(x, y):
            return x * y
        
        def dfs(x, f, con, prime, r):
            v = [1 - prime[x], prime[x]]
            for y in con[x]:
                if y == f:
                    continue
                p = dfs(y, x, con, prime, r)
                r[0] += mul(p[0], v[1]) + mul(p[1], v[0])
                if prime[x]:
                    v[1] += p[0]
                else:
                    v[0] += p[0]
                    v[1] += p[1]
            return v
        
        prime = [True] * (n + 1)
        prime[1] = False
        
        all_primes = []
        for i in range(2, n + 1):
            if prime[i]:
                all_primes.append(i)
            for x in all_primes:
                temp = i * x
                if temp > n:
                    break
                prime[temp] = False
                if i % x == 0:
                    break
        
        con = [[] for _ in range(n + 1)]
        for e in edges:
            con[e[0]].append(e[1])
            con[e[1]].append(e[0])
        
        r = [0]
        dfs(1, 0, con, prime, r)
        return r[0]

```
