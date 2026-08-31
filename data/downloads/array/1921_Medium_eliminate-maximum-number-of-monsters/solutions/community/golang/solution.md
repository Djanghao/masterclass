# Which monster will you kill for your survival ?

**Author:** cs_iitian
**Votes:** 2
**Link:** [https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4258470/](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4258470/)

---

Which monster will you kill ?
one who is coming after 10 minutes or one who is coming after 5 minutes ?
Obviously the 5 minutes one, else he will kill me.
time = dist / speed
So calculate new array with time for each monster and sort it
and now most optimal way to do it would be kill each monster in every minutes.
```java []
class Solution {
    public int eliminateMaximum(int[] dist, int[] speed) {
        int n = dist.length;
        int[] time = new int[n];
        for(int i=0;i<n;i++) {
            time[i] = (int)Math.ceil((double)dist[i]/speed[i]);
        }
        Arrays.sort(time);
        int ans = 0;
        for(int i=0;i<n;i++) {
            if(i >= time[i]) {
                return i;
            }
        }
        return n;
    }
}
```
```C++ []
class Solution {
public:
    int eliminateMaximum(vector<int>& dist, vector<int>& speed) {
        ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
        int n = dist.size();
        vector<int> time(n);
        for (int i = 0; i < n; i++) {
            time[i] = ceil((double)dist[i] / speed[i]);
        }
        sort(time.begin(), time.end());
        for (int i = 0; i < n; i++) {
            if (i >= time[i]) {
                return i;
            }
        }
        return n;
    }
};
```
```Python []
class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        n = len(dist)
        time = [math.ceil(dist[i] / speed[i]) for i in range(n)]
        time.sort()
        for i in range(n):
            if i >= time[i]:
                return i
        return n
```
```Javascript []
var eliminateMaximum = function(dist, speed) {
    const n = dist.length;
    const time = new Array(n);
    for (let i = 0; i < n; i++) {
        time[i] = Math.ceil(dist[i] / speed[i]);
    }
    time.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (i >= time[i]) {
            return i;
        }
    }
    return n;
};
```
```C# []
public class Solution {
    public int EliminateMaximum(int[] dist, int[] speed) {
        int n = dist.Length;
        int[] time = new int[n];
        for (int i = 0; i < n; i++) {
            time[i] = (int)Math.Ceiling((double)dist[i] / speed[i]);
        }
        Array.Sort(time);
        for (int i = 0; i < n; i++) {
            if (i >= time[i]) {
                return i;
            }
        }
        return n;
    }
}
```
```Kotlin []
class Solution {
    fun eliminateMaximum(dist: IntArray, speed: IntArray): Int {
        val n = dist.size
        val time = IntArray(n)
        for (i in 0 until n) {
            time[i] = Math.ceil(dist[i].toDouble() / speed[i]).toInt()
        }
        time.sort()
        for (i in 0 until n) {
            if (i >= time[i]) {
                return i
            }
        }
    }
}
```
```Ruby []
def eliminate_maximum(dist, speed)
    n = dist.length
    time = dist.zip(speed).map { |d, s| (d.to_f / s).ceil }
    time.sort!
    time.each_with_index do |t, i|
        return i if i >= t
    end
    n
end
```
```Scala []
object Solution {
    def eliminateMaximum(dist: Array[Int], speed: Array[Int]): Int = {
        val n = dist.length
        val time = dist.zip(speed).map { case (d, s) => math.ceil(d.toDouble / s).toInt }
        val sortedTime = time.sorted
        sortedTime.zipWithIndex.find { case (t, i) => i >= t }.fold(n)(_._2)
    }
}
```
```Go []
func eliminateMaximum(dist []int, speed []int) int {
    n := len(dist)
	time := make([]int, n)
	for i := 0; i < n; i++ {
		time[i] = int(math.Ceil(float64(dist[i]) / float64(speed[i])))
	}
	sort.Ints(time)
	for i := 0; i < n; i++ {
		if i >= time[i] {
			return i
		}
	}
	return n
}
```
```Rust []
impl Solution {
    pub fn eliminate_maximum(dist: Vec<i32>, speed: Vec<i32>) -> i32 {
        let n = dist.len();
        let mut time: Vec<i32> = vec![0; n];
        for i in 0..n {
            time[i] = (dist[i] as f64 / speed[i] as f64).ceil() as i32;
        }
        time.sort();
        for i in 0..n {
            if i as i32 >= time[i] {
                return i as i32;
            }
        }
        n as i32
    }
}
```
```Swift []
class Solution {
    func eliminateMaximum(_ dist: [Int], _ speed: [Int]) -> Int {
        let n = dist.count
        var time = [Int](repeating: 0, count: n)
        for i in 0..<n {
            time[i] = Int(ceil(Double(dist[i]) / Double(speed[i])))
        }
        time.sort()
        for i in 0..<n {
            if i >= time[i] {
                return i
            }
        }
        return n
    }
}
```
```Dart []
class Solution {
  int eliminateMaximum(List<int> dist, List<int> speed) {
    final n = dist.length;
    final time = List<int>.filled(n, 0);
    for (var i = 0; i < n; i++) {
      time[i] = (dist[i] / speed[i]).ceil();
    }
    time.sort();
    for (var i = 0; i < n; i++) {
      if (i >= time[i]) {
        return i;
      }
    }
    return n;
  }
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $dist
     * @param Integer[] $speed
     * @return Integer
     */
    function eliminateMaximum($dist, $speed) {
        $n = count($dist);
        $time = [];
        for ($i = 0; $i < $n; $i++) {
            $time[] = ceil($dist[$i] / $speed[$i]);
        }
        sort($time);
        for ($i = 0; $i < $n; $i++) {
            if ($i >= $time[$i]) {
                return $i;
            }
        }
        return $n;
    }
}
```

Time Complexity: `O(nlogn)`
Space Complexity: `O(n)`