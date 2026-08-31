# Python One liner Explained with 2 Original Solutions( The best explanation)

**Author:** akhil_ak
**Votes:** 66
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/713699/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/713699/)

---

The idea is to check the total sum divisible by k.if there has to be n//2 pairs each sum divisible by k.And this worksout well because,even if there is a singlepair whose sum not divisible by k,the total sum concept fails.

Maybe,its just `intuition` sometimes.I Solved it in the contest in 1sec with `one liner`.Read till the end you will not regret.
My solution:
```python
return sum(arr)%k==0
````
My thought process`:
The idea is simple.When all numbers sumup to a number divisible by k,there's a fair chance of obtaining pairs whose sum is divisible by k.But,the one thing that confuses most is the 
question below:
```
What if the sum is divisible by k,but there exists pairs whose sum doesnt get divided by k?
```
The answer is clearly simple.
Here you go,
```
If the total sum is divisible by k,but there exists some pairs whose sum is not divisible by k.
Imagine there is a pair (a,b) whose sum is not divisible by k,
So, sum(rest all pairs) is divisble by k. Is this possible? Damn never. because the total sum has to be divisible by k.
so,if there is a pair (a,b) such that (a+b) % k !=0 then there should exist another pair (c,d) such that (c+d )% k !=0 
So,now since (a+b)%k!=0 and (c+d)%k!=0 and sum(rest all pairs)%k=0, clearly we derive (a+b+c+d)%k=0.
If you understood till this point you should know the next step.obviously why we would we even pair (a with b ),(c with d) when you can rearrange and get pairs whose sum is divisble by k.
```
Upvote if I got u the eureka point.

Time : O(n),finding sum
Space::O(1)

```python
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        return sum(arr)%k==0
```
Sorry but that's my thought process behind the solution which fortunately got accepted during the contest. I just got lucky like hundreds of others.
But ,If you study the corner cases,you can find something like this 
```
[2,2,2,2,2,2]
k =6
```
sum = 12  and 12%6=0, but there is no pair whose sum is divisible by 6.

Now let's discuss the original solutions and the real approaches needed in an interview setting. 
Solution-1 {AC}

```
The math behind it
x+y mod k =0
so, y = -x mod k #finding the compliment residue
```
Time:O(N)
Space:O(k)

```python
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        #The idea is to count the residues
        
        #If every residue has the counter residue
        #such that x+y == k,then we found a pair
        
        count = [0]*k
        for num in arr:
            count[num%k] +=1
        
        #Now since we have 0,1,2,.....k-1 as residues
        #If count[1] == count[k-1],pairs+=count[0]  
        print(count)
        for x in range(k):
            comp = -x % k 
            # x+comp = 0 mod k, or
            # (x+comp) mod k = 0
            print(comp)
            while count[x]>0:
                count[x]-=1
                count[comp]-=1
                if count[comp]<0:
                    return False
        
        return True
```            


Solution-2
{AC}
Typical `Two pointer approach` to count the number of pairs.
This is the most intuitive way of doing in my opinion as it counts the number of pairs.
When you find the equal number of (i,j) ,it just means we have enough counter parts of 
a residue.When you find count[i]=count[k-i],just take down count[i] number of pairs.

Time : O(N)
Space:O(k)

```python
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        #The idea is to count the residues
        
        #If every residue has the counter residue
        #such that x+y == k,then we found a pair
        
        count = [0]*k
        for num in arr:
            count[num%k] +=1
        
        #Now since we have 0,1,2,.....k-1 as residues
        #If count[1] == count[k-1],pairs+=count[1]
        #since we have odd number of complimenting residues,
        #we should also care about residue=0 and residue=k//2
        
        i,j =1,k-1
        pairs  = 0
        while i<j :
            if count[i]!=count[j]:
                return False
            pairs += count[i]
            i+=1
            j-=1
        if pairs>0 and i==j:
            pairs+=count[i]/2
        pairs+= count[0]/2
        n = len(arr)
        return pairs == n//2
```

This is what you need to do in a real interview.Discuss all possible approaches,specify space and time complexities of all the solutions and also the tradeoffs and which solution might be better in which conditions.Get the bonus points by also mentioning the bogus solution I gave first.Who knows the interviewer might even wonder and hire you for your wide range of thoughts and approaches. Please upvote if you find this helpful.