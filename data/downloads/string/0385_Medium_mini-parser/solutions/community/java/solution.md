# Simple Java Solution (Beats 98%)

**Author:** fabrizio3
**Votes:** 6
**Link:** [https://leetcode.com/problems/mini-parser/solutions/86128/](https://leetcode.com/problems/mini-parser/solutions/86128/)

---

Basic idea:
The Nested Integer is composed an Integer or a List;

- If it is a List (starts with `[`), then for each element of the list, (Integer or nested List) call `deserialize()` and add the result of `deserialize()` to the current NestedInteger.
- If it is an Integer, just add it as Nested Integer with single value

For example for the input string `"[123,456,[788,799,833],[[]],10,[]]"` the elements to be processed with `deserialize()` will be:
```
deserialize("[123,456,[788,799,833],[[]],10,[]]")
    deserialize("123")
    deserialize("456")
    deserialize("[788,799,833]")
        deserialize("788")
        deserialize("799")
        deserialize("833")
    deserialize("[[]]")
        deserialize("[]")
    deserialize("10")
    deserialize("[]")
```
Here is the code implementing this idea:
```
public NestedInteger deserialize(String s) {
	if(s.length()==0 || s.equals("[]")) return new NestedInteger();
	NestedInteger ni = new NestedInteger();
	char[] chars = s.toCharArray();
	if(chars[0]=='[') {
		int elementStart = 1;
		while(elementStart<chars.length) {
			int elementEnd = searchForElementEnd(chars,elementStart);
			String nextListElement = new String(chars,elementStart,elementEnd-elementStart);
			ni.add(deserialize(nextListElement));
			elementStart=elementEnd+1;
		}
	} else ni.setInteger(new Integer(new String(chars)));
	return ni;
}

private int searchForElementEnd(char[] chars, int elementStart) {
	int countBrackets = 0;
	int i=elementStart;
	if(chars[i++]=='[') countBrackets++;
	while(i<chars.length) {
		char nextChar = chars[i];
		if(nextChar==']') {
			countBrackets--;
			if(countBrackets<=0) {
				if(countBrackets==0) i++;
				break;
			}
		}
		else if(nextChar=='[') countBrackets++;
		else if(nextChar==',' && countBrackets==0) {
			break;
		}
		i++;
	}
	return i;
}
```

![0_1481379516757_Screen Shot 2016-12-10 at 13.32.20.png](/uploads/files/1481379519343-screen-shot-2016-12-10-at-13.32.20.png)