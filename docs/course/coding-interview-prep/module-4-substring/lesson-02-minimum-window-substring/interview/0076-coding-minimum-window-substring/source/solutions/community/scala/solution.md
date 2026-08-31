# Scala | Sliding Window | Simple Clear Detailed Explanation

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/792967/](https://leetcode.com/problems/minimum-window-substring/solutions/792967/)

---

Currnet Window:
&nbsp;&nbsp;|---------------|
left&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right

Minimum Window:
&nbsp;&nbsp;|-----------|
start&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end


Follow simple steps
1. Create target char count map (a -> 1) (b -> 2) etc
2. Iterate on source String with current window, expand current window with `right`
3. From `map` decrease count of target char, if found from source string
4. If we have found all target char from source string, our `left` and `right` are set
5. Now follow 3 more steps
	1. Move `left` till we have get rid of all extra target char from left and update count
	2. When `left` has reached the char that can't be removed further, update minimum window `start` and `end`
	3. Move `left` one step to find new valid window, that might have minimum window in it

```
def minWindow(s: String, t: String): String = {
	if (s.length == 0 || t.length == 0) return ""

	//Count each character in target String
	val map = collection.mutable.Map() ++ t.groupBy(c=>c).mapValues(_.length)
	var reqCh = t.length
	//Possible minimum substring indices
	var start = 0
	var end = 0

	var left = 0
	var right = 0

	while(left <= right && right < s.length) {
		// Pick first char from source and check from target char map
		val ch = s.charAt(right)
		if(map.contains(ch)) {
			val chCount = map(ch)
			//If we were searching this char and we found it, so subtract from total required.
			if(chCount > 0) reqCh -= 1

			map(ch) = chCount - 1
			// Found Solution
			if(reqCh == 0) {
				//Compress from left to get the minimum
				//This is main purpose of 2 pointer, right goes forward till it finds solution and left moves forward after solution, till it gets desired minimum
				var chAtLeft = s.charAt(left)
				while(!map.contains(chAtLeft) || map.contains(chAtLeft) && map(chAtLeft) < 0) {
					if(map.contains(chAtLeft)) map(chAtLeft) = map(chAtLeft) + 1
					left += 1
					chAtLeft = s.charAt(left)
				}
				if(end == 0 || (end - start) > (right - left)) {
					start = left
					end = right + 1
				}
				//Now skip one char which was from target to again search for best solution
				map(s.charAt(left)) = map(s.charAt(left)) + 1
				reqCh += 1
				left += 1
			}
		}
		right += 1
	}
	s.substring(start, end)
}
```