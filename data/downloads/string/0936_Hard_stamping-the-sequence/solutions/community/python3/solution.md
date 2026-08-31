# PYTHON SOL || WELL EXPLAINED || SIMPLE ITERATION || EASIEST YOU WILL FIND EVER !! ||

**Author:** reaper_27
**Votes:** 9
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/1888562/](https://leetcode.com/problems/stamping-the-sequence/solutions/1888562/)

---

# EXPLANATION
```
There can be two ways either starting from "?????" to target  or we can start from target to "?????"

Now why exactly is going from target to "?????" better ?

See we can get the answer more easily this way . Try for an example by yourself (pen-paper) and do both ways you'll get the answer

Now when we start from our target let's take an example

target:  a b a b a b c b c b a b a b c b c
stamp = a b c

 target:  a b a b a b c b c b a b a b c b c
N = len(target)
M = len(stamp)
 Now we try to traverse the target and check if substring from index i  to index i + M is == our stamp 
 
 Now for checking equality between string = target[i:i+M] and stamp
 if string[index] == stamp[index] : since they are same check index+1
 elif string[index] == "?" : we have solved for this place alredy means even if we write anything here ( since we are doing in reverse order ) in the next step it will  solve for the ?
 else :  they aren't same
  So we will need to iterate through T a number of times, finding and removing any full instances of S. Once we are past the initial pass, we can use character masks to find partial matches for S on each remaining pass.
 
 
  pass 1:  a b a b a b c b c b a b a b c b c
                  ^ ^ ^           ^ ^ ^

 pass 2:  a b a b * * * b c b a b * * * b c
              ^ ^ ^   ^ ^ ^   ^ ^ ^   ^ ^ ^

 pass 3:  a b * * * * * * * b * * * * * * *
          ^ ^ ^           ^ ^ ^

 pass 4:  * * * * * * * * * * * * * * * * *
 
 
 See carefully what we are doing everytime we are finding stamp in our target and making it "????" 
 
 Now the key concept is whenever we find our target and stamp like this
 target = "???ab??"
 stamp = dabc
 
 then "?ab?" == "dabc"
 why ??
 See we are going reverse so the steps we are taking is also reverse
 Since we have put ? anywhere means that we got it right !
 so once we put "dabc" in place of "?ab?" we know that our previous turn is going to solve for the two ? marks any way
 
```

# CODE
```
class Solution:
    def movesToStamp(self, stamp: str, target: str) -> List[int]:
        N,M = len(target),len(stamp)
        move = 0
        maxmove = 10*N
        ans = []
        def check(string):
            for i in range(M):
                if string[i] == stamp[i] or string[i] == '?':
                    continue
                else:
                    return False
            return True
        
        while move < maxmove:
            premove = move
            for i in range(N-M+1):
                if check(target[i:i+M]):
                    move += 1
                    ans.append(i)
                    target = target[:i] + "?"*M + target[i+M:]
                    if target == "?"*N : return ans[::-1]
            if premove == move:return []
        return []
```