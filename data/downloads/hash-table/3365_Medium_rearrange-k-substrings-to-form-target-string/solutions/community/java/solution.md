# ✅ Simple Java Solution

**Author:** Harsh__005
**Votes:** 7
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077209/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077209/)

---

## **CODE**
```Java []
public boolean isPossibleToRearrange(String s, String t, int k) {
	int size = s.length();
	int div = size/k;
	Map<String, Integer> map = new HashMap<>();
	for(int i=0; i<size; i+=div) {
		String sub = s.substring(i, i+div);
		map.put(sub, map.getOrDefault(sub, 0) + 1);
	}
	for(int i=0; i<size; i+=div) {
		String sub = t.substring(i, i+div);
		if(map.getOrDefault(sub, 0) > 0) {
			map.put(sub, map.get(sub) - 1);
		} else return false;
	}
	return true;
}
```