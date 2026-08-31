# [Python] Hashmap with explanation

**Author:** SonicLLM
**Votes:** 10
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/1020745/](https://leetcode.com/problems/tuple-with-same-product/solutions/1020745/)

---


For example: [1,2,4,5,10]

we traverse the array:
2 = nums[0] * nums[1]
4 = nums[0] * nums[2]
5 = nums[0] * nums[3]
10 = nums[0] * nums[4] # (1,10)
8 = nums[1] * nums[2]
10 = nums[1] * nums[3] # (2,5)
20 = nums[1] * nums[4] # (2,10)
20 = nums[2] * nums[3] # (4,5)
40 = nums[2] * nums[4]
50 = nums[3] * nums[4]
 
The dictionary will be:
{2: 1, 4: 1, 5: 1, 10: 2, 8: 1, 20: 2, 40: 1, 50: 1}
which means we have:
10 => (1,10) and  (2,5) 
20 => (2,10) and (4,5)

There are 16 valids tuples:
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)

(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,4,5)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)

So, for (a,b) and (c,d), there will be 8 valid tuples.

Question: what if we have more than two ways to get the same product, how many valid tuples do we have? 
e.g. 20 => (2,10) and (4,5) and (1,20)

Next step, use the formula of combination: `n * (n-1) / 2`

For example:
[2,3,4,6,8,12]
=> {6: 1, 8: 1, 12: 2, 16: 1, 24: 3, 18: 1, 36: 1, 32: 1, 48: 2, 72: 1, 96: 1}
=>  12:2, 24:3, 48:2
12:2 => (a,b)(c,d) => 2 * (2-1)//2 * 8 = 8
24:3 => (e,f)(g,h)(m,n) =>  3* (3-1)//2 * 8 = 24
48:2 => (p,q)(r,s) =>  2 * (2-1)//2 * 8 = 8
=> 8+24+8 = 40


```
class Solution:
    def tupleSameProduct(self, nums: List[int]) -> int:
        product_count = collections.defaultdict(int)
        n = len(nums)
        for i in range(n-1):
            for j in range(i+1, n):
                product = nums[i] * nums[j]
                product_count[product] += 1
        res = 0
        for k, v in product_count.items():
            if v > 1:
                res += (v*(v-1)//2) * (2**3)
        return res
		
```