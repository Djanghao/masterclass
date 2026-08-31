# Record right-most index of every prime factor into dictionary

**Author:** yuanzhi247012
**Votes:** 33
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258526/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258526/)

---

# Intuition
If arr[0]==2, and if no factor "2" in the rest of the array, then arr[0] is the split point. If arr[5] also has prime factor "2", then it is not possible to split at arr[0\\~4]. The split index must be >=5. Also if all prime factors in arr[0~5] doesn't exist after arr[5], then the split point is arr[5], otherwise the split index is >5.

# Approach
We record the right-most index of each prime factor into a dictionary. Then start from arr[0], we keep updating the right-most index **scanned so far**. If the current right-most index is "i" itself, then that means "i" is the smallest splitting point.

# Code
```python
mx = 10**6
spf = [i for i in range(mx+1)]
for i in range(2,int(math.sqrt(mx))+1):
    if spf[i]==i:
        for j in range(i*i,mx+1,i):
            spf[j]=min(spf[j],i)
def getPrimeFactors(x):
    while x!=1:
        yield spf[x]
        x//=spf[x]
class Solution:
    def findValidSplit(self, nums: List[int]) -> int:
        fac_idx = defaultdict(int)
        for i,v in enumerate(nums):
            for fac in getPrimeFactors(v):
                fac_idx[fac] = i
        right_most = 0
        for i in range(len(nums)-1):
            for fac in getPrimeFactors(nums[i]):
                right_most = max(right_most,fac_idx[fac])
            if right_most==i:
                return i
        return -1
```