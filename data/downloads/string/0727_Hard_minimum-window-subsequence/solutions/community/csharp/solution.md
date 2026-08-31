# Short 2 pointer sliding window solution

**Author:** SquirrelN
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/1703656/](https://leetcode.com/problems/minimum-window-subsequence/solutions/1703656/)

---

Classic sliding window - with an added twist of deciding where to reinitialise for the next round. Took me a while to figure that out.
```
//Worst case O(mn) Time and O(1) Space, n is the length of s and m is the length of p
public string MinWindow(string s, string p) {
	if(s.Length<p.Length) return string.Empty;
	int l = 0, r = 0,  pPtr = 0, minL = int.MaxValue, start = 0; // l and r are classic left and right ptrs for sliding window in s

	while(r<s.Length){
		if(s[r]==p[pPtr]){
			pPtr++; r++;
			if(pPtr==p.Length){//First ensure that you have reached the end of p. Now we begin collapsing the window.
				pPtr = p.Length-1;r--; l = r; //r was incremented an extra time 2 lines up.
				while(pPtr>=0){ //Now move backwards through p to remove unnecessary chars from s.
					if(p[pPtr]==s[l]) pPtr--;
					l--;
				}
				l++; //we decremented l an extra time in the loop
				var currL = r-l+1;
				if(currL<minL){minL = currL; start = l;} //We found a new minimum.
				pPtr = 0;//Get ready for next iteration
				l+=1;//[l-r] in s has all chars from p. Now we try from position l+1 in s to figure out if we can find the chars in p .
				r=l;
			}
		}
		else r++;
	}
	if(minL!=int.MaxValue) return s.Substring(start, minL);
	return string.Empty;
}
```