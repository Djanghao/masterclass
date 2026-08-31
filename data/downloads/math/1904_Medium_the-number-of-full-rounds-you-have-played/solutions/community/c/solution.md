# c++ easy with explained solution Passing all Edge CASES

**Author:** super_cool123
**Votes:** 12
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284647/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284647/)

---

**1. To handle the case where our startTime is greater then endTime we add a period of 24 hrs ie 24*60.
2. To handle the case were startTime must be in the range of [15:30:45:60] we can add 14 to start time in that way we can skip [0 to 14] time interval
3. To Handle the edge case we have to convert the time to minute by multiplying by 60 sec.**
```
class Solution {
    public:
        int numberOfRounds(string s, string f) {
            
		int startT = 60 * stoi(s.substr(0,2)) + stoi(s.substr(3));
		int finishT = 60 * stoi(f.substr(0,2)) + stoi(f.substr(3));

		if (startT > finishT)
			finishT += 24 * 60;

		return max(0, (finishT / 15) - (startT + 14) / 15);
            
        }
};
```