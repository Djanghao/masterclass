# [C++/Java/Python3/Javascript] Everything you need to know from start to end .

**Author:** Cosmic_Phantom
**Votes:** 200
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/1663344/](https://leetcode.com/problems/find-the-town-judge/solutions/1663344/)

---

**Reframing the question :-**
There are `1` to `n` people in a town with one of them being a judge. The criteria to being a judge is that :-

**1. The judge believes no one than himself.
2. Whole town i.e Everybody believes judge .**

So at the end of the statement the constraints leads to pointing out that any person that is trusted by `N-1 persons` and the same person believes no one, then the preson is said to be a judge.
***

**Intuition:-**
A basic intuition can be concluded from question is that, if a person is believing someone else than himself than that person is not qualified for being a judge  or if a person is trusted by others and has everyone's favour i.e <mark>total of N-1 favours, than this person is truly the judge</mark>.
***

**Algorithm:-**
1. Create an array `Trusted` of size `N+1` to represent the total number of peoples in a town and initialize it with 0 . 
2. After initialization, whenever a person trust someone else than himself, the `trusted` value of that person should be decreased since that person is not satisfying the two conditions that were mentioned in the question. 
3. Also if a certain `x` person is trusted by others from town, than this `x` person value should be increased and those who trusted that `x` person there values should be decreased.
4. At last traverse through every person of town and while traversing If a person is found with `N-1 trusts` than this person should be the judge and return the index of that person .
***
***

**A concept that is used in algo you know but you don't know that you know :))**
> In a graph the indegree of a person or node is the number of nodes that trusts a given specific node and outdegree of a person or node is the number of nodes that are trusted by given specific node . 
**In more technical words:-**
> * Out-degree is the number of outgoing edges emanating from a node. &
> * In-degree is the number of incoming edges onto a node .

***

**C++ CODE:-**
```
class Solution {
public:
    int findJudge(int N, vector<vector<int>>& trust) {
        vector<int> Trusted(N + 1, 0);
        for(auto person : trust){
            Trusted[person[0]]--;
            Trusted[person[1]]++;
        }
        for(int i = 1;i <= N;i++){
            if(Trusted[i] == N - 1)
                return i;
        }
        return -1;
    }
};
```
***
**JAVA CODE:-**
```
class Solution {
    public int findJudge(int N, int[][] trust) {
        int[] Trusted = new int[N+1];
        for(int[] person : trust){
            Trusted[person[0]]--;
            Trusted[person[1]]++;
        }
        for(int i = 1;i < Trusted.length;i++){
            if(Trusted[i] == N-1) return i;
        }
        return -1;
    }
}
```
***
**PYTHON3 CODE:-**
```
class Solution:
    def findJudge(self, N: int, trust: List[List[int]]) -> int:
        Trusted = [0] * (N+1)
        for (a, b) in trust:
            Trusted[a] -= 1
            Trusted[b] += 1
            
        for i in range(1, len(Trusted)):
            if Trusted[i] == N-1:
                return i
        return -1
```
***
**JAVASCRIPT CODE:-**
```
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const Trusted = new Array(n+1).fill(0);
    for(let [i,j] of trust) {
        Trusted[i] -= 1
        Trusted[j] += 1
    }
    for(let i = 1; i < Trusted.length; i++) {
        if ((n-1) === Trusted[i]) {
            return i;
        }
    }
    return -1
};
```
***
**Time Complexity:-** *`O(n) where n is the total number of people living in the town`*
**Space Complexity:-** *`O(n) where n is the total number of people living in the town`*

