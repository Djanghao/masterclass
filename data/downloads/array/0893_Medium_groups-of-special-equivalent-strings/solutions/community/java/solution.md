# java 6ms solution, easy to understand with explanation

**Author:** pangeneral
**Votes:** 4
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/271486/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/271486/)

---

The basic idea is putting the signature of each string to a set, then the size of set is the number of groups.
Since each string only contains lowercase letters, we can use two arrays ```odd[26]``` and ```even[26]``` to represents the frequency of 26 lowercase letters on odd place and even place of a string repectively. 
The signature of a string is apparently ```Arrays.toString(odd) + Arrays.toString(even)```.
The code is as following:
```
public int numSpecialEquivGroups(String[] A) {
	Set<String> group = new HashSet<String>();
	for(int i = 0; i < A.length; i++) 
		group.add(getSignature(A[i]));
	return group.size();
}

public String getSignature(String s) {
	int odd[] = new int[26];
	int even[] = new int[26];
	for(int i = 0; i < s.length(); i += 2) 
		even[s.charAt(i) - 'a']++;
	for(int i = 1; i < s.length(); i += 2)
		odd[s.charAt(i) - 'a']++;
	StringBuilder sb = new StringBuilder("");
	for(int i = 0; i < 26; i++)
		sb.append(odd[i]);
	for(int i = 0; i < 26; i++)
		sb.append(even[i]);
	return sb.toString();
}
```