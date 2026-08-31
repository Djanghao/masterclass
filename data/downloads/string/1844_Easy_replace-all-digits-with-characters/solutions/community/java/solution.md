# Java Solution 100% fast, 100% memory with easy explanation

**Author:** prateekdwivedi2911
**Votes:** 25
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1186600/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1186600/)

---

**Short Description**: We need to replace numbers with characters. 
			new character = previous character + current number

 **Explanation of the implementation**
   *  *Why i = i + 2 ?* 
   Because, we are going to change only numbers
   
   *  *Why subtract by '0'?* 
   Because, we are doing arithmetic operation on ASCII code and even though 1 in the string "a1c1e1" looks integer but, it's still a character so, if we add 'a' + '1' then, it's actually  97 + 49 = 146 .. so, (char) ( 'a' + '1') will show character with ASCII value 146
   
```
    public static String replaceDigits(String s) {

		char[] charArray = s.toCharArray();
		for(int i = 1; i<charArray.length; i = i + 2) {
		  charArray[i] = (char) (charArray[i - 1] + charArray[i] - '0');
		}
		return String.valueOf(charArray);
  } 
```
