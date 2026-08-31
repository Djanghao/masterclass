# True O(n) solution with fast modular inverses

**Author:** kcsquared
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1305862/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1305862/)

---

**Explanation**

There's a [somewhat famous trick](https://cp-algorithms.com/algebra/module-inverse.html) for computing all inverses (modulo some prime p) from `1` up to `n` with `O(n)` space and time. Given those, it's easy to calculate the inverse factorials mod that prime up to `n`. From there, we use the [multinomial theorem](https://en.wikipedia.org/wiki/Multinomial_theorem#Multinomial_coefficients): 

```
number of ways to place subtree rooted at vertex R =
(product over direct children of R of num_ways(child)) x ways to interleave nodes of children
# and the second term, by multinomial theorem, is
(sum of child subtree sizes *multichoose* child subtree sizes)
```

**Complexity**
Time and space complexity: `O(n)`. Unlike solutions using fast modular exponentiation for each inverse factorial, which run in time `O(n * log(modulus))`, or using Euclid's algorithm to run in time `O(n * log^2(modulus))`, each inverse factorial is calculated in `O(1)` time. Of course, you might consider the modulus to be a constant here.

**Python**

```
class Solution:
	def waysToBuildRooms(self, prevRoom: List[int]) -> int:
		mod = 10 ** 9 + 7
		n = len(prevRoom)

		mod_inverses = [1] * (n + 1)
		factorials = [1] * (n + 1)
		inverse_factorials = [1] * (n + 1)

		for x in range(2, n + 1):  # Precompute all factorials and inverse factorials needed in O(1) time each
			mod_inverses[x] = mod - mod // x * mod_inverses[mod % x] % mod
			factorials[x] = (x * factorials[x - 1]) % mod
			inverse_factorials[x] = (mod_inverses[x] * inverse_factorials[x - 1]) % mod

		children = collections.defaultdict(list)  # Convert parent list to children lists
		for i, x in enumerate(prevRoom[1:], 1):
			children[x].append(i)

		def postorder(curr: int) -> Tuple[int, int]:
			if curr not in children:  # Leaf has ways, size both 1
				return 1, 1
			tot_size = 1
			tot_ways = 1
			for child in children[curr]:
				ways, size_of = postorder(child)
				tot_ways *= ways * inverse_factorials[size_of]
				tot_size += size_of
			tot_ways *= factorials[tot_size-1]
			return tot_ways % mod, tot_size

		return postorder(0)[0]
```

**C++**
```c++
class Solution {
public:
    int waysToBuildRooms(vector<int>& prevRoom) {
        int n = prevRoom.size();
        
        vector<long> fact(n + 1, 1), inv_fact(n + 1, 1), inv(n+1, 1);
        for (int i = 2; i <= n; ++i) {
            inv[i] = mod - mod / i * inv[mod % i] % mod;
            fact[i] = fact[i - 1] * i % mod;
            inv_fact[i] = inv_fact[i-1] * inv[i] % mod;
        }

        vector<vector<int>> children(n);
        for (int i = 1; i < n; ++i) {
            children[prevRoom[i]].push_back(i);
        }
        
        return postorder(children, fact, inv_fact, 0).first;
    }
private:
    long mod = 1e9 + 7;

    pair<long, long> postorder(const vector<vector<int>>& children, const vector<long>& fact, const vector<long>& inv_fact, int curr) {
        if(children[curr].size() == 0)
            return {1,1};
        long tot_ways = 1, my_size = 1;
        for(int child : children[curr]) {
            auto [ways, size_of] = postorder(children, fact, inv_fact, child);
            tot_ways = ((tot_ways*ways)%mod) * inv_fact[size_of] % mod;
            my_size += size_of;
        }
        return {(tot_ways*fact[my_size-1])%mod, my_size};
    }
};
```
Bonus challenge: These problem constraints don't work with the default Python recursion limit of 1000. However, postorder traveral can be done iteratively using a stack, if you want to optimize your answer.