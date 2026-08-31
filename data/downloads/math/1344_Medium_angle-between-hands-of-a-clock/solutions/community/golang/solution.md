# Golang solution faster than 100% w/ explanation and images

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/1078165/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/1078165/)

---

***Code on the bottom, and if this helped please up vote***
* * *
```
Time: faster than 100%, O(1) 
Space: O(1)
```
* * *
Calculating hours:

![image](./images/0.png)
* *One hour is `30` degrees because `360` degrees is a whole circle and there are `12` hours on a clock. So `360/12 = 30 degrees`*
* *The second line of the image is for adding the extra part to the hour hand. By the extra part I mean the part that is added to the hour hand when the minute hand is not at `0`. Since there are `60` minutes per hour we can use `30 degrees = hour` from the first line. So it comes out as `30 degrees / 60 * minutes`. Then we can simplify this to `(30 degrees * minutes) / 60`*
* *The third part combines both the first and second lines together.*
* * *
Calculating minutes:

![image](./images/1.png)

* *We do 360 degrees divided by 60 minutes because there are 360 degrees in a whole circle, and 60 minutes in a whole circle.*
* * *


```
func angleClock(hour int, minutes int) float64 {
	hourHand := float64(minutes*30)/float64(60) + float64(hour%12*30)
	minHand := float64(6 * minutes)
	distance := math.Abs(hourHand - minHand)

	if distance > 180 {
		distance = 360 - distance
	}

	return distance
}
```