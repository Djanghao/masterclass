# Full Detailed Explanation | C++ | JAVA | JS | Rust | Python | GO ✅🔥

**Author:** shivakumar1
**Votes:** 4
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4780133/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4780133/)

---

# Intuition

just dry run these cases
```
[4,6,9]
factors of all numbers are
4 -> 2,2
6 -> 2,3
9 -> 3,3
```
6,9 have a common factor of 3, if we have to form a graph it would look like this, 3->9 and 3->6, 6 also has factor 2 so 2->6
The final graph looks like this
`3->9,6 2->6`
4 have a common factor of 2
`3->9,6 - 2->6,4`
the node 6 is common
we can traverse the whole array,
If we assume in the sense of a Disjoint set, all of these have the same common parent. like every node has 2 as a parent at the end.

steps:
1. for every number get all its factors and attach that number with its factor.
2. at the end if every number has the same parent we can traverse the array.


NOTE:
1. `gcd(a,b`) will always be `<= a`, so if `a=1`, then gcd will always be `<=1`, so if we have 1 in the array we can simply return false.
2. If the size of the array is 1 then answer is true.


NOW you just need to find the factors of all numbers in the array,
Can we say that every factor must be a prime number?
Yes we can,\uD83D\uDE01

So prime number is related with sieve of eratosthenes.

Below is the code of sieve of eratosthenes.
```
for(int i=2; i*i<prime.length; i++){
    if(prime[i]){
        for(int j=i*i; j<prime.length; j+=i){
            if(prime[j]){
                lcf[j] = i; // here we are storing who is dividing that number
            }

            prime[j] = false; // Here we are making jth index false because, it is not prime and it is divisable
        }
    }
}
```
so at the end we have lcf array which tells the factor of every number
for ex x = 12;
```
lcf[12] says 2, divides 12,
so divide 12 with lcf[12]
x = x/lcf[12];
x = 12/2 // we get 2 as a factor
x = 6,
repeat this until x > 1
x = 6/lcf[6]
x = 6/2
x = 3
x = 3/lcf[3]
x = 3/3
x = 1
```

we get all the factors.

atach every number with its factor, in Disjoint Set,
at the end if every node have same parent then we can return true.

because:
```
[4,6,9]
factors of all numbers are
4 -> 2,2
6 -> 2,3
9 -> 3,3
```

every one is connected with each other directly or indirectly.
           




# Complexity
- Time complexity: $$O(Nlog(MAX-VAL))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public boolean canTraverseAllPairs(int[] nums) {
        if(nums.length == 1) return true;
        int max = 0;
        for(int data: nums){
            // if array have 1 return false
            if(data == 1) return false;
            max = Math.max(data, max);
        }

        // initializing the Disjoint Set
        DisjointSet ds = new DisjointSet(max+1);

        // calculating lcf
        int[] lcf = sieve(nums, max);


        for(int data: nums){
            int d = data;
            while(data > 1){
                if(data % lcf[data] == 0){
                    // attaching the every number with its all factors
                    ds.union(lcf[data], d);
                    data /= lcf[data];   
                } 
            }
        }



        for(int i=0; i<nums.length-1; i++){
            // if every one has different parent means we have components, graph is not connected
            if(ds.ultimateParent(nums[i]) != ds.ultimateParent(nums[i+1])) return false;
        }

        return true;
    }

    private int[] sieve(int[] nums, int max){
        boolean[] prime = new boolean[max+1];
        int[] lcf = new int[max+1];

        Arrays.fill(prime, true);
        prime[0] = prime[1] = false;

        for(int i=1; i<lcf.length; i++){
            lcf[i] = i;
        }

        for(int i=2; i*i<prime.length; i++){
            if(prime[i]){
                for(int j=i*i; j<prime.length; j+=i){
                    if(prime[j]){
                        lcf[j] = i;
                    }

                    prime[j] = false;
                }
            }
        }

        return lcf;
    }
}


class DisjointSet{
    private List<Integer> size;
    private List<Integer> parent;

    public DisjointSet(int n){
        size = new ArrayList();
        parent = new ArrayList();

        for(int i=0; i<n; i++){
            size.add(1);
            parent.add(i);
        }
    }

    public void union(int u, int v){
        int pu = ultimateParent(u);
        int pv = ultimateParent(v);

        if(pu == pv) {
            // size.set(pu, size.get(pu)+1);
            return;
        }

        if(size.get(pu) >= size.get(pv)){
            size.set(pu, size.get(pu)+size.get(pv));
            parent.set(pv, pu);
        } else{
            size.set(pv, size.get(pu)+size.get(pv));
            parent.set(pu, pv);
        }

    }

    public int ultimateParent(int node){
        if(node == parent.get(node)) return node;

        int up = ultimateParent(parent.get(node));
        parent.set(node, up);

        return up;
    }

    public int getSize(int node){
        return size.get(node);
    }

}
```
```C++ []

#include <vector>
#include <algorithm>

using namespace std;

class DisjointSet {
private:
    vector<int> size;
    vector<int> parent;

public:
    DisjointSet(int n) {
        size.resize(n);
        parent.resize(n);

        for (int i = 0; i < n; ++i) {
            size[i] = 1;
            parent[i] = i;
        }
    }

    int ultimateParent(int node) {
        if (node == parent[node]) return node;

        int up = ultimateParent(parent[node]);
        parent[node] = up;

        return up;
    }

    void unionSets(int u, int v) {
        int pu = ultimateParent(u);
        int pv = ultimateParent(v);

        if (pu == pv) {
            return;
        }

        if (size[pu] >= size[pv]) {
            size[pu] += size[pv];
            parent[pv] = pu;
        } else {
            size[pv] += size[pu];
            parent[pu] = pv;
        }
    }
};

class Solution {
public:
    bool canTraverseAllPairs(vector<int>& nums) {
        if (nums.size() == 1) return true;
        int max = 0;
        for (int data : nums) {
            if (data == 1) return false;
            max = std::max(data, max);
        }

        DisjointSet ds(max + 1);
        vector<int> lcf = sieve(nums, max);

        for (int data : nums) {
            int d = data;
            while (data > 1) {
                if (data % lcf[data] == 0) {
                    ds.unionSets(lcf[data], d);
                    data /= lcf[data];
                }
            }
        }

        for (int i = 0; i < nums.size() - 1; ++i) {
            if (ds.ultimateParent(nums[i]) != ds.ultimateParent(nums[i + 1])) {
                return false;
            }
        }

        return true;
    }

private:
    vector<int> sieve(vector<int>& nums, int max) {
        vector<bool> prime(max + 1, true);
        vector<int> lcf(max + 1);

        for (int i = 0; i <= max; ++i) {
            lcf[i] = i;
        }

        for (int i = 2; i * i <= max; ++i) {
            if (prime[i]) {
                for (int j = i * i; j <= max; j += i) {
                    if (prime[j]) {
                        lcf[j] = i;
                    }
                    prime[j] = false;
                }
            }
        }

        return lcf;
    }
};

```

```python []
class DisjointSet:
    def __init__(self, n):
        self.size = [1] * n
        self.parent = list(range(n))

    def ultimate_parent(self, node):
        if node == self.parent[node]:
            return node
        self.parent[node] = self.ultimate_parent(self.parent[node])
        return self.parent[node]

    def union(self, u, v):
        pu = self.ultimate_parent(u)
        pv = self.ultimate_parent(v)
        if pu == pv:
            return
        if self.size[pu] >= self.size[pv]:
            self.size[pu] += self.size[pv]
            self.parent[pv] = pu
        else:
            self.size[pv] += self.size[pu]
            self.parent[pu] = pv

class Solution:
    def can_traverse_all_pairs(self, nums):
        if len(nums) == 1:
            return True
        max_num = max(nums)
        ds = DisjointSet(max_num + 1)
        lcf = self.sieve(nums, max_num)

        for data in nums:
            d = data
            while data > 1:
                if data % lcf[data] == 0:
                    ds.union(lcf[data], d)
                    data //= lcf[data]

        for i in range(len(nums) - 1):
            if ds.ultimate_parent(nums[i]) != ds.ultimate_parent(nums[i + 1]):
                return False
        return True

    def sieve(self, nums, max_num):
        prime = [True] * (max_num + 1)
        lcf = list(range(max_num + 1))

        for i in range(2, int(max_num ** 0.5) + 1):
            if prime[i]:
                for j in range(i * i, max_num + 1, i):
                    if prime[j]:
                        lcf[j] = i
                    prime[j] = False

        return lcf


```

```Rust []
struct DisjointSet {
    size: Vec<usize>,
    parent: Vec<usize>,
}

impl DisjointSet {
    fn new(n: usize) -> DisjointSet {
        DisjointSet {
            size: vec![1; n],
            parent: (0..n).collect(),
        }
    }

    fn ultimate_parent(&mut self, node: usize) -> usize {
        if node == self.parent[node] {
            return node;
        }
        self.parent[node] = self.ultimate_parent(self.parent[node]);
        self.parent[node]
    }

    fn union(&mut self, u: usize, v: usize) {
        let pu = self.ultimate_parent(u);
        let pv = self.ultimate_parent(v);

        if pu == pv {
            return;
        }

        if self.size[pu] >= self.size[pv] {
            self.size[pu] += self.size[pv];
            self.parent[pv] = pu;
        } else {
            self.size[pv] += self.size[pu];
            self.parent[pu] = pv;
        }
    }
}

struct Solution;

impl Solution {
    fn can_traverse_all_pairs(nums: Vec<i32>) -> bool {
        if nums.len() == 1 {
            return true;
        }
        let max = *nums.iter().max().unwrap();
        let mut ds = DisjointSet::new((max + 1) as usize);
        let lcf = Solution::sieve(&nums, max);

        for data in &nums {
            let mut d = *data;
            while d > 1 {
                if d % lcf[d as usize] == 0 {
                    ds.union(lcf[d as usize], *data as usize);
                    d /= lcf[d as usize];
                }
            }
        }

        for i in 0..nums.len() - 1 {
            if ds.ultimate_parent(nums[i] as usize) != ds.ultimate_parent(nums[i + 1] as usize) {
                return false;
            }
        }

        true
    }

    fn sieve(nums: &Vec<i32>, max: i32) -> Vec<usize> {
        let mut prime = vec![true; (max + 1) as usize];
        let mut lcf = (0..=max as usize).collect::<Vec<usize>>();

        for i in 2



```


```go []

package main

import (
	"math"
)

type DisjointSet struct {
	size   []int
	parent []int
}

func NewDisjointSet(n int) *DisjointSet {
	size := make([]int, n)
	parent := make([]int, n)
	for i := 0; i < n; i++ {
		size[i] = 1
		parent[i] = i
	}
	return &DisjointSet{size, parent}
}

func (ds *DisjointSet) UltimateParent(node int) int {
	if node == ds.parent[node] {
		return node
	}
	ds.parent[node] = ds.UltimateParent(ds.parent[node])
	return ds.parent[node]
}

func (ds *DisjointSet) Union(u, v int) {
	pu := ds.UltimateParent(u)
	pv := ds.UltimateParent(v)

	if pu == pv {
		return
	}

	if ds.size[pu] >= ds.size[pv] {
		ds.size[pu] += ds.size[pv]
		ds.parent[pv] = pu
	} else {
		ds.size[pv] += ds.size[pu]
		ds.parent[pu] = pv
	}
}

func CanTraverseAllPairs(nums []int) bool {
	if len(nums) == 1 {
		return true
	}
	max := 0
	for _, data := range nums {
		if data == 1 {
			return false
		}
		max = int(math.Max(float64(data), float64(max)))
	}

	ds := NewDisjointSet(max + 1)
	lcf := sieve(nums, max)

	for _, data := range nums {
		d := data
		for data > 1 {
			if data%lcf[data] == 0 {
				ds.Union(lcf[data], d)
				data /= lcf[data]
			}
		}
	}

	for i := 0; i < len(nums)-1; i++ {
		if ds.UltimateParent(nums[i]) != ds.UltimateParent(nums[i+1]) {
			return false
		}
	}
	return true
}

func sieve(nums []int, max int) []int {
	prime := make([]bool, max+1)
	lcf := make([]int, max+1)

	for i := range prime {
		prime[i] = true
		lcf[i] = i
	}

	for i := 2; i*i <= max; i++ {
		if prime[i] {
			for j := i * i; j <= max; j += i {
				if prime[j] {
					lcf[j] = i
				}
				prime[j] = false
			}
		}
	}

	return lcf
}

```
```js []
class DisjointSet {
    constructor(n) {
        this.size = Array(n).fill(1);
        this.parent = Array.from({ length: n }, (_, i) => i);
    }

    ultimateParent(node) {
        if (node === this.parent[node]) return node;
        this.parent[node] = this.ultimateParent(this.parent[node]);
        return this.parent[node];
    }

    union(u, v) {
        const pu = this.ultimateParent(u);
        const pv = this.ultimateParent(v);

        if (pu === pv) return;

        if (this.size[pu] >= this.size[pv]) {
            this.size[pu] += this.size[pv];
            this.parent[pv] = pu;
        } else {
            this.size[pv] += this.size[pu];
            this.parent[pu] = pv;
        }
    }
}

function canTraverseAllPairs(nums) {
    if (nums.length === 1) return true;
    let max = 0;
    for (const data of nums) {
        if (data === 1) return false;
        max = Math.max(data, max);
    }

    const ds = new DisjointSet(max + 1);
    const lcf = sieve(nums, max);

    for (const data of nums) {
        let d = data;
        while (data > 1) {
            if (data % lcf[data] === 0) {
                ds.union(lcf[data], d);
                data /= lcf[data];
            }
        }
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (ds.ultimateParent(nums[i]) !== ds.ultimateParent(nums[i + 1])) {
            return false;
        }
    }
    return true;
}

function sieve(nums, max) {
    const prime = Array(max + 1).fill(true);
    const lcf = Array(max + 1).fill().map((_, i) => i);

    for (let i = 2; i * i <= max; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= max; j += i) {
                if (prime[j]) {
                    lcf[j] = i;
                }
                prime[j] = false;
            }
        }
    }

    return lcf;
}

```

# Except JAVA, All codes are converted through Chat GPT, The Main AIM of this post to understand the logic.



# If you found this helpful please share it\u2764\uFE0F
![upvote.gif](./images/0.gif)
