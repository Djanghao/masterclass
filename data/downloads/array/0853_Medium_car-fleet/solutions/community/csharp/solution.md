# 🔥BEATS 100% | [ Py / Java / C++ / JS/ C#/ Go/TypeScript / Rust ]

**Author:** Neoni_77
**Votes:** 6
**Link:** [https://leetcode.com/problems/car-fleet/solutions/3997894/](https://leetcode.com/problems/car-fleet/solutions/3997894/)

---

```Python []
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        n = len(speed)
        v = [(position[i], speed[i]) for i in range(n)]
        v.sort()
        time = [float(target - v[i][0]) / v[i][1] for i in range(n)]

        curr = float('-inf')
        res = 0

        for i in range(n - 1, -1, -1):
            if time[i] > curr:
                curr = time[i]
                res += 1

        return res
```
```Java []
class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int n = speed.length;
        List<Pair<Integer, Integer>> v = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            v.add(new Pair<>(position[i], speed[i]));
        }

        Collections.sort(v, (a, b) -> a.getKey() - b.getKey());

        List<Float> time = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            time.add((float) (target - v.get(i).getKey()) / v.get(i).getValue());
        }

        float curr = Float.NEGATIVE_INFINITY;
        int res = 0;

        for (int i = n - 1; i >= 0; i--) {
            if (time.get(i) > curr) {
                curr = time.get(i);
                res++;
            }
        }

        return res;
    }
}
```
```C++ []
class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        int n = speed.size();
        vector<pair<int , int>> v;
        for(int i =0 ; i< n ; i++){
            v.push_back({position[i] , speed[i]});
        }
        sort(v.begin() , v.end());
        vector<float> time;
        for(int i =0 ; i< n ; i++){
            time.push_back((target*1.0 - v[i].first*1.0)/v[i].second*1.0); 
        }

        float curr = INT_MIN;
        int res = 0;

        for(int i = n-1 ; i>=0 ; i--){
            if(time[i] > curr) {
                curr = time[i];
                res++;
            }   
        }
        return res;
    }
};
```
```JavaScript []
var carFleet = function(target, position, speed) {
    const n = speed.length;
    const v = [];
    for (let i = 0; i < n; i++) {
        v.push([position[i], speed[i]]);
    }
    v.sort((a, b) => a[0] - b[0]);
    const time = [];
    for (let i = 0; i < n; i++) {
        time.push((target - v[i][0]) / v[i][1]);
    }

    let curr = Number.NEGATIVE_INFINITY;
    let res = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (time[i] > curr) {
            curr = time[i];
            res++;
        }
    }

    return res;
};
```
```C# []
public class Solution {
    public int CarFleet(int target, int[] position, int[] speed) {
        int n = speed.Length;
        List<(int, int)> v = new List<(int, int)>();

        for (int i = 0; i < n; i++) {
            v.Add((position[i], speed[i]));
        }

        v.Sort();
        List<double> time = new List<double>();

        for (int i = 0; i < n; i++) {
            time.Add((target * 1.0 - v[i].Item1 * 1.0) / v[i].Item2 * 1.0);
        }

        double curr = double.MinValue;
        int res = 0;

        for (int i = n - 1; i >= 0; i--) {
            if (time[i] > curr) {
                curr = time[i];
                res++;
            }
        }

        return res;
    }
}
```
```Go []
import "sort"

func carFleet(target int, position []int, speed []int) int {
    n := len(speed)
    v := make([][2]int, n)

    for i := 0; i < n; i++ {
        v[i] = [2]int{position[i], speed[i]}
    }

    sort.Slice(v, func(i, j int) bool {
        return v[i][0] < v[j][0]
    })

    time := make([]float64, n)

    for i := 0; i < n; i++ {
        time[i] = float64(target-v[i][0]) / float64(v[i][1])
    }

    curr := -1.0
    res := 0

    for i := n - 1; i >= 0; i-- {
        if time[i] > curr {
            curr = time[i]
            res++
        }
    }

    return res
}
```
```TypeScript []
class Solution {
  carFleet(target: number, position: number[], speed: number[]): number {
    const n: number = speed.length;
    const v: [number, number][] = [];

    for (let i = 0; i < n; i++) {
      v.push([position[i], speed[i]]);
    }

    v.sort((a, b) => a[0] - b[0]);

    const time: number[] = [];

    for (let i = 0; i < n; i++) {
      time.push((target - v[i][0]) / v[i][1]);
    }

    let curr: number = Number.NEGATIVE_INFINITY;
    let res: number = 0;

    for (let i = n - 1; i >= 0; i--) {
      if (time[i] > curr) {
        curr = time[i];
        res++;
      }
    }

    return res;
  }
}
```
```Rust []
impl Solution {
    pub fn car_fleet(target: i32, position: Vec<i32>, speed: Vec<i32>) -> i32 {
        let n = speed.len();
        let mut v: Vec<(i32, i32)> = Vec::new();
        
        // Populate the vector of pairs with position and speed
        for i in 0..n {
            v.push((position[i], speed[i]));
        }

        // Sort the vector of pairs based on position
        v.sort_by(|a, b| a.0.cmp(&b.0));

        // Calculate the time taken by each car to reach the target
        let mut time: Vec<f32> = Vec::new();
        for i in 0..n {
            time.push((target as f32 - v[i].0 as f32) / v[i].1 as f32);
        }

        let mut curr = std::f32::MIN;
        let mut res = 0;

        // Iterate through the cars from the last one to the first one
        for i in (0..n).rev() {
            if time[i] > curr {
                curr = time[i];
                res += 1;
            }
        }
        res
    }
}
```


