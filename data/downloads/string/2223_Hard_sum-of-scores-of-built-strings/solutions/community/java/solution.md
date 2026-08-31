# Java pattern matching approach ✅ || Z Algorithm

**Author:** Chaitanya31612
**Votes:** 23
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/1907740/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/1907740/)

---

**Code**
```java
// calculate Z array
public int[] calculateZ(char[] input) {
	int[] Z = new int[input.length];
	int left = 0, right = 0;
	for (int i = 1; i < input.length; i++) {
		if (i > right) {
			left = right = i;
			while (right < input.length && input[right] == input[right - left]) {
				right++;
			}
			Z[i] = right - left;
			right--;
		} else {
			int k = i - left;
			if (Z[k] < right - i + 1) {
				Z[i] = Z[k];
			} else {
				left = i;
				while (right < input.length && input[right] == input[right - left]) {
					right++;
				}
				Z[i] = right - left;
				right--;
			}
		}
	}
	return Z;
}

public long sumScores(String s) {
	int[] z = calculateZ(s.toCharArray());

	long sum = 0;
	for(int el: z)
		sum += el;
	sum += s.length();
	return sum;
}
```

**Explanation**
Basically Z-Algorithm is used for finding pattern occurences in input string, but given problem was very good example where Z-Algorithm can be used.
Let me explain what is the result of Z[] array for a given string.
Initial brute force approach of finding this array is:-
```java
int[] z = new int[s.length()];
for(int i = 1; i < s.length(); i++){
	int k = i, j = 0;
	while(k < s.length() && s.charAt(k) == s.charAt(j)){
		z[i]++;
		k++; j++;
	}
}
```

Eg. Let string `s = "aabcaadaab"`
then output array = `{0, 1, 0, 0, 2, 1, 0, 3, 1, 0}`
value at each index represents length of longest prefix from 0th index for ith index starting substring.
Let's suppose look at index 4th, it's value is 2 which indicates that 4th and 5th index ("aa") are a prefix of this string.
Similarly at 7th index, 3 indicates length of indices (7, 8, 9) "aab" which is prefix of entire string.

So according to our question we were required to find sum for all string lengths, which is starting from back till start. So we just need to find sum of entire array.
After finding sum of Z[] array, add length of string `s` to sum because if whole string is compared it will be added every time.

Hope it helps
Thanks
Do upvote
