# VERY SIMPLE C++ CODE-

**Author:** Nisarg1406
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/817649/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/817649/)

---

**DO UPVOTE IF YOU FIND IT USEFUL**

CODE - 
```
vector<int> sumZero(int n) {
		vector<int> res;
        if(n == 0) return res;
        if(n%2 != 0) res.push_back(0); //if odd then to push 0
        for(int i=1;i<=floor(n/2);i++){
            res.push_back(i);
            res.push_back(-i);
        }
        return res;
}
```