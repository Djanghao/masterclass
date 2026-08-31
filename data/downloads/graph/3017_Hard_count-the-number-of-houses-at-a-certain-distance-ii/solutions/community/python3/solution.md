# Lot of maths and accumulated arrays | python

**Author:** BetoSCL
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4600595/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4600595/)

---

# Intuition
The problem has only one cycle, so I thought about dividing the line of houses into three groups: the ones inside the cycle, the ones to the left, and the ones to the right.

With this in mind, the next step was to derive all the formulas to calculate the distances. A lot of math is coming!

# Approach

Let's divide the houses into three groups:
- Group $C$: the houses between $x$ and $y$ (we'll assume $x < y$ for simplicity).
- Group $L$: the houses before $x$.
- Group $R$: the houses after $y$.

Now, we need to calculate the distances between any pair, but with three groups, we need the distances between:
- All pairs inside Group $C$.
- All pairs inside Group $L$.
- All pairs inside Group $R$.
- All houses in $L$ to all houses in $R$.
- All houses in $L$ to all houses in $C$.
- All houses in $R$ to all houses in $C$.

Of course, it seems like a lot of work, and indeed it is, but actually, there are only 4 calculations to do because some of those cases are equivalent with other parameters. So, let's work on those calculations.

# All distances inside a cycle

First, all the distances inside a cycle. For that, we can test on paper and observe the pattern. For example, for an arbitrary start node in a cycle of length $6$, we have the following distances: 

$1, 2, 3, 3, 2, 1$

This is in the case of an even length of the cycle; otherwise, it will be (for example, for a length of $5$):

$1, 2, 3, 2, 1$

But getting all the distances is not exactly useful; instead, we need the frequency of the distances, which can be seen as (1-indexed):

$2, 2, 2$ and $2, 2, 1$. This pattern is the same for every length just depending of the parity and the number of different distances is $\\lfloor\\frac{LenC+1}{2}\\rfloor$.

$[2,2,2,2,\\dots 1/2]$
And since we have $LenC$ nodes inside a cycle we just multiply the frequency array by $LenC$ this because all the nodes are equivalent then the final frecuency array seems like.

$[2\	imes LenC,2\	imes LenC,2\	imes LenC,2\	imes LenC,\\dots 1/2 \	imes LenC]$
# All distances inside $L$ or $R$

This is easier and can be observed with a few tests on paper. It just a line without cycles and the answer will be (as a frequency array):

$[L-1, L-2, L-3, L-4, \\dots]$

# All distances between $L/R$ and $C$

This case might seem hard, but actually, we can use the same approach as the case inside the cycle. Just add $1, 2, 3, \\dots, L/R$ extra steps to reach $x$ or $y$ in the case of $R$ and then use the calculations for all distances inside the cycle and seems like .

$1, 2, 2, 2, 2, 2, \\dots 1$ for the case of cycle of length even
$1,2,2,2,2,2,2 \\dots 2$ in odd cycle. 

You can see that apart from the first $1$, it is the same case as inside a cycle for just one node, just moved to the right. We add a distance of length $1$ for the case $a \\rightarrow x$, where $a$ is the rightmost house in $L$ or the closest to $x$.


But since we have $L$ or $R$ elements to pair, we need to move the window to the right to take in mind the steps to reach $x/y$ for example for the second closer to $x/y$ the frequency array will be: 
$[0 , 1,2,2,2,2\\dots 1/2]$
Then for the third closer. 
$[0,0,1,2,2,2,2\\dots,1/2]$
$\\vdots$


# All distances between L and R

This case is also straightforward. We omit the cycle and take two steps more, or one in the case of $x == y$. We calculate the frequency array for each element in $L$ from the closest to $x$ to the farthest. For example, for the closest element to $x$, the frequency array looks like:

$[0, 0, 1, 1, 1, 1, 1, 1, \\dots, 0]$

The number of ones is equal to the length of $R$ and starts at $1$ or $2$ depending on whether $x == y$. 

The last array is for the closest house to $x$. Then we need to do the same for the second, third, until the $L$-th closest to $x$:

$[0, 0, 0, 1, 1, 1, 1, \\dots, 0]$

$[0, 0, 0, 0, 1, 1, 1, \\dots, 0]$

$\\vdots$


Finally, we need to keep in mind that the solution is about testing and identifying the patterns for each case. However, since we need the frequency of all distances, updating the answer for each case and for each element inside each group is not possible. Instead, we need to use accumulated arrays and the +1/-1 trick to update the answer efficiently and avoid TLE.


# Complexity
- Time complexity:
$O(n)$


# Code
```python
class Solution:
    def countOfPairs(self, n: int, x: int, y: int) -> List[int]:
        if x>y: 
            (x,y) = (y,x)
            
        def insideCycle(lenCycle):
            frequencies = [0]*n
            for i in range((lenCycle-1)//2): 
                frequencies[i]+=2*lenCycle
                
            if lenC&1==0: 
                frequencies[(lenCycle-1)//2]+=lenCycle

            return frequencies
            
        def insideLR(length):
            frequencies = [0]*(n*2)

            for i in range(length-1):
                frequencies[i]+=(length-1-i) * 2
            return frequencies[:n]
            
        def LRtoCycle(lengthSegment,lengthCycle):
            frequencies = [0]*(n*2)
            for i in range(lengthSegment):
                frequencies[i+1]+=4
                if lengthCycle%2==0: 
                    frequencies[i+(lengthCycle//2)]-=4
                    frequencies[i+(lengthCycle//2)]+=2 
                    frequencies[i+1+(lengthCycle//2)]-=2 
                    
                else:
                    frequencies[i+1+(lengthCycle//2)]-=4

                frequencies[i]+=2
                frequencies[i+1]-=2

            return list(accumulate(frequencies))[:n]


        def LtoR(lengthL,lengthR):
            frequencies = [0]*(n*2)
            for i in range(lengthL):
                if x== y: 
                    frequencies[i+1]+=2
                    frequencies[i+1+lengthR]-=2 

                else: 
                    frequencies[i+2]+=2
                    frequencies[i+2+lengthR]-=2 

            return list(accumulate(frequencies))[:n]
        
        lenC = y-x + 1
        L = x-1
        R = (n-y)
        
        ans = [0]*n
        ans = list(map(add, ans, insideCycle(lenC)))
        ans = list(map(add, ans, insideLR(L)))
        ans = list(map(add, ans, insideLR(R)))
        ans = list(map(add, ans, LRtoCycle(L,lenC)))
        ans = list(map(add, ans, LRtoCycle(R,lenC)))
        ans = list(map(add, ans, LtoR(L,R)))
        return ans
            
            
            
```