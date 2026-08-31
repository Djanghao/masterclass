# [Java] Simple O(n) solution

**Author:** spirit_obi
**Votes:** 6
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/939814/](https://leetcode.com/problems/reformat-the-string/solutions/939814/)

---

```
public String reformat(String s) {
	List<Character> nums = new ArrayList<Character>();
	List<Character> alph = new ArrayList<Character>();

	for (int i = 0; i < s.length(); i++) {
		if (Character.isDigit(s.charAt(i)))
			nums.add(s.charAt(i));
		else
			alph.add(s.charAt(i));
	}

	if (Math.abs(nums.size() - alph.size()) > 1)
		return "";

	StringBuilder sb = new StringBuilder();
	if (nums.size() >= alph.size()) {
		for (int i = 0; i < nums.size(); i++) {
			sb.append(nums.get(i));
			if (i < alph.size())
				sb.append(alph.get(i));
		}
	}else{
		for (int i = 0; i < alph.size(); i++) {
			sb.append(alph.get(i));
			if (i < nums.size())
				sb.append(nums.get(i));
		}
	}
	return sb.toString();
}
```