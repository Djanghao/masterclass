# ✅ Python simple solution | easy to understand | explained

**Author:** sezanhaque
**Votes:** 25
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/2588031/](https://leetcode.com/problems/count-days-spent-together/solutions/2588031/)

---

#### Understanding
* Find the minimum date of leave between Alice & Bob.
* Find the maximum date of arrival between Alice & Bob.
* The desire date will be between these two limit.

#### Example
* Let the input be `arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"`
* The minimum date of leave between Alice & Bob is `"08-18"`.
* The max date of arrival between Alice & Bob is `"08-16"`.
* Total number of days together will be between these days.
	* Calculate from `"08-18"` the total days in a year using `getDate(date)` method and we get **230** days.
	* Calculate from `"08-16"` the total days in a year using `getDate(date)` method and we get **228** days.
* Now substract `230 - 228 + 1`. As days are inclusive so we add 1.
* Return the max value between substranct value and 0.

##### Code
<iframe src="https://leetcode.com/playground/6BEiBvaS/shared" frameBorder="0" width="800" height="300"></iframe>
