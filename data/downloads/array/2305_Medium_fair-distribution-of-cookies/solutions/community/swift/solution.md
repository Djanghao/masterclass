# Swift | Backtracking DFS, optimized in every way possible

**Author:** VladimirTheLeet
**Votes:** 4
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3704845/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3704845/)

---

# Branch and Bound / Backtracking approach

Start with a simple brute-force DFS solution that checks cookie by cookie, all possible options for passing the current cookie to each of the children:

```
func distributeCookies(_ cookies: [Int], _ k: Int) -> Int
{
    let n = cookies.count        
    var kids = Array(repeating: 0, count: k)
    var minUnfairness = Int.max

    dfs(0)

    func dfs(_ cookieIndex: Int)
    {
        if cookieIndex == n { minUnfairness = min(minUnfairness, kids.max()!); return }
        for j in 0..<k
        {
            kids[j] += cookies[cookieIndex]
            dfs(cookieIndex + 1)
            kids[j] -= cookies[cookieIndex]
        }
    }
    return minUnfairness
}
```

# Optimizations

---


##### No point in following a route with an already worse result

If passing a cookie to a child will cause its cookie value to be greater than the best final score already found, then that route will not produce a better total. We can cut off this branch.
```
func dfs(_ cookieIndex: Int)
{
    if cookieIndex == n { minUnfairness = kids.max()!; return }
    for j in 0..<k
    {
        kids[j] += cookies[cookieIndex]
        if kids[j] < minUnfairness { 
            dfs(cookieIndex + 1)
        }
        kids[j] -= cookies[cookieIndex]
    }
}
return minUnfairness
```

---


##### Start with bigger bags of cookies first

This further develops the previous optimization. The earlier we use large cookie bags, the earlier we will come to an excess over the optimal result, i.e., the wider branches we will be able to eliminate from consideration beforehand.

```
let cookies = cookies.sorted(by: >)
```

---

##### Inital approximation

We can take advantage of the cookie array being sorted to quickly establish an initial approximate `minUnfairness` value, allowing us to start pruning out the bigger sums earlier.
If we give cookies from larger to smaller to all children in turn, returning to the first child after the last one, we end up with an *approximately* equal distribution, with the first kid having the most cookies. So let's just calculate the amount of first child's cookies for this scenario and use that value as `minUnfairness`.

```
var minUnfairness = cookies.enumerated().reduce(into: 0) {
    if $1.0 % k == 0 { $0 += $1.1 }
}
```

---

##### Everyone shoud get a cookie

The final states with some kid left cookieless are suboptimal by the simple consideration: If we take a cookie from a child having max of them and give it to the one left hungry, this will produce a better total result.
So we track a number of undistributed cookies left and a count of cookieless kids. If giving an already-fed child a cookie would result in a overall cookie shortage, we skip that variant.

```
func dfs(_ cookieIndex: Int, _ cookiesLeft: Int = n, _ cookielessCount: Int = k)
{
    if cookieIndex == n { minUnfairness = kids.max()!; return }
    for j in 0..<k
    {
        let newCookieless = (kids[j] == 0) ? cookielessCount - 1 : cookielessCount
        if newCookieless >= cookiesLeft { continue }

        kids[j] += cookies[cookieIndex]
        if kids[j] < minUnfairness { 
            dfs(cookieIndex + 1, cookiesLeft - 1, newCookieless)
        }
        kids[j] -= cookies[cookieIndex]
    }
}
```
---
##### No going above average

I'll just quote [this](https://leetcode.com/problems/fair-distribution-of-cookies/editorial/comments/1951050) excellent explanation:
> A simple optimization is to pre-compute `avg = sum(cookies) / k` and refuse to add further to a given subset if its current `sum  > avg`.
>
> This follows from the following mathematical claim: any optimal solution ${S_1,S_2...,S_k}$ (i.e., an optimal partition of the $n$ cookies into $k$ non-empty subsets) cannot have a subset $S_i$ such that $sum(S_i - {s}) > avg$ for some element $s$ in $S_i$. To prove this claim, observe that the existence of such a subset implies there exists another subset $S_j (i \
e j)$ such that $sum(S_j) < avg < sum(S_i - {s})$. So in particular $sum(S_j + {s}) < sum(S_i)$, and so putting $s$ in $S_j$ rather than $S_i$ would give a better solution.

```
let cookiesTotal = cookies.reduce(0, +)
let avg = cookiesTotal / k
```
```
for j in 0..<k where kids[j] <= avg
```

---

##### Early termination if best possible result achieved
By further pondering the average, we can derive one simple conclusion: the best theoretically possible result is equal to the average value rounded up.
```
let bestPossibleResult = 1 + (cookiesTotal - 1) / k
```
If we get `minUnfairness` value equal to this, we can stop execution altogether and output the answer.
But there is some technical issue here. It's [not that easy](https://stackoverflow.com/questions/13784337/exit-the-entire-recursion-stack) to break from the depth of the recursion and get out of DFS at an arbitrary moment. One possible way would be to throw an exception and catch it in a main function:
```
do { try dfs(0) }
catch { return minUnfairness }

func dfs(_ cookieIndex: Int) throws
{
    if cookieIndex == n
    { 
        minUnfairness = kids.max()!
        if minUnfairness == bestPossibleResult { throw "Best result achieved!" }
        else { return }
    }
    for j in 0..<k where kids[j] <= avg
    {
        kids[j] += cookies[cookieIndex]
        if kids[j] < minUnfairness { 
            try dfs(cookieIndex + 1)
        }
        kids[j] -= cookies[cookieIndex]
    }
}
return minUnfairness

extension String: Error {}
```
...but we'll take another option

---

##### From recursion to iteration

Another upgrade would be to change the recursive DFS to iterative one. It's not that simple as our recursion is branching **and** we need the postorder action `kids[j] -= cookies[cookieIndex]` for backtracking, but it [can](https://nmamano.com/blog/iterativetreetraversal/iterativetreetraversal.html#a-nametechniqueaiterative-postorder-and-inorder-traversal) be done:

```
typealias State = (cookieIndex: Int, kid: Int, firstVisit: Bool)
var stack: [State] = (0..<k).map { (0, $0, true) }

while let (cookieIndex, kid, firstVisit) = stack.popLast()
{
    if !firstVisit { kids[kid] -= cookies[cookieIndex]; continue }
    
    kids[kid] += cookies[cookieIndex]
    if cookieIndex == n - 1
    { 
        minUnfairness = min(minUnfairness, kids.max()!)
        if minUnfairness == bestPossibleResult { return minUnfairness }
        else { kids[kid] -= cookies[cookieIndex]; continue }
    }

    stack.append((cookieIndex, kid, false))

    for j in 0..<k where kids[j] <= avg
    {
        if kids[j] + cookies[cookieIndex + 1] < minUnfairness { 
            stack.append((cookieIndex + 1, j, true))
        }
    }
}
return minUnfairness
```
This not only eliminates the need for exceptions, but also gives a speed bonus, since iterations are faster than recursion. In fact, **several times** faster. Who would have thought?

---
##### Why give the same cookie to different kids if their cookie counts don't vary? They all look identical to me.
Yet another optimization is to consider the fact that if there are currently several kids with the same cookie value, we only need to check one of them, as giving cookie to others will lead to the same state.
Imagine children with current cookie amounts `[3,3,3,3,3,2,4]`. We'll try give the next cookie to first of them with count `3`, then all subsequent kids with count `3` will be skipped for that cookie, as the result for them would be the same, only from the different position. Or, as an another example, the very initial state `[0,0,0,0,0,0,0]`. By considering only one child out of all $k$, we reduce the number of branches by $k$ times in just the first step! Not bad, eh?
<details>
<summary>
We can even estimate how this will impact the overall time complexity
</summary>
<br/>
Suppose the sums won't coincide randomly, and all pruning will concern only the starting zero sums. The first step leaves one choice out of k in the usual approach. In the second step, we will already have one different child and k-1 zeroes, so 2 variants are possible instead of k regular ones. At the third step, in the worst case the number of differing kids can increase by one more, and we have 3 further variants (instead of k in the usual case). Continuing this way, we obtain that the first k\u22C5k\u22C5...\u22C5k branches are reduced to 1\u22C52\u22C53\u22C5...\u22C5k branches.
</details>
<br/>

The time complexity goes down from $O(k^n)$ to $O(k! \\cdot k^{n-k})$ 

```
var kidsValues: Set<Int> = []
for j in 0..<k where kids[j] <= avg
{
    // already tried to feed the kid with the same cookie value
    if !kidsValues.insert(kids[j]).inserted { continue }
...

```
Such evasion of equivalent states can also be considered as a somewhat partial substitute for a full-fledged memoization, allowing us to keep low space consumption.

---

*At this point we are probably reaching an over-optimization, when most of the ineffective ways are already discarded and any new checks will only slow down the code. So let's settle for that. Just one more thing:*

##### Edge cases
To complement all the above, let's add a check for some trivial edge cases at the very beginning.

```
if n == k { return cookies.max()! } // one-to-one distribution
else if n == k + 1
{   // find 2 smallest cookie bags and give both of them to some kid
    var indices = Set(cookies.indices)
    let minInd1 = indices.min { cookies[$0] < cookies[$1] }!
    indices.remove(minInd1)
    let minInd2 = indices.min { cookies[$0] < cookies[$1] }!
    let maxCookieBag = cookies.max()!
    return max(maxCookieBag, (cookies[minInd1] + cookies[minInd2]))
}
```

---


## Complexity
- Time complexity: $O(k! \\cdot k^{n-k})$
- Space complexity: $O(k+n)$
With all these optimizations, perhaps the exact time estimate is lower than this, but it will take some math analysis to prove it.

## Final code, all optimizations together
```
func distributeCookies(_ cookies: [Int], _ k: Int) -> Int
{
    let n = cookies.count        

    if n == k { return cookies.max()! } // one-to-one distribution
    else if n == k + 1
    {   // find 2 smallest cookie bags and give both of them to some kid
        var indices = Set(cookies.indices)
        let minInd1 = indices.min { cookies[$0] < cookies[$1] }!
        indices.remove(minInd1)
        let minInd2 = indices.min { cookies[$0] < cookies[$1] }!
        let maxCookieBag = cookies.max()!
        return max(maxCookieBag, (cookies[minInd1] + cookies[minInd2]))
    }

    let cookies = cookies.sorted(by: >)
    let cookiesTotal = cookies.reduce(0, +)
    let avg = cookiesTotal / k
    let bestPossibleResult = 1 + (cookiesTotal - 1) / k

    var kids = Array(repeating: 0, count: k)
    var minUnfairness = cookies.enumerated().reduce(into: 0) { if $1.0 % k == 0 { $0 += $1.1 }}

    typealias State = (cookieIndex: Int, kid: Int, cookieless: Int, firstVisit: Bool)
    var stack: [State] = [(0, 0, k, true)]

    while var (cookieIndex, kid, cookieless, firstVisit) = stack.popLast()
    {
        if !firstVisit { kids[kid] -= cookies[cookieIndex]; continue }

        if kids[kid] == 0 { cookieless -= 1 }
        if cookieless >= (n - cookieIndex) { continue }
        
        if kids[kid] + cookies[cookieIndex] >= minUnfairness { continue }
        kids[kid] += cookies[cookieIndex]

        if cookieIndex == n - 1
        { 
            minUnfairness = min(minUnfairness, kids.max()!)
            if minUnfairness == bestPossibleResult { return minUnfairness }
            else { kids[kid] -= cookies[cookieIndex]; continue }
        }

        stack.append((cookieIndex, kid, cookieless, false))

        var kidsValues: Set<Int> = []
        for j in 0..<k where kids[j] <= avg
        {
            // already tried to feed the kid with the same cookie value
            if !kidsValues.insert(kids[j]).inserted { continue }                
            stack.append((cookieIndex + 1, j, cookieless, true))                
        }
    }
    return minUnfairness
}
```

<details>
<summary>Bonus for those who have read this far:</summary>
<br/>
Setting an initial approximate result with a new <a href="https://arxiv.org/pdf/2203.05618.pdf">locally optimal algorithm</a>  by Kaan and Hakan Gokcesu:
<br/>
<br/>

```
var minUnfairness = approximation(cookies, k)

```
```
func approximation(_ nums: [Int], _ k: Int) -> Int
{
    var sets: [Set<Int>] = Array(repeating: [], count: k)
    var setSums: [Int] = Array(repeating: 0, count: k)
    sets[0] = Set(nums)
    setSums[0] = nums.reduce(0, +)

    var indexSet = Set(0..<k)

    var minSumInd = 0, maxSumInd = 0, minSetSum = 0, maxSetSum = 0
    while indexSet.count > 1
    {
        minSumInd = 0; maxSumInd = 0; minSetSum = Int.max; maxSetSum = Int.min
        for ind in indexSet // possible optimization with Priority Queue
        {
            let setSum = setSums[ind]
            if setSum < minSetSum { minSumInd = ind; minSetSum = setSum }
            if setSum > maxSetSum { maxSumInd = ind; maxSetSum = setSum }
        }

        let diff = maxSetSum - minSetSum
        var itemsThatDecreaseDiff: [Int] = []
        for item in sets[maxSumInd]
        {
            let newDiff = abs((maxSetSum - item) - (minSetSum + item))
            if newDiff < diff {
                itemsThatDecreaseDiff.append(item)
            }
        }

        if itemsThatDecreaseDiff.isEmpty {
            indexSet.remove(maxSumInd)
        }
        else
        {
            let moveItem = itemsThatDecreaseDiff.max()!                
            sets[maxSumInd].remove(moveItem); setSums[maxSumInd] -= moveItem
            sets[minSumInd].insert(moveItem); setSums[minSumInd] += moveItem
        }
    }
    return setSums.max()!
}
```
Although, it turned out that the initial approximation does not give a considerable gain \uD83D\uDE15
</details>