# Idea explained || Greedy Approach || C++ Clean code

**Author:** i_QUaSaR
**Votes:** 6
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/1664790/](https://leetcode.com/problems/destroying-asteroids/solutions/1664790/)

---

**Intuition :**

* Idea is to simply sort the `asteroids` list. & then we need to collide planet with asteroid.
* There are 2 cases :
	* If `planetMass >= asteroid`, then we merge it. and continue
	
	* else we planet get destroyed, and `return false`. 
* In the end if all `asteroids` are collided, then `return true`
* This is basically a Greedy approach and we need to simulate the collision process.
# Code :

```
class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& asteroids) {
        
        int n = asteroids.size();
        sort(begin(asteroids), end(asteroids));
        
        long long planetMass = mass;
        
        for(auto& asteroid : asteroids) {
            if(planetMass < asteroid) return false; 
			planetMass += asteroid;
        }
        return true;
    }
};
```

**Complexity :**

* Time : `O(NlogN + N)`, N is size of `asteroids` list
* Space : `O(1)`