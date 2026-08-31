# C Sharp Solution

**Author:** fadydev123
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2561071/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2561071/)

---

```
int count = 0;
HashSet<int> hash_num = new HashSet<int>();
foreach(int num in nums)
{
	if(hash_num.Contains(num - diff) && hash_num.Contains(num - 2 * diff))
		count++;
	hash_num.Add(num);  
}
return count;

```