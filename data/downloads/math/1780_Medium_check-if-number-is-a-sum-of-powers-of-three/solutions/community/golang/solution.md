# [Golang / Detailed explanation] Mathy solution using regex

**Author:** su5kk
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1224229/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1224229/)

---

Let us take a look at numbers 12 and 91 in base 3 representation:
```12 = 110 base-3```
```91 = 10101 base-3```
Convering 110 base-3 to base-10 is: ```1*3^2 + 1*3`^1 + 0*3^0```
You can do similar thing with 10101 base-3 to base-10.
Now let's take a look at number 21:
```21 = 210 base-3```
Convering it to base-10 gives us: ```2*3^2 + 1*3^1 + 0*3^0```
From this equation it is fairly obvious that 21 is not a sum of powers of three, because it has ```2*3^2``` in its decomposition.
It follows that ```n``` is a sum of powers of three iff ```n```'s base-3 representation contains only ```1```'s and ```0```'s. 
In order to check for that, it is simply enough to check that the base-3 representation does not contain any ```2```'s. I did that check with regex because it is fairly easy and fast:
```
func checkPowersOfThree(n int) bool {
    r, _ := regexp.Compile("2")
	return !r.MatchString(strconv.FormatInt(int64(n), 3))
}
```
Hope you found that helpful.