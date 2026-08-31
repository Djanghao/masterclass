# 🔥BEATS 100% | ✅[PY / Java / C++ / C / C# / JS / Swift / Ruby]

**Author:** Neoni_77
**Votes:** 2
**Link:** [https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4259091/](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4259091/)

---


```python []
class Solution:
    def eliminateMaximum(self, dist, speed):
        n = len(dist)
        time = [float(d) / s for d, s in zip(dist, speed)]
        time.sort()
        
        curr = 0
        for i in range(n):
            if time[i] <= i:
                break
            curr += 1
        
        return curr

```
```java []
import java.util.Arrays;

class Solution {
    public int eliminateMaximum(int[] dist, int[] speed) {
        int n = dist.length;
        double[] time = new double[n];
        
        for (int i = 0; i < n; i++) {
            time[i] = (double) dist[i] / speed[i];
        }
        
        Arrays.sort(time);
        
        int curr = 0;
        for (int i = 0; i < n; i++) {
            if (time[i] <= i) {
                break;
            }
            curr++;
        }
        
        return curr;
    }
}

```
```C++ []
class Solution {
public:
    int eliminateMaximum(vector<int>& dist, vector<int>& speed) {
        int n = dist.size();
        vector<double> time(n);

        for (int i = 0; i < n; i++) {
            time[i] = static_cast<double>(dist[i]) / speed[i];
        }

        sort(time.begin(), time.end());
        
        int curr = 0;
        for (int i = 0; i < n; i++) {
            if (time[i] <= i) {
                break;
            }
            curr++;
        }

        return curr;
    }
};
```
```Javascript []
function eliminateMaximum(dist, speed) {
    const n = dist.length;
    const time = dist.map((d, i) => d / speed[i]);
    time.sort();

    let curr = 0;
    for (let i = 0; i < n; i++) {
        if (time[i] <= i) {
            break;
        }
        curr++;
    }

    return curr;
}

```
```C []
int eliminateMaximum(int dist[], int speed[], int n) {
    double time[n];
    for (int i = 0; i < n; i++) {
        time[i] = (double)dist[i] / speed[i];
    }

    qsort(time, n, sizeof(double), compare);

    int curr = 0;
    for (int i = 0; i < n; i++) {
        if (time[i] <= i) {
            break;
        }
        curr++;
    }

    return curr;
}

```
```C# []
public class Solution {
    public int EliminateMaximum(int[] dist, int[] speed) {
        int n = dist.Length;
        double[] time = new double[n];
        
        for (int i = 0; i < n; i++) {
            time[i] = (double)dist[i] / speed[i];
        }
        
        Array.Sort(time);
        
        int curr = 0;
        for (int i = 0; i < n; i++) {
            if (time[i] <= i) {
                break;
            }
            curr++;
        }
        
        return curr;
    }
}

```
```Swift []
class Solution {
    func eliminateMaximum(_ dist: [Int], _ speed: [Int]) -> Int {
        let n = dist.count
        var time = [Double](repeating: 0, count: n)
        
        for i in 0..<n {
            time[i] = Double(dist[i]) / Double(speed[i])
        }
        
        time.sort()
        
        var curr = 0
        for i in 0..<n {
            if time[i] <= Double(i) {
                break
            }
            curr += 1
        }
        
        return curr
    }
}

```
```Ruby []
def eliminate_maximum(dist, speed)
    n = dist.length
    time = dist.zip(speed).map { |d, s| d.to_f / s }
    time.sort!

    curr = 0
    n.times do |i|
        if time[i] <= i
            break
        end
        curr += 1
    end

    return curr
end

```

