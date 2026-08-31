# Greedy with Formal proof of correctness

**Author:** sanky29
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/2943417/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/2943417/)

---

As many of you may have found out the greedy strategy of doing those tasks first which have maximum $$minimum_{i} - actual_{i}$$ yields the optimal solution, but why?

When we start to solve the questions we try to find some pattern in it and see if dynamic programming, divide and conquer, backtracking, etc. will work or not. And at the end, we try to see if the greedy approach works or not. All the methods have very straightforward ways of proving the correctness except greedy algorithms. In this post, I would like to take this question as an example and prove formally why will it work.
We will divide the proof into 3 parts:
1. Developing **Notations**
2. Stating and proving **Exchange lemma**
3. Using **Induction** to prove final correctness

# Notations
We define tasks as set $$T = \\{t_{i} \\ | \\ i = 1,2,..n\\}$$ and each task is defined as $$t_{i} = [R_{i}, M_{i}]$$ where $$R_{i}$$ is required energy to complete and  $$M_{i}$$ is minimum required energy to start and $$R_{i}, M_{i} > 0$$. 
Now we define a valid solution $$S$$ as ordered set $$S = \\{e^S_{1},e^S_{2},...,e^S_{n}\\}$$. Note that a valid solution satisfies all the constraints but it may not be optimal. 
We also define set of first greedy step tasks as $$G_{1} = \\{i \\ | \\ (M_{i} - R_{i}) \\geq (M_{j} - R_{j}) \\ \\forall \\ j  \\in \\{1,2,..,n\\}\\}$$. We define optimal solution $$OS$$ which has an initial energy requirement denoted as $$E_{0}^{OS}$$ minimum. $$ OS \\in argmin_{S} \\ E_{0}^{S}$$. (As argmin can be set). We also define energy after completing $$i$$ tasks of solution as $$E_{i}^S$$

# Exchange Lemma
Now we define the following lemma  
***Lemma:*** *For any valid solution $$S$$ which does not choose first task greedily that is $$e_1^S \
otin G_1$$ there exist valid $$S'$$ which takes first task greedily that is $$e_1^{S'} \\in G_1$$ and is at least as good as $$S$$ that is $$E_{0}^{S'} \\le E_{0}^S$$*.
***Proof:*** Let $$e^S_{i}$$ be the first task in $$S$$ which belongs to $$G_{1}$$ that is $$e^{S}_i \\in G_{1}$$. Now as $$S$$ is the valid solution we can say that 
$$E_0^S \\ge M_{e^S_1}$$
We can also write this as 
$$E_{0}^S = M_{e^S_1} + \\delta$$ where $$\\delta \\ge 0$$. 
Now lets find $$E^S_{1}$$. As $$R_{e_{1}^S}$$ amount will be used to do task $$t_{e^S_1}$$ then 
$$E_1^S = E_{0}^S - R_{e_{1}^S}$$
Also as $$S$$ is valid solution we have 
$$E_1^S \\ge   M_{e_{2}^S}$$
By substituting for $$E_1^S$$ we get 
$$ E_{0}^S - R_{e_{1}^S} \\ge   M_{e_{2}^S}$$
Now extending same idea to obtain constraint equation for for $$k^{th}$$ task of $$S$$ we will bet
$$E_{k-1}^S \\ge   M_{e_{k}^S}$$
And $$E_k^S$$ will be
$$E_{k-1}^S = E_{0}^S - \\sum_{p=1}^{k-1} R_{e_{p}^S}$$
So final constraint will be
$$E_{0}^S - \\sum_{p=1}^{k-1} R_{e_{p}^S} \\ge M_{e_{k}^S}$$
Now find constraint at $$i^{th}$$ task of $$S$$ which belongs to $$G_{1}$$.
$$E_{0}^S - \\sum_{p=1}^{i-1} R_{e_{p}^S} \\ge M_{e_{i}^S}$$
Now lets subtract $$R_{e_{i}^S}$$ from both side
$$E_{0}^S - \\sum_{p=1}^{i-1} R_{e_{p}^S} - R_{e_{i}^S} \\ge M_{e_{i}^S }-R_{e_{i}^S}$$
But by definition of $$G_1$$ we know that
$$ M_{e_{i}^S }-R_{e_{i}^S} \\geq  M_{e_{j}^S }-R_{e_{j}^S} \\ \\forall \\ j  \\in \\{1,2,..,n\\} $$
So we get
$$E_{0}^S - \\sum_{p=1}^{i-1} R_{e_{p}^S} - R_{e_{i}^S} \\ge M_{e_{j}^S }-R_{e_{j}^S} \\ \\forall \\ j  \\in \\{1,2,..,n\\} $$
And by rearranging the terms we get
$$E_{0}^S - \\sum_{p=1}^{i-1} R_{e_{p}^S} - R_{e_{i}^S} + R_{e_{j}^S} \\ge M_{e_{j}^S } \\ \\forall \\ j  \\in \\{1,2,..,n\\} $$
Call this expression as $$A$$
Now we construct new solution $$S'$$ which takes first task $$t_{e^S_i}$$ but then follow $$S$$. In other words
$$e_{1}^{S'} = e_{i}^S$$
$$e_{j}^{S'} = e_{j-1}^S \\ \\forall j \\in \\{2,3,...,i\\}$$
$$e_{j}^{S'} = e_{j}^S \\ \\forall j \\in \\{i+1,...,n\\}$$
If we start with initial energy $$E_0^{S'} = E_0^{S}$$ then this is also a valid solution. To show these let's consider the constraints at each task of $$S'$$.
1. $$e_{0}^{S'}$$:
We know that (from $$S$$ being valid solution)
$$E_{0}^S - \\sum_{p=1}^{i-1} R_{e_{p}^S} \\ge M_{e_{i}^S}$$
As $$R_{i} > 0$$
$$E_{0}^S > M_{e_{i}^S}$$
By definition of $$S'$$ we have
$$E_{0}^{S'} > M_{e_{0}^{S'}}$$
2. $$e_{j}^{S'} \\ \\forall \\ j \\in \\{2,..,i\\}$$:
Now we know that form $$A$$
$$E_{0}^S - \\sum_{p=1}^{i-1} R_{e_{p}^S} - R_{e_{i}^S} + R_{e_{j-1}^S} \\ge M_{e_{j-1}^S } \\ \\forall \\ j  \\in \\{2,..,i\\} $$
As $$R_{*} > 0$$ we can write this as
$$E_{0}^S - \\sum_{p=1}^{j-1} R_{e_{p}^S} - R_{e_{i}^S} + R_{e_{j-1}^S} \\ge M_{e_{j-1}^S } \\ \\forall \\ j  \\in \\{2,..,i\\} $$
$$E_{0}^S - \\sum_{p=1}^{j-2} R_{e_{p}^S} - R_{e_{i}^S} \\ge M_{e_{j-1}^S } \\ \\forall \\ j  \\in \\{2,..,i\\} $$
Using definition of $$S'$$ we get
$$E_{0}^{S'} - \\sum_{p=2}^{j-1} R_{e_{p}^{S'}} - R_{e_{1}^{S'}} \\ge M_{e_{j}^{S'} } \\ \\forall \\ j  \\in \\{2,..,i\\} $$
$$E_{0}^{S'} - \\sum_{p=1}^{j-1} R_{e_{p}^{S'}} \\ge M_{e_{j}^{S'} } \\ \\forall \\ j  \\in \\{2,..,i\\} $$
3. $$e_{j}^{S'} \\ \\forall \\ j \\in \\{i+1,..,n\\}$$:
From validity of $$S$$ we get
$$E_{0}^S - \\sum_{p=1}^{j-1} R_{e_{p}^S} \\ge M_{e_{j}^S} \\ \\forall j \\in \\{i+1,..,n\\}$$
$$E_{0}^S - \\sum_{p=1}^{i-1} R_{e_{p}^S} - R_{e_{i}^S} -\\sum_{p=i+1}^{j-1} R_{e_{p}^S} \\ge M_{e_{j}^S} \\ \\forall j \\in \\{i+1,..,n\\}$$
From definition of $$S'$$ we get 
$$E_{0}^{S'} - \\sum_{p=2}^{i} R_{e_{p}^{S'}} - R_{e_{1}^{S'}} -\\sum_{p=i+1}^{j-1} R_{e_{p}^{S'}} \\ge M_{e_{j}^{S'}} \\ \\forall j \\in \\{i+1,..,n\\}$$
$$E_{0}^{S'} - \\sum_{p=1}^{j-1} R_{e_{p}^{S'}}  \\ge M_{e_{j}^{S'}} \\ \\forall j \\in \\{i+1,..,n\\}$$

So we proved that there exists $$S'$$ which takes the first step greedily and does better than $$S$$. ( As $$E_{0}^{S'} = E_{0}^{S} \\geq E_{0}^{S})$$

# Induction
**Lemma:** Greedy solution is the optimal solution
**Proof:**
*Base Case:* for $$n = 1$$ this is true
*Inductive Hypothesis:* for $$\\forall n \\leq k$$ lemma holds true
*Induction Step:* Consider problem $$T$$ of size $$n = k+1$$. Now let $$GS(T)$$ be greedy solution of $$T$$. Which can be written as
$$GS(T) = g \\cup GS(T')$$, where $$g$$ is first greedy task. $$T'$$ is reduced problem of size $$k$$. Now let $$OS(T)$$ be any valid solution on the $$T$$. We construct a new valid solution $$OS'(T)$$ same as the exchange lemma, which can also be written as $$OS'(T) = g \\cup OS(T')$$  From the exchange lemma we get $$E_{0}^{OS'(T)} \\leq E_{0}^{OS(T)}$$. Now from the induction hypothesis, we know that $$E_{0}^{GS(T')} \\leq E_{0}^{OS(T')}$$. Hence we conclude that
$$E_{0}^{GS(T)} \\leq E_{0}^{OS'(T)} \\leq E_{0}^{OS(T)}$$. 





# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n\\log (n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
public:
    int minimumEffort(vector<vector<int>>& tasks) {
        vector<pair<int,int>> t;
        for(auto i: tasks){
            t.push_back(make_pair(i[0] - i[1], -1*i[1]));
        }
        sort(t.begin(), t.end());
        int a = t[0].first - t[0].second;
        int r = -1*t[0].second;
        for(int i = 1; i < tasks.size(); i++){
            r = max(r, a + -1*t[i].second);
            a += t[i].first - t[i].second;
        }
        return r;
    }
};
```
