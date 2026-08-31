# ✅ Easy O(N) Solution w/ Explanation | Max XOR = 2^maximumBit - 1

**Author:** archit91
**Votes:** 111
**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solutions/1163057/](https://leetcode.com/problems/maximum-xor-for-each-query/solutions/1163057/)

---

\u2714\uFE0F ***Solution***

We need to realize that maximum XOR for a query can always be made equal to `2^maximumBit - 1`. For this it's also necessary to notice this constraint -

* `0 <= nums[i] < 2^maximumBit`

***How is maximum always  `2^maximumBit - 1` ?***

It is given that all elements of the `nums` are in the range `[0, 2^maximumBit - 1]`. And, after xor-ing the whole `nums` array, we will always have a final value (lets call it `XOR`) in between `[0, 2^maximumBit - 1]`.

Now, we can xor this value with any number from the range `[0, 2^maximumBit - 1]`. To maximize it, we can always choose a value from that range which when xor-ed with `XOR`(above obtained value), will maximize it to `2^maximumBit - 1`.

```
Some Examples:
Here, XOR will denote the xor of all elements of original nums array.

Let maximumBit = 3.
Our range will be from [0, 7]. Now, if - 

1. XOR = 1 (001) :  we can choose to xor it with 6 so that maximum xor for query will become '2^maximumBit - 1 = 7'
	   ^ 6 (110)
	   ----------
		    111
			
2. XOR = 2 (010) :  we can choose to xor it with 5 so that maximum xor for query will become '2^maximumBit - 1 = 7'
	   ^ 5 (101)
	   ----------
		    111

3. XOR = 3 (011) :  we can choose to xor it with 4 
	   ^ 4 (100)
	   ----------
		    111
			
4. XOR = 4 (100) :  we can choose to xor it with 3
	   ^ 3 (011)
	   ----------
		    111	
			
And so on for any other cases, we can choose a value to maximize xor to '2^maximumBit-1'
```

Also, after we first calculate the XOR for original `nums` array, the only thing that changes in subsequent queries is that the last element of `nums` is removed. 

So, we can just use the previous **`XOR`** and xor it with element which is to be removed. The element to be removed will be xor-ed twice and cancel out each other and we will get the final answer of that query.
**C++**
```
vector<int> getMaximumXor(vector<int>& nums, int maximumBit) {
	int n = size(nums), XOR = 0;
	vector<int> ans(n);
	for(auto& num : nums) XOR ^= num;
	ans[0] = XOR ^= (1 << maximumBit) - 1;  // 2^maximumBit - 1
	for(int i = 1; i < n; i++)
		ans[i] = XOR ^= nums[n - i];            
	return ans;
}
```

---

**Python**

The same idea in python with slightly different implementation approach -

```
def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
	maxXOR, arrayXOR, ans = (1 << maximumBit) - 1, reduce(ixor, nums), []
	for i in range(len(nums) - 1, -1, -1):
		ans.append(arrayXOR ^ maxXOR)
		arrayXOR ^= nums[i]
	return ans
```

***Time Complexity :*** **`O(N)`**

---
---