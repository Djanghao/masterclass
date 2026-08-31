# Swift Solution || Easy Approach

**Author:** snappycipher
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/2422711/](https://leetcode.com/problems/count-special-integers/solutions/2422711/)

---

```
class Solution {
    func countSpecialNumbers(_ n: Int) -> Int {
	if (n <= 10)
	{
		return n;
	}

	var result = count(n, 0, 0) - 1;
	return result;
    }

  func count(_ n: Int,_ current: Int,_ mask:Int) -> Int {
	if (current > n)
	{
		return 0;
	}
	var result = 1;
	for d in 0..<10
	{
		if !((current == 0 && d == 0) ||  ((mask & (1 << d)) != 0))
		{
			result += count(n, current * 10 + d, mask | (1 << d));
		}
	
	}
	return result;
 }
}