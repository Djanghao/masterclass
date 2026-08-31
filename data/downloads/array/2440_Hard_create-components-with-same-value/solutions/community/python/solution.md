# Python solution

**Author:** leetcode_dafu
**Votes:** 11
**Link:** [https://leetcode.com/problems/create-components-with-same-value/solutions/2706333/](https://leetcode.com/problems/create-components-with-same-value/solutions/2706333/)

---

Solution: find  the total sum of node vals. if our tree can be split, the sum of each subtree must equal one divisor of the total sum. check if we can split the tree for every divisor of the total sum. To save time:

1.  skip divisors smaller than the largest node val
2. check divisors from low to high. We terminate after finding the first divisor that can split the tree, which leads to the max edge removals


How many divisors we may check in the worst case? For a num N, the common approximate upper bound of # of divisors is N^1/3. 
the exact bounds for the number of divisors of any n-digit number are (http://oeis.org/A066150):   4, 12, 32, 64, 128, 240, 448, 768, 1344

    nums = [1,5,5,4,11]
    edges = [[0,1],[1,2],[1,3],[3,4]]

    tree=collections.defaultdict(set)
    for i,j in edges:
         tree[i].add(j)
         tree[j].add(i)
  
    def check(cur,prev,target):
        val=nums[cur]
        for kid in tree[cur]-{prev}:
           i=check(kid,cur,target)
           if i==-1: return -1
           val+=i          
        return val%target if val<=target else -1
    
    tot=sum(nums)
    for n in range(min(tot//max(nums),len(nums)),0,-1):  # for simplicity, i do not use O(n^1/2) approach to find all factors here
        if not tot%n and check(0,-1,tot//n)==0:
           return n-1