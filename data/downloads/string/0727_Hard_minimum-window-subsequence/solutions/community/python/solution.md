# Easy-To-Understand : Sliding window 2-pointer, Find then Improve

**Author:** d-_-b
**Votes:** 141
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/512645/](https://leetcode.com/problems/minimum-window-subsequence/solutions/512645/)

---

2-steps:
1. Find a subsequence in S that contains T, and return ending index in S
2. Improve that subsequence by searching backwards from right-left to find best starting index in S

e.g.
i = 0 1 2 3 4 5 6 7 8 9
S = a b a c b c d f e  g
T = bcde
find subsequence   - bacbcdfe, end = 8
improve subsequence - bcdfe, start = 4
length = 5

Repeat next subsequence search at index 5 (start+1)

	def minWindow(self, S, T):
		
        # Find - Get ending point of subsequence starting after S[s]
        def find_subseq(s):
            t = 0
            while s < len(S):
                if S[s] == T[t]:
                    t += 1
                    if t == len(T):
                        break
                s += 1
            
            return s if t == len(T) else None       # Ensure last character of T was found before loop ended
        
        # Improve - Get best starting point of subsequence ending at S[s]
        def improve_subseq(s):
            t = len(T) - 1
            while t >= 0:
                if S[s] == T[t]:
                    t -= 1
                s -= 1
            
			return s+1
        
        s, min_len, min_window = 0, float('inf'), ''
        
        while s < len(S):
            end = find_subseq(s)            # Find end-point of subsequence
            if not end:
                break
                
            start = improve_subseq(end)     # Improve start-point of subsequence

			if end-start+1 < min_len:       # Track min length
                min_len = end-start+1
                min_window = S[start:end+1]
            
            s = start+1                     # Start next subsequence search

        return min_window