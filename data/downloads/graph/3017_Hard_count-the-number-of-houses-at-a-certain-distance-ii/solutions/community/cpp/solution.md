# C++ | Detailed explanation | Line Sweep | Clean Code | Easy to understand

**Author:** harshbardolia
**Votes:** 57
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4601322/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4601322/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Understanding the problem, we can conclude that there will be one cycle. If the cycle was not there, we can solve the problem easily with a formula, but cycle will affect distance between many pair of house. Lets divide the problem in subproblems and solve them individually, eventually merge them.

# Approach
<!-- Describe your approach to solving the problem. -->
We will divide the houses into three groups (let $$x$$ < $$y$$):
- $$Group Cycle$$: the houses between $$x$$ and $$y$$ 
- $$Group Left$$: the houses before house $$x$$
- $$Group Right$$: the houses after house $$y$$

Now, our problem reduces to calculate distances between:
- $$T1$$ - All pairs in $$GroupCycle$$
- $$T2$$ - All pairs in $$GroupLeft$$
- $$T3$$ - All pairs in $$GroupRight$$
- $$T4$$ - All house in $$GroupLeft$$ to all houses in $$GroupCycle$$
- $$T5$$ - All house in $$GroupRight$$ to all houses in $$GroupCycle$$
- $$T6$$ - All house in $$GroupLeft$$ to all houses in $$GroupRight$$

At the end, we will multiply the answer with $$2$$, as the a pair will contribute to our final answer two times, one with being $$(house1, house2)$$ and other with $$(house2, house1)$$.

## Calculating answer for a Straight Line

$$GroupLeft$$ and $$GroupRight$$ can be considered as a straight line. It can be observed that if number of houses in the line (length of the line) is $$L$$, then pairs with:

> length $$i$$ will be $$L - i$$

So, contributions of $$T2$$ and $$T3$$ can be easily calculated by this observation.

## Calculating answer for a Cycle

$$GroupCycle$$ is a cycle. Lets see how will we calculate answer for it. Let say number of houses in cycle (length of cycle) is $$L$$. The observation for a cycle is:

> A pair of house having distance $$i$$ will also have a path of streets with distance $$L - i$$. As we need to take the minimum distance between houses, we will take the smaller one. This indicates that we don't need to find pairs with distance greater than $$L$$ / $$2$$. 

Now we can easily derive the formula from observation for few smaller values of $$L$$. 

> ### $$L$$ is odd
> - Pairs with distance $$d$$ ($$d$$ <= $$L$$ / $$2$$) will be $$L$$. Yes, you read it right, all the distances will apprear exactly $$L$$ times.

> ### $$L$$ is even
> - Pairs with distance $$d$$ ($$d$$ < $$L$$ / $$2$$) will be $$L$$.
> - Pairs with distance $$d$$ ($$d$$ = $$L$$ / $$2$$) will be $$L$$ / $$2$$. 
Because the pair will repeat here. We will multiple whole answer by two at the end, so no need to count two times here.

So, these observations will help to find answer contribution of $$T1$$.

## Calculating answer for a Straight Line and a Cycle

Here we will see how to calculate answer for $$T4$$ and $$T5$$. We will use a concept of **Line Sweep** to calculate our answers in this section. Considering length of line to be $$L$$ and length of cycle to be $$C$$. Let say the point of contact between Stright line and Cycle is $$x$$. 

Key Observations are : 

> - For each house in Straight Line we will calculate number of pairs with other house in cycle. 
> - $$2$$ house in cycle will give same length for a house in line, as we can go either way from $$x$$ in the cycle.

> For each house in the line with distance $$d$$ to $$x$$:
>> Minimum contribution to answer, $$MN$$: $$d$$
>> Maximum contribution to answer, $$MX$$: $$d$$ + $$C$$ / $$2$$

We will add contribution of $$2$$ for each length above. We can use line sweep from $$MN$$ to $$MX$$ and calculate the contributions for each house in Stright Line.

**NOTE**: When $$C$$ is even, we need to add its contribution as $$1$$ for the house at maximum distance in cycle. As no other house in cycle will have same distance as this house.

So, contributions of $$T4$$ and $$T5$$ can be easily calculated by this observation.
 
## Calculating answer for Two Stright Lines

Here we will see how to calculate the contribution of pairs with all house in $$GroupLeft$$ to all houses in $$GroupRight$$. Again, we will use the concept of **Line Sweep** to solve this sub problem. Let say the lines are $$L1$$ and $$L2$$.

For each house in $$L1$$ we will see its contribution to the answer:
> - $$MN$$: pair with minimum distance having this house from $$L1$$. 
> - $$MX$$: pair with maximum distance having this house from $$L1$$.

We can use line sweep from $$MN$$ to $$MX$$ and calculate the contributions for each pair. So, this gives us the contribution of $$T6$$.

## Calculating final answer

We will just add contributions of $$T1$$, $$T2$$, $$T3$$, $$T4$$, $$T5$$ and $$T6$$. Don't forget to multiply final answer by $$2$$. 

# Complexity
- Time complexity: $$O(n)$$

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

> **Upvote if you find the solution easy to understand!**
> **Suggestions and improvements are appreciated.**

# Code
```
typedef long long ll;

class Solution {
public:
    vector<ll> lineAndCycle(ll n, ll lineLen, ll cycleLen) {
        vector<ll> res(n);

        for (ll d = 1; d <= lineLen; d++) {
            ll mn = d + 1;
            ll mx = d + (cycleLen / 2);
            res[mn - 1] += 2;
            res[mx - 1] -= 2;
        }

        ll mn = cycleLen / 2 + 1;
        ll mx = cycleLen / 2 + lineLen;

        ll add = (cycleLen & 1 ? 2 : 1);

        res[mn - 1] += add;
        if (mx < n) res[mx] -= add;

        for (ll i = 1; i < n; i++)
            res[i] += res[i - 1];

        for (ll len = 1; len <= lineLen; len++)
            res[len - 1]++;

        return res;
    }

    vector<ll> lineAnswer(ll n, ll lineLen) {
        vector<ll> res(n);

        for (ll len = 1, add = lineLen - 1; len < lineLen; len++, add--)
            res[len - 1] += add;

        return res;
    }

    vector<ll> cycleAnswer(ll n, ll cycleLen) {
        vector<ll> res(n);

        for (ll len = 1; len < cycleLen / 2; len++)
            res[len - 1] += cycleLen;
        
        if (cycleLen & 1) {
            int len = cycleLen / 2;
            if (len - 1 >= 0)
                res[len - 1] += cycleLen;
        } else {
            int len = cycleLen / 2;
            if (len - 1 >= 0)
                res[len - 1] += (cycleLen / 2);  
        }

        return res;
    }

    vector<ll> twoLineAnswer(ll n, ll lineLen1, ll lineLen2, ll x, ll y) {
        vector<ll> res(n);

        if (lineLen1 > lineLen2) swap(lineLen1, lineLen2);
        ll plus = (x != y ? 1 : 0);
        
        for (ll i = 0; i < lineLen1; i++) {
            ll mn = i + plus + 2;
            ll mx = i + plus + 1 + lineLen2;
            
            res[mn - 1]++;
            if (mx < n) res[mx]--;
        }

        for (int i = 1; i < n; i++)
            res[i] += res[i - 1];

        return res;
    }
    
    vector<long long> countOfPairs(int n, int x, int y) {
        vector<ll> res(n);
        if (x > y) swap(x, y);
        
        ll lineLen1 = x - 1;
        ll lineLen2 = n - y;
        ll cycleLen = y - x + 1;
        ll finalLen = lineLen1 + lineLen2 + 2;
        
        auto line1ans = lineAnswer(n, lineLen1);
        auto line2ans = lineAnswer(n, lineLen2);
        auto cycleAns = cycleAnswer(n, cycleLen);       
        auto l1c = lineAndCycle(n, lineLen1, cycleLen);
        auto l2c = lineAndCycle(n, lineLen2, cycleLen);
        auto l1l2 = twoLineAnswer(n, lineLen1, lineLen2, x, y);
        
        for (int i = 0; i < n; i++) {
            res[i] += line1ans[i];
            res[i] += line2ans[i];
            res[i] += cycleAns[i];
            res[i] += l1c[i];
            res[i] += l2c[i];
            res[i] += l1l2[i];
            res[i] *= 2;
        }

        return res;
    }
};
```