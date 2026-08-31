# Java Solution in 9 lines - faster than 100% submissions

**Author:** kingsamadesu
**Votes:** 128
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/975844/](https://leetcode.com/problems/goal-parser-interpretation/solutions/975844/)

---

Runtime: 0 ms, faster than 100.00% of Java online submissions for Goal Parser Interpretation.
Memory Usage: 37.4 MB, less than 69.26% of Java online submissions for Goal Parser Interpretation.

```
public String interpret(String command) {
	StringBuilder S = new StringBuilder(command.length());
	for(int i = 0 ; i < command.length() ; i++){
		if(command.charAt(i)=='G') S.append('G');
		if(command.charAt(i)=='('){
			if(command.charAt(i+1)==')') {S.append('o'); i++;}
			else{S.append("al"); i = i + 3;}
		}
	}
	return S.toString();
}
```
Note: using StringBuilder reduce time from 1ms to 0ms.
found it useful?? please upvote it to reach more people.