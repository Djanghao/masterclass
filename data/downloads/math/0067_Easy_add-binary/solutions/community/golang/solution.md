# 0ms Golang solution, use math/big package , very simple!

**Author:** NeroBlackstone
**Votes:** 11
**Link:** [https://leetcode.com/problems/add-binary/solutions/1012869/](https://leetcode.com/problems/add-binary/solutions/1012869/)

---

```
func addBinary(a string, b string) string {
	aInt,bInt,sum:=new(big.Int),new(big.Int),new(big.Int)
	aInt.SetString(a,2)
	bInt.SetString(b,2)
	sum.Add(aInt,bInt)
	return sum.Text(2)
}
```