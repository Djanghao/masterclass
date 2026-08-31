# ✅Simple & Easy w/ explanation | Counting Mismatches O(N)

**Author:** archit91
**Votes:** 33
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108297/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108297/)

---

***Solution-I***

We just need to verify if both the strings contains characters with same frequency and then, the number of mismatch is either `0` or `2` (`1` wont be possible since all character frequency is same is verified first).

```
bool areAlmostEqual(string s1, string s2) {
	int n = size(s1), mismatch=0, flag = 1;
	vector<int>arr(26);
	for(int i = 0; i < n; i++)
		arr[s1[i] - 'a']++, arr[s2[i] - 'a']--;        
	for(auto freqDiff : arr)
		if(freqDiff){     // if frequency difference of characters in both strings is different
			flag = 0; break;
		}
	if(!flag) return false;

	for(int i = 0; i < n; i++)
		if(s1[i] != s2[i])
			mismatch++;
	return mismatch <= 2;
}
```
**Time Complexity :** **`O(N)`**, for iterating over the array.
**Space Complexity :** **`O(1)`**, since only constant space is used.


----------
-----------

***Solution-II (Optimized)***

Infact, we dont really need to count and store the frequency as we did in the first step. As already mentioned above, the count of mismatch will be `0` or `2` for *almostEqual* strings. We just need to verify that in case of mismatch equal to 2, the mismatched characters in at first index in `s1` needs to be same as mismatched character at other index in `s2`. 

```
bool areAlmostEqual(string s1, string s2) {
	int n = size(s1), cnt=0, idx1=0, idx2=0;
	for(int i = 0; i < n; i++)
		if(s1[i] != s2[i]){
			cnt++;
			if(!idx1) idx1 = i; else idx2 = i;
		}             
	return (cnt == 0 || cnt == 2) && s1[idx1] == s2[idx2] && s1[idx2] == s2[idx1];
}
```

**Time Complexity :** **`O(N)`**, for iterating over the array.
**Space Complexity :** **`O(1)`**, since only constant space is used. The constant factor here is much lesser as compared to *solution-I*.