# Scala Solution. 100% memory / faster

**Author:** densungkim
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-complement/solutions/5676265/](https://leetcode.com/problems/number-complement/solutions/5676265/)

---

```
def findComplement(num: Int): Int = {
	val builder = new StringBuilder()
	num.toBinaryString.foreach(ch => if (ch == '1') builder.append('0') else builder.append('1'))
	Integer.parseInt(builder.toString(), 2)
}
```

![image](./images/0.png)
