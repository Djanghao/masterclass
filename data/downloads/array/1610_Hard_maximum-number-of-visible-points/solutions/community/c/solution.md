# [Python / C++] 3 Simple Steps

**Author:** rowe1227
**Votes:** 49
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/894732/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/894732/)

---

```html5
<b>Time Complexity: O(n&middot;log(n))
Space Complexity: O(n)</b>
```
<iframe src="https://leetcode.com/playground/YyWmsvj7/shared" frameBorder="0" width="100%" height="750"></iframe>

**Notes:**
1. ```math.atan2(y,x)``` is used instead of ```math.atan``` because it accounts for the sign of x and y.  
```html5
    math.atan2(-1, -1) * (180 / &pi;) = -135&deg;
	math.atan2(1, 1) * (180 / &pi;) = 45&deg;
	math.atan(1/1) * (180 / &pi;) = 45&deg;
	math.atan(-1/-1) * (180 / &pi;) = 45&deg;
```

2. Python: Step 2 is written for readability.  It is more efficient to replace step 2 with the following code:
```python
	angles = sorted((angle_from_me(p) for p in points))
	if not angles: return points_on_me
	max_angle = angles[-1]
	for a in angles:
		if a + 360 > max_angle + angle: break
		angles.append(a + 360)
```

3. C++: `double` is used for angles for higher precision. If you are using C++ and obtaining a result that contains one or two points more than the expected result for just a few of the test cases, try increasing the precision by using `double`.