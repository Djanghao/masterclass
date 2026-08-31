# golang DP+KMP with comments

**Author:** qian9600
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/1866402/](https://leetcode.com/problems/find-all-good-strings/solutions/1866402/)

---

```
var next []int
const mod = 1000000000 + 7

func findGoodStrings(n int, s1 string, s2 string, evil string) int {
	next = getNextArray(evil)
	dpMap := map[int]map[int]map[bool]map[bool]int{}
	return f(s1, s2, evil, 0, 0, true, true, dpMap)
}

// f(s1,s2,k,pos,evilCount,meetS1,meetS2) return number of good elem
// param: pos: position to be filled
//			evilCount: how many digit in evil has been meet
//			meetS1: if > s1
//			meetS2: if < s2
// f(i,evilCount,meetS1,meetS2)->add->sum(lowerBound to upperBound) f(i+1,evilCount,meetS1,meetS2)
//	 	lowerBound = 'a', upperBound = 'z'
//		if !meetS1, lowerBound=s1[i]
// 		if !meetS2, upperBound=s2[i]
//		from elem = lowerBound->upperBound, if elem>lowerBound, set meetS1. if elem<upperBound, set meetS2
// 		if elem still in the evil string, evilCount++
// init state
//		f(n,evilCount=0->k,0/1,0/1)=upperBound-lowerBound

func f(s1, s2, evil string, pos, evilCount int, meetS1, meetS2 bool, dp map[int]map[int]map[bool]map[bool]int) int {
	//init map
	if dp[pos] == nil {
		dp[pos] = map[int]map[bool]map[bool]int{}
	}
	if dp[pos][evilCount] == nil {
		dp[pos][evilCount] = map[bool]map[bool]int{}
	}
	if dp[pos][evilCount][meetS1] == nil {
		dp[pos][evilCount][meetS1] = map[bool]int{}
	}

	// ========== if exist, just return ==============
	if v, exist := dp[pos][evilCount][meetS1][meetS2]; exist {
		return v
	}

	// =========== not exist, we start to fill the value ============

	// now pos is the last digit, we can fill init state
	length := len(s1)
	if evilCount == len(evil) {
		dp[pos][evilCount][meetS1][meetS2] = 0
		return 0
	}

	//calc boundary for sum f
	var lowerBound uint8 = 'a'
	var upperBound uint8 = 'z'
	if meetS1 {
		lowerBound = s1[pos]
	}
	if meetS2 {
		upperBound = s2[pos]
	}
	// non-exist boundary
	if upperBound < lowerBound {
		dp[pos][evilCount][meetS1][meetS2] = 0
		return 0
	}
	if pos == length-1 {
		dp[pos][evilCount][meetS1][meetS2] = int(upperBound - lowerBound + 1)
		if evilCount == len(evil)-1 {
			if evil[len(evil)-1] >= lowerBound && evil[len(evil)-1] <= upperBound {
				dp[length-1][evilCount][meetS1][meetS2] = dp[length-1][evilCount][meetS1][meetS2] - 1
			}
		}
		return dp[pos][evilCount][meetS1][meetS2]
	}

	// pos is not last digit, we need to sum all possible f(pos+1)
	for i := lowerBound; i <= upperBound; i++ {
		newMeetS1 := meetS1
		newMeetS2 := meetS2
		if i > s1[pos] {
			newMeetS1 = false
		}
		if i < s2[pos] {
			newMeetS2 = false
		}
		newEvilCount := checkEvil(i, evilCount, evil)
		dp[pos][evilCount][meetS1][meetS2] += f(s1, s2, evil, pos+1, newEvilCount, newMeetS1, newMeetS2, dp)
        dp[pos][evilCount][meetS1][meetS2] = dp[pos][evilCount][meetS1][meetS2] % mod
	}
	
	return dp[pos][evilCount][meetS1][meetS2]
}

func checkEvil(toBeAdded byte, evilCount int, evil string) int {
	for evilCount > 0 && evil[evilCount] != toBeAdded {
		evilCount = next[evilCount-1]
	}
	if evil[evilCount] == toBeAdded {
		evilCount++
	}
	return evilCount
}

func getNextArray(evil string) []int {
	pLen := len(evil)
	next := make([]int, pLen, pLen)
	i := 1
	j := 0
	for i < pLen {
		if evil[i] == evil[j] {
			j++
			next[i] = j
			i++
		} else {
			if j != 0 {
				j = next[j-1]
			} else {
				i++
			}
		}
	}
	return next
}
```