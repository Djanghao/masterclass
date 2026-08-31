# JS Solution

**Author:** VarunNarayan21
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/4323689/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/4323689/)

---


# Code
```
var maximumNumber = function (num, change) {
	let ans = ''
	let i = 0;

	for (i; i < num.length; i++) {
		if (parseInt(num[i]) >= change[num[i]]) {
			ans += num[i]
		}
		else break;
	}
	for (i; i < num.length; i++){
		if(parseInt(num[i]) <= change[num[i]]){
			ans+= change[num[i]].toString()
		}
		else{
			break;
		}
	}
	ans+=num.slice(i);
	return ans
};
```