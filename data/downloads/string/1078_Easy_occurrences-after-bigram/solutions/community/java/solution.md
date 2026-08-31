# Java | Time and memory beats 100% | 2 methods | 2 liner

**Author:** prashant404
**Votes:** 11
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/331627/](https://leetcode.com/problems/occurrences-after-bigram/solutions/331627/)

---

**T/S:** O(n)/O(n)
```
public String[] findOcurrences(String text, String first, String second) {
	var words = text.split(" ");
	var occurrences = new ArrayList<String>();

	for (var i = 0; i + 2 < words.length; i++)
		if (words[i].equals(first) && words[i + 1].equals(second))
			occurrences.add(words[i + 2]);

	return occurrences.toArray(new String[0]);
}
```
**Variation:** Same idea using stream
```
public String[] findOcurrences(String text, String first, String second) {
	var words = text.split(" ");
	
	return IntStream.range(0, words.length - 2)
					.filter(i -> words[i].equals(first) && words[i + 1].equals(second))
					.mapToObj(i -> words[i + 2])
					.toArray(String[]::new);
}
```
***Please upvote if this helps***