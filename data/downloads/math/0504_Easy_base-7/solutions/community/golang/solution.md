# Go lang

**Author:** vladverpeta
**Votes:** 2
**Link:** [https://leetcode.com/problems/base-7/solutions/1583557/](https://leetcode.com/problems/base-7/solutions/1583557/)

---

```
func convertToBase7(num int) string {
    if(num == 0) {
        return "0";
    }
    return fmt.Sprintf("%d", TtoS(Abs(num))*Abs(num)/num)
}

func TtoS(num int) int {
	divided := int(math.Ceil(float64(num / 7)))

	if num < 7 {
		return num
	}
	return TtoS(divided)*10 + num%7
}

func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
```