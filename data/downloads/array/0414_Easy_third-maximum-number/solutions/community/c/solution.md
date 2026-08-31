# Neat Solution [Java / C++]

**Author:** kunalsuri
**Votes:** 23
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/1176643/](https://leetcode.com/problems/third-maximum-number/solutions/1176643/)

---

**Java**
```
long f = Long.MIN_VALUE;
long s = Long.MIN_VALUE;
long t = Long.MIN_VALUE;
for (int n: nums) {
	if (n == f || n == s || n == t)
		continue;
	if (n >= f) {
		t = s;
		s = f;
		f = n;
	} else if (n >= s) {
		t = s;
		s = n;
	} else if (n >= t) {
		t = n;
	}
}
if (t != Long.MIN_VALUE)
	return (int)t;
else if (f != Long.MIN_VALUE)
	return (int)f;
else
	return (int)s;
```
**C++**
```
long f = LONG_MIN;
long s = LONG_MIN;
long t = LONG_MIN;
for (int n: nums) {
	if (n == f || n == s || n == t)
		continue;
	if (n >= f) {
		t = s;
		s = f;
		f = n;
	} else if (n >= s) {
		t = s;
		s = n;
	} else if (n >= t) {
		t = n;
	}
}
if (t != LONG_MIN)
	return (int)t;
else if (f != LONG_MIN)
	return (int)f;
else
	return (int)s;
}
```
**If you liked it, even a little bit then pls consider giving this solution a Upvote
Thank You :)**