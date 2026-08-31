# Python || 99.52% Faster || Trie || Easy

**Author:** pulkit_uppal
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/3719151/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/3719151/)

---

```
class Trie:
    def __init__(self):
        self.root={}
        self.m=0
    
    def insert(self,word):
        node=self.root
        for ch in word:
            if ch not in node:
                node[ch]={}
            node=node[ch]

    def compare(self,word,x):
        node=self.root
        t=""
        a,b='0','1'
        for ch in word:
            if ch==a and b in node:
                t+=b
                node=node[b]
            elif ch==b and a in node:
                t+=a
                node=node[a]
            else:
                t+=ch
                node=node[ch]
        ans=int(t,2)^x
        return ans

class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        trie=Trie()
        n,l=len(queries),len(nums)
        for i in range(n):
            queries[i].append(i)
        queries.sort(key=lambda x:x[1])
        nums.sort()
        res=[0]*n
        j=0
        m=nums[0]
        for i in range(n):
            x,y,z=queries[i][0],queries[i][1],queries[i][2]
            if m>y:
                res[z]=-1
                continue
            while j<l and nums[j]<=y:
                word="{:032b}".format(nums[j])
                trie.insert(word)
                j+=1
            word="{:032b}".format(x)
            ans=trie.compare(word,x)
            res[z]=ans
            t=y
        return res
```
**An upvote will be encouraging**