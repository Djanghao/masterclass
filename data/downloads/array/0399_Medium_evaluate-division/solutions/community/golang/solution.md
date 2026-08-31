# DFS Approach | Python | Golang | C++

**Author:** codeart7
**Votes:** 5
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/3544769/](https://leetcode.com/problems/evaluate-division/solutions/3544769/)

---

# Code
``` Go []
func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
    graph := make(map[string]map[string]float64)
	seen := make(map[string]bool)

	for i := 0; i < len(equations); i++ {
		a, b := equations[i][0], equations[i][1]

		if _, ok := graph[a]; !ok {
			graph[a] = make(map[string]float64)
		}
		graph[a][b] = values[i]

		if _, ok := graph[b]; !ok {
			graph[b] = make(map[string]float64)
		}
		graph[b][a] = 1 / values[i]
	}

	var divide func(string, string) float64
	divide = func(a, b string) float64 {
		if a == b {
			return 1.00000
		}

		seen[a] = true
		for key, value := range graph[a] {
			if seen[key] {
				continue
			}

			res := divide(key, b)
			if res > 0 {
				return res * value
			}
		}
		return -1.000
	}

    var isExists func(string, string) bool
    isExists = func(a, b string) bool {
        if _, ok := graph[a]; !ok {
            return false
        }

        if _, ok := graph[b]; !ok {
            return false
        }

        return true
    }

	ans := make([]float64, 0)
	for _, q := range queries {
		a, b := q[0], q[1]

		if !isExists(a, b) {
			ans = append(ans, -1.000)
			continue
		}

		seen = make(map[string]bool)
		ans = append(ans, divide(a, b))
	}

	return ans
}
```
``` Python []
from collections import defaultdict

class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        graph = defaultdict(dict)
        seen = set()

        for i in range(len(equations)):
            a, b = equations[i][0], equations[i][1]
            graph[a][b] = values[i]
            graph[b][a] = 1 / values[i]


        def divide(a, b):
            if a == b:
                return 1.00000

            seen.add(a)
            for key, value in graph[a].items():
                if key in seen:
                    continue

                res = divide(key, b)
                if res > 0:
                    return float(res * value)
            return -1.000

        ans = []
        for q in queries:
            a, b = q[0], q[1]

            if a not in graph or b not in graph:
                ans.append(-1.000)
                continue

            seen = set()
            ans.append(divide(a, b))

        return ans
```
```C++ []
#define pb push_back

class Solution {
public:
    unordered_map<string , unordered_map<string , double>> graph;
    unordered_set<string> seen;
    vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
        vector<double>ans;
        
        for(int i=0;i<equations.size();i++){
            const string& A = equations[i][0];
            const string& B = equations[i][1];
            
            graph[A][B] = values[i];
            graph[B][A] = 1/ values[i];
        }
        
        for(const auto&q : queries){
            const string& C = q[0];
            const string& D = q[1];
            
            if(!graph.count(C) || !graph.count(D)) {ans.pb(-1) ; continue;}
            ans.pb(divide(C , D ));
            seen.clear();
        }
        
        return ans;
    }
    
private:
    double divide(const string& A ,const string& C){
        if(A==C) return 1;
        seen.insert(A);
        
        for(const auto& i:graph[A]){
            string B = i.first;
            double value = i.second;
            if(seen.count(B)) continue;
            const double res = divide(B , C);
            if(res > 0) return res * value;
        }
        
        return -1;
    }
};
```