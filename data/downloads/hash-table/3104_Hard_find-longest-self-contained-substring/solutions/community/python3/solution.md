# Check First and Last + Prefix Sum O(N*26*26)

**Author:** TanzH
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4969449/](https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4969449/)

---

# Intuition
A substring is valid if letters in the substring do not appear elsewhere. This means the first and last occurrence of a letter must be in the substring.

# Approach
Go through the string. Keep track of the first and last occurrences of each letter. We are also using a prefix sum to quickly determine which letters have been used and at what index.

```
offset = ord('a')
occurrences = [0]*26
pos = [[inf, -inf] for _ in range(26)]
for i, letter in enumerate(s):
    letter_ind = ord(letter) - offset
    occurrences[letter_ind] += 1
    pos[letter_ind][0] = min(i, pos[letter_ind][0])
    pos[letter_ind][1] = max(i, pos[letter_ind][1])
prefix = [occurrences]
for i in s:
    prefix.append(list(prefix[-1]))
    prefix[-1][ord(i)-offset]-=1
```

Now, we can do combinations of the first and last occurrences of each letter. This is quadratic but since there are only 26 possibilities for letter combinations we are fine. 

Then we have to find which characters are used in the substring. This can be done by using a prefix sum and checking the counts of all the letters before and after the substring. These lines explain how:

```
for k in range(26):
    if start[k] != stop[k]:
        if stop[k] != 0:
            bad = True
            break
        diffs.append(k)
```

While doing this we also have to make sure that none of the letters used in the string have been used before and none are used after. These are checked in the below code on these lines

```
if stop[k] != 0:
    bad = True
    break
```

and 

```
if start[k] != prefix[0][k]:
    bad = True
    break
```

# Complexity
- Time complexity:
O(n * 676) or O(n \\* 26 \\* 26)

- Space complexity:
O(n*26)

# Code
```
class Solution:
    def maxSubstringLength(self, s: str) -> int:
        offset = ord('a')
        occurrences = [0]*26
        pos = [[inf, -inf] for _ in range(26)]
        for i, letter in enumerate(s):
            letter_ind = ord(letter) - offset
            occurrences[letter_ind] += 1
            pos[letter_ind][0] = min(i, pos[letter_ind][0])
            pos[letter_ind][1] = max(i, pos[letter_ind][1])
        prefix = [occurrences]
        for i in s:
            prefix.append(list(prefix[-1]))
            prefix[-1][ord(i)-offset]-=1
        ans = -1
        for i in range(26):
            for j in range(26):
                l, h = pos[i][0], pos[j][1]
                if l > h: continue
                if l == 0 and h == len(s)-1: continue
                start = prefix[l]
                stop = prefix[h+1]
                diffs = []
                bad = False
                for k in range(26):
                    if start[k] != stop[k]:
                        if stop[k] != 0:
                            bad = True
                            break
                        diffs.append(k)
                if bad:
                    continue
                for k in diffs:
                    if start[k] != prefix[0][k]:
                        bad = True
                        break
                if bad:
                    continue
                ans = max(ans, h+1-l)
        return ans
```