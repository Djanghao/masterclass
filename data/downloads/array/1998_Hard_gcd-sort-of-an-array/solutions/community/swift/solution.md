# Swift | UnionFind

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/gcd-sort-of-an-array/solutions/5399267/](https://leetcode.com/problems/gcd-sort-of-an-array/solutions/5399267/)

---

The main idea is that (indirect) swappability is transitive, that is if ```a <-> b``` (```a``` and ```b``` are swappable) and ```b <-> c``` then ```a <-> c```.

For example if ```2```, ```3``` and ```6``` are in the same array, ```2``` and ```3``` can be indirectly swapped even if ```gcd(2, 3) = 1```, by going through ```6```.

From there, we use UnionFind to gather in the same set elements of the array that are swappable.

For example for ```[9, 6, 7, 2]```, we have 2 sets ```{2, 6, 9}``` and ```{7}```. We need to ensure that sorting each subsequence independently results in a sequence that is globally sorted.

For ```[9, 6, 7, 2]```, it is true but not for ```[9, 7, 6, 2]``` for example (where we get ```[2, 7, 6, 9]```).

**Note:** originally, I explicitly sorted each subsequence, making it a problem harder that it should, but as can see in the code below this is not necessary.



# Code
```
class Solution {
    // UnionFind with path compression.
    struct UnionFind {
        var parent = [Int: Int]()

        mutating func insert(_ u: Int) {
            if parent[u] == nil { parent[u] = u }
        }

        mutating func union(_ u: Int, _ v: Int) -> Bool {
            let rootU = find(u)
            let rootV = find(v)

            if rootU == rootV { return false }

            parent[rootU] = rootV
            return true
        }

        mutating func find(_ u: Int) -> Int {
            if parent[u]! != u {
                parent[u] = find(parent[u]!)
            }
            return parent[u]!
        }
    }

    // Returns the decomposition of n in prime factors.
    func factorize(_ n: Int) -> [Int] {
        var res = [Int]()
        var fact = 2
        var n = n
        while fact * fact <= n {
            while n % fact == 0 {
                res.append(fact)
                n /= fact
            }
            fact += 1
        }
        if n > 1 { res.append(n) }
        return res
    }

    func gcdSort(_ nums: [Int]) -> Bool {
        let n = nums.count

        // Insert numbers and factors in a UnionFind structure.
        // Numbers that can be swapped, either directly or indirectly, will
        // end up in the same set.
        var unionFind = UnionFind()
        for num in nums {
            unionFind.insert(num)
            let factors = factorize(num)
            for factor in factors {
                unionFind.insert(factor)
            }
            if factors.count > 1 {
                for factor in factors[1...] {
                    unionFind.union(factors[0], factor)
                }
            }
            unionFind.union(factors[0], num)
        }

        // For every index, consider num1, the number in the original array,
        // and the num2 the number that ends at that same index after sorting.
        // Make sure they belong to the same set, that is that they are directly
        // or indirectly swappable.
        for (num1, num2) in zip(nums, nums.sorted()) {
            if unionFind.find(num1) != unionFind.find(num2) {
                return false
            }
        }

        return true
    }
}
```