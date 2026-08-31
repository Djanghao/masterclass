# java 4ms dp solution and summarization of string match problems

**Author:** pangeneral
**Votes:** 16
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/270742/](https://leetcode.com/problems/camelcase-matching/solutions/270742/)

---

This problem is similar to [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) and [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/discuss/270729/java-13ms-dp-solution-with-explanation). The previous two problems provide wildcard ```*``` for pattern string. In this problem, we don't have explicit wildcard, but implicit wildcard do exist and the method is similar to previous problems.
The baisc idea is using a two dimension array ```dp[][] ``` to indicate whether the substring of query and pattern matches.
If ```query.charAt(i) == pattern.charAt(j)```, then ```dp[i][j] = dp[i - 1][j - 1]```. 
If ```query.charAt(i) != pattern.charAt(j)``` and ```query.charAt(i)``` is a lower case character, then ```dp[i][j] == dp[i - 1][j]```. Here, we are actually processing implicit wildcards in pattern string which can match any lower case sequence.
```
public List<Boolean> camelMatch(String[] queries, String pattern) {
	List<Boolean> resultList = new ArrayList<Boolean>();
	for(int i = 0; i < queries.length; i++){
		if( isMatch(queries[i], pattern) )
			resultList.add(true);
		else
			resultList.add(false);
	}
	return resultList;
}
```

```
public boolean isMatch(String query, String pattern){
	boolean dp[][] = new boolean[query.length() + 1][pattern.length() + 1];
	dp[0][0] = true;
	for(int i = 0; i < query.length(); i++)
		if( Character.isLowerCase(query.charAt(i)) )
			dp[i + 1][0] = dp[i][0];
	for(int i = 0; i < query.length(); i++){
		for(int j = 0; j < pattern.length(); j++){
			if( query.charAt(i) == pattern.charAt(j) )
				dp[i + 1][j + 1] = dp[i][j];
			else if( Character.isLowerCase(query.charAt(i)) )
				dp[i + 1][j + 1] = dp[i][j + 1];
		}
	}
	return dp[query.length()][pattern.length()];
}
```